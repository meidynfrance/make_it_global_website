import { defineCollection, z } from 'astro:content';

const blog = defineCollection({
  type: 'content',
  schema: z.object({
    title: z.string(),
    description: z.string(),
    publishDate: z.coerce.date(),
    updatedDate: z.coerce.date().optional(),
    category: z.enum([
      'strategie-internationale',
      'localisation-video',
      'localisation-contenu',
      'croissance-b2b',
      'guides-sectoriels',
      'seo-international',
      'outils-et-ressources',
    ]),
    tags: z.array(z.string()).min(1).max(5),
    image: z.object({
      src: z.string(),
      alt: z.string(),
    }),
    author: z.object({
      name: z.string(),
      role: z.string().optional(),
    }).default({ name: 'Make It Global', role: 'Equipe editoriale' }),
    draft: z.boolean().default(false),
    featured: z.boolean().default(false),
  }),
});

export const collections = { blog };
