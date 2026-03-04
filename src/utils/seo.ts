import { SITE_NAME, SITE_URL } from '../config';

interface ArticleJsonLdParams {
  title: string;
  description: string;
  publishDate: Date;
  updatedDate?: Date;
  image: string;
  url: string;
  authorName: string;
}

export function generateArticleJsonLd(params: ArticleJsonLdParams): string {
  const data = {
    '@context': 'https://schema.org',
    '@type': 'Article',
    headline: params.title,
    description: params.description,
    image: params.image.startsWith('http') ? params.image : `${SITE_URL}${params.image}`,
    datePublished: params.publishDate.toISOString(),
    dateModified: (params.updatedDate || params.publishDate).toISOString(),
    author: {
      '@type': 'Organization',
      name: params.authorName,
    },
    publisher: {
      '@type': 'Organization',
      name: SITE_NAME,
      url: SITE_URL,
    },
    mainEntityOfPage: {
      '@type': 'WebPage',
      '@id': params.url,
    },
  };
  return JSON.stringify(data);
}

interface BreadcrumbItem {
  name: string;
  url: string;
}

export function generateBreadcrumbJsonLd(items: BreadcrumbItem[]): string {
  const data = {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: items.map((item, index) => ({
      '@type': 'ListItem',
      position: index + 1,
      name: item.name,
      item: item.url.startsWith('http') ? item.url : `${SITE_URL}${item.url}`,
    })),
  };
  return JSON.stringify(data);
}
