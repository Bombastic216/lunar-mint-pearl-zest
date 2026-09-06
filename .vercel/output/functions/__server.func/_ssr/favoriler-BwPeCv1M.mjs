import { i as __toESM } from "../_runtime.mjs";
import { a as getPlace } from "./places-DPUE4OFc.mjs";
import { b as require_jsx_runtime, v as Link, z as require_react } from "../_libs/@tanstack/react-router+[...].mjs";
import { a as PlaceCard, d as useFavorites } from "./place-card-Bg5vq7Hn.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/favoriler-BwPeCv1M.js
var import_react = /* @__PURE__ */ __toESM(require_react());
var import_jsx_runtime = require_jsx_runtime();
function FavPage() {
	const ids = useFavorites((s) => s.ids);
	const [mounted, setMounted] = (0, import_react.useState)(false);
	(0, import_react.useEffect)(() => {
		setMounted(true);
	}, []);
	const places = mounted ? ids.map((id) => getPlace(id)).filter((p) => p != null) : [];
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("main", {
		className: "mx-auto max-w-6xl px-4 py-8 sm:px-6 sm:py-12",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "text-kicker font-medium tracking-[0.18em] text-muted uppercase",
				children: "Defter"
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h1", {
				className: "mt-2 font-display text-display font-medium tracking-tight",
				children: "Kayıtlar"
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "mt-3 max-w-xl text-muted",
				children: "Bu cihazdaki yer imleri. Hesap yok; tarayıcı hafızasında durur."
			}),
			places.length === 0 ? /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "mt-10 rounded-xl border border-line bg-paper p-8",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "text-muted",
					children: mounted ? "Henüz kayıt yok. Bir karttaki yer imine dokunun." : "Kayıtlar yükleniyor."
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
					to: "/",
					className: "mt-6 inline-flex h-12 items-center rounded-md bg-pine px-5 text-sm font-medium text-pine-fg",
					children: "Rehbere dön"
				})]
			}) : /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "mt-8 grid gap-5 sm:grid-cols-2 lg:grid-cols-3",
				children: places.map((p) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(PlaceCard, { place: p }, p.id))
			})
		]
	});
}
//#endregion
export { FavPage as component };
