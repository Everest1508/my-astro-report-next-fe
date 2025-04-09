"use client";

import { useEffect, useState } from "react";
import { Card } from "@/components/ui/card";
import type { AstrologyReport } from "@/lib/types";
import { Home, Compass, Wind } from "lucide-react";

export default function VastuReport() {
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
        Vastu Analysis
      </h1>

      <div className="grid gap-6">
        <Card className="p-6 border-2 border-purple-100 dark:border-purple-900">
          <h2 className="flex items-center text-xl font-semibold mb-4">
            <Home className="mr-2 h-5 w-5 text-purple-500" />
            Vastu Overview
          </h2>
          <div className="space-y-4">
            {report.vastuDosha.map((dosha, index) => (
              <div key={index} className="space-y-2">
                <h3 className="font-medium flex items-center">
                  <Compass className="mr-2 h-4 w-4 text-purple-500" />
                  {dosha.area}
                </h3>
                <p className="text-sm text-muted-foreground">Issue: {dosha.issue}</p>
                <p className="text-sm text-muted-foreground">Remedy: {dosha.remedy}</p>
              </div>
            ))}
          </div>
        </Card>

        <Card className="p-6 border-2 border-purple-100 dark:border-purple-900">
          <h2 className="flex items-center text-xl font-semibold mb-4">
            <Wind className="mr-2 h-5 w-5 text-purple-500" />
            Energy Flow Recommendations
          </h2>
          <div className="space-y-4">
            <div className="space-y-2">
              <h3 className="font-medium">Northeast (Ishanya)</h3>
              <p className="text-sm text-muted-foreground">
                Place spiritual items and water features in this direction to enhance positive energy flow.
              </p>
            </div>
            <div className="space-y-2">
              <h3 className="font-medium">Southwest (Nairutya)</h3>
              <p className="text-sm text-muted-foreground">
                Master bedroom or heavy furniture should be placed in this direction for stability.
              </p>
            </div>
          </div>
        </Card>
      </div>
    </div>
  );
}