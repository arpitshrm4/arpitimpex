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
      title: 'About Arpit Impex | Architectural Hardware from India',
      description:
        'Learn about Arpit Impex’s selected in-house hardware manufacturing, local supply partners and B2B export coordination from Aligarh, India.',
      image: images.factoryEntrance,
    }
  );
}

export default function AboutPage() {
  return (
    <main>
      <PageIntro
        eyebrow="ABOUT ARPIT IMPEX"
        title="Architectural Hardware Supply from Aligarh, India"
        text="Arpit Impex serves business buyers looking for architectural door hardware from India. Our range includes door locks, mortise lock bodies, cylinders, handles and related fittings. We manufacture selected products in our Aligarh unit and coordinate additional products through local supply partners."
      />
      <About />
      <FacilityShowcase />
      <WhyUs />
      <EnquiryBanner />
    </main>
  );
}

