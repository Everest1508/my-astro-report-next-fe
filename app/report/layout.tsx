"use client";

import { useEffect, useState } from "react";
import { usePathname, useRouter } from "next/navigation";
import Link from "next/link";
import { cn } from "@/lib/utils";
import type { AstrologyReport } from "@/lib/types";
import {
  LayoutDashboard,
  Activity,
  Star,
  Heart,
  Briefcase,
  Home,
  Gem,
  Download,
  Menu,
  X
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";

const navigation = [
  { name: "Overview", href: "/report", icon: LayoutDashboard },
  { name: "Kundli Chart", href: "/report/kundli", icon: Star },
  { name: "Planets", href: "/report/planets", icon: Activity },
  { name: "Career", href: "/report/career", icon: Briefcase },
  { name: "Relationships", href: "/report/relationships", icon: Heart },
  { name: "Vastu", href: "/report/vastu", icon: Home },
  { name: "Remedies", href: "/report/remedies", icon: Gem },
];

export default function ReportLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const pathname = usePathname();
  const router = useRouter();
  const [report, setReport] = useState<AstrologyReport | null>(null);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const savedReport = sessionStorage.getItem("astrologyReport");
    if (savedReport) {
      setReport(JSON.parse(savedReport));
    }
  }, []);

  const downloadPDF = async () => {
    if (!report) return;
    
    // This is where you'd implement PDF generation
    // For now, we'll just show an alert
    alert("PDF download functionality will be implemented here");
  };

  if (!report) {
    return (
      <div className="flex min-h-screen items-center justify-center">
        <p className="text-lg">No report data found. Please generate a birth chart first.</p>
      </div>
    );
  }

  const Sidebar = () => (
    <div className="space-y-4">
      <div className="px-3 py-2 border-b border-purple-200 dark:border-purple-800">
        <h2 className="text-lg font-semibold">{report.birthDetails.name}</h2>
        <p className="text-sm text-muted-foreground">
          {new Date(report.birthDetails.date).toLocaleDateString()}
        </p>
      </div>
      <nav className="space-y-1">
        {navigation.map((item) => {
          const isActive = pathname === item.href;
          return (
            <Link
              key={item.name}
              href={item.href}
              className={cn(
                "flex items-center px-3 py-2 text-sm font-medium rounded-md",
                isActive
                  ? "bg-purple-100 dark:bg-purple-900 text-purple-600 dark:text-purple-200"
                  : "text-gray-600 dark:text-gray-300 hover:bg-purple-100 dark:hover:bg-purple-900"
              )}
              onClick={() => setIsMobileMenuOpen(false)}
            >
              <item.icon className="mr-3 h-5 w-5" />
              {item.name}
            </Link>
          );
        })}
      </nav>
      <div className="px-3 pt-4">
        <Button
          onClick={downloadPDF}
          className="w-full flex items-center justify-center"
          variant="outline"
        >
          <Download className="mr-2 h-4 w-4" />
          Download Report
        </Button>
      </div>
    </div>
  );

  return (
    <div className="flex min-h-screen flex-col md:flex-row">
      {/* Desktop Sidebar */}
      <div className="hidden md:flex w-64 bg-purple-50 dark:bg-purple-950 p-4">
        <Sidebar />
      </div>
  
      {/* Main Content */}
      <div className="flex-1 p-4 md:p-8">
        {/* Mobile Topbar: Menu + Breadcrumb */}
        <div className="md:hidden flex items-center justify-between mb-4">
          <div className="flex items-center gap-2">
            <Sheet open={isMobileMenuOpen} onOpenChange={setIsMobileMenuOpen}>
              <SheetTrigger asChild>
                <Button variant="outline" size="icon">
                  <Menu className="h-5 w-5" />
                </Button>
              </SheetTrigger>
              <SheetContent
                side="left"
                className="w-64 bg-purple-50 dark:bg-purple-950 p-4"
              >
                <Sidebar />
              </SheetContent>
            </Sheet>
            {/* Breadcrumb in mobile */}
            <nav className="text-sm text-muted-foreground">
              <ol className="flex items-center space-x-2">
                <li>
                  <Link href="/report" className="hover:text-foreground">
                    Report
                  </Link>
                </li>
                {pathname !== "/report" && (
                  <>
                    <li>/</li>
                    <li className="text-foreground">
                      {navigation.find((item) => item.href === pathname)?.name}
                    </li>
                  </>
                )}
              </ol>
            </nav>
          </div>
        </div>
  
        {/* Desktop Breadcrumb */}
        <nav className="hidden md:flex mb-8">
          <ol className="flex items-center space-x-2 text-sm text-muted-foreground">
            <li>
              <Link href="/report" className="hover:text-foreground">
                Report
              </Link>
            </li>
            {pathname !== "/report" && (
              <>
                <li>/</li>
                <li className="text-foreground">
                  {navigation.find((item) => item.href === pathname)?.name}
                </li>
              </>
            )}
          </ol>
        </nav>
  
        {children}
      </div>
    </div>
  );  
}