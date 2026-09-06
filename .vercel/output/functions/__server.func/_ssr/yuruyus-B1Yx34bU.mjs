import { i as __toESM } from "../_runtime.mjs";
import { n as TREK_PACKING, r as byCategory, s as searchPlaces } from "./places-DPUE4OFc.mjs";
import { b as require_jsx_runtime, v as Link, z as require_react } from "../_libs/@tanstack/react-router+[...].mjs";
import { i as cn } from "./router-Cc1I8GZy.mjs";
import { a as PlaceCard, l as TRAIL_KIND_LABEL, n as DIFFICULTY_LABEL } from "./place-card-Bg5vq7Hn.mjs";
import { t as SearchField } from "./search-field-CwX7BE2n.mjs";
import { t as PackingList } from "./packing-list-gHk1Gu3e.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/yuruyus-B1Yx34bU.js
var import_react = /* @__PURE__ */ __toESM(require_react());
var import_jsx_runtime = require_jsx_runtime();
function TrekPage() {
	const all = byCategory("yuruyus");
	const [q, setQ] = (0, import_react.useState)("");
	const [side, setSide] = (0, import_react.useState)("hepsi");
	const [diff, setDiff] = (0, import_react.useState)("hepsi");
	const [kind, setKind] = (0, import_react.useState)("hepsi");
	const list = (0, import_react.useMemo)(() => {
		let rows = searchPlaces(q, all);
		if (side !== "hepsi") rows = rows.filter((p) => p.side === side);
		if (diff !== "hepsi") rows = rows.filter((p) => p.difficulty === diff);
		if (kind !== "hepsi") rows = rows.filter((p) => p.trailKind === kind);
		return [...rows].sort((a, b) => (a.trailKm ?? 99) - (b.trailKm ?? 99));
	}, [
		all,
		q,
		side,
		diff,
		kind
	]);
	const easy = all.filter((p) => p.difficulty === "kolay").length;
	const mid = all.filter((p) => p.difficulty === "orta").length;
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("main", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
		className: "relative h-56 overflow-hidden sm:h-72",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
				src: "/images/trek-belgrad.jpg",
				alt: "",
				className: "size-full object-cover"
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "absolute inset-0 bg-ink/40" }),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "absolute inset-x-0 bottom-0 mx-auto max-w-6xl px-4 py-8 sm:px-6",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
					className: "text-kicker font-medium tracking-[0.18em] text-pine-fg/80 uppercase",
					children: [
						"Parkur defteri · ",
						all.length,
						" rota"
					]
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("h1", {
					className: "mt-2 font-display text-display font-medium tracking-tight text-pine-fg",
					children: "İstanbul trekking"
				})]
			})
		]
	}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "mx-auto max-w-6xl px-4 py-8 sm:px-6 sm:py-12",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "max-w-2xl text-lead text-muted",
				children: "Bentler, Aydos, adalar, Yuşa, Karadeniz falez. Mesafe ve yokuş gerçek; çadır değil, günübirlik parkur. Saat ve vapur seferi değişir."
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "mt-8 grid gap-3 sm:grid-cols-3",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Note, {
						kicker: `${easy} kolay`,
						title: "Kent ve koru",
						body: "Atatürk Kent Ormanı, Çamlıca, Polonezköy, Heybeliada. İlk parkur ve aile."
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Note, {
						kicker: `${mid} orta`,
						title: "Sırt ve falez",
						body: "Aydos zirve, Büyükada yokuşu, Yuşa, Kısırkaya, Şile, Ballıkayalar."
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Note, {
						kicker: "Kural",
						title: "Kamp değil",
						body: "Belgrad ve Aydos’ta gece çadırı yok. Yağmurda kanyon iptal. Kene ve poyraz notu her kartta."
					})
				]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "mt-8",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(PackingList, {
					items: TREK_PACKING,
					title: "Parkur çantası"
				})
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "mt-8 flex flex-col gap-3",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SearchField, {
						value: q,
						onChange: setQ,
						placeholder: "Parkur veya ilçe ara"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(ChipRow, {
						value: kind,
						onChange: setKind,
						options: [
							["hepsi", "Zemin"],
							["orman", TRAIL_KIND_LABEL.orman],
							["sahil", TRAIL_KIND_LABEL.sahil],
							["ada", TRAIL_KIND_LABEL.ada],
							["kent", TRAIL_KIND_LABEL.kent],
							["kanyon", TRAIL_KIND_LABEL.kanyon]
						]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "flex flex-col gap-2 sm:flex-row",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(ChipRow, {
							value: side,
							onChange: setSide,
							options: [
								["hepsi", "Yaka"],
								["avrupa", "Avrupa"],
								["asya", "Anadolu"],
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
						children: [list.length, " parkur"]
					})
				]
			}),
			list.length === 0 ? /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
				className: "mt-8 rounded-xl border border-line bg-paper p-6 text-muted",
				children: [
					"Bu filtreyle parkur yok. Zemini veya zorluğu gevşetin.",
					" ",
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
						to: "/rotalar",
						className: "font-medium text-pine hover:underline",
						children: "Hazır yürüyüş gününe bakın"
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
function Note({ kicker, title, body }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "rounded-xl border border-line bg-paper p-5",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "text-kicker font-medium tracking-[0.16em] text-muted uppercase",
				children: kicker
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
				className: "mt-2 font-display text-2xl font-medium",
				children: title
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "mt-2 text-sm leading-relaxed text-muted",
				children: body
			})
		]
	});
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
export { TrekPage as component };
