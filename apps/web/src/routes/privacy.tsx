import type { Route } from './+types/privacy';
import { seo } from '@/lib/seo';
import { LegalContent } from '@/components/legal-content';
export function meta({matches,location}:Route.MetaArgs){return seo({matches,location},{title:'Privacy Policy | Arpit Impex',description:'Read the commercial enquiry privacy policy for Arpit Impex, detailing how quotation request information is handled for B2B architectural hardware buyers.'})}
export default function Privacy(){return <main><LegalContent privacy/></main>}
