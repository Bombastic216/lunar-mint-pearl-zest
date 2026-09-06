import { i as __toESM } from "../_runtime.mjs";
import { b as require_jsx_runtime, v as Link, z as require_react } from "../_libs/@tanstack/react-router+[...].mjs";
import { h as Bookmark, l as MapPin } from "../_libs/lucide-react.mjs";
import { i as cn } from "./router-Cc1I8GZy.mjs";
import { n as create, t as persist } from "../_libs/zustand.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/place-card-Bg5vq7Hn.js
var import_react = /* @__PURE__ */ __toESM(require_react());
var import_jsx_runtime = require_jsx_runtime();
var useFavorites = create()(persist((set, get) => ({
	ids: [],
	toggle: (id) => set((s) => ({ ids: s.ids.includes(id) ? s.ids.filter((x) => x !== id) : [...s.ids, id] })),
	has: (id) => get().ids.includes(id)
}), { name: "istanbul-atlas-favs" }));
var CATEGORY_LABEL = {
	muze: "Müze",
	tarihi: "Tarihi mekan",
	kamp: "Kamp alanı",
	unesco: "UNESCO mirası",
	yuruyus: "Yürüyüş parkuru"
};
var SIDE_LABEL = {
	avrupa: "Avrupa yakası",
	asya: "Anadolu yakası",
	yakin: "İstanbul'a yakın",
	ulke: "Türkiye"
};
var REGION_LABEL = {
	marmara: "Marmara",
	ege: "Ege",
	akdeniz: "Akdeniz",
	"ic-anadolu": "İç Anadolu",
	karadeniz: "Karadeniz",
	"dogu-anadolu": "Doğu Anadolu",
	guneydogu: "Güneydoğu"
};
var UNESCO_KIND_LABEL = {
	kulturel: "Kültürel",
	karma: "Karma (kültür + doğa)"
};
var SEASON_LABEL = {
	yaz: "Yazlık",
	kis: "Kışlık",
	"dort-mevsim": "Dört mevsim"
};
var FACILITY_LABEL = {
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
	yuruyus: "Yürüyüş"
};
var DIFFICULTY_LABEL = {
	kolay: "Kolay",
	orta: "Orta",
	zor: "Zor"
};
var TRAIL_KIND_LABEL = {
	orman: "Orman",
	sahil: "Sahil / falez",
	ada: "Ada",
	kent: "Kent parkuru",
	kanyon: "Kanyon"
};
function FavoriteButton({ id, className }) {
	const [mounted, setMounted] = (0, import_react.useState)(false);
	const stored = useFavorites((s) => s.ids.includes(id));
	const toggle = useFavorites((s) => s.toggle);
	const has = mounted && stored;
	(0, import_react.useEffect)(() => {
		setMounted(true);
	}, []);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
		type: "button",
		onClick: (e) => {
			e.preventDefault();
			e.stopPropagation();
			toggle(id);
		},
		"aria-pressed": has,
		"aria-label": has ? "Kayıtlardan çıkar" : "Kaydet",
		className: cn("inline-flex size-11 shrink-0 items-center justify-center rounded-md border border-line bg-paper text-ink transition-colors duration-150", "hover:border-line-strong hover:bg-canvas", has && "border-pine bg-pine text-pine-fg", className),
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Bookmark, {
			className: cn("size-4", has && "fill-current"),
			strokeWidth: 1.75
		})
	});
}
function PlaceCard({ place, featured = false }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("article", {
		className: cn("group relative flex flex-col overflow-hidden rounded-xl border border-line bg-paper shadow-lift", featured && "sm:flex-row"),
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
			to: "/yer/$id",
			params: { id: place.id },
			className: cn("relative block overflow-hidden bg-canvas", featured ? "h-56 sm:h-auto sm:w-1/2" : "h-52"),
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
				src: place.image,
				alt: "",
				className: "size-full object-cover transition-transform duration-500 group-hover:scale-105"
			})
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: cn("flex flex-1 flex-col gap-3 p-5", featured && "sm:p-7"),
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "flex items-start justify-between gap-3",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
						className: "text-kicker font-medium tracking-[0.18em] text-muted uppercase",
						children: [
							CATEGORY_LABEL[place.category],
							place.unescoYear ? ` · ${place.unescoYear}` : "",
							place.trailKm ? ` · ${place.trailKm} km` : "",
							place.difficulty ? ` · ${DIFFICULTY_LABEL[place.difficulty]}` : ""
						]
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
						className: cn("mt-1 font-display font-medium tracking-tight text-ink", featured ? "text-3xl" : "text-2xl"),
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
							to: "/yer/$id",
							params: { id: place.id },
							className: "hover:text-pine",
							children: place.name
						})
					})] }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(FavoriteButton, { id: place.id })]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "text-sm leading-relaxed text-muted",
					children: place.summary
				}),
				place.seasons && place.seasons.length > 0 ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("ul", {
					className: "flex flex-wrap gap-1.5",
					children: place.seasons.map((s) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", {
						className: "rounded-full border border-line px-2.5 py-0.5 text-kicker font-medium tracking-wide text-muted uppercase",
						children: SEASON_LABEL[s]
					}, s))
				}) : null,
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "mt-auto flex flex-wrap items-center gap-x-3 gap-y-1 pt-1 text-xs text-faint",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
						className: "inline-flex items-center gap-1",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(MapPin, {
							className: "size-3.5",
							strokeWidth: 1.75
						}), place.district]
					}), place.duration ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: place.duration }) : null]
				})
			]
		})]
	});
}
//#endregion
export { PlaceCard as a, SIDE_LABEL as c, useFavorites as d, FavoriteButton as i, TRAIL_KIND_LABEL as l, DIFFICULTY_LABEL as n, REGION_LABEL as o, FACILITY_LABEL as r, SEASON_LABEL as s, CATEGORY_LABEL as t, UNESCO_KIND_LABEL as u };
