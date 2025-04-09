"use client";

import { useEffect, useState } from "react";
import { Card } from "@/components/ui/card";
import type { AstrologyReport } from "@/lib/types";
import { Heart, Star, Moon, Sun } from "lucide-react";

export default function RelationshipsReport() {
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
        Relationship Analysis
      </h1>

      <div className="grid gap-6">
        <Card className="p-6 border-2 border-purple-100 dark:border-purple-900">
          <h2 className="flex items-center text-xl font-semibold mb-4">
            <Heart className="mr-2 h-5 w-5 text-purple-500" />
            Love & Marriage Prospects
          </h2>
          <p className="text-muted-foreground mb-4">{report.predictions.marriage}</p>
          <div className="grid gap-4 md:grid-cols-2">
            <div className="space-y-2">
              <h3 className="font-medium flex items-center">
                <Moon className="mr-2 h-4 w-4 text-purple-500" />
                Moon Sign Compatibility
              </h3>
              <p className="text-sm text-muted-foreground">
                Your Moon in {report.planets.find(p => p.name === "Moon")?.sign} indicates emotional depth 
                and sensitivity in relationships. Best compatibility with water and earth signs.
              </p>
            </div>
            <div className="space-y-2">
              <h3 className="font-medium flex items-center">
                <Sun className="mr-2 h-4 w-4 text-purple-500" />
                Venus Influence
              </h3>
              <p className="text-sm text-muted-foreground">
                Venus in the {report.kundli.houses[7].includes("Venus") ? "7th" : "2nd"} house 
                suggests harmonious partnerships and strong romantic connections.
              </p>
            </div>
          </div>
        </Card>

        <Card className="p-6 border-2 border-purple-100 dark:border-purple-900">
          <h2 className="flex items-center text-xl font-semibold mb-4">
            <Star className="mr-2 h-5 w-5 text-purple-500" />
            Key Relationship Periods
          </h2>
          <div className="space-y-4">
            <div>
              <h3 className="font-medium mb-2">Favorable Periods</h3>
              <p className="text-sm text-muted-foreground">
                Jupiter's transit through your 7th house indicates a highly favorable period 
                for relationships and marriage prospects in the coming months.
              </p>
            </div>
            <div>
              <h3 className="font-medium mb-2">Areas of Growth</h3>
              <p className="text-sm text-muted-foreground">
                Saturn's influence suggests the need for patience and commitment in relationships. 
                Focus on building strong foundations and clear communication.
              </p>
            </div>
          </div>
        </Card>

        <Card className="p-6 border-2 border-purple-100 dark:border-purple-900">
          <h2 className="flex items-center text-xl font-semibold mb-4">
            <Heart className="mr-2 h-5 w-5 text-purple-500" />
            Relationship Remedies
          </h2>
          <div className="space-y-4">
            {report.remedies.map((remedy, index) => (
              <div key={index} className="space-y-2">
                <h3 className="font-medium">{remedy.type}</h3>
                <p className="text-sm text-muted-foreground">{remedy.description}</p>
                {remedy.mantra && (
                  <p className="text-sm font-medium text-purple-600 dark:text-purple-400">
                    Mantra: {remedy.mantra}
                  </p>
                )}
              </div>
            ))}
          </div>
        </Card>
      </div>
    </div>
  );
}