import type { Route } from './+types/products';
import { seo } from '@/lib/seo';
import { images } from '@/data/catalogue';
import { Catalogue } from '@/components/catalogue';
import { EnquiryBanner } from '@/components/enquiry-banner';
export function meta({ matches, location }: Route.MetaArgs) {
  return seo(
    { matches, location },
    {
      title: 'Door Locks, Hinges, Bolts & Gate Hardware | Arpit Impex',
      description:
        'Browse 79 door locks, cylinders, handles, T-hinges, bolts and gate latches from Aligarh, India. Get specs and a bulk quote.',
      image: images.hero,
    }
  );
}
export default function Products(){return <main><Catalogue/><EnquiryBanner/></main>}
