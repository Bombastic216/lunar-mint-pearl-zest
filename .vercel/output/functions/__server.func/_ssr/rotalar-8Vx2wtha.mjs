import { i as __toESM } from "../_runtime.mjs";
import { b as require_jsx_runtime, v as Link, z as require_react } from "../_libs/@tanstack/react-router+[...].mjs";
import { _ as ArrowRight } from "../_libs/lucide-react.mjs";
import { i as cn } from "./router-Cc1I8GZy.mjs";
import { n as KIND_LABEL, t as ITINERARIES } from "./itineraries-UJKsAyMb.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/rotalar-8Vx2wtha.js
var import_react = /* @__PURE__ */ __toESM(require_react());
var import_jsx_runtime = require_jsx_runtime();
function RoutesPage() {
	const [kind, setKind] = (0, import_react.useState)("hepsi");
	const list = (0, import_react.useMemo)(() => kind === "hepsi" ? ITINERARIES : ITINERARIES.filter((r) => r.kind === kind), [kind]);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("main", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
		className: "relative h-56 overflow-hidden sm:h-72",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
				src: "/images/hero-city.jpg",
				alt: "",
				className: "size-full object-cover"
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "absolute inset-0 bg-ink/40" }),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "absolute inset-x-0 bottom-0 mx-auto max-w-6xl px-4 py-8 sm:px-6",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "text-kicker font-medium tracking-[0.18em] text-pine-fg/80 uppercase",
					children: "Hazır güzergah"
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("h1", {
					className: "mt-2 font-display text-display font-medium tracking-tight text-pine-fg",
					children: "Rotalar"
				})]
			})
		]
	}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "mx-auto max-w-6xl px-4 py-8 sm:px-6 sm:py-12",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "max-w-2xl text-lead text-muted",
				children: "Şehir günleri, yürüyüş parkurları ve kamp hafta sonları. Duraklar sırayla; her biri kendi sayfasında saat, ücret ve çanta notu taşır."
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "mt-8 flex h-12 max-w-xl rounded-lg border border-line bg-paper p-1",
				children: [
					["hepsi", "Tümü"],
					["sehir", "Şehir"],
					["yuruyus", "Yürüyüş"],
					["kamp", "Kamp"]
				].map(([id, label]) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
					type: "button",
					onClick: () => setKind(id),
					className: cn("flex-1 rounded-md px-3 text-sm font-medium", kind === id ? "bg-pine text-pine-fg" : "text-muted"),
					children: label
				}, id))
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "mt-8 grid gap-5 lg:grid-cols-2",
				children: list.map((r) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Link, {
					to: "/rota/$id",
					params: { id: r.id },
					className: "group overflow-hidden rounded-xl border border-line bg-paper shadow-lift",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "relative h-44 overflow-hidden",
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
							src: r.image,
							alt: "",
							className: "size-full object-cover transition-transform duration-500 group-hover:scale-105"
						})
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "p-5 sm:p-6",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
								className: "text-kicker font-medium tracking-[0.16em] text-muted uppercase",
								children: [
									KIND_LABEL[r.kind],
									" · ",
									r.duration
								]
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
								className: "mt-1 font-display text-3xl font-medium tracking-tight",
								children: r.title
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "mt-2 text-sm leading-relaxed text-muted",
								children: r.summary
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
								className: "mt-4 text-sm text-faint",
								children: [
									r.steps.length,
									" durak · ",
									r.seasonHint
								]
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
								className: "mt-4 inline-flex items-center gap-2 text-sm font-medium text-pine",
								children: ["Rotayı aç", /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ArrowRight, {
									className: "size-4",
									strokeWidth: 1.75
								})]
							})
						]
					})]
				}, r.id))
			})
		]
	})] });
}
//#endregion
export { RoutesPage as component };
