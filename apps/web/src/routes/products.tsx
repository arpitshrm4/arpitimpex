import type { Route } from './+types/products';
import { seo } from '@/lib/seo';
import { images } from '@/data/catalogue';
import { Catalogue } from '@/components/catalogue';
import { EnquiryBanner } from '@/components/enquiry-banner';
export function meta({matches,location}:Route.MetaArgs){return seo({matches,location},{title:'Hardware Product Catalogue | Arpit Impex',description:'Explore representative mortise locks, padlocks, door handles, stainless steel hinges and architectural fittings for bulk hardware sourcing from India.',image:images.hero})}
export default function Products(){return <main><Catalogue/><EnquiryBanner/></main>}
