"use client";

import { useEffect, useState } from "react";
import { Card } from "@/components/ui/card";
import type { AstrologyReport } from "@/lib/types";
import { Star, Sun, Moon } from "lucide-react";

export default function KundliReport() {
  const [report, setReport] = useState<AstrologyReport | null>(null);

  useEffect(() => {
    const savedReport = sessionStorage.getItem("astrologyReport");
    if (savedReport) {
      setReport(JSON.parse(savedReport));
    }
  }, []);

  if (!report) return null;

  return (
    <div className="space-y-6">
      <h1 className="text-3xl font-bold tracking-tight bg-gradient-to-r from-purple-600 to-blue-500 bg-clip-text text-transparent">
        Kundli Analysis
      </h1>

      <div className="grid gap-6">
        <Card className="p-6 border-2 border-purple-100 dark:border-purple-900">
          <h2 className="flex items-center text-xl font-semibold mb-4">
            <Star className="mr-2 h-5 w-5 text-purple-500" />
            Birth Chart Details
          </h2>
          <div className="grid gap-4 md:grid-cols-2">
            <div className="space-y-2">
              <h3 className="font-medium">Ascendant</h3>
              <p className="text-muted-foreground">{report.kundli.ascendant}</p>
            </div>
            <div className="space-y-2">
              <h3 className="font-medium">Birth Time</h3>
              <p className="text-muted-foreground">{report.birthDetails.time}</p>
            </div>
          </div>
        </Card>

        <Card className="p-6 border-2 border-purple-100 dark:border-purple-900">
          <h2 className="flex items-center text-xl font-semibold mb-4">
            <Sun className="mr-2 h-5 w-5 text-purple-500" />
            Planetary Positions
          </h2>
          <div className="grid gap-4">
            {report.planets.map((planet) => (
              <div key={planet.name} className="flex justify-between items-center">
                <span className="font-medium">{planet.name}</span>
                <span className="text-muted-foreground">
                  {planet.sign} ({planet.degree}°)
                  {planet.isRetrograde && " Retrograde"}
                </span>
              </div>
            ))}
          </div>
        </Card>

        <Card className="p-6 border-2 border-purple-100 dark:border-purple-900">
          <h2 className="flex items-center text-xl font-semibold mb-4">
            <Moon className="mr-2 h-5 w-5 text-purple-500" />
            House Positions
          </h2>
          <div className="grid gap-4">
            {Object.entries(report.kundli.houses).map(([house, planets]) => (
              <div key={house} className="flex justify-between items-center">
                <span className="font-medium">House {house}</span>
                <span className="text-muted-foreground">
                  {planets.length > 0 ? planets.join(", ") : "Empty"}
                </span>
              </div>
            ))}
          </div>
        </Card>
      </div>
    </div>
  );
}