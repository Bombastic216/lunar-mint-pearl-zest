import type { Season } from "./types";

export interface SeasonGuide {
  id: Season;
  title: string;
  months: string;
  climate: string;
  who: string;
  gear: string[];
  risks: string[];
  notes: string;
}

export const SEASON_GUIDES: SeasonGuide[] = [
  {
    id: "yaz",
    title: "Yazlık kamp",
    months: "Haziran – Eylül",
    climate:
      "Karadeniz kıyısı (Şile, Kilyos, Riva, Ağva) poyrazlı ve serin sularlıdır. Gündüz UV yüksek, gece polar ister. Nem ve sivrisinek dere/göl kenarında artar.",
    who: "Deniz ve uzun gün ışığı isteyenler. Hafta içi gidin; cumartesi tesisler dolar.",
    gear: [
      "Alçak profil / tünel çadır",
      "Uzun kazık ve rüzgar kırıcı",
      "50+ güneş kremi, şapka",
      "Sivrisinek ilacı (Ağva, göl)",
      "Günde 3–4 L su planı",
    ],
    risks: [
      "Çadırı uçuran poyraz",
      "Dalgalı Karadeniz, dip akıntısı",
      "Orman yangını sezonu — ateş yasak",
      "Hafta sonu gürültü ve hırsızlık",
    ],
    notes:
      "İstanbul yaz kampı 'Akdeniz tatili' değildir. Deniz 20–23 °C civarında kalır, rüzgar gece soğutur. Ateş ve mangal yasağına uymayanlar hem cezayı hem yangını göze alır.",
  },
  {
    id: "kis",
    title: "Kışlık kamp",
    months: "Aralık – Mart",
    climate:
      "Kartepe ve Uludağ'da kar, rüzgar ve -10'a inen gece. Yedigöller ve Abant'ta yol kapanabilir. Şehir ormanında (Belgrad, Polonezköy) kar az, çamur ve sis çok.",
    who: "Kış çadırı tecrübesi olanlar. İlk kış gecenizse bungalov veya karavan seçin.",
    gear: [
      "4 mevsim çadır, kar eteği",
      "Uyku tulumu konfor -10",
      "Yüksek R değerli izomat (üst üste iki)",
      "Kuru katman + yedek çorap torbada",
      "Termos, yağlı yiyecek, yedek batarya soğukta zayıf",
    ],
    risks: [
      "Hipotermi ve ıslak pamuk",
      "Çadır içi mangal / karbonmonoksit",
      "Kış lastiksiz çıkış",
      "Çığ ve pist dışı (Uludağ)",
    ],
    notes:
      "Kış kampı ekipman sporudur, manzara sporu değil. Islak giysiyi üzerinizde kurutmayın. Kar bölgesine zincir, pul ve dolu depo ile çıkın.",
  },
  {
    id: "dort-mevsim",
    title: "Dört mevsim",
    months: "Asıl tat: Nisan–Mayıs ve Eylül–Ekim",
    climate:
      "İstanbul'un omuz mevsimleri kamp için en iyisidir: az sivrisinek, düşük yangın riski, orman rengi. Yaz kadar kalabalık değil. Ani sağanak ve çamur bekleyin.",
    who: "İlk kamp ve aile. Polonezköy, Darlık, Sapanca, Ballıkayalar.",
    gear: [
      "3 mevsim çadır + tarp",
      "Yağmurluk ve çamur ayakkabısı",
      "Sıcak içecek seti",
      "Kene kontrolü (uzun çorap)",
      "Offline harita — sinyal ormanda düşer",
    ],
    risks: [
      "Sağanak ve sel yatağına kurulan çadır",
      "Kene (ilkbahar orman)",
      "Park ve havza yasakları",
      "Erken karanlık (ekim)",
    ],
    notes:
      "Belgrad ve Aydos gece kampı için değildir; günübirlik yürüyün. Terkos ve baraj gölleri içme suyu havzası — rastgele çadır cezalı olabilir. Resmi tesis seçin.",
  },
];

export const CAMP_RULES = [
  {
    title: "Ateş",
    body: "Orman yangını sezonunda (genelde mayıs–ekim) açık ateş ve mangal yasak. Sadece işletmenin metal ocağı. Izgara kömürünü toprağa dökmeyin.",
  },
  {
    title: "İzin",
    body: "Milli park, tabiat parkı ve içme suyu havzasında izinsiz geceleme cezalıdır. Belgrad Ormanı'nı çadırla 'boş orman' sanmayın.",
  },
  {
    title: "Su ve atık",
    body: "Sabunu dereye dökmeyin. Çöpü kente geri götürün. Tuvalet küreği vahşi kampta 60 adım ve 20 cm.",
  },
  {
    title: "Güvenlik",
    body: "Karadeniz'de yüzme bayrağına bakın. Kışın çadırda asla mangal. Değerli eşya çadırda bırakılmaz. Tek başınıza rota paylaşın.",
  },
];

export const PACKING_CORE = [
  "Kimlik ve nakit (park girişleri)",
  "Kafa lambası + yedek pil",
  "İlk yardım, kişisel ilaç, kene cımbızı",
  "Çöp torbası (gidişin iki katı)",
  "Yağmurluk — İstanbul'da 'açık gece' sözü tutulmaz",
];
