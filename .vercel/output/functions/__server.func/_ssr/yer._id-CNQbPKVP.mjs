import { a as getPlace, o as relatedPlaces } from "./places-DPUE4OFc.mjs";
import { b as require_jsx_runtime, v as Link } from "../_libs/@tanstack/react-router+[...].mjs";
import { c as Navigation, g as ArrowUpRight, i as Ticket, l as MapPin, p as Clock3, r as Trees } from "../_libs/lucide-react.mjs";
import { n as Route$1 } from "./router-Cc1I8GZy.mjs";
import { a as PlaceCard, c as SIDE_LABEL, i as FavoriteButton, l as TRAIL_KIND_LABEL, n as DIFFICULTY_LABEL, o as REGION_LABEL, r as FACILITY_LABEL, s as SEASON_LABEL, t as CATEGORY_LABEL, u as UNESCO_KIND_LABEL } from "./place-card-Bg5vq7Hn.mjs";
import { a as itinerariesForPlace, n as KIND_LABEL } from "./itineraries-UJKsAyMb.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/yer._id-CNQbPKVP.js
var import_jsx_runtime = require_jsx_runtime();
function PlacePage() {
	const { id } = Route$1.useParams();
	const place = getPlace(id);
	if (!place) return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("main", {
		className: "mx-auto max-w-xl px-4 py-20 text-center",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h1", {
				className: "font-display text-3xl",
				children: "Bu durak yok"
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "mt-3 text-muted",
				children: "Kayıt silinmiş veya bağlantı eski."
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
				to: "/",
				className: "mt-8 inline-flex h-12 items-center rounded-md bg-pine px-5 text-sm font-medium text-pine-fg",
				children: "Keşfet"
			})
		]
	});
	const maps = `https://www.google.com/maps?q=${place.lat},${place.lng}`;
	const related = relatedPlaces(place);
	const onRoutes = itinerariesForPlace(place.id);
	const isCamp = place.category === "kamp";
	const isTrail = place.category === "yuruyus";
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("main", { children: [
		/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "relative h-64 overflow-hidden sm:h-96",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
				src: place.image,
				alt: "",
				className: "size-full object-cover"
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "absolute inset-0 bg-ink/25" })]
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("article", {
			className: "mx-auto max-w-3xl px-4 py-8 sm:px-6 sm:py-12",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "flex items-start justify-between gap-4",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
							className: "text-kicker font-medium tracking-[0.18em] text-muted uppercase",
							children: [
								CATEGORY_LABEL[place.category],
								place.unescoYear ? ` · ${place.unescoYear}` : "",
								place.unescoKind ? ` · ${UNESCO_KIND_LABEL[place.unescoKind]}` : "",
								place.era && !place.unescoYear ? ` · ${place.era}` : ""
							]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h1", {
							className: "mt-2 font-display text-display font-medium tracking-tight",
							children: place.name
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
							className: "mt-3 flex flex-wrap items-center gap-x-3 gap-y-1 text-sm text-muted",
							children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
									className: "inline-flex items-center gap-1",
									children: [
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)(MapPin, {
											className: "size-3.5",
											strokeWidth: 1.75
										}),
										place.district,
										place.region ? ` · ${REGION_LABEL[place.region]}` : ` · ${SIDE_LABEL[place.side]}`
									]
								}),
								place.duration ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: place.duration }) : null,
								place.distanceKm ? /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", { children: [place.distanceKm, " km"] }) : null
							]
						})
					] }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(FavoriteButton, { id: place.id })]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "mt-6 text-lead text-ink",
					children: place.description
				}),
				place.era && place.unescoYear ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "mt-3 text-sm text-muted",
					children: place.era
				}) : null,
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("ul", {
					className: "mt-6 flex flex-wrap gap-2",
					children: place.highlights.map((h) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", {
						className: "rounded-full border border-line bg-paper px-3 py-1.5 text-xs font-medium text-muted",
						children: h
					}, h))
				}),
				(isCamp || isTrail) && place.seasons ? /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "mt-6 flex flex-wrap gap-2",
					children: [
						place.seasons.map((s) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
							className: "rounded-md bg-pine px-3 py-1.5 text-xs font-medium text-pine-fg",
							children: SEASON_LABEL[s]
						}, s)),
						place.difficulty ? /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
							className: "rounded-md border border-line px-3 py-1.5 text-xs font-medium text-muted",
							children: ["Zorluk: ", DIFFICULTY_LABEL[place.difficulty]]
						}) : null,
						place.trailKind ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
							className: "rounded-md border border-line px-3 py-1.5 text-xs font-medium text-muted",
							children: TRAIL_KIND_LABEL[place.trailKind]
						}) : null,
						place.trailKm ? /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
							className: "rounded-md border border-line px-3 py-1.5 text-xs font-medium text-muted",
							children: [place.trailKm, " km parkur"]
						}) : null
					]
				}) : null,
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("dl", {
					className: "mt-10 grid gap-4 sm:grid-cols-2",
					children: [
						place.hours ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Info, {
							label: "Saat",
							icon: Clock3,
							value: place.hours
						}) : null,
						place.fee ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Info, {
							label: "Ücret",
							icon: Ticket,
							value: place.fee
						}) : null,
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Info, {
							label: "Ulaşım",
							icon: Navigation,
							value: place.transport
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Info, {
							label: "Adres",
							icon: MapPin,
							value: place.address
						}),
						place.terrain ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Info, {
							label: "Zemin",
							icon: Trees,
							value: place.terrain
						}) : null,
						place.elevation ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Info, {
							label: "Yükseklik",
							icon: Trees,
							value: place.elevation
						}) : null,
						place.bestTime ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Info, {
							label: "En iyi zaman",
							icon: Clock3,
							value: place.bestTime
						}) : null
					]
				}),
				place.facilities && place.facilities.length > 0 ? /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
					className: "mt-10",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
						className: "font-display text-2xl font-medium",
						children: "Tesis ve arazi"
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("ul", {
						className: "mt-4 flex flex-wrap gap-2",
						children: place.facilities.map((f) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", {
							className: "rounded-md border border-line bg-paper px-3 py-2 text-sm text-ink",
							children: FACILITY_LABEL[f]
						}, f))
					})]
				}) : null,
				place.tips && place.tips.length > 0 ? /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
					className: "mt-10",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
						className: "font-display text-2xl font-medium",
						children: "Saha notu"
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("ul", {
						className: "mt-3 space-y-2",
						children: place.tips.map((t) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", {
							className: "border-b border-line py-2 text-sm text-muted",
							children: t
						}, t))
					})]
				}) : null,
				place.packing && place.packing.length > 0 ? /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
					className: "mt-10",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
						className: "font-display text-2xl font-medium",
						children: isTrail ? "Bu parkura özel çanta" : "Bu alana özel çanta"
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("ul", {
						className: "mt-3 grid gap-2 sm:grid-cols-2",
						children: place.packing.map((t) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", {
							className: "rounded-md border border-line bg-paper px-3 py-2 text-sm",
							children: t
						}, t))
					})]
				}) : null,
				place.rules && place.rules.length > 0 ? /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
					className: "mt-10",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
						className: "font-display text-2xl font-medium",
						children: "Kural"
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("ul", {
						className: "mt-3 space-y-2",
						children: place.rules.map((t) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", {
							className: "text-sm text-muted",
							children: t
						}, t))
					})]
				}) : null,
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("a", {
					href: maps,
					target: "_blank",
					rel: "noreferrer",
					className: "mt-10 inline-flex h-12 items-center gap-2 rounded-md bg-pine px-5 text-sm font-medium text-pine-fg",
					children: ["Haritada aç", /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ArrowUpRight, {
						className: "size-4",
						strokeWidth: 1.75
					})]
				})
			]
		}),
		onRoutes.length > 0 ? /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
			className: "mx-auto max-w-6xl px-4 pb-10 sm:px-6",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
				className: "font-display text-3xl font-medium",
				children: "Bu durak şu rotalarda"
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("ul", {
				className: "mt-5 grid gap-3 sm:grid-cols-2",
				children: onRoutes.map((r) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", { children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Link, {
					to: "/rota/$id",
					params: { id: r.id },
					className: "flex items-center justify-between gap-3 rounded-xl border border-line bg-paper px-5 py-4",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
						className: "block text-kicker font-medium tracking-[0.14em] text-muted uppercase",
						children: [
							KIND_LABEL[r.kind],
							" · ",
							r.duration
						]
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
						className: "mt-1 block font-display text-2xl font-medium",
						children: r.title
					})] }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ArrowUpRight, {
						className: "size-4 shrink-0 text-pine",
						strokeWidth: 1.75
					})]
				}) }, r.id))
			})]
		}) : null,
		related.length > 0 ? /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
			className: "mx-auto max-w-6xl px-4 pb-16 sm:px-6",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
				className: "font-display text-3xl font-medium",
				children: "Yakın duraklar"
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "mt-6 grid gap-5 sm:grid-cols-2 lg:grid-cols-3",
				children: related.map((p) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(PlaceCard, { place: p }, p.id))
			})]
		}) : null
	] });
}
function Info({ label, value, icon: Icon }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "rounded-xl border border-line bg-paper p-4",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("dt", {
			className: "flex items-center gap-2 text-kicker font-medium tracking-[0.14em] text-faint uppercase",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Icon, {
				className: "size-3.5",
				strokeWidth: 1.75
			}), label]
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("dd", {
			className: "mt-2 text-sm leading-relaxed text-ink",
			children: value
		})]
	});
}
//#endregion
export { PlacePage as component };
