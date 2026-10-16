import type { Route } from './+types/products';
import { seo } from '@/lib/seo';
import { images } from '@/data/catalogue';
import { Catalogue } from '@/components/catalogue';
import { EnquiryBanner } from '@/components/enquiry-banner';
export function meta({ matches, location }: Route.MetaArgs) {
  return seo(
    { matches, location },
    {
      title: 'Door Locks, Lock Bodies & Door Handles | Arpit Impex',
      description:
        'Explore architectural door locks, mortise lock bodies, cylinders and handles for B2B supply from India. Request model specifications and a bulk quotation.',
      image: images.hero,
    }
  );
}
export default function Products(){return <main><Catalogue/><EnquiryBanner/></main>}
