import { defineCollection, z } from 'astro:content';

const blog = defineCollection({
  type: 'content',
  schema: z.object({
    title: z.string(),
    description: z.string(),
    publishDate: z.coerce.date(),
    updatedDate: z.coerce.date().optional(),
    // Dual-taxonomy: ia (new default) vs localisation (historic)
    section: z.enum(['ia', 'localisation']).default('localisation'),
    category: z.enum([
      // Localisation (historique)
      'strategie-internationale',
      'localisation-video',
      'localisation-contenu',
      'croissance-b2b',
      'guides-sectoriels',
      'seo-international',
      'outils-et-ressources',
      // IA (nouveau)
      'implementation-ia',
      'outils-metier',
      'agents-ia',
      'automatisation',
      'seo-ia',
      'retours-experience',
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

const caseStudies = defineCollection({
  type: 'content',
  schema: z.object({
    title: z.string(),
    client: z.string(),
    sector: z.string(),
    description: z.string(),
    publishDate: z.coerce.date(),
    service: z.enum([
      'implementation-ia',
      'outils-metier',
      'saas-agents-ia',
      'automatisations',
      'seo-automatise',
    ]),
    metrics: z.array(z.object({
      value: z.string(),
      label: z.string(),
    })).min(1).max(4),
    image: z.object({
      src: z.string(),
      alt: z.string(),
    }).optional(),
    featured: z.boolean().default(false),
    draft: z.boolean().default(false),
  }),
});

export const collections = { blog, caseStudies };
