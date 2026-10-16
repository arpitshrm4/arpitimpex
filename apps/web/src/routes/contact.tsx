import type { Route } from './+types/contact';
import { seo } from '@/lib/seo';
import { EnquiryForm } from '@/components/contact/enquiry-form';
export function meta({matches,location}:Route.MetaArgs){return seo({matches,location},{title:'Contact & Request a Quote | Arpit Impex',description:'Prepare your hardware sourcing enquiry with product requirements, estimated quantity and destination country. Business contact details are awaiting setup.'})}
export default function Contact(){return <main><EnquiryForm/></main>}
