// airconModels.ts - 冷氣資料庫（來自 Excel，含 0.75 匹）

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
    "id": "CW-SUL120BA ",
    "name": "CW-SUL120BA ",
    "type": "窗口機",
    "btu": 12000,
    "hp": 1.5,
    "features": [
      "慳電,寧靜,左出風,1級能源標籤"
    ],
    "priceRange": "8000-12000",
    "suitableRoom": "客廳",
    "image": "/aircon-cw-sul120ba .jpg",
    "link": "https://www.panasonic.hk/chinese/products/living/ventilation-air-conditioning/window-air-conditioner/cw-sul120ba.aspx"
  },
  {
    "id": "CW-SUL180BA ",
    "name": "CW-SUL180BA ",
    "type": "窗口機",
    "btu": 18000,
    "hp": 2.0,
    "features": [
      "慳電,寧靜,左出風,1級能源標籤"
    ],
    "priceRange": "8000-12000",
    "suitableRoom": "客廳",
    "image": "/aircon-cw-sul180ba .jpg",
    "link": "https://www.panasonic.hk/chinese/products/living/ventilation-air-conditioning/window-air-conditioner/cw-sul180ba.aspx"
  },
  {
    "id": "CW-SUL240BA ",
    "name": "CW-SUL240BA ",
    "type": "窗口機",
    "btu": 24000,
    "hp": 2.5,
    "features": [
      "慳電,寧靜,左出風,1級能源標籤"
    ],
    "priceRange": "unlimited",
    "suitableRoom": "多房",
    "image": "/aircon-cw-sul240ba .jpg",
    "link": "https://www.panasonic.hk/chinese/products/living/ventilation-air-conditioning/window-air-conditioner/cw-sul240ba.aspx"
  },
  {
    "id": "CW-SU70AA",
    "name": "CW-SU70AA",
    "type": "窗口機",
    "btu": 7200,
    "hp": 0.75,
    "features": [
      "慳電,寧靜,1級能源標籤"
    ],
    "priceRange": "5000-8000",
    "suitableRoom": "細房",
    "image": "/aircon-cw-su70aa.jpg",
    "link": "https://www.panasonic.hk/chinese/products/living/ventilation-air-conditioning/window-air-conditioner/cw-su70aa.aspx"
  },
  {
    "id": "CW-SU90AA",
    "name": "CW-SU90AA",
    "type": "窗口機",
    "btu": 9000,
    "hp": 1.0,
    "features": [
      "慳電,寧靜,1級能源標籤"
    ],
    "priceRange": "5000-8000",
    "suitableRoom": "細房",
    "image": "/aircon-cw-su90aa.jpg",
    "link": "https://www.panasonic.hk/chinese/products/living/ventilation-air-conditioning/window-air-conditioner/cw-su90aa.aspx"
  },
  {
    "id": "CW-SU120AA",
    "name": "CW-SU120AA",
    "type": "窗口機",
    "btu": 12000,
    "hp": 1.5,
    "features": [
      "慳電,寧靜,1級能源標籤"
    ],
    "priceRange": "8000-12000",
    "suitableRoom": "客廳",
    "image": "/aircon-cw-su120aa.jpg",
    "link": "https://www.panasonic.hk/chinese/products/living/ventilation-air-conditioning/window-air-conditioner/cw-su120aa.aspx"
  },
  {
    "id": "CW-SU180AA",
    "name": "CW-SU180AA",
    "type": "窗口機",
    "btu": 18000,
    "hp": 2.0,
    "features": [
      "慳電,寧靜,1級能源標籤"
    ],
    "priceRange": "8000-12000",
    "suitableRoom": "客廳",
    "image": "/aircon-cw-su180aa.jpg",
    "link": "https://www.panasonic.hk/chinese/products/living/ventilation-air-conditioning/window-air-conditioner/cw-su180aa.aspx"
  },
  {
    "id": "CW-SU240AA",
    "name": "CW-SU240AA",
    "type": "窗口機",
    "btu": 24000,
    "hp": 2.5,
    "features": [
      "慳電,寧靜,1級能源標籤"
    ],
    "priceRange": "unlimited",
    "suitableRoom": "多房",
    "image": "/aircon-cw-su240aa.jpg",
    "link": "https://www.panasonic.hk/chinese/products/living/ventilation-air-conditioning/window-air-conditioner/cw-su240aa.aspx"
  },
  {
    "id": "CW-HU70AA",
    "name": "CW-HU70AA",
    "type": "窗口機",
    "btu": 7200,
    "hp": 0.75,
    "features": [
      "慳電,寧靜,WIFI,nanoeX Mark 3,1級能源標籤"
    ],
    "priceRange": "5000-8000",
    "suitableRoom": "細房",
    "image": "/aircon-cw-hu70aa.jpg",
    "link": "https://www.panasonic.hk/chinese/products/living/ventilation-air-conditioning/window-air-conditioner/cw-hu70aa.aspx"
  },
  {
    "id": "CW-HU90AA",
    "name": "CW-HU90AA",
    "type": "窗口機",
    "btu": 9000,
    "hp": 1.0,
    "features": [
      "慳電,寧靜,WIFI,nanoeX Mark 3,1級能源標籤"
    ],
    "priceRange": "8000-12000",
    "suitableRoom": "細房",
    "image": "/aircon-cw-hu90aa.jpg",
    "link": "https://www.panasonic.hk/chinese/products/living/ventilation-air-conditioning/window-air-conditioner/cw-hu90aa.aspx"
  },
  {
    "id": "CW-HU120AA",
    "name": "CW-HU120AA",
    "type": "窗口機",
    "btu": 12000,
    "hp": 1.5,
    "features": [
      "慳電,寧靜,WIFI,nanoeX Mark 3,1級能源標籤"
    ],
    "priceRange": "8000-12000",
    "suitableRoom": "客廳",
    "image": "/aircon-cw-hu120aa.jpg",
    "link": "https://www.panasonic.hk/chinese/products/living/ventilation-air-conditioning/window-air-conditioner/cw-hu120aa.aspx"
  },
  {
    "id": "CW-HU180AA",
    "name": "CW-HU180AA",
    "type": "窗口機",
    "btu": 18000,
    "hp": 2.0,
    "features": [
      "慳電,寧靜,WIFI,nanoeX Mark 3,1級能源標籤"
    ],
    "priceRange": "unlimited",
    "suitableRoom": "客廳",
    "image": "/aircon-cw-hu180aa.jpg",
    "link": "https://www.panasonic.hk/chinese/products/living/ventilation-air-conditioning/window-air-conditioner/cw-hu180aa.aspx"
  },
  {
    "id": "CW-HU240AA",
    "name": "CW-HU240AA",
    "type": "窗口機",
    "btu": 24000,
    "hp": 2.5,
    "features": [
      "慳電,寧靜,WIFI,nanoeX Mark 3,1級能源標籤"
    ],
    "priceRange": "unlimited",
    "suitableRoom": "多房",
    "image": "/aircon-cw-hu240aa.jpg",
    "link": "https://www.panasonic.hk/chinese/products/living/ventilation-air-conditioning/window-air-conditioner/cw-hu240aa.aspx"
  },
  {
    "id": "CW-HZ70AA",
    "name": "CW-HZ70AA",
    "type": "窗口機",
    "btu": 7200,
    "hp": 0.75,
    "features": [
      "慳電,寧靜,WIFI,nanoeX Mark 3,1級能源標籤"
    ],
    "priceRange": "5000-8000",
    "suitableRoom": "細房",
    "image": "/aircon-cw-hz70aa.jpg",
    "link": "https://www.panasonic.hk/chinese/products/living/ventilation-air-conditioning/window-air-conditioner/cw-hz70aa.aspx"
  },
  {
    "id": "CW-HZ90AA",
    "name": "CW-HZ90AA",
    "type": "窗口機",
    "btu": 9000,
    "hp": 1.0,
    "features": [
      "慳電,寧靜,WIFI,nanoeX Mark 3,1級能源標籤"
    ],
    "priceRange": "8000-12000",
    "suitableRoom": "細房",
    "image": "/aircon-cw-hz90aa.jpg",
    "link": "https://www.panasonic.hk/chinese/products/living/ventilation-air-conditioning/window-air-conditioner/cw-hz90aa.aspx"
  },
  {
    "id": "CW-HZ120AA",
    "name": "CW-HZ120AA",
    "type": "窗口機",
    "btu": 12000,
    "hp": 1.5,
    "features": [
      "慳電,寧靜,WIFI,nanoeX Mark 3,1級能源標籤"
    ],
    "priceRange": "unlimited",
    "suitableRoom": "客廳",
    "image": "/aircon-cw-hz120aa.jpg",
    "link": "https://www.panasonic.hk/chinese/products/living/ventilation-air-conditioning/window-air-conditioner/cw-hz120aa.aspx"
  },
  {
    "id": "CW-HZ180AA",
    "name": "CW-HZ180AA",
    "type": "窗口機",
    "btu": 18000,
    "hp": 2.0,
    "features": [
      "慳電,寧靜,WIFI,nanoeX Mark 3,1級能源標籤"
    ],
    "priceRange": "unlimited",
    "suitableRoom": "客廳",
    "image": "/aircon-cw-hz180aa.jpg",
    "link": "https://www.panasonic.hk/chinese/products/living/ventilation-air-conditioning/window-air-conditioner/cw-hz180aa.aspx"
  },
  {
    "id": "CW-HZ240AA",
    "name": "CW-HZ240AA",
    "type": "窗口機",
    "btu": 24000,
    "hp": 2.5,
    "features": [
      "慳電,寧靜,WIFI,nanoeX Mark 3,1級能源標籤"
    ],
    "priceRange": "unlimited",
    "suitableRoom": "多房",
    "image": "/aircon-cw-hz240aa.jpg",
    "link": "https://www.panasonic.hk/chinese/products/living/ventilation-air-conditioning/window-air-conditioner/cw-hz240aa.aspx"
  },
  {
    "id": "CW-N721JA",
    "name": "CW-N721JA",
    "type": "窗口機",
    "btu": 7200,
    "hp": 0.75,
    "features": [
      "定頻式,3級能源標籤"
    ],
    "priceRange": "3000-5000",
    "suitableRoom": "細房",
    "image": "/aircon-cw-n721ja.jpg",
    "link": "https://www.panasonic.hk/chinese/products/living/ventilation-air-conditioning/window-air-conditioner/cw-n721ja.aspx"
  },
  {
    "id": "CW-N921JA",
    "name": "CW-N921JA",
    "type": "窗口機",
    "btu": 9000,
    "hp": 1.0,
    "features": [
      "定頻式,3級能源標籤"
    ],
    "priceRange": "5000-8000",
    "suitableRoom": "細房",
    "image": "/aircon-cw-n921ja.jpg",
    "link": "https://www.panasonic.hk/chinese/products/living/ventilation-air-conditioning/window-air-conditioner/cw-n921ja.aspx"
  },
  {
    "id": "CW-N1221VA",
    "name": "CW-N1221VA",
    "type": "窗口機",
    "btu": 12000,
    "hp": 1.5,
    "features": [
      "定頻式,3級能源標籤"
    ],
    "priceRange": "5000-8000",
    "suitableRoom": "客廳",
    "image": "/aircon-cw-n1221va.jpg",
    "link": "https://www.panasonic.hk/chinese/products/living/ventilation-air-conditioning/window-air-conditioner/cw-n1221va.aspx"
  },
  {
    "id": "CW-N1821EA",
    "name": "CW-N1821EA",
    "type": "窗口機",
    "btu": 18000,
    "hp": 2.0,
    "features": [
      "定頻式,3級能源標籤"
    ],
    "priceRange": "8000-12000",
    "suitableRoom": "客廳",
    "image": "/aircon-cw-n1821ea.jpg",
    "link": "https://www.panasonic.hk/chinese/products/living/ventilation-air-conditioning/window-air-conditioner/cw-n1821ea.aspx"
  },
  {
    "id": "CW-N2421EA",
    "name": "CW-N2421EA",
    "type": "窗口機",
    "btu": 24000,
    "hp": 2.5,
    "features": [
      "定頻式,3級能源標籤"
    ],
    "priceRange": "unlimited",
    "suitableRoom": "多房",
    "image": "/aircon-cw-n2421ea.jpg",
    "link": "https://www.panasonic.hk/chinese/products/living/ventilation-air-conditioning/window-air-conditioner/cw-n2421ea.aspx"
  }
];
