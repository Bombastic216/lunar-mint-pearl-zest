import { i as __toESM } from "../_runtime.mjs";
import { a as getPlace, c as seasonForMonth, d as weekendTrails, i as featuredTrails, l as todayPick, r as byCategory, s as searchPlaces, t as PLACES, u as weekendCamps } from "./places-DPUE4OFc.mjs";
import { b as require_jsx_runtime, v as Link, z as require_react } from "../_libs/@tanstack/react-router+[...].mjs";
import { _ as ArrowRight, f as Compass } from "../_libs/lucide-react.mjs";
import { a as PlaceCard, s as SEASON_LABEL } from "./place-card-Bg5vq7Hn.mjs";
import { t as SearchField } from "./search-field-CwX7BE2n.mjs";
import { n as KIND_LABEL, r as featuredItineraries } from "./itineraries-UJKsAyMb.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/routes-D-SnwLV-.js
var import_react = /* @__PURE__ */ __toESM(require_react());
var import_jsx_runtime = require_jsx_runtime();
var FALLBACK = PLACES[0];
function Home() {
	const [q, setQ] = (0, import_react.useState)("");
	const [pick, setPick] = (0, import_react.useState)(FALLBACK);
	const [weekend, setWeekend] = (0, import_react.useState)([]);
	const [trails, setTrails] = (0, import_react.useState)(featuredTrails(3));
	const [seasonLabel, setSeasonLabel] = (0, import_react.useState)(SEASON_LABEL["dort-mevsim"]);
	const results = (0, import_react.useMemo)(() => searchPlaces(q), [q]);
	const museums = byCategory("muze").slice(0, 3);
	const historic = byCategory("tarihi").slice(0, 3);
	const unesco = [
		"unesco-gobeklitepe",
		"unesco-ephesus",
		"unesco-goreme"
	].map((id) => getPlace(id)).filter((p) => p != null);
	const routes = featuredItineraries(3);
	(0, import_react.useEffect)(() => {
		setPick(todayPick());
		setWeekend(weekendCamps());
		setTrails(weekendTrails(/* @__PURE__ */ new Date(), 3));
		setSeasonLabel(SEASON_LABEL[seasonForMonth((/* @__PURE__ */ new Date()).getMonth())]);
	}, []);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("main", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
		className: "relative h-96 overflow-hidden sm:h-125",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
				src: "/images/hero-city.jpg",
				alt: "",
				className: "absolute inset-0 size-full object-cover"
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "absolute inset-0 bg-ink/45" }),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "relative mx-auto flex h-full max-w-6xl flex-col justify-end px-4 py-10 sm:px-6 sm:py-14",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "text-kicker font-medium tracking-[0.22em] text-pine-fg/80 uppercase",
						children: "Şehir rehberi · parkur defteri"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h1", {
						className: "mt-3 max-w-xl font-display text-display font-medium tracking-tight text-pine-fg",
						children: "Taşın, suyun ve ormanın İstanbul’u"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "mt-4 max-w-lg text-lead text-pine-fg/85",
						children: "Müzeler, tarihi mekanlar, UNESCO; kamp ve İstanbul’un yürüyüş parkurları — bentler, Aydos, adalar, Karadeniz falez."
					})
				]
			})
		]
	}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "mx-auto max-w-6xl px-4 py-10 sm:px-6 sm:py-14",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SearchField, {
			value: q,
			onChange: setQ
		}), q.trim() ? /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
			className: "mt-8",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("h2", {
					className: "font-display text-3xl font-medium",
					children: [results.length, " sonuç"]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "mt-6 grid gap-5 sm:grid-cols-2 lg:grid-cols-3",
					children: results.map((p) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(PlaceCard, { place: p }, p.id))
				}),
				results.length === 0 ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "mt-6 text-muted",
					children: "Bu aramayla eşleşen yer yok. Mahalle, parkur veya mevsim deneyin."
				}) : null
			]
		}) : /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
				className: "mt-10 rounded-xl border border-line bg-paper p-5 sm:p-7",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "text-kicker font-medium tracking-[0.18em] text-muted uppercase",
					children: "Bugünün rotası"
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "mt-3 flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
						className: "font-display text-3xl font-medium tracking-tight",
						children: pick.name
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "mt-2 max-w-xl text-muted",
						children: pick.summary
					})] }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Link, {
						to: "/yer/$id",
						params: { id: pick.id },
						className: "inline-flex h-12 items-center justify-center gap-2 rounded-md bg-pine px-5 text-sm font-medium text-pine-fg",
						children: ["Rotayı aç", /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ArrowRight, {
							className: "size-4",
							strokeWidth: 1.75
						})]
					})]
				})]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
				className: "mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-3",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(CategoryTile, {
						to: "/muzeler",
						image: "/images/museum-interior.jpg",
						kicker: `${byCategory("muze").length} durak`,
						title: "Müzeler",
						copy: "Saray, arkeoloji, çağdaş salonlar."
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(CategoryTile, {
						to: "/tarihi",
						image: "/images/historic-street.jpg",
						kicker: `${byCategory("tarihi").length} durak`,
						title: "Tarihi mekanlar",
						copy: "Cami, sur, çarşı, mahalle."
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(CategoryTile, {
						to: "/unesco",
						image: "/images/unesco-ephesus.jpg",
						kicker: `${byCategory("unesco").length} alan`,
						title: "UNESCO",
						copy: "Türkiye'nin dünya mirası listesi."
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(CategoryTile, {
						to: "/yuruyus",
						image: "/images/trek-belgrad.jpg",
						kicker: `${byCategory("yuruyus").length} parkur`,
						title: "Yürüyüş",
						copy: "Bentler, Aydos, ada, falez."
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(CategoryTile, {
						to: "/kamp",
						image: "/images/camp-summer.jpg",
						kicker: `${byCategory("kamp").length} alan`,
						title: "Kamp",
						copy: "Yazlık, kışlık, dört mevsim."
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(CategoryTile, {
						to: "/rotalar",
						image: "/images/trek-yusa.jpg",
						kicker: "Hazır gün",
						title: "Rotalar",
						copy: "Şehir, parkur ve kamp hafta sonu."
					})
				]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SectionHead, {
				title: "Bu hafta sonu parkur",
				to: "/yuruyus",
				action: "Tüm parkurlar"
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "mt-6 grid gap-5 lg:grid-cols-3",
				children: trails.map((p) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(PlaceCard, { place: p }, p.id))
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SectionHead, {
				title: "Hazır güzergah",
				to: "/rotalar",
				action: "Tüm rotalar"
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "mt-6 grid gap-5 lg:grid-cols-3",
				children: routes.map((r) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Link, {
					to: "/rota/$id",
					params: { id: r.id },
					className: "group overflow-hidden rounded-xl border border-line bg-paper",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "relative h-40 overflow-hidden",
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
							src: r.image,
							alt: "",
							className: "size-full object-cover transition-transform duration-500 group-hover:scale-105"
						})
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "p-5",
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
								className: "mt-1 font-display text-2xl font-medium",
								children: r.title
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "mt-1 text-sm text-muted",
								children: r.summary
							})
						]
					})]
				}, r.id))
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "mt-14 flex items-end justify-between gap-4",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("h2", {
					className: "font-display text-3xl font-medium tracking-tight",
					children: ["Kamp · ", seasonLabel]
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
					to: "/kamp",
					className: "text-sm font-medium text-pine hover:underline",
					children: "Kamp rehberi"
				})]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "mt-6 grid gap-5 lg:grid-cols-3",
				children: weekend.map((p) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(PlaceCard, { place: p }, p.id))
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SectionHead, {
				title: "Yarımada ve Pera",
				to: "/muzeler",
				action: "Tüm müzeler"
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "mt-6 grid gap-5 lg:grid-cols-3",
				children: museums.map((p) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(PlaceCard, { place: p }, p.id))
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SectionHead, {
				title: "Şehrin taşları",
				to: "/tarihi",
				action: "Tüm tarihi yerler"
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "mt-6 grid gap-5 lg:grid-cols-3",
				children: historic.map((p) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(PlaceCard, { place: p }, p.id))
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SectionHead, {
				title: "UNESCO kültür mirası",
				to: "/unesco",
				action: "22 alanı gör"
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "mt-6 grid gap-5 lg:grid-cols-3",
				children: unesco.map((p) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(PlaceCard, { place: p }, p.id))
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
				className: "mt-14 flex items-center gap-2 text-sm text-faint",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Compass, {
						className: "size-4",
						strokeWidth: 1.75
					}),
					PLACES.length,
					" kayıtlı durak. Saat, vapur ve ücretler değişir; resmi kaynağı teyit edin."
				]
			})
		] })]
	})] });
}
function CategoryTile({ to, image, kicker, title, copy }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Link, {
		to,
		className: "group overflow-hidden rounded-xl border border-line bg-paper",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
			className: "relative h-40 overflow-hidden",
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
				src: image,
				alt: "",
				className: "size-full object-cover transition-transform duration-500 group-hover:scale-105"
			})
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "p-5",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "text-kicker font-medium tracking-[0.18em] text-muted uppercase",
					children: kicker
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
					className: "mt-1 font-display text-2xl font-medium",
					children: title
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "mt-1 text-sm text-muted",
					children: copy
				})
			]
		})]
	});
}
function SectionHead({ title, to, action }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "mt-14 flex items-end justify-between gap-4",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
			className: "font-display text-3xl font-medium tracking-tight",
			children: title
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
			to,
			className: "text-sm font-medium text-pine hover:underline",
			children: action
		})]
	});
}
//#endregion
export { Home as component };
