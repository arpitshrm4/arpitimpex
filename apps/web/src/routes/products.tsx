import type { Route } from './+types/products';
import { seo } from '@/lib/seo';
import { images } from '@/data/catalogue';
import { Catalogue } from '@/components/catalogue';
import { EnquiryBanner } from '@/components/enquiry-banner';
export function meta({ matches, location }: Route.MetaArgs) {
  return seo(
    { matches, location },
    {
      title: 'Architectural Door Hardware Catalogue | Arpit Impex India',
      description:
        'Explore door locks, mortise lock bodies, euro profile cylinders, handles and architectural door hardware from Arpit Impex in Aligarh, India. Enquire about bulk supply, specifications and export orders.',
      image: images.hero,
    }
  );
}
export default function Products(){return <main><Catalogue/><EnquiryBanner/></main>}
