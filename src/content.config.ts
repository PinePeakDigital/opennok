import { defineCollection, z } from "astro:content";
import { glob } from "astro/loaders";

// Guide sections — the core walkthrough content. i18n later = per-locale glob.
const guide = defineCollection({
	loader: glob({ pattern: "**/*.{md,mdx}", base: "./src/content/guide" }),
	schema: z.object({
		title: z.string(),
		description: z.string(),
		order: z.number().default(999),
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
	schema: z.object({
		title: z.string(),
		description: z.string(),
		order: z.number().default(999),
	}),
});

export const collections = { guide, glossary, templates };
