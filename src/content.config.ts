import { defineCollection, z } from 'astro:content';
import { glob } from 'astro/loaders';

const lessons = defineCollection({
  loader: glob({ pattern: '**/*.{md,mdx}', base: './src/content/lessons' }),
  schema: z.object({
    title: z.string(),
    level: z.number(),
    lesson: z.string(),
    track: z.string(),
    // Read time is computed from the MDX body by src/lib/reading-time.ts into
    // `minutesRead` — there is no `time` frontmatter field.
    // Bare minutes (15) or a short string ("15 min"); normalized in the layout.
    practice_time: z.union([z.number(), z.string()]).optional(),
    // Capstone-only: verbatim pill label for multi-hour projects with no
    // meaningful read time (e.g. "Project · several hours").
    time_label: z.string().optional(),
    last_verified: z.coerce.date(),
    download: z.string().optional(),
    practice_note: z.string().optional(),
    // Optional enrichment fields — not required on existing lessons.
    summary: z.string().optional(),
    kind: z.enum(['concept', 'exercise', 'project']).optional(),
    beforeYouLeave: z.array(z.string()).optional(),
  }),
});

export const collections = { lessons };
