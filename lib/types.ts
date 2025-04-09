export interface BirthDetails {
  name: string;
  date: string;
  time: string;
  city: string;
  country: string;
}

export interface AstrologyReport {
  id: string;
  birthDetails: BirthDetails;
  kundli: {
    ascendant: string;
    houses: Record<number, string[]>;
    aspects: Array<{
      planets: [string, string];
      aspect: string;
      degree: number;
    }>;
  };
  planets: Array<{
    name: string;
    sign: string;
    house: number;
    degree: number;
    isRetrograde: boolean;
  }>;
  predictions: {
    career: string;
    health: string;
    marriage: string;
    wealth: string;
  };
  remedies: Array<{
    type: string;
    description: string;
    gemstone?: string;
    mantra?: string;
  }>;
  vastuDosha: Array<{
    area: string;
    issue: string;
    remedy: string;
  }>;
}