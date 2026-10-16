import type { Route } from './+types/about';
import { seo } from '@/lib/seo';
import { images } from '@/data/catalogue';
import { PageIntro } from '@/components/page-intro';
import { About } from '@/components/home/about';
import { WhyUs } from '@/components/home/why-us';
import { EnquiryBanner } from '@/components/enquiry-banner';
export function meta({matches,location}:Route.MetaArgs){return seo({matches,location},{title:'About Arpit Impex | Indian Hardware Sourcing Partner',description:'Meet Arpit Impex, an India-based sourcing and export business connecting international buyers with hardware suppliers through clear, practical coordination.',image:images.handles})}
export default function AboutPage(){return <main><PageIntro eyebrow="ABOUT US" title="A Practical Partner. A Global Outlook." text="Good Products. Clear Communication. Global Trade."/><About/><WhyUs/><EnquiryBanner/></main>}
