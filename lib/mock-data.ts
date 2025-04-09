import { AstrologyReport } from './types';

export function generateMockReport(birthDetails: any): AstrologyReport {
  return {
    id: Math.random().toString(36).substring(2, 15),
    birthDetails,
    kundli: {
      ascendant: "Leo",
      houses: {
        1: ["Sun", "Mercury"],
        2: ["Venus"],
        3: [],
        4: ["Mars"],
        5: ["Jupiter"],
        6: [],
        7: ["Saturn"],
        8: [],
        9: ["Rahu"],
        10: [],
        11: ["Ketu"],
        12: ["Moon"]
      },
      aspects: [
        {
          planets: ["Jupiter", "Saturn"],
          aspect: "Opposition",
          degree: 180
        },
        {
          planets: ["Sun", "Moon"],
          aspect: "Trine",
          degree: 120
        }
      ]
    },
    planets: [
      {
        name: "Sun",
        sign: "Leo",
        house: 1,
        degree: 15,
        isRetrograde: false
      },
      {
        name: "Moon",
        sign: "Cancer",
        house: 12,
        degree: 23,
        isRetrograde: false
      },
      {
        name: "Mars",
        sign: "Scorpio",
        house: 4,
        degree: 8,
        isRetrograde: false
      }
    ],
    predictions: {
      career: "Your chart indicates strong leadership qualities. Jupiter's placement in the 5th house suggests success in creative or managerial roles. Expect career growth opportunities in the next 6 months.",
      health: "Mars in the 4th house indicates good vitality but watch for stress-related issues. Practice regular meditation and maintain a balanced diet.",
      marriage: "Venus in the 2nd house brings harmony in relationships. For singles, a significant relationship may develop through social connections.",
      wealth: "Saturn's influence suggests steady financial growth through disciplined efforts. Good period for long-term investments."
    },
    remedies: [
      {
        type: "Gemstone",
        description: "Wear a Ruby on your ring finger to strengthen your Sun",
        gemstone: "Ruby"
      },
      {
        type: "Mantra",
        description: "Chant Om Namah Shivaya 108 times daily",
        mantra: "Om Namah Shivaya"
      }
    ],
    vastuDosha: [
      {
        area: "Northeast",
        issue: "Blocked energy flow",
        remedy: "Keep the northeast corner clutter-free and well-lit"
      },
      {
        area: "Southwest",
        issue: "Heavy elements causing imbalance",
        remedy: "Avoid storing heavy items in the southwest corner"
      }
    ]
  };
}