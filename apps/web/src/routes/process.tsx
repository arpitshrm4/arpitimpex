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
      title: 'B2B Hardware Ordering & Export Process | Arpit Impex',
      description:
        'Learn how Arpit Impex reviews product requirements, confirms specifications, quotes bulk orders and coordinates packaging and export dispatch.',
    }
  );
}
export default function ProcessPage() {
  return (
    <main>
      <PageIntro
        eyebrow="SOURCING & EXPORT PROCESS"
        title="How Our B2B Hardware Order Process Works"
        text="We coordinate each order from product enquiry through specification confirmation, quotation, sample review where available, agreed inspection, packaging and shipment. Availability, lead time, costs and shipping terms are confirmed for the specific order."
      />
      <Process />
      <Faq />
      <EnquiryBanner />
    </main>
  );
}
