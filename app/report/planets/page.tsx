"use client";

import { useEffect, useState } from "react";
import { Card } from "@/components/ui/card";
import type { AstrologyReport } from "@/lib/types";
import { Sun, Moon, Star } from "lucide-react";

export default function PlanetsReport() {
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
        Planetary Positions
      </h1>

      <div className="grid gap-6">
        <Card className="p-6 border-2 border-purple-100 dark:border-purple-900">
          <h2 className="flex items-center text-xl font-semibold mb-4">
            <Sun className="mr-2 h-5 w-5 text-purple-500" />
            Major Planets
          </h2>
          <div className="space-y-4">
            {report.planets.map((planet) => (
              <div key={planet.name} className="space-y-2">
                <h3 className="font-medium">{planet.name}</h3>
                <div className="text-sm text-muted-foreground">
                  <p>Sign: {planet.sign}</p>
                  <p>House: {planet.house}</p>
                  <p>Degree: {planet.degree}°</p>
                  {planet.isRetrograde && <p className="text-purple-500">Retrograde</p>}
                </div>
              </div>
            ))}
          </div>
        </Card>

        <Card className="p-6 border-2 border-purple-100 dark:border-purple-900">
          <h2 className="flex items-center text-xl font-semibold mb-4">
            <Star className="mr-2 h-5 w-5 text-purple-500" />
            Planetary Aspects
          </h2>
          <div className="space-y-4">
            {report.kundli.aspects.map((aspect, index) => (
              <div key={index} className="space-y-2">
                <h3 className="font-medium">{aspect.planets.join(" - ")}</h3>
                <p className="text-sm text-muted-foreground">
                  {aspect.aspect} ({aspect.degree}°)
                </p>
              </div>
            ))}
          </div>
        </Card>
      </div>
    </div>
  );
}