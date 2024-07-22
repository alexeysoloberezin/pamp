import {Pages, AppPages} from "../model/Navigation";

export function generateBreadcrumbsJSONLD(pages: AppPages) {
  let position = 1;
  const itemListElement = [];

  pages.forEach(page => {
    if ('url' in page) {
      itemListElement.push({
        '@type': 'ListItem',
        'position': position++,
        'name': page.title,
        'item': page.url,
      });
    }

    if ('children' in page) {
      page.children.forEach(child => {
        itemListElement.push({
          '@type': 'ListItem',
          'position': position++,
          'name': child.title,
          'item': child.url,
        });
      });
    }
  });

  return {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement
  };
}
export function generateFAQJSONLD(faqItems) {
  if(!faqItems) return faqItems

  const mainEntity = faqItems.map?.(({title, lines}) => ({
    '@type': 'Question',
    'name': title,
    'acceptedAnswer': {
      '@type': 'Answer',
      'text': lines.join('\n'),
    },
  }));
  const json = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity,
  };
  return {
    type: "application/ld+json",
    json,
    hid: "ld+json/faq",
  }
}

export const createJsonLd = (structuredData: {name: string,path: string}[] = []) => {
  let items: any[] = [
    {
      name: "Pampadu",
      path: ""
    },
    ...structuredData
  ]

  items = items.map((item,index) => ({
    "name": item.name,
    "item": `https://pampadu.ru/${item.path ? item.path + '/' : ''}`,
    "@type": "ListItem",
    "position": index + 1,
  }))

  return {
    type: "application/ld+json",
    json: {
      '@context': 'https://schema.org',
      '@type': 'BreadcrumbList',
      'itemListElement': items,
    },
    hid: "ld+json",
  }
}
