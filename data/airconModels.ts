// airconModels.ts - 冷氣資料庫

export type AirconModel = {
  id: string;
  name: string;
  type: "窗口機" | "分體機";
  btu: number;
  hp: number;
  features: string[];
  priceRange: "3000-5000" | "5000-8000" | "8000-12000" | "unlimited";
  suitableRoom: "細房" | "客廳" | "多房";
  image: string;
  link: string;
};

export const airconModels: AirconModel[] = [
  {
    id: "CW-HU70AA",
    name: "CW-HU70AA",
    type: "窗口機",
    btu: 7400,
    hp: 0.75,
    features: ["nanoeX", "靜音", "Wi-Fi"],
    priceRange: "3000-5000",
    suitableRoom: "細房",
    image: "/aircon-hu70aa.jpg",
    link: "https://www.panasonic.hk/chinese/products/living/ventilation-air-conditioning/window-type-3-4hp-cooling-only-cw-hu70aa.html"
  },
  {
    id: "CW-XN121AA",
    name: "CW-XN121AA",
    type: "窗口機",
    btu: 12200,
    hp: 1.5,
    features: ["除菌濾網"],
    priceRange: "5000-8000",
    suitableRoom: "客廳",
    image: "/aircon-xn121aa.jpg",
    link: "https://www.panasonic.hk/chinese/products/living/ventilation-air-conditioning/window-type-1-5hp-inverter-lite-cooling-only-cw-xn121aa.html"
  },
  {
    id: "CW-HZ180HA",
    name: "CW-HZ180HA",
    type: "窗口機",
    btu: 18000,
    hp: 2,
    features: ["變頻", "靜音", "除菌濾網"],
    priceRange: "8000-12000",
    suitableRoom: "客廳",
    image: "/aircon-hz180ha.jpg",
    link: "https://www.panasonic.hk/chinese/products/living/ventilation-air-conditioning/window-type-2hp-inverter-cooling-only-cw-hz180ha.html"
  },
  {
    id: "CW-HU90AA",
    name: "CW-HU90AA",
    type: "窗口機",
    btu: 9000,
    hp: 1,
    features: ["靜音", "除菌濾網"],
    priceRange: "5000-8000",
    suitableRoom: "細房",
    image: "/aircon-hu90aa.jpg",
    link: "https://www.panasonic.hk/chinese/products/living/ventilation-air-conditioning/window-type-1hp-cooling-only-cw-hu90aa.html"
  },
  {
    id: "CW-SU90AA",
    name: "CW-SU90AA",
    type: "窗口機",
    btu: 9000,
    hp: 1,
    features: ["入門型", "輕巧設計"],
    priceRange: "3000-5000",
    suitableRoom: "細房",
    image: "/aircon-su90aa.jpg",
    link: "https://www.panasonic.hk/chinese/products/living/ventilation-air-conditioning/window-type-1hp-cooling-only-cw-su90aa.html"
  },
  {
    id: "CW-HZ120AA",
    name: "CW-HZ120AA",
    type: "窗口機",
    btu: 12000,
    hp: 1.5,
    features: ["變頻", "nanoeX"],
    priceRange: "8000-12000",
    suitableRoom: "客廳",
    image: "/aircon-hz120aa.jpg",
    link: "https://www.panasonic.hk/chinese/products/living/ventilation-air-conditioning/window-type-1-5hp-inverter-cooling-only-cw-hz120aa.html"
  },
  {
    id: "CW-HZ240AA",
    name: "CW-HZ240AA",
    type: "窗口機",
    btu: 24000,
    hp: 2.5,
    features: ["高冷量", "nanoeX", "靜音"],
    priceRange: "unlimited",
    suitableRoom: "客廳",
    image: "/aircon-hz240aa.jpg",
    link: "https://www.panasonic.hk/chinese/products/living/ventilation-air-conditioning/window-type-2-5hp-inverter-cooling-only-cw-hz240aa.html"
  },
  {
    id: "CW-SU70AA",
    name: "CW-SU70AA",
    type: "窗口機",
    btu: 7000,
    hp: 0.75,
    features: ["基本功能", "經濟型"],
    priceRange: "3000-5000",
    suitableRoom: "細房",
    image: "/aircon-su70aa.jpg",
    link: "https://www.panasonic.hk/chinese/products/living/ventilation-air-conditioning/window-type-3-4hp-cooling-only-cw-su70aa.html"
  },
  {
    id: "CW-SU120AA",
    name: "CW-SU120AA",
    type: "窗口機",
    btu: 12000,
    hp: 1.5,
    features: ["基本功能", "除塵過濾"],
    priceRange: "5000-8000",
    suitableRoom: "客廳",
    image: "/aircon-su120aa.jpg",
    link: "https://www.panasonic.hk/chinese/products/living/ventilation-air-conditioning/window-type-1-5hp-cooling-only-cw-su120aa.html"
  },
  {
    id: "CW-SUL180BA",
    name: "CW-SUL180BA",
    type: "窗口機",
    btu: 18000,
    hp: 2,
    features: ["高冷量", "Wi-Fi", "靜音運行"],
    priceRange: "8000-12000",
    suitableRoom: "客廳",
    image: "/aircon-sul180ba.jpg",
    link: "https://www.panasonic.hk/chinese/products/living/ventilation-air-conditioning/window-type-2hp-inverter-cooling-only-cw-sul180ba.html"
  },
  {
    id: "CS-LZ9ZKA",
    name: "CS-LZ9ZKA",
    type: "分體機",
    btu: 9000,
    hp: 1,
    features: ["靜音", "nanoeX"],
    priceRange: "8000-12000",
    suitableRoom: "細房",
    image: "/aircon-lz12zka.jpg",
    link: "https://www.panasonic.hk/chinese/products/living/ventilation-air-conditioning/inverter-1hp-cooling-model-cs-lz9zka.html"
  },
  {
    id: "CS-Z18ZKA",
    name: "CS-Z18ZKA",
    type: "分體機",
    btu: 18000,
    hp: 2,
    features: ["變頻", "Wi-Fi", "智能操控"],
    priceRange: "unlimited",
    suitableRoom: "客廳",
    image: "/aircon-z12zka.jpg",
    link: "https://www.panasonic.hk/chinese/products/living/ventilation-air-conditioning/inverter-2hp-cooling-heating-model-cs-z18zka.html"
  },
  {
    id: "CU-4Z80YB",
    name: "CU-4Z80YB",
    type: "分體機",
    btu: 28000,
    hp: 3.5,
    features: ["多房間接駁", "nanoeX"],
    priceRange: "unlimited",
    suitableRoom: "多房",
    image: "/aircon-cu4z80yb.jpg",
    link: "https://www.panasonic.hk/chinese/products/living/ventilation-air-conditioning/multi-split-type-3-5hp-inverter-cooling-heating-cu-4z80yb.html"
  }
];
