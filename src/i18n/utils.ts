import { ui, defaultLang, type UiKey } from "./ui";

// Returns a translator bound to a language, falling back to the default.
export function useTranslations(lang: keyof typeof ui = defaultLang) {
	return function t(key: UiKey): string {
		return ui[lang][key] ?? ui[defaultLang][key];
	};
}
