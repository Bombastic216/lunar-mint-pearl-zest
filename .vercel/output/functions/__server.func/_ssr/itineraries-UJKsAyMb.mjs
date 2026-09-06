//#region node_modules/.nitro/vite/services/ssr/assets/itineraries-UJKsAyMb.js
var KIND_LABEL = {
	sehir: "Şehir",
	kamp: "Kamp",
	yuruyus: "Yürüyüş"
};
var ITINERARIES = [
	{
		id: "sultanahmet-klasik",
		title: "Yarımada klasik",
		kind: "sehir",
		duration: "Tam gün",
		seasonHint: "Yıl boyu; yazın 08:30’da başlayın",
		summary: "Ayasofya, Sultanahmet, sarnıç ve Topkapı. Şehrin çekirdeği, tek tramvay durağında.",
		image: "/images/hero-city.jpg",
		transport: "T1 Sultanahmet. Yürüyerek hepsi 1 km içinde.",
		steps: [
			{
				placeId: "ayasofya",
				time: "08:30",
				note: "Namazdan önce zemin ve galeri."
			},
			{
				placeId: "sultanahmet",
				time: "10:00",
				note: "Çiniler, avlu, Hipodrom dikilitaşları."
			},
			{
				placeId: "hipodrom",
				time: "10:40",
				note: "Üç anıt, beş dakikalık açık hava."
			},
			{
				placeId: "yerebatan",
				time: "11:00",
				note: "Öğle sıcağında serin 40 dakika."
			},
			{
				placeId: "mozaik",
				time: "12:00",
				note: "Arasta içi, kısa Bizans tabanı."
			},
			{
				placeId: "topkapi",
				time: "13:30",
				note: "Harem’i ayrı alın; terasta Boğaz."
			}
		],
		tips: [
			"Tek günde Harem + Hazine uzar; birini seçin.",
			"Öğle: Hocapaşa veya Sirkeci, Sultanahmet restoranı değil.",
			"Ayakkabı çıkarılacak yerler için çorap."
		]
	},
	{
		id: "pera-karakoy",
		title: "Galata – Pera – Tophane",
		kind: "sehir",
		duration: "Tam gün",
		seasonHint: "Yıl boyu; yağmurda müze günü",
		summary: "Kule, mevlevihane, oryantalist resim ve çağdaş salon. Yokuş ve merdiven.",
		image: "/images/galata-tower.jpg",
		transport: "Tünel veya T1 Karaköy. Taksim’den yaya 20 dk.",
		steps: [
			{
				placeId: "galata-kulesi",
				time: "09:00",
				note: "Sabah ilk teras, kuyruk yok."
			},
			{
				placeId: "galata-mevlevi",
				time: "10:15",
				note: "Galip Dede’de semahane."
			},
			{
				placeId: "pera",
				time: "11:30",
				note: "Kaplumbağa Terbiyecisi + öğle kafe."
			},
			{
				placeId: "masumiyet",
				time: "14:00",
				note: "Çukurcuma’ya inin, dar müze."
			},
			{
				placeId: "istanbul-modern",
				time: "16:00",
				note: "Tophane rıhtımı, teras."
			},
			{
				placeId: "resim-heykel",
				time: "17:30",
				note: "Modern’e yürüme; erken Cumhuriyet."
			}
		],
		tips: ["Kule + Modern kombine gün yağmurda da işler.", "Galata yokuşu kaygan; düz taban değil."]
	},
	{
		id: "halic-hatti",
		title: "Haliç hattı",
		kind: "sehir",
		duration: "Tam gün",
		seasonHint: "İlkbahar ve sonbahar ışığı",
		summary: "Süleymaniye’den Balat’a, Eyüp’e. Külliye, çarşı, renkli ev, türbe.",
		image: "/images/suleymaniye.jpg",
		transport: "Eminönü vapur + T1. Haliç vapuru Fener–Eyüp.",
		steps: [
			{
				placeId: "suleymaniye",
				time: "09:00",
				note: "Avlu ve Haliç terası, Sinan mezarı."
			},
			{
				placeId: "misir-carsisi",
				time: "10:30",
				note: "Baharat; Rüstem Paşa’yı atlamayın."
			},
			{
				placeId: "balat-fener",
				time: "12:00",
				note: "Patrikhane, Demir Kilise, Vodina."
			},
			{
				placeId: "rahmi-koc",
				time: "15:00",
				note: "Hasköy; çocukluysa asıl durak."
			},
			{
				placeId: "eyup-sultan",
				time: "17:00",
				note: "Türbe + Pierre Loti gün batımı."
			}
		],
		tips: ["Cuma ve kandilde Eyüp yürünmez.", "Balat hafta içi sakin, pazar vitrinli."]
	},
	{
		id: "bogaz-sahili",
		title: "Boğaz sahili",
		kind: "sehir",
		duration: "Tam gün",
		seasonHint: "Açık hava; kışın rüzgar sert",
		summary: "Saray, kayık müzesi, Ortaköy, hisar. Beşiktaş’tan Sarıyer’e sahil.",
		image: "/images/rumeli.jpg",
		transport: "Kabataş–Beşiktaş. 22 / 40T sahil otobüsü.",
		steps: [
			{
				placeId: "dolmabahce",
				time: "09:00",
				note: "Rehberli tur; galoş verilir."
			},
			{
				placeId: "deniz-muzesi",
				time: "11:00",
				note: "İskele yanı, saltanat kayıkları."
			},
			{
				placeId: "ortakoy",
				time: "13:00",
				note: "Cami + köprü kadrajı, kısa durak."
			},
			{
				placeId: "rumeli-hisari",
				time: "15:00",
				note: "Kule merdivenleri, Boğaz kesiti."
			},
			{
				placeId: "sakip-sabanci",
				time: "16:30",
				note: "Emirgan; sergi + koru."
			}
		],
		tips: ["Hisar merdiveni dik; su alın.", "Akşam dönüşü 40T dolar."]
	},
	{
		id: "anadolu-yakasi",
		title: "Anadolu yakası",
		kind: "sehir",
		duration: "Tam gün",
		seasonHint: "Yıl boyu; ada ayrı güne",
		summary: "Kız Kulesi, Kuzguncuk, Beylerbeyi, Haydarpaşa. Boğaz’ın öbür kıyısı.",
		image: "/images/kiz-kulesi.jpg",
		transport: "Üsküdar Marmaray / vapur. 15 hattı sahil.",
		steps: [
			{
				placeId: "kiz-kulesi",
				time: "09:30",
				note: "Üsküdar iskelesinden ilk sefer."
			},
			{
				placeId: "kuzguncuk",
				time: "11:00",
				note: "İcadiye renkli evler, sahil kahvesi."
			},
			{
				placeId: "beylerbeyi",
				time: "13:00",
				note: "Milli Saraylar, kısa ama yoğun."
			},
			{
				placeId: "kucuksu",
				time: "14:30",
				note: "Çayır ve kasır; hisarın karşısı."
			},
			{
				placeId: "anadolu-hisari",
				time: "15:15",
				note: "Göksu ağzı, açık hava."
			},
			{
				placeId: "haydarpasa",
				time: "17:30",
				note: "Kadıköy rıhtımı, gün batımı."
			}
		],
		tips: ["Kule bileti çevrimiçi.", "Sahil otobüsü hafta sonu yavaş; vapur+yürüme daha iyi."]
	},
	{
		id: "yaz-karadeniz",
		title: "Yaz: Karadeniz sahili",
		kind: "kamp",
		duration: "Cuma akşam – pazar",
		seasonHint: "Haziran – Eylül",
		seasons: ["yaz"],
		summary: "Şile veya Kilyos. Poyraz, serin su, yangın yasağı. İstanbul yaz kampının gerçeği.",
		image: "/images/camp-summer.jpg",
		transport: "Şile otobüsü veya Sarıyer–Kilyos minibüs. Özel araç konforlu.",
		steps: [
			{
				placeId: "kilyos",
				time: "Cuma",
				note: "Avrupa yakası, merkeze en yakın deniz."
			},
			{
				placeId: "sile-kumbaba",
				time: "Cumartesi",
				note: "Çam + kum; çarşı 10 dk."
			},
			{
				placeId: "sofular",
				time: "İkinci gece",
				note: "Daha sakin koy, market uzakta."
			},
			{
				placeId: "riva",
				time: "Pazar",
				note: "Dönüşte Anadolu kıyısı, dere ağzı."
			}
		],
		tips: [
			"Alçak çadır ve uzun kazık. Poyraz uçak gibi eser.",
			"Deniz 20–23 °C; dip akıntısı. Bayrağa bakın.",
			"Ateş ve mangal yazın yasak."
		]
	},
	{
		id: "kis-dag",
		title: "Kış: Kartepe ve Maşukiye",
		kind: "kamp",
		duration: "Cumartesi – pazar",
		seasonHint: "Aralık – Mart",
		seasons: ["kis"],
		summary: "Kar, -10 gece, kış lastiği. Çadır yalnızca tecrübeliye; bungalov akıllı varsayılan.",
		image: "/images/kartepe-snow.jpg",
		transport: "TEM Kartepe. Zincir ve dolu depo. Toplu taşım hafta sonu ek sefer.",
		steps: [
			{
				placeId: "masukiye",
				time: "Cumartesi öğle",
				note: "Şelale ve alabalık; üs kamp."
			},
			{
				placeId: "kartepe",
				time: "Gece",
				note: "1600 m. 4 mevsim çadır veya otel."
			},
			{
				placeId: "uludag",
				time: "Alternatif",
				note: "Bursa; teleferik, daha yüksek, daha soğuk."
			}
		],
		tips: [
			"İlk kış gecesi çadırla gitmeyin.",
			"Çadır içi mangal = karbonmonoksit.",
			"Islak pamuk giymeyin; merino + kabuk."
		]
	},
	{
		id: "omuz-orman",
		title: "Omuz mevsim: orman",
		kind: "kamp",
		duration: "Günübirlik veya gece",
		seasonHint: "Nisan–Mayıs, Eylül–Ekim",
		seasons: ["dort-mevsim"],
		summary: "Polonezköy, Darlık, Belgrad. İstanbul kampının en rahat penceresi: az sivrisinek, az yangın.",
		image: "/images/belgrad-forest.jpg",
		transport: "Beykoz / Alemdağ / Bahçeköy. Hafta sonu sabah çıkın.",
		steps: [
			{
				placeId: "polonezkoy",
				time: "Cumartesi",
				note: "Tabiat parkı, köy kahvaltısı, parkur."
			},
			{
				placeId: "darlik",
				time: "Gece",
				note: "Baraj ormanı, sessiz resmi parsel."
			},
			{
				placeId: "belgrad",
				time: "Pazar",
				note: "Günübirlik bentler; gece çadırı yasak."
			},
			{
				placeId: "ballikayalar",
				time: "Alternatif",
				note: "Gebze kanyonu, kaymaz taban."
			}
		],
		tips: [
			"Belgrad’ı çadır ormanı sanmayın.",
			"Kene: uzun çorap, duş sonrası tarama.",
			"Sağanakta sel yatağına çadır yok."
		]
	},
	{
		id: "gol-kacis",
		title: "Göl kaçamak",
		kind: "kamp",
		duration: "Pazar veya gece",
		seasonHint: "Mayıs–Haziran, Eylül",
		seasons: ["dort-mevsim"],
		summary: "Sapanca kolay üs; Terkos kuş ve rüzgar. Karavan ve aile için en az sürtünme.",
		image: "/images/sapanca.jpg",
		transport: "TEM Sapanca ~1 sa 45 dk. Terkos TEM–Arnavutköy.",
		steps: [
			{
				placeId: "sapanca",
				time: "Geliş",
				note: "Çadır, karavan, bungalov. Göl kenarı."
			},
			{
				placeId: "masukiye",
				time: "Gündüz",
				note: "Aynı üçgende şelale."
			},
			{
				placeId: "terkos",
				time: "Alternatif",
				note: "Havza kuralı; rastgele çadır cezalı."
			}
		],
		tips: ["Göl suyu içilmez.", "Yazın gölge parsel; kışın sis."]
	},
	{
		id: "marmara-unesco",
		title: "Marmara mirası",
		kind: "sehir",
		duration: "İki gün",
		seasonHint: "Yıl boyu; yazın erken çıkın",
		summary: "İstanbul’un tarihi alanları, Edirne Selimiye, Bursa hanları ve Cumalıkızık. UNESCO’nun Marmara üçlüsü.",
		image: "/images/unesco-selimiye.jpg",
		transport: "Gün 1: otobüs Edirne 2,5 saat. Gün 2: feribot veya otoyol Bursa 2,5 saat.",
		steps: [
			{
				placeId: "unesco-istanbul",
				time: "Cuma akşam",
				note: "Yarımada: Süleymaniye + surdan bir parça."
			},
			{
				placeId: "unesco-selimiye",
				time: "Cumartesi",
				note: "Edirne günü. Kubbe + arasta, dönüş akşam."
			},
			{
				placeId: "unesco-bursa",
				time: "Pazar",
				note: "Hanlar ve Ulu Cami öğleden önce; Cumalıkızık ikindi."
			}
		],
		tips: ["İki ili aynı güne sıkıştırmayın.", "Selimiye namaz vaktinde iç tur durur; öğle arasını dışarıda geçirin."]
	},
	{
		id: "bentler-kuzey",
		title: "Kuzey orman: bentler ve falez",
		kind: "yuruyus",
		duration: "Cumartesi – pazar",
		seasonHint: "Nisan–Haziran, Eylül–Ekim",
		seasons: ["dort-mevsim"],
		summary: "Cumartesi Belgrad bentler halkası, pazar Rumeli Feneri–Kısırkaya. Avrupa yakasının en yürünen iki yüzü: gölge orman, açık Karadeniz.",
		image: "/images/trek-belgrad.jpg",
		transport: "Cumartesi Bahçeköy otobüs. Pazar Sarıyer–Rumelifeneri minibüs.",
		steps: [
			{
				placeId: "trek-bentler",
				time: "Cumartesi 08:30",
				note: "9 km döngü. Su ve kene. Öğle Bahçeköy."
			},
			{
				placeId: "trek-ataturk",
				time: "Alternatif kısa",
				note: "Bacak ağrırsa pazar yerine 5 km gölet."
			},
			{
				placeId: "trek-kisirkaya",
				time: "Pazar 09:00",
				note: "Fener’den Kısırkaya. Poyraz ve falez."
			}
		],
		tips: [
			"İki günü de 12 km+ yapmayın; bentler yetmez diye falez eklemeyin aynı güne.",
			"Pazar fırtınaysa Kısırkaya’yı iptal, Atatürk Kent Ormanı.",
			"Belgrad’da gece çadırı yok — evinize dönün."
		]
	},
	{
		id: "ada-parkuru",
		title: "Adalar parkuru",
		kind: "yuruyus",
		duration: "Tam gün veya iki ada",
		seasonHint: "Nisan–Haziran, Eylül–Ekim; yazın ilk vapur",
		seasons: ["dort-mevsim"],
		summary: "Büyükada Aya Yorgi sırtı, ikinci gün Heybeliada çam halkası. Motor yok, yokuş var, vapur saati her şey.",
		image: "/images/trek-buyukada.jpg",
		transport: "Kabataş / Kadıköy / Bostancı ada vapuru. İki adayı aynı güne sıkıştırmayın.",
		steps: [{
			placeId: "trek-buyukada",
			time: "09:00 vapur",
			note: "Nizam veya Maden, Aya Yorgi, mümkünse Dil Burnu."
		}, {
			placeId: "trek-heybeli",
			time: "İkinci gün",
			note: "Çam Limanı döngüsü. Büyükada’dan sakin."
		}],
		tips: [
			"Dönüş vapurunu kaçırmayın; akşam kuyruk.",
			"Adada su pahalı; iskeleden doldurun.",
			"Aya Yorgi basamağı kaygan."
		]
	},
	{
		id: "anadolu-sirt",
		title: "Anadolu sırtı: Yuşa ve Polonezköy",
		kind: "yuruyus",
		duration: "Tam gün",
		seasonHint: "İlkbahar ve sonbahar; sisiz gün",
		seasons: ["dort-mevsim"],
		summary: "Sabah vapurla Anadolu Kavağı ve Yuşa yokuşu. Öğleden sonra Polonezköy parkuru. Boğaz ağzı + kayın ormanı.",
		image: "/images/trek-yusa.jpg",
		transport: "Boğaz turu vapuru Kavağı. Polonezköy için taksi veya Beykoz aktarma.",
		steps: [
			{
				placeId: "trek-yusa",
				time: "09:00",
				note: "İlk vapur, köy, dik yokuş, türbe, inis."
			},
			{
				placeId: "trek-polonez",
				time: "14:00",
				note: "Tabiat parkı 7 km. Çamur kışın."
			},
			{
				placeId: "trek-riva",
				time: "Alternatif",
				note: "Polonez yerine sahil: Riva dere ağzı."
			}
		],
		tips: [
			"Yuşa dönüş vapurunu kaçırırsanız 15A uzun sürer.",
			"İki parkur da dik/çamur; dizleri aynı gün yormayın — birini kısaltın.",
			"Cuma ve kandilde Yuşa kalabalık."
		]
	},
	{
		id: "kanyon-kiyi",
		title: "Kanyon ve fener",
		kind: "yuruyus",
		duration: "Cumartesi – pazar",
		seasonHint: "Nisan–Haziran, Eylül–Ekim. Yağmurda kanyon yok.",
		seasons: ["dort-mevsim"],
		summary: "Cumartesi Gebze Ballıkayalar dere tabanı. Pazar Şile Feneri sahili. İstanbul’un en ‘arazi’ hafta sonu.",
		image: "/images/trek-sile.jpg",
		transport: "Cumartesi O-4 Gebze, araç şart. Pazar Üsküdar–Şile otobüs.",
		steps: [
			{
				placeId: "trek-ballikayalar",
				time: "Cumartesi 09:00",
				note: "Kaymaz taban. Yağmurda iptal."
			},
			{
				placeId: "trek-incegiz",
				time: "Alternatif",
				note: "Araç varsa Çatalca mağara vadisi."
			},
			{
				placeId: "trek-sile",
				time: "Pazar",
				note: "Fener ve falez. Ağva’yı eklemeyin."
			}
		],
		tips: [
			"Kanyon sel toplar; yağmur + 24 saat bekleyin.",
			"İki gün de açık arazide rüzgarlık.",
			"Şile otobüsü pazar akşamı dolar."
		]
	}
];
function getItinerary(id) {
	return ITINERARIES.find((r) => r.id === id);
}
function itinerariesForPlace(placeId) {
	return ITINERARIES.filter((r) => r.steps.some((s) => s.placeId === placeId));
}
function featuredItineraries(limit = 3) {
	const city = ITINERARIES.filter((r) => r.kind === "sehir");
	const camp = ITINERARIES.filter((r) => r.kind === "kamp");
	const trek = ITINERARIES.filter((r) => r.kind === "yuruyus");
	return [
		city[0],
		trek[0],
		camp[0],
		city[1],
		trek[1]
	].filter((r) => r != null).slice(0, limit);
}
//#endregion
export { itinerariesForPlace as a, getItinerary as i, KIND_LABEL as n, featuredItineraries as r, ITINERARIES as t };
