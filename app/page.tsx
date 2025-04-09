"use client";

import { Button } from "@/components/ui/button";
import Link from "next/link";

export default function Home() {
  return (
    <div className="flex min-h-screen overflow-y-hidden flex-col items-center justify-center bg-gradient-to-b from-purple-50 to-purple-100 dark:from-purple-950 dark:to-purple-900 p-4 text-center">
      <div className="max-w-3xl space-y-6">
        <h1 className="text-4xl font-bold tracking-tighter sm:text-5xl md:text-6xl">
          Discover Your Cosmic Journey Through
          <span className="bg-gradient-to-r from-purple-600 to-blue-500 bg-clip-text text-transparent">
            {" "}
            Vedic Astrology
          </span>
        </h1>

        <p className="mx-auto max-w-[700px] text-muted-foreground md:text-xl">
          Unlock the secrets of your destiny with our comprehensive Vedic astrology
          readings. Get detailed insights into your life path, relationships,
          career, and more.
        </p>

        <div className="flex flex-col gap-4 sm:flex-row sm:justify-center">
          <Button
            asChild
            size="lg"
            className="font-semibold bg-gradient-to-r from-purple-600 to-blue-500 text-white hover:from-purple-700 hover:to-blue-600"
          >
            <Link href="/birth-chart">Generate Birth Chart</Link>
          </Button>
          <Button
            asChild
            variant="outline"
            size="lg"
            className="border-purple-500 text-purple-600 dark:text-purple-300 dark:border-purple-700 hover:bg-purple-100 dark:hover:bg-purple-800"
          >
            <Link href="/daily-horoscope">View Daily Horoscope</Link>
          </Button>
        </div>
      </div>
    </div>
  );
}
