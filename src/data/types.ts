export type Category = "muze" | "tarihi" | "kamp" | "unesco" | "yuruyus";
export type Side = "avrupa" | "asya" | "yakin" | "ulke";
export type Region =
  | "marmara"
  | "ege"
  | "akdeniz"
  | "ic-anadolu"
  | "karadeniz"
  | "dogu-anadolu"
  | "guneydogu";
export type Season = "yaz" | "kis" | "dort-mevsim";
export type Difficulty = "kolay" | "orta" | "zor";
export type UnescoKind = "kulturel" | "karma";
export type TrailKind = "orman" | "sahil" | "ada" | "kent" | "kanyon";

export type Facility =
  | "cadir"
  | "karavan"
  | "bungalov"
  | "wc"
  | "dus"
  | "elektrik"
  | "su"
  | "market"
  | "ates-yasak"
  | "ates-izinli"
  | "plaj"
  | "orman"
  | "gol"
  | "nehir"
  | "yuruyus";

export interface Place {
  id: string;
  name: string;
  category: Category;
  district: string;
  side: Side;
  summary: string;
  description: string;
  highlights: string[];
  hours?: string;
  fee?: string;
  transport: string;
  address: string;
  lat: number;
  lng: number;
  tags: string[];
  image: string;
  distanceKm?: number;
  duration?: string;
  era?: string;
  seasons?: Season[];
  facilities?: Facility[];
  difficulty?: Difficulty;
  terrain?: string;
  elevation?: string;
  bestTime?: string;
  tips?: string[];
  packing?: string[];
  rules?: string[];
  region?: Region;
  unescoYear?: number;
  unescoKind?: UnescoKind;
  trailKind?: TrailKind;
  trailKm?: number;
}

export const CATEGORY_LABEL: Record<Category, string> = {
  muze: "Müze",
  tarihi: "Tarihi mekan",
  kamp: "Kamp alanı",
  unesco: "UNESCO mirası",
  yuruyus: "Yürüyüş parkuru",
};

export const SIDE_LABEL: Record<Side, string> = {
  avrupa: "Avrupa yakası",
  asya: "Anadolu yakası",
  yakin: "İstanbul'a yakın",
  ulke: "Türkiye",
};

export const REGION_LABEL: Record<Region, string> = {
  marmara: "Marmara",
  ege: "Ege",
  akdeniz: "Akdeniz",
  "ic-anadolu": "İç Anadolu",
  karadeniz: "Karadeniz",
  "dogu-anadolu": "Doğu Anadolu",
  guneydogu: "Güneydoğu",
};

export const UNESCO_KIND_LABEL: Record<UnescoKind, string> = {
  kulturel: "Kültürel",
  karma: "Karma (kültür + doğa)",
};

export const SEASON_LABEL: Record<Season, string> = {
  yaz: "Yazlık",
  kis: "Kışlık",
  "dort-mevsim": "Dört mevsim",
};

export const FACILITY_LABEL: Record<Facility, string> = {
  cadir: "Çadır",
  karavan: "Karavan",
  bungalov: "Bungalov",
  wc: "WC",
  dus: "Duş",
  elektrik: "Elektrik",
  su: "İçme suyu",
  market: "Market yakın",
  "ates-yasak": "Ateş yasak",
  "ates-izinli": "Ateş alanlı",
  plaj: "Plaj",
  orman: "Orman",
  gol: "Göl",
  nehir: "Nehir",
  yuruyus: "Yürüyüş",
};

export const DIFFICULTY_LABEL: Record<Difficulty, string> = {
  kolay: "Kolay",
  orta: "Orta",
  zor: "Zor",
};

export const TRAIL_KIND_LABEL: Record<TrailKind, string> = {
  orman: "Orman",
  sahil: "Sahil / falez",
  ada: "Ada",
  kent: "Kent parkuru",
  kanyon: "Kanyon",
};
