import { b as require_jsx_runtime } from "../_libs/@tanstack/react-router+[...].mjs";
import { o as Search } from "../_libs/lucide-react.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/search-field-CwX7BE2n.js
var import_jsx_runtime = require_jsx_runtime();
function SearchField({ value, onChange, placeholder = "Müze, mahalle, kamp ara" }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("label", {
		className: "relative block",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
				className: "sr-only",
				children: "Ara"
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Search, {
				className: "pointer-events-none absolute top-1/2 left-3.5 size-4 -translate-y-1/2 text-faint",
				strokeWidth: 1.75
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
				value,
				onChange: (e) => onChange(e.target.value),
				placeholder,
				className: "h-12 w-full rounded-lg border border-line bg-paper pr-4 pl-11 text-base text-ink outline-none placeholder:text-faint focus:border-pine"
			})
		]
	});
}
//#endregion
export { SearchField as t };
