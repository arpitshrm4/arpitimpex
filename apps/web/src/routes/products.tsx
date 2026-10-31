import type { Route } from './+types/products';
import { seo, absoluteUrl, siteOriginFrom } from '@/lib/seo';
import { images } from '@/data/catalogue';
import { Catalogue } from '@/components/catalogue';
import { EnquiryBanner } from '@/components/enquiry-banner';

export function meta({ matches, location }: Route.MetaArgs) {
  const origin = siteOriginFrom(matches);
  const canonicalUrl = absoluteUrl(origin, '/products');

  return seo(
    { matches, location },
    {
      title: 'Door Locks, Hinges, Bolts & Gate Hardware | Arpit Impex',
      description:
        'Browse 79 door locks, cylinders, handles, T-hinges, bolts and gate latches from Aligarh, India. Get specs and a bulk quote.',
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
              name: 'Products',
              item: canonicalUrl,
            },
          ],
        },
      ],
    }
  );
}
export default function Products(){return <main><Catalogue/><EnquiryBanner/></main>}
