"use client";

import { useEffect, useState } from "react";
import { Card } from "@/components/ui/card";
import type { AstrologyReport } from "@/lib/types";
import { Gem, Star, Moon } from "lucide-react";

export default function RemediesReport() {
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
        Astrological Remedies
      </h1>

      <div className="grid gap-6">
        <Card className="p-6 border-2 border-purple-100 dark:border-purple-900">
          <h2 className="flex items-center text-xl font-semibold mb-4">
            <Gem className="mr-2 h-5 w-5 text-purple-500" />
            Gemstone Recommendations
          </h2>
          <div className="space-y-4">
            {report.remedies
              .filter(remedy => remedy.type === "Gemstone")
              .map((remedy, index) => (
                <div key={index} className="space-y-2">
                  <h3 className="font-medium">{remedy.gemstone}</h3>
                  <p className="text-sm text-muted-foreground">{remedy.description}</p>
                </div>
              ))}
          </div>
        </Card>

        <Card className="p-6 border-2 border-purple-100 dark:border-purple-900">
          <h2 className="flex items-center text-xl font-semibold mb-4">
            <Moon className="mr-2 h-5 w-5 text-purple-500" />
            Mantras & Spiritual Practices
          </h2>
          <div className="space-y-4">
            {report.remedies
              .filter(remedy => remedy.mantra)
              .map((remedy, index) => (
                <div key={index} className="space-y-2">
                  <h3 className="font-medium">{remedy.type}</h3>
                  <p className="text-sm text-muted-foreground">{remedy.description}</p>
                  <p className="text-sm font-medium text-purple-600 dark:text-purple-400">
                    Mantra: {remedy.mantra}
                  </p>
                </div>
              ))}
          </div>
        </Card>
      </div>
    </div>
  );
}