// areaToHp.ts - 用戶輸入面積，自動推算所需匹數與冷氣能量

export type AreaHpMatch = {
  areaMin: number;
  areaMax: number;
  hp: number;
  btuRange: string;
};

export const areaHpTable: AreaHpMatch[] = [
  {
    "areaMin": 50,
    "areaMax": 70,
    "hp": 0.75,
    "btuRange": "6,500 \u2013 7,200"
  },
  {
    "areaMin": 80,
    "areaMax": 100,
    "hp": 1.0,
    "btuRange": "8,000 \u2013 9,000"
  },
  {
    "areaMin": 110,
    "areaMax": 150,
    "hp": 1.5,
    "btuRange": "12,000 \u2013 14,000"
  },
  {
    "areaMin": 160,
    "areaMax": 200,
    "hp": 2.0,
    "btuRange": "16,000 \u2013 18,000"
  },
  {
    "areaMin": 210,
    "areaMax": 250,
    "hp": 2.5,
    "btuRange": "20,000 \u2013 24,000"
  }
];
