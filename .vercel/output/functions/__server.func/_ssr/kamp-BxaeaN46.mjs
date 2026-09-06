import { i as __toESM } from "../_runtime.mjs";
import { r as byCategory, s as searchPlaces } from "./places-DPUE4OFc.mjs";
import { b as require_jsx_runtime, v as Link, z as require_react } from "../_libs/@tanstack/react-router+[...].mjs";
import { i as cn } from "./router-Cc1I8GZy.mjs";
import { a as PlaceCard, n as DIFFICULTY_LABEL, s as SEASON_LABEL } from "./place-card-Bg5vq7Hn.mjs";
import { t as SearchField } from "./search-field-CwX7BE2n.mjs";
import { t as PackingList } from "./packing-list-gHk1Gu3e.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/kamp-BxaeaN46.js
var import_react = /* @__PURE__ */ __toESM(require_react());
var import_jsx_runtime = require_jsx_runtime();
var SEASON_GUIDES = [
	{
		id: "yaz",
		title: "Yazlık kamp",
		months: "Haziran – Eylül",
		climate: "Karadeniz kıyısı (Şile, Kilyos, Riva, Ağva) poyrazlı ve serin sularlıdır. Gündüz UV yüksek, gece polar ister. Nem ve sivrisinek dere/göl kenarında artar.",
		who: "Deniz ve uzun gün ışığı isteyenler. Hafta içi gidin; cumartesi tesisler dolar.",
		gear: [
			"Alçak profil / tünel çadır",
			"Uzun kazık ve rüzgar kırıcı",
			"50+ güneş kremi, şapka",
			"Sivrisinek ilacı (Ağva, göl)",
			"Günde 3–4 L su planı"
		],
		risks: [
			"Çadırı uçuran poyraz",
			"Dalgalı Karadeniz, dip akıntısı",
			"Orman yangını sezonu — ateş yasak",
			"Hafta sonu gürültü ve hırsızlık"
		],
		notes: "İstanbul yaz kampı 'Akdeniz tatili' değildir. Deniz 20–23 °C civarında kalır, rüzgar gece soğutur. Ateş ve mangal yasağına uymayanlar hem cezayı hem yangını göze alır."
	},
	{
		id: "kis",
		title: "Kışlık kamp",
		months: "Aralık – Mart",
		climate: "Kartepe ve Uludağ'da kar, rüzgar ve -10'a inen gece. Yedigöller ve Abant'ta yol kapanabilir. Şehir ormanında (Belgrad, Polonezköy) kar az, çamur ve sis çok.",
		who: "Kış çadırı tecrübesi olanlar. İlk kış gecenizse bungalov veya karavan seçin.",
		gear: [
			"4 mevsim çadır, kar eteği",
			"Uyku tulumu konfor -10",
			"Yüksek R değerli izomat (üst üste iki)",
			"Kuru katman + yedek çorap torbada",
			"Termos, yağlı yiyecek, yedek batarya soğukta zayıf"
		],
		risks: [
			"Hipotermi ve ıslak pamuk",
			"Çadır içi mangal / karbonmonoksit",
			"Kış lastiksiz çıkış",
			"Çığ ve pist dışı (Uludağ)"
		],
		notes: "Kış kampı ekipman sporudur, manzara sporu değil. Islak giysiyi üzerinizde kurutmayın. Kar bölgesine zincir, pul ve dolu depo ile çıkın."
	},
	{
		id: "dort-mevsim",
		title: "Dört mevsim",
		months: "Asıl tat: Nisan–Mayıs ve Eylül–Ekim",
		climate: "İstanbul'un omuz mevsimleri kamp için en iyisidir: az sivrisinek, düşük yangın riski, orman rengi. Yaz kadar kalabalık değil. Ani sağanak ve çamur bekleyin.",
		who: "İlk kamp ve aile. Polonezköy, Darlık, Sapanca, Ballıkayalar.",
		gear: [
			"3 mevsim çadır + tarp",
			"Yağmurluk ve çamur ayakkabısı",
			"Sıcak içecek seti",
			"Kene kontrolü (uzun çorap)",
			"Offline harita — sinyal ormanda düşer"
		],
		risks: [
			"Sağanak ve sel yatağına kurulan çadır",
			"Kene (ilkbahar orman)",
			"Park ve havza yasakları",
			"Erken karanlık (ekim)"
		],
		notes: "Belgrad ve Aydos gece kampı için değildir; günübirlik yürüyün. Terkos ve baraj gölleri içme suyu havzası — rastgele çadır cezalı olabilir. Resmi tesis seçin."
	}
];
var CAMP_RULES = [
	{
		title: "Ateş",
		body: "Orman yangını sezonunda (genelde mayıs–ekim) açık ateş ve mangal yasak. Sadece işletmenin metal ocağı. Izgara kömürünü toprağa dökmeyin."
	},
	{
		title: "İzin",
		body: "Milli park, tabiat parkı ve içme suyu havzasında izinsiz geceleme cezalıdır. Belgrad Ormanı'nı çadırla 'boş orman' sanmayın."
	},
	{
		title: "Su ve atık",
		body: "Sabunu dereye dökmeyin. Çöpü kente geri götürün. Tuvalet küreği vahşi kampta 60 adım ve 20 cm."
	},
	{
		title: "Güvenlik",
		body: "Karadeniz'de yüzme bayrağına bakın. Kışın çadırda asla mangal. Değerli eşya çadırda bırakılmaz. Tek başınıza rota paylaşın."
	}
];
var PACKING_CORE = [
	"Kimlik ve nakit (park girişleri)",
	"Kafa lambası + yedek pil",
	"İlk yardım, kişisel ilaç, kene cımbızı",
	"Çöp torbası (gidişin iki katı)",
	"Yağmurluk — İstanbul'da 'açık gece' sözü tutulmaz"
];
function CampPage() {
	const all = byCategory("kamp");
	const [q, setQ] = (0, import_react.useState)("");
	const [season, setSeason] = (0, import_react.useState)("hepsi");
	const [region, setRegion] = (0, import_react.useState)("hepsi");
	const [diff, setDiff] = (0, import_react.useState)("hepsi");
	const list = (0, import_react.useMemo)(() => {
		let rows = searchPlaces(q, all);
		if (season !== "hepsi") rows = rows.filter((p) => p.seasons?.includes(season));
		if (region === "ici") rows = rows.filter((p) => p.side === "avrupa" || p.side === "asya");
		else if (region === "yakin") rows = rows.filter((p) => p.side === "yakin");
		if (diff !== "hepsi") rows = rows.filter((p) => p.difficulty === diff);
		return rows;
	}, [
		all,
		q,
		season,
		region,
		diff
	]);
	const guide = season === "hepsi" ? null : SEASON_GUIDES.find((g) => g.id === season);
	const packItems = guide ? [...PACKING_CORE, ...guide.gear] : PACKING_CORE;
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("main", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
		className: "relative h-56 overflow-hidden sm:h-72",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
				src: "/images/sile-coast.jpg",
				alt: "",
				className: "size-full object-cover"
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "absolute inset-0 bg-ink/40" }),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "absolute inset-x-0 bottom-0 mx-auto max-w-6xl px-4 py-8 sm:px-6",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "text-kicker font-medium tracking-[0.18em] text-pine-fg/80 uppercase",
					children: "Kamp defteri"
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("h1", {
					className: "mt-2 font-display text-display font-medium tracking-tight text-pine-fg",
					children: "Yazlık, kışlık, dört mevsim"
				})]
			})
		]
	}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "mx-auto max-w-6xl px-4 py-8 sm:px-6 sm:py-12",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "max-w-2xl text-lead text-muted",
				children: "İstanbul ili ve hafta sonu mesafesi. Karadeniz rüzgarı, orman yasağı ve kış soğuğu bu listenin bir parçası — yalnızca yer adı değil."
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "mt-8 grid gap-3 sm:grid-cols-3",
				children: SEASON_GUIDES.map((g) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
					type: "button",
					onClick: () => setSeason(g.id),
					className: cn("rounded-xl border p-5 text-left transition-colors duration-150", season === g.id ? "border-pine bg-pine text-pine-fg" : "border-line bg-paper hover:border-line-strong"),
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "text-kicker font-medium tracking-[0.16em] uppercase opacity-80",
							children: g.months
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
							className: "mt-2 font-display text-2xl font-medium",
							children: g.title
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: cn("mt-2 text-sm leading-relaxed", season === g.id ? "text-pine-fg/85" : "text-muted"),
							children: g.who
						})
					]
				}, g.id))
			}),
			guide ? /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("article", {
				className: "mt-8 rounded-xl border border-line bg-paper p-5 sm:p-7",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("h2", {
						className: "font-display text-3xl font-medium",
						children: [guide.title, " notu"]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "mt-3 max-w-3xl text-muted",
						children: guide.climate
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "mt-3 max-w-3xl text-muted",
						children: guide.notes
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "mt-6 grid gap-6 md:grid-cols-2",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
							className: "text-sm font-medium",
							children: "Çanta"
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("ul", {
							className: "mt-2 space-y-1.5 text-sm text-muted",
							children: guide.gear.map((item) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", {
								className: "border-b border-line py-1.5",
								children: item
							}, item))
						})] }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
							className: "text-sm font-medium",
							children: "Risk"
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("ul", {
							className: "mt-2 space-y-1.5 text-sm text-muted",
							children: guide.risks.map((item) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", {
								className: "border-b border-line py-1.5",
								children: item
							}, item))
						})] })]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
						type: "button",
						onClick: () => setSeason("hepsi"),
						className: "mt-6 text-sm font-medium text-pine hover:underline",
						children: "Filtreyi temizle"
					})
				]
			}) : /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "mt-8 grid gap-4 md:grid-cols-2",
				children: CAMP_RULES.map((rule) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "rounded-xl border border-line bg-paper p-5",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
						className: "font-display text-2xl font-medium",
						children: rule.title
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "mt-2 text-sm leading-relaxed text-muted",
						children: rule.body
					})]
				}, rule.title))
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "mt-8",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(PackingList, {
					items: packItems,
					title: guide ? `${guide.title} çantası` : "Her çantada"
				})
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
				className: "mt-8 text-sm text-muted",
				children: [
					"Kış kampı İstanbul içinde yok denecek kadar azdır; Kartepe ve Uludağ hafta sonu mesafesi. İl içi orman (Belgrad, Polonezköy, Aydos) çoğu zaman günübirliktir. Parkur notu",
					" ",
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
						to: "/yuruyus",
						className: "font-medium text-pine hover:underline",
						children: "yürüyüş defterinde"
					}),
					"."
				]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "mt-8 flex flex-col gap-3",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SearchField, {
						value: q,
						onChange: setQ,
						placeholder: "Kamp alanı veya ilçe ara"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "flex flex-col gap-2 sm:flex-row",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(ChipRow, {
							value: region,
							onChange: setRegion,
							options: [
								["hepsi", "Tümü"],
								["ici", "İstanbul içi"],
								["yakin", "Yakın kaçış"]
							]
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ChipRow, {
							value: diff,
							onChange: setDiff,
							options: [
								["hepsi", "Zorluk"],
								["kolay", DIFFICULTY_LABEL.kolay],
								["orta", DIFFICULTY_LABEL.orta],
								["zor", DIFFICULTY_LABEL.zor]
							]
						})]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
						className: "text-sm text-faint",
						children: [
							list.length,
							" alan",
							season !== "hepsi" ? ` · ${SEASON_LABEL[season]}` : ""
						]
					})
				]
			}),
			list.length === 0 ? /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
				className: "mt-8 rounded-xl border border-line bg-paper p-6 text-muted",
				children: [
					"Bu filtreyle alan yok. Mevsimi veya zorluğu gevşetin.",
					" ",
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
						to: "/rotalar",
						className: "font-medium text-pine hover:underline",
						children: "Kamp rotasına bakın"
					}),
					"."
				]
			}) : /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "mt-6 grid gap-5 sm:grid-cols-2 lg:grid-cols-3",
				children: list.map((p) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(PlaceCard, { place: p }, p.id))
			})
		]
	})] });
}
function ChipRow({ value, onChange, options }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
		className: "flex min-h-12 flex-1 flex-wrap gap-1 rounded-lg border border-line bg-paper p-1",
		children: options.map(([id, label]) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
			type: "button",
			onClick: () => onChange(id),
			className: cn("min-h-10 flex-1 rounded-md px-3 text-sm font-medium", value === id ? "bg-pine text-pine-fg" : "text-muted"),
			children: label
		}, id))
	});
}
//#endregion
export { CampPage as component };
