import type { CollectionEntry } from 'astro:content';

/**
 * Calculate reading time for French text (~200 words/min)
 */
export function getReadingTime(content: string): number {
  const words = content.trim().split(/\s+/).length;
  return Math.max(1, Math.ceil(words / 200));
}

/**
 * Format a date in French locale
 */
export function formatDate(date: Date): string {
  return new Intl.DateTimeFormat('fr-FR', {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  }).format(date);
}

/**
 * Get related posts based on same category and shared tags
 */
export function getRelatedPosts(
  currentPost: CollectionEntry<'blog'>,
  allPosts: CollectionEntry<'blog'>[],
  limit = 3
): CollectionEntry<'blog'>[] {
  const scored = allPosts
    .filter((post) => post.slug !== currentPost.slug && !post.data.draft)
    .map((post) => {
      let score = 0;
      if (post.data.category === currentPost.data.category) score += 3;
      const sharedTags = post.data.tags.filter((tag) =>
        currentPost.data.tags.includes(tag)
      );
      score += sharedTags.length;
      return { post, score };
    })
    .filter(({ score }) => score > 0)
    .sort((a, b) => b.score - a.score);

  return scored.slice(0, limit).map(({ post }) => post);
}

/**
 * Sort posts by publish date (newest first)
 */
export function sortPostsByDate(posts: CollectionEntry<'blog'>[]): CollectionEntry<'blog'>[] {
  return posts.sort((a, b) => b.data.publishDate.valueOf() - a.data.publishDate.valueOf());
}

/**
 * Filter out draft posts in production
 */
export function filterPublishedPosts(posts: CollectionEntry<'blog'>[]): CollectionEntry<'blog'>[] {
  return import.meta.env.PROD
    ? posts.filter((post) => !post.data.draft)
    : posts;
}
