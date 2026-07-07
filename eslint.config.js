import eslint from "@eslint/js";
import tseslint from "typescript-eslint";
import astro from "eslint-plugin-astro";
import i18next from "eslint-plugin-i18next";

// Guards the i18n discipline: user-facing copy must go through t()/content
// collections, never a bare string literal in a component. jsx-text-only mode
// catches the common case — visible text in .astro/JSX template bodies — while
// ignoring attribute values and bare TS assignments (import paths, class names,
// keys) to keep false positives near zero. Known gap: a hardcoded string in an
// attribute (e.g. aria-label="...") slips through. See AGENTS.md.
export default tseslint.config(
	{ ignores: ["dist/", ".astro/", "node_modules/"] },
	eslint.configs.recommended,
	tseslint.configs.recommended,
	astro.configs.recommended,
	{
		// no-literal-string only on real TS/component code, not the dictionary
		// itself (ui.ts IS the allowed home for literal copy) or config.
		files: ["src/**/*.{ts,astro}"],
		ignores: ["src/i18n/ui.ts"],
		plugins: { i18next },
		rules: {
			"i18next/no-literal-string": [
				"warn",
				{
					mode: "jsx-text-only",
					"should-validate-template": false,
				},
			],
		},
	},
);
