import { i as __toESM } from "../_runtime.mjs";
import { b as require_jsx_runtime, z as require_react } from "../_libs/@tanstack/react-router+[...].mjs";
import { m as Check } from "../_libs/lucide-react.mjs";
import { i as cn } from "./router-Cc1I8GZy.mjs";
import { n as create, t as persist } from "../_libs/zustand.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/packing-list-gHk1Gu3e.js
var import_react = /* @__PURE__ */ __toESM(require_react());
var import_jsx_runtime = require_jsx_runtime();
var usePacking = create()(persist((set, get) => ({
	checked: [],
	toggle: (item) => set((s) => ({ checked: s.checked.includes(item) ? s.checked.filter((x) => x !== item) : [...s.checked, item] })),
	reset: () => set({ checked: [] }),
	has: (item) => get().checked.includes(item)
}), { name: "istanbul-atlas-pack" }));
function PackingList({ items, title = "Çanta" }) {
	const [mounted, setMounted] = (0, import_react.useState)(false);
	const checked = usePacking((s) => s.checked);
	const toggle = usePacking((s) => s.toggle);
	const reset = usePacking((s) => s.reset);
	(0, import_react.useEffect)(() => {
		setMounted(true);
	}, []);
	const done = mounted ? items.filter((i) => checked.includes(i)).length : 0;
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
		className: "rounded-xl border border-line bg-paper p-5 sm:p-6",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "flex items-end justify-between gap-3",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
				className: "font-display text-2xl font-medium",
				children: title
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "mt-1 text-sm text-faint",
				children: mounted ? `${done} / ${items.length} hazır` : "Liste yükleniyor"
			})] }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
				type: "button",
				onClick: reset,
				className: "h-11 px-3 text-sm font-medium text-muted hover:text-ink",
				children: "Sıfırla"
			})]
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("ul", {
			className: "mt-4 grid gap-2 sm:grid-cols-2",
			children: items.map((item) => {
				const on = mounted && checked.includes(item);
				return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", { children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
					type: "button",
					onClick: () => toggle(item),
					className: cn("flex min-h-12 w-full items-center gap-3 rounded-md border px-3 py-2 text-left text-sm transition-colors duration-150", on ? "border-pine bg-paper text-ink" : "border-line bg-canvas text-muted hover:border-line-strong"),
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
						className: cn("inline-flex size-5 shrink-0 items-center justify-center rounded-xs border", on ? "border-pine bg-pine text-pine-fg" : "border-line-strong bg-paper"),
						children: on ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Check, {
							className: "size-3",
							strokeWidth: 2.5
						}) : null
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
						className: cn(on && "line-through opacity-70"),
						children: item
					})]
				}) }, item);
			})
		})]
	});
}
//#endregion
export { PackingList as t };
