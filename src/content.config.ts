import { defineCollection, z } from "astro:content";
import { glob } from "astro/loaders";

// Fields shared by any ordered, titled page-like collection.
const pageMeta = {
	title: z.string(),
	description: z.string(),
	order: z.number().default(999),
};

// Guide sections — the core walkthrough content. i18n later = per-locale glob.
const guide = defineCollection({
	loader: glob({ pattern: "**/*.{md,mdx}", base: "./src/content/guide" }),
	schema: z.object({
		...pageMeta,
		lastReviewed: z.coerce.date().optional(),
		draft: z.boolean().default(false),
	}),
});

// Glossary — one entry per term; the body is the definition.
const glossary = defineCollection({
	loader: glob({ pattern: "**/*.{md,mdx}", base: "./src/content/glossary" }),
	schema: z.object({
		term: z.string(),
		aliases: z.array(z.string()).default([]),
	}),
});

// Printable templates — checklists and forms rendered to print-friendly pages.
const templates = defineCollection({
	loader: glob({ pattern: "**/*.{md,mdx}", base: "./src/content/templates" }),
	schema: z.object({ ...pageMeta }),
});

export const collections = { guide, glossary, templates };
