import { ui, defaultLang, type UiKey } from "./ui";

// Returns a translator bound to a language. Every locale is typed to supply the
// full key set (see ui.ts), so lookups are always defined.
export function useTranslations(lang: keyof typeof ui = defaultLang) {
	return function t(key: UiKey): string {
		return ui[lang][key];
	};
}
