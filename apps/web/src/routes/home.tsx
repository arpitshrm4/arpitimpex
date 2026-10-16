import type { Route } from './+types/home';
import { seo } from '@/lib/seo';
import { images } from '@/data/catalogue';
import { Hero } from '@/components/home/hero';
import { Categories } from '@/components/home/categories';
import { WhyUs } from '@/components/home/why-us';
import { Process } from '@/components/home/process';
import { Featured } from '@/components/home/featured';
import { EnquiryBanner } from '@/components/enquiry-banner';
import { About } from '@/components/home/about';
import { Faq } from '@/components/home/faq';
import { FinalCta } from '@/components/home/final-cta';
export function meta({matches,location}:Route.MetaArgs){return seo({matches,location},{title:'Arpit Impex | Hardware Sourcing & Export from India',description:'Source locks, door handles, hinges and architectural hardware from India. Arpit Impex helps international buyers explore sourcing and export options.',image:images.hero,jsonLd:{'@context':'https://schema.org','@type':'Organization',name:'Arpit Impex',description:'India-based hardware export and sourcing business.'}})}
export default function HomePage(){return <main><Hero/><Categories/><WhyUs/><Process/><Featured/><EnquiryBanner/><About/><Faq/><FinalCta/></main>}
