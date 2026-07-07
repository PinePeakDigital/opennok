## Development

When starting the dev server, use background mode:

```
astro dev --background
```

Manage the background server with `astro dev stop`, `astro dev status`, and `astro dev logs`.

## Linting & CI

`pnpm lint` runs ESLint (flat config in `eslint.config.js`); CI (`.github/workflows/ci.yml`)
runs lint + build + a11y (pa11y-ci, WCAG2AA) + link check (linkinator) on every PR.

The `i18next/no-literal-string` rule guards the i18n discipline — user-facing copy
belongs in `src/i18n/ui.ts` (via `t()`) or content collections, never a bare string in
a component. It runs in `jsx-text-only` mode:

- **Caught:** visible text in `.astro`/JSX template bodies.
- **Known gap:** strings in *attributes* (e.g. `aria-label="..."`) and bare TS
  assignments are not flagged — this keeps false positives near zero (import paths,
  class names, object keys). Route attribute copy through `t()` by convention.

The a11y URL list lives in `.pa11yci.json` and is maintained by hand; switch it to
`--sitemap` once the sitemap (issue #10) exists.

## Project structure

Static Astro site. No backend, no data storage — anything a user enters stays
in their browser. Guide content lives in content collections (not hardcoded in
components) so future i18n is a routing change, not a rewrite.

```
src/
  content.config.ts     Content collection schemas (guide, glossary, templates)
  content/
    guide/              Guide sections (Markdown/MDX) — the core walkthrough
    glossary/           One entry per term; body is the definition
    templates/          Printable checklists/forms
  i18n/
    ui.ts               Central UI-string dictionary (no hardcoded strings in components)
    utils.ts            useTranslations(lang) -> t(key)
  layouts/Layout.astro  Base layout: header/footer + named "disclaimer" slot
  components/           Header, Footer, and shared UI
  styles/global.css     Design tokens, type scale, light/dark, focus, reduced-motion
  pages/                Routes
```

## Documentation

Full documentation: https://docs.astro.build

Consult these guides before working on related tasks:

- [Adding pages, dynamic routes, or middleware](https://docs.astro.build/en/guides/routing/)
- [Working with Astro components](https://docs.astro.build/en/basics/astro-components/)
- [Using React, Vue, Svelte, or other framework components](https://docs.astro.build/en/guides/framework-components/)
- [Adding or managing content](https://docs.astro.build/en/guides/content-collections/)
- [Adding styles or using Tailwind](https://docs.astro.build/en/guides/styling/)
- [Supporting multiple languages](https://docs.astro.build/en/guides/internationalization/)
