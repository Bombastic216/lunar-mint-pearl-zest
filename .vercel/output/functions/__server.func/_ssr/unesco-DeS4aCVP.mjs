import { i as __toESM } from "../_runtime.mjs";
import { r as byCategory, s as searchPlaces } from "./places-DPUE4OFc.mjs";
import { b as require_jsx_runtime, z as require_react } from "../_libs/@tanstack/react-router+[...].mjs";
import { i as cn } from "./router-Cc1I8GZy.mjs";
import { a as PlaceCard, o as REGION_LABEL, u as UNESCO_KIND_LABEL } from "./place-card-Bg5vq7Hn.mjs";
import { t as SearchField } from "./search-field-CwX7BE2n.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/unesco-DeS4aCVP.js
var import_react = /* @__PURE__ */ __toESM(require_react());
var import_jsx_runtime = require_jsx_runtime();
var REGIONS = [
	"hepsi",
	"marmara",
	"ege",
	"akdeniz",
	"ic-anadolu",
	"karadeniz",
	"dogu-anadolu",
	"guneydogu"
];
function UnescoPage() {
	const all = byCategory("unesco");
	const [q, setQ] = (0, import_react.useState)("");
	const [region, setRegion] = (0, import_react.useState)("hepsi");
	const list = (0, import_react.useMemo)(() => {
		let rows = searchPlaces(q, all);
		if (region !== "hepsi") rows = rows.filter((p) => p.region === region);
		return [...rows].sort((a, b) => (a.unescoYear ?? 0) - (b.unescoYear ?? 0));
	}, [
		all,
		q,
		region
	]);
	const cultural = all.filter((p) => p.unescoKind === "kulturel").length;
	const mixed = all.filter((p) => p.unescoKind === "karma").length;
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("main", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
		className: "relative h-56 overflow-hidden sm:h-72",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
				src: "/images/unesco-ephesus.jpg",
				alt: "",
				className: "size-full object-cover"
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "absolute inset-0 bg-ink/45" }),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "absolute inset-x-0 bottom-0 mx-auto max-w-6xl px-4 py-8 sm:px-6",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "text-kicker font-medium tracking-[0.18em] text-pine-fg/80 uppercase",
					children: "Dünya mirası · 22 alan"
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("h1", {
					className: "mt-2 font-display text-display font-medium tracking-tight text-pine-fg",
					children: "UNESCO kültür mirası"
				})]
			})
		]
	}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "mx-auto max-w-6xl px-4 py-8 sm:px-6 sm:py-12",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
				className: "max-w-2xl text-lead text-muted",
				children: [
					"Türkiye’de listedeki ",
					all.length,
					" alan: ",
					cultural,
					" kültürel, ",
					mixed,
					" karma. 1985 İstanbul’undan 2025 Sardes’e. Saat ve bilet değişir; resmi kaynağı teyit edin."
				]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "mt-8",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(SearchField, {
					value: q,
					onChange: setQ,
					placeholder: "Alan, il veya dönem ara"
				})
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "mt-4 flex flex-wrap gap-1.5",
				children: REGIONS.map((r) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
					type: "button",
					onClick: () => setRegion(r),
					className: cn("h-11 rounded-md border px-3 text-sm font-medium", region === r ? "border-pine bg-pine text-pine-fg" : "border-line bg-paper text-muted hover:border-line-strong"),
					children: r === "hepsi" ? "Tümü" : REGION_LABEL[r]
				}, r))
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
				className: "mt-5 text-sm text-faint",
				children: [
					list.length,
					" alan",
					region !== "hepsi" ? ` · ${REGION_LABEL[region]}` : ""
				]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "mt-5 grid gap-5 sm:grid-cols-2 lg:grid-cols-3",
				children: list.map((p) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(PlaceCard, { place: p }, p.id))
			}),
			list.length === 0 ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "mt-6 text-muted",
				children: "Bu süzgeçle eşleşen alan yok."
			}) : null,
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
				className: "mt-10 text-xs leading-relaxed text-faint",
				children: [
					UNESCO_KIND_LABEL.kulturel,
					": ",
					cultural,
					" · ",
					UNESCO_KIND_LABEL.karma,
					": ",
					mixed,
					". Kaynak: UNESCO Dünya Mirası Listesi, 2026."
				]
			})
		]
	})] });
}
//#endregion
export { UnescoPage as component };
