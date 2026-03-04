import rss from '@astrojs/rss';
import { getCollection } from 'astro:content';
import { SITE_NAME } from '../config';
import type { APIContext } from 'astro';

export async function GET(context: APIContext) {
  const posts = await getCollection('blog', ({ data }) => !data.draft);

  return rss({
    title: `${SITE_NAME} - Blog`,
    description: 'Conseils et strategies pour internationaliser vos contenus et developper votre entreprise a l\'international.',
    site: context.site!,
    items: posts
      .sort((a, b) => b.data.publishDate.valueOf() - a.data.publishDate.valueOf())
      .map((post) => ({
        title: post.data.title,
        pubDate: post.data.publishDate,
        description: post.data.description,
        link: `/blog/${post.slug}/`,
      })),
  });
}
