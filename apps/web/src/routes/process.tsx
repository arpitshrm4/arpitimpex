import type { Route } from './+types/process';
import { seo } from '@/lib/seo';
import { PageIntro } from '@/components/page-intro';
import { Process } from '@/components/home/process';
import { Faq } from '@/components/home/faq';
import { EnquiryBanner } from '@/components/enquiry-banner';
export function meta({ matches, location }: Route.MetaArgs) {
  return seo(
    { matches, location },
    {
      title: 'Export Coordination & B2B Sourcing Process | Arpit Impex India',
      description:
        'Understand our 6-step B2B hardware export process: requirement review, specification confirmation, commercial quotation, sample evaluation, inspection, and export documentation.',
    }
  );
}
export default function ProcessPage() {
  return (
    <main>
      <PageIntro
        eyebrow="SOURCING & EXPORT PROCESS"
        title="Clear Steps. Considered Sourcing."
        text="From your initial requirement to confirmed export documentation and dispatch, we keep order expectations practical. Product availability, specifications, and commercial terms are reviewed for every order."
      />
      <Process />
      <Faq />
      <EnquiryBanner />
    </main>
  );
}
