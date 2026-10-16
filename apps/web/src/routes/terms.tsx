import type { Route } from './+types/terms';
import { seo } from '@/lib/seo';
import { LegalContent } from '@/components/legal-content';
export function meta({matches,location}:Route.MetaArgs){return seo({matches,location},{title:'Terms & Conditions | Arpit Impex',description:'Understand Arpit Impex’s illustrative catalogue, sourcing role and quotation requirements. Products, availability and trade terms need separate confirmation.'})}
export default function Terms(){return <main><LegalContent privacy={false}/></main>}
