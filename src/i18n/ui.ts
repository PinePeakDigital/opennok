// Central UI-string dictionary. Every user-facing string in a component comes
// from here so future i18n is a data change, not a rewrite (see ESLint
// no-hardcoded-strings rule). Content prose lives in content collections.

export const languages = {
	en: "English",
} as const;

export const defaultLang: keyof typeof languages = "en";

const en = {
		"site.title": "OpenNOK",
		"site.tagline": "A free, open guide to building a next-of-kin box",
		"nav.home": "Home",
		"nav.main": "Main navigation",
		"nav.guide": "The guide",
		"nav.glossary": "Glossary",
		"nav.skip": "Skip to main content",
		"home.intro":
			"A next-of-kin box gathers the information your loved ones will need if you die or can no longer speak for yourself — kept in one place, on your own terms.",
		"home.sections": "Guide sections",
		"guide.title": "The guide",
		"guide.intro":
			"Work through these sections in any order. Each one covers what to gather and why.",
		"guide.lastReviewed": "Last reviewed",
		"glossary.title": "Glossary",
		"glossary.intro": "Plain-language definitions of the terms used in this guide.",
		"footer.disclaimer.title": "Educational information, not legal advice",
		"footer.disclaimer.body":
			"OpenNOK is a general educational guide. It is not legal, financial, medical, or tax advice, and laws vary by place. Consult a qualified professional for your situation.",
		"footer.privacy.title": "Nothing you enter leaves your device",
		"footer.privacy.body":
			"This site has no accounts and no backend. Anything you type or check off stays in your own browser. We collect no analytics.",
		"footer.license": "Content licensed CC BY 4.0. Code licensed MIT.",
} as const;

export type UiKey = keyof typeof en;

// Typed so a new locale must supply every UiKey — missing strings fail the build.
export const ui: Record<keyof typeof languages, Record<UiKey, string>> = {
	en,
};
