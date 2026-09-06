import { i as __toESM } from "../_runtime.mjs";
import { r as byCategory, s as searchPlaces } from "./places-DPUE4OFc.mjs";
import { b as require_jsx_runtime, z as require_react } from "../_libs/@tanstack/react-router+[...].mjs";
import { i as cn } from "./router-Cc1I8GZy.mjs";
import { a as PlaceCard } from "./place-card-Bg5vq7Hn.mjs";
import { t as SearchField } from "./search-field-CwX7BE2n.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/muzeler--AjMguih.js
var import_react = /* @__PURE__ */ __toESM(require_react());
var import_jsx_runtime = require_jsx_runtime();
function MuseumsPage() {
	const all = byCategory("muze");
	const [q, setQ] = (0, import_react.useState)("");
	const [side, setSide] = (0, import_react.useState)("hepsi");
	const list = (0, import_react.useMemo)(() => {
		let rows = searchPlaces(q, all);
		if (side !== "hepsi") rows = rows.filter((p) => p.side === side);
		return rows;
	}, [
		all,
		q,
		side
	]);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("main", {
		className: "mx-auto max-w-6xl px-4 py-8 sm:px-6 sm:py-12",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "text-kicker font-medium tracking-[0.18em] text-muted uppercase",
				children: "Koleksiyon"
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h1", {
				className: "mt-2 font-display text-display font-medium tracking-tight",
				children: "Müzeler"
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "mt-3 max-w-2xl text-lead text-muted",
				children: "Saray, arkeoloji, çağdaş sanat ve donanma. Saatler değişir; kapıdaki duyuruyu esas alın."
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "mt-8 flex flex-col gap-3 sm:flex-row",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "flex-1",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(SearchField, {
						value: q,
						onChange: setQ,
						placeholder: "Müze veya semt ara"
					})
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "flex h-12 rounded-lg border border-line bg-paper p-1",
					children: [
						"hepsi",
						"avrupa",
						"asya"
					].map((s) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
						type: "button",
						onClick: () => setSide(s),
						className: cn("flex-1 rounded-md px-3 text-sm font-medium", side === s ? "bg-pine text-pine-fg" : "text-muted"),
						children: s === "hepsi" ? "Tümü" : s === "avrupa" ? "Avrupa" : "Anadolu"
					}, s))
				})]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
				className: "mt-5 text-sm text-faint",
				children: [list.length, " müze"]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "mt-5 grid gap-5 sm:grid-cols-2 lg:grid-cols-3",
				children: list.map((p) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(PlaceCard, { place: p }, p.id))
			})
		]
	});
}
//#endregion
export { MuseumsPage as component };
