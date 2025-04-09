"use client";

import { useState } from "react";
import { zodiacSigns } from "@/lib/constants";
import { Card } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { ScrollArea } from "@/components/ui/scroll-area";
import { 
  Sun, 
  Moon, 
  Star, 
  Heart, 
  Briefcase, 
  Activity 
} from "lucide-react";

const horoscopes = {
  aries: {
    general: "Today brings exciting opportunities for personal growth. Your natural leadership abilities will shine through in group situations.",
    love: "Romance is highlighted today. Single Aries might encounter someone special, while those in relationships will enjoy deeper connections.",
    career: "Professional ventures look promising. Your innovative ideas will catch the attention of important people.",
    health: "Energy levels are high. It's a great day for physical activities and starting new wellness routines."
  },
  taurus: {
    general: "A stable and productive day lies ahead. Your practical approach will help solve complex problems.",
    love: "Venus brings harmony to your relationships. Express your feelings openly to strengthen bonds.",
    career: "Financial opportunities are highlighted. Trust your instincts in business matters.",
    health: "Focus on maintaining balance in your wellness routine. Consider gentle exercise."
  },
  gemini: {
    general: "Communication flows easily today. Your versatile nature helps you adapt to changing situations.",
    love: "Social connections sparkle with possibility. An interesting conversation could lead to romance.",
    career: "Your quick wit serves you well in professional settings. Network and share ideas.",
    health: "Mental agility is high. Balance intellectual pursuits with physical activity."
  }
};

export default function DailyHoroscope() {
  const [selectedSign, setSelectedSign] = useState("aries");

  function getMockHoroscope(sign: string, aspect: string): string {
    const signData = horoscopes[sign as keyof typeof horoscopes];
    if (!signData) return horoscopes.aries[aspect as keyof typeof horoscopes.aries];
    return signData[aspect as keyof typeof horoscopes.aries];
  }

  function getLuckyNumber(): number {
    return Math.floor(Math.random() * 9) + 1;
  }

  function getLuckyColor(): string {
    const colors = ["Red", "Blue", "Green", "Purple", "Gold"];
    return colors[Math.floor(Math.random() * colors.length)];
  }

  function getLuckyDirection(): string {
    const directions = ["North", "South", "East", "West", "Northeast", "Northwest", "Southeast", "Southwest"];
    return directions[Math.floor(Math.random() * directions.length)];
  }

  return (
    <div className="container py-8">
      <div className="mx-auto max-w-4xl">
        <h1 className="mb-8 text-3xl font-bold tracking-tight">Daily Horoscope</h1>
        
        <Tabs defaultValue={selectedSign} onValueChange={setSelectedSign}>
          <ScrollArea className="w-full">
            <TabsList className="w-full justify-start">
              {zodiacSigns.map((sign) => (
                <TabsTrigger key={sign.value} value={sign.value}>
                  {sign.label}
                </TabsTrigger>
              ))}
            </TabsList>
          </ScrollArea>

          {zodiacSigns.map((sign) => (
            <TabsContent key={sign.value} value={sign.value}>
              <div className="grid gap-6">
                <Card className="p-6">
                  <h2 className="mb-4 flex items-center text-xl font-semibold">
                    <Sun className="mr-2 h-5 w-5" />
                    General Outlook
                  </h2>
                  <p className="text-muted-foreground">
                    {getMockHoroscope(sign.value, "general")}
                  </p>
                </Card>

                <div className="grid gap-6 md:grid-cols-2">
                  <Card className="p-6">
                    <h3 className="mb-4 flex items-center font-semibold">
                      <Heart className="mr-2 h-5 w-5" />
                      Love & Relationships
                    </h3>
                    <p className="text-muted-foreground">
                      {getMockHoroscope(sign.value, "love")}
                    </p>
                  </Card>

                  <Card className="p-6">
                    <h3 className="mb-4 flex items-center font-semibold">
                      <Briefcase className="mr-2 h-5 w-5" />
                      Career & Finance
                    </h3>
                    <p className="text-muted-foreground">
                      {getMockHoroscope(sign.value, "career")}
                    </p>
                  </Card>

                  <Card className="p-6">
                    <h3 className="mb-4 flex items-center font-semibold">
                      <Activity className="mr-2 h-5 w-5" />
                      Health & Wellness
                    </h3>
                    <p className="text-muted-foreground">
                      {getMockHoroscope(sign.value, "health")}
                    </p>
                  </Card>

                  <Card className="p-6">
                    <h3 className="mb-4 flex items-center font-semibold">
                      <Star className="mr-2 h-5 w-5" />
                      Lucky Elements
                    </h3>
                    <div className="space-y-2 text-muted-foreground">
                      <p>Lucky Number: {getLuckyNumber()}</p>
                      <p>Lucky Color: {getLuckyColor()}</p>
                      <p>Lucky Direction: {getLuckyDirection()}</p>
                    </div>
                  </Card>
                </div>
              </div>
            </TabsContent>
          ))}
        </Tabs>
      </div>
    </div>
  );
}