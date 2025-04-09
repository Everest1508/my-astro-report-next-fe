import './globals.css';
import type { Metadata } from 'next';
import { Poppins } from 'next/font/google';
import { ThemeProvider } from '@/components/theme-provider';
import { Toaster } from '@/components/ui/sonner';
import { Header } from '@/components/header';
import PWAInstallModal from '@/components/pwa-install-modal';

// You can customize the weights as needed
const poppins = Poppins({
  subsets: ['latin'],
  weight: ['400', '500', '600', '700'],
  display: 'swap',
});

export const metadata: Metadata = {
  title: 'Vedic Astrology',
  description: 'Discover your cosmic journey through Vedic astrology',
  manifest: '/manifest.json',
};

// Removed the viewport export as 'Viewport' is not a valid type from 'next'.

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={poppins.className}>
      <PWAInstallModal />
        <ThemeProvider
          attribute="class"
          defaultTheme="light"
          enableSystem
          disableTransitionOnChange
        >
          <Header />
          <main className="min-h-screen bg-background">{children}</main>
          <Toaster />
        </ThemeProvider>
      </body>
    </html>
  );
}
