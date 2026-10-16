import type { Route } from './+types/about';
import { seo } from '@/lib/seo';
import { images } from '@/data/catalogue';
import { PageIntro } from '@/components/page-intro';
import { About } from '@/components/home/about';
import { FacilityShowcase } from '@/components/home/facility-showcase';
import { WhyUs } from '@/components/home/why-us';
import { EnquiryBanner } from '@/components/enquiry-banner';

export function meta({ matches, location }: Route.MetaArgs) {
  return seo(
    { matches, location },
    {
      title: 'About Arpit Impex | Hardware Manufacturing & Export Supply Aligarh',
      description:
        'Learn about Arpit Impex in Aligarh, India. We combine in-house mechanical lock manufacturing with verified partner sourcing for international architectural hardware buyers.',
      image: images.factoryEntrance,
    }
  );
}

export default function AboutPage() {
  return (
    <main>
      <PageIntro
        eyebrow="ABOUT ARPIT IMPEX"
        title="Architectural Hardware Supply Backed by Local Manufacturing Capability"
        text="Based in Aligarh, Uttar Pradesh, India, we combine in-house power press production for selected locks and lock bodies with verified partner sourcing for handles and cylinders, providing transparent B2B supply."
      />
      <About />
      <FacilityShowcase />
      <WhyUs />
      <EnquiryBanner />
    </main>
  );
}

