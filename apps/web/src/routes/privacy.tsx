import type { Route } from './+types/privacy';
import { seo } from '@/lib/seo';
import { LegalContent } from '@/components/legal-content';
export function meta({matches,location}:Route.MetaArgs){return seo({matches,location},{title:'Privacy Policy | Arpit Impex',description:'Read the current enquiry privacy information for Arpit Impex, including the inactive form status and the contact details awaiting business configuration.'})}
export default function Privacy(){return <main><LegalContent privacy/></main>}
