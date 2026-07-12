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
		"nav.quickStart": "Quick start",
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
		"disclaimer.title": "Educational information, not legal advice",
		"disclaimer.body":
			"OpenNOK is a general educational guide. It is not legal, financial, medical, or tax advice. Laws vary by place, and legal documents like wills and directives must be prepared for your own jurisdiction. Consult a qualified professional for your situation.",
		"privacy.title": "Nothing you enter leaves your device",
		"privacy.body":
			"This site has no accounts, no backend, and no tracking. Anything you type or check off stays in your own browser and is never sent anywhere — we never see it.",
		"footer.nav": "Footer navigation",
		"footer.reportError": "Report an error",
		"footer.license": "Content licensed CC BY 4.0. Code licensed MIT.",
} as const;

export type UiKey = keyof typeof en;

// Typed so a new locale must supply every UiKey — missing strings fail the build.
export const ui: Record<keyof typeof languages, Record<UiKey, string>> = {
	en,
};
