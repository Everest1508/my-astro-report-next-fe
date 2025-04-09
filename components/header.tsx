"use client";

import { Moon, Sun, Menu } from "lucide-react";
import { useTheme } from "next-themes";
import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import Link from "next/link";
import { useState } from "react";

export function Header() {
  const { setTheme } = useTheme();
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 w-full border-b border-purple-200 dark:border-purple-800 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container flex h-14 items-center justify-between px-4">
        <div className="flex items-center gap-4">
          <Link
            href="/"
            className="font-bold text-lg bg-gradient-to-r from-purple-600 to-blue-500 bg-clip-text text-transparent"
          >
            Vedic Astrology
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-6 text-sm font-medium">
            <Link
              href="/birth-chart"
              className="hover:text-purple-600 dark:hover:text-purple-400"
            >
              Birth Chart
            </Link>
            <Link
              href="/daily-horoscope"
              className="hover:text-purple-600 dark:hover:text-purple-400"
            >
              Daily Horoscope
            </Link>
            <Link
              href="/matchmaking"
              className="hover:text-purple-600 dark:hover:text-purple-400"
            >
              Matchmaking
            </Link>
          </nav>
        </div>

        <div className="flex items-center space-x-2">
          {/* Theme Toggle */}
          {/* <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button variant="outline" size="icon" className="border-purple-300 dark:border-purple-700">
                <Sun className="h-[1.2rem] w-[1.2rem] rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0 text-purple-600 dark:text-purple-300" />
                <Moon className="absolute h-[1.2rem] w-[1.2rem] rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100 text-purple-600 dark:text-purple-300" />
                <span className="sr-only">Toggle theme</span>
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent align="end" className="border-purple-200 dark:border-purple-700">
              <DropdownMenuItem onClick={() => setTheme("light")}>
                Light
              </DropdownMenuItem>
              <DropdownMenuItem onClick={() => setTheme("dark")}>
                Dark
              </DropdownMenuItem>
              <DropdownMenuItem onClick={() => setTheme("system")}>
                System
              </DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu> */}

          {/* Mobile Nav Menu */}
          <DropdownMenu open={isMenuOpen} onOpenChange={setIsMenuOpen}>
            <DropdownMenuTrigger asChild>
              <Button variant="ghost" size="icon" className="md:hidden text-purple-600 dark:text-purple-300">
                <Menu className="h-5 w-5" />
                <span className="sr-only">Menu</span>
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent
              align="end"
              className="md:hidden border-purple-200 dark:border-purple-700"
            >
              <DropdownMenuItem asChild>
                <Link href="/birth-chart">Birth Chart</Link>
              </DropdownMenuItem>
              <DropdownMenuItem asChild>
                <Link href="/daily-horoscope">Daily Horoscope</Link>
              </DropdownMenuItem>
              <DropdownMenuItem asChild>
                <Link href="/matchmaking">Matchmaking</Link>
              </DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
        </div>
      </div>
    </header>
  );
}
