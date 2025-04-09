"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { generateMockReport } from "@/lib/mock-data";
import type { BirthDetails } from "@/lib/types";

export default function BirthChart() {
  const router = useRouter();
  const [formData, setFormData] = useState<BirthDetails>({
    name: "",
    date: "",
    time: "",
    city: "",
    country: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const report = generateMockReport(formData);
    sessionStorage.setItem("astrologyReport", JSON.stringify(report));
    router.push("/report");
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-50 via-white to-blue-50 dark:from-[#0e0b1f] dark:via-black dark:to-[#0b0c1f] py-12">
      <div className="container mx-auto max-w-2xl">
        <div className="text-center mb-8">
          <h1 className="text-4xl font-extrabold tracking-tight bg-gradient-to-r from-purple-600 to-blue-500 bg-clip-text text-transparent">
            🪐 Birth Chart Calculator
          </h1>
          <p className="mt-2 text-gray-600 dark:text-gray-400 text-md">
            Enter your birth details to generate your personalized Vedic astrology report ✨
          </p>
        </div>

        <Card className="p-8 shadow-lg border-2 border-purple-100 dark:border-purple-900 bg-white dark:bg-[#111018] transition-all duration-300">
          <form onSubmit={handleSubmit} className="space-y-6">
            <div className="space-y-2">
              <Label htmlFor="name">🌟 Full Name</Label>
              <Input
                id="name"
                value={formData.name}
                onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                placeholder="e.g. Ramesh Sharma"
                required
                className="border-purple-200 dark:border-purple-700"
              />
            </div>

            <div className="space-y-2">
              <Label htmlFor="date">📅 Birth Date</Label>
              <Input
                id="date"
                type="date"
                value={formData.date}
                onChange={(e) => setFormData({ ...formData, date: e.target.value })}
                required
                className="border-purple-200 dark:border-purple-700"
              />
            </div>

            <div className="space-y-2">
              <Label htmlFor="time">⏰ Birth Time</Label>
              <Input
                id="time"
                type="time"
                value={formData.time}
                onChange={(e) => setFormData({ ...formData, time: e.target.value })}
                required
                className="border-purple-200 dark:border-purple-700"
              />
            </div>

            <div className="space-y-2">
              <Label htmlFor="city">🏙️ Birth City</Label>
              <Input
                id="city"
                value={formData.city}
                onChange={(e) => setFormData({ ...formData, city: e.target.value })}
                placeholder="e.g. Mumbai"
                required
                className="border-purple-200 dark:border-purple-700"
              />
            </div>

            <div className="space-y-2">
              <Label htmlFor="country">🌍 Birth Country</Label>
              <Input
                id="country"
                value={formData.country}
                onChange={(e) => setFormData({ ...formData, country: e.target.value })}
                placeholder="e.g. India"
                required
                className="border-purple-200 dark:border-purple-700"
              />
            </div>

            <Button
              type="submit"
              className="w-full bg-gradient-to-r from-purple-600 to-blue-500 hover:from-purple-700 hover:to-blue-600 transition-all duration-300"
            >
              🔮 Generate Birth Chart
            </Button>
          </form>
        </Card>

        <div className="mt-6 text-sm text-center text-muted-foreground">
          Your birth time should be as accurate as possible for precise results.
        </div>
      </div>
    </div>
  );
}
