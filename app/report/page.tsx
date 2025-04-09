"use client";

import { useEffect, useState } from "react";
import { Card } from "@/components/ui/card";
import type { AstrologyReport } from "@/lib/types";
import { Activity, Star, Heart, Briefcase } from "lucide-react";

export default function ReportOverview() {
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
        Astrological Report Overview
      </h1>

      <div className="grid gap-6 md:grid-cols-2">
        <Card className="p-6 border-2 border-purple-100 dark:border-purple-900">
          <h2 className="flex items-center text-xl font-semibold mb-4">
            <Star className="mr-2 h-5 w-5 text-purple-500" />
            Key Planetary Positions
          </h2>
          <div className="space-y-2">
            {report.planets.slice(0, 3).map((planet) => (
              <div key={planet.name} className="flex justify-between">
                <span>{planet.name}</span>
                <span className="text-muted-foreground">
                  {planet.sign} ({planet.degree}°)
                </span>
              </div>
            ))}
          </div>
        </Card>

        <Card className="p-6 border-2 border-purple-100 dark:border-purple-900">
          <h2 className="flex items-center text-xl font-semibold mb-4">
            <Activity className="mr-2 h-5 w-5 text-purple-500" />
            Current Transits
          </h2>
          <div className="space-y-2">
            {report.kundli.aspects.map((aspect, i) => (
              <div key={i} className="text-sm">
                {aspect.planets.join(" - ")} ({aspect.aspect})
              </div>
            ))}
          </div>
        </Card>

        <Card className="p-6 border-2 border-purple-100 dark:border-purple-900">
          <h2 className="flex items-center text-xl font-semibold mb-4">
            <Briefcase className="mr-2 h-5 w-5 text-purple-500" />
            Career Insights
          </h2>
          <p className="text-muted-foreground">{report.predictions.career}</p>
        </Card>

        <Card className="p-6 border-2 border-purple-100 dark:border-purple-900">
          <h2 className="flex items-center text-xl font-semibold mb-4">
            <Heart className="mr-2 h-5 w-5 text-purple-500" />
            Relationship Forecast
          </h2>
          <p className="text-muted-foreground">{report.predictions.marriage}</p>
        </Card>
      </div>
    </div>
  );
}