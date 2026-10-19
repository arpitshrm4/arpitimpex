import type { Route } from './+types/brochure';
import { seo, absoluteUrl, siteOriginFrom } from '@/lib/seo';
import { images, products, companyInfo } from '@/data/catalogue';
import { BrochurePage } from '@/components/brochure/brochure-page';

export function meta({ matches, location }: Route.MetaArgs) {
  const origin = siteOriginFrom(matches);
  const canonicalUrl = absoluteUrl(origin, '/brochure');

  return seo(
    { matches, location },
    {
      title: 'Arpit Impex | Architectural Door Hardware Product Brochure & Export Catalog',
      description:
        'Arpit Impex offers comprehensive architectural door hardware including locks, handles, cylinders, and mortise bodies. Explore our complete B2B product catalog with detailed specifications.',
      image: images.hero,
      jsonLd: [
        {
          '@context': 'https://schema.org',
          '@type': 'BreadcrumbList',
          itemListElement: [
            {
              '@type': 'ListItem',
              position: 1,
              name: 'Home',
              item: absoluteUrl(origin, '/'),
            },
            {
              '@type': 'ListItem',
              position: 2,
              name: 'Brochure',
              item: canonicalUrl,
            },
          ],
        },
        {
          '@context': 'https://schema.org',
          '@type': 'ItemList',
          name: 'Arpit Impex Architectural Hardware Product Brochure',
          description:
            'Catalog of architectural door locks, rim locks, mortise bodies, cylinders, and door handles from Aligarh, India.',
          url: canonicalUrl,
          numberOfItems: products.length,
          itemListElement: products.map((product, idx) => ({
            '@type': 'ListItem',
            position: idx + 1,
            name: product.name,
            url: absoluteUrl(origin, `/products/${product.slug}`),
            image: absoluteUrl(origin, product.image),
          })),
        },
      ],
    }
  );
}

export default function BrochureRoute() {
  return (
    <main className="brochure-main">
      <BrochurePage />
    </main>
  );
}
