import { a as getPlace } from "./places-DPUE4OFc.mjs";
import { b as require_jsx_runtime, v as Link } from "../_libs/@tanstack/react-router+[...].mjs";
import { _ as ArrowRight, c as Navigation } from "../_libs/lucide-react.mjs";
import { r as Route$2 } from "./router-Cc1I8GZy.mjs";
import { i as getItinerary, n as KIND_LABEL } from "./itineraries-UJKsAyMb.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/rota._id-Dxp307d5.js
var import_jsx_runtime = require_jsx_runtime();
function ItineraryPage() {
	const { id } = Route$2.useParams();
	const route = getItinerary(id);
	if (!route) return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("main", {
		className: "mx-auto max-w-xl px-4 py-20 text-center",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h1", {
			className: "font-display text-3xl",
			children: "Bu rota yok"
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
			to: "/rotalar",
			className: "mt-8 inline-flex h-12 items-center rounded-md bg-pine px-5 text-sm font-medium text-pine-fg",
			children: "Rotalara dön"
		})]
	});
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("main", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "relative h-64 overflow-hidden sm:h-80",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
			src: route.image,
			alt: "",
			className: "size-full object-cover"
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "absolute inset-0 bg-ink/30" })]
	}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("article", {
		className: "mx-auto max-w-3xl px-4 py-8 sm:px-6 sm:py-12",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
				className: "text-kicker font-medium tracking-[0.18em] text-muted uppercase",
				children: [
					KIND_LABEL[route.kind],
					" · ",
					route.duration
				]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h1", {
				className: "mt-2 font-display text-display font-medium tracking-tight",
				children: route.title
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "mt-4 text-lead text-ink",
				children: route.summary
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
				className: "mt-3 flex items-start gap-2 text-sm text-muted",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Navigation, {
					className: "mt-0.5 size-4 shrink-0",
					strokeWidth: 1.75
				}), route.transport]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "mt-2 text-sm text-faint",
				children: route.seasonHint
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("ol", {
				className: "mt-10 space-y-4",
				children: route.steps.map((step, i) => {
					const place = getPlace(step.placeId);
					if (!place) return null;
					return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", { children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Link, {
						to: "/yer/$id",
						params: { id: place.id },
						className: "flex gap-4 rounded-xl border border-line bg-paper p-4 transition-colors duration-150 hover:border-line-strong",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
							className: "flex size-10 shrink-0 items-center justify-center rounded-md bg-pine font-display text-xl text-pine-fg",
							children: i + 1
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
							className: "min-w-0 flex-1",
							children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
									className: "flex flex-wrap items-baseline gap-x-2",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
										className: "font-display text-2xl font-medium tracking-tight",
										children: place.name
									}), step.time ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
										className: "text-xs text-faint",
										children: step.time
									}) : null]
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
									className: "mt-1 block text-sm text-muted",
									children: step.note
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
									className: "mt-2 inline-flex items-center gap-1 text-sm font-medium text-pine",
									children: ["Durağı aç", /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ArrowRight, {
										className: "size-3.5",
										strokeWidth: 1.75
									})]
								})
							]
						})]
					}) }, `${step.placeId}-${i}`);
				})
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
				className: "mt-10",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
					className: "font-display text-2xl font-medium",
					children: "Saha notu"
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("ul", {
					className: "mt-3 space-y-2",
					children: route.tips.map((t) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", {
						className: "border-b border-line py-2 text-sm text-muted",
						children: t
					}, t))
				})]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
				to: "/rotalar",
				className: "mt-10 inline-flex h-12 items-center rounded-md border border-line bg-paper px-5 text-sm font-medium",
				children: "Tüm rotalar"
			})
		]
	})] });
}
//#endregion
export { ItineraryPage as component };
