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
      title: 'About Arpit Impex | Facilities & Hardware Manufacturing Aligarh',
      description:
        'Meet Arpit Impex, an Aligarh-based architectural hardware manufacturer and export partner with modern power press workshops, executive sourcing desk, and precision tooling lines.',
      image: images.factoryEntrance,
    }
  );
}

export default function AboutPage() {
  return (
    <main>
      <PageIntro
        eyebrow="ABOUT ARPIT IMPEX"
        title="Manufacturing Heritage. A Global Outlook."
        text="From high-capacity mechanical press workshops to dedicated executive trade desks in Aligarh, our facilities are built for precision door hardware and dependable sourcing."
      />
      <About />
      <FacilityShowcase />
      <WhyUs />
      <EnquiryBanner />
    </main>
  );
}

