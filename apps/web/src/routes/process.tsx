import type { Route } from './+types/process';
import { seo } from '@/lib/seo';
import { PageIntro } from '@/components/page-intro';
import { Process } from '@/components/home/process';
import { Faq } from '@/components/home/faq';
import { EnquiryBanner } from '@/components/enquiry-banner';
export function meta({matches,location}:Route.MetaArgs){return seo({matches,location},{title:'Sourcing & Export Process | Arpit Impex',description:'Understand the hardware sourcing process from enquiry and product options to quotation, order coordination, export documentation and shipment discussions.'})}
export default function ProcessPage(){return <main><PageIntro eyebrow="SOURCING & EXPORT PROCESS" title="Clear Steps. Considered Sourcing." text="From your first requirement to the agreed shipment arrangements, we keep the conversation practical. Product availability, quantities and trade terms are reviewed for every order."/><Process/><Faq/><EnquiryBanner/></main>}
