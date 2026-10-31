import type { Route } from './+types/process';
import { seo, absoluteUrl, siteOriginFrom } from '@/lib/seo';
import { images, faqs } from '@/data/catalogue';
import { PageIntro } from '@/components/page-intro';
import { Process } from '@/components/home/process';
import { EnquiryBanner } from '@/components/enquiry-banner';

export function meta({ matches, location }: Route.MetaArgs) {
  const origin = siteOriginFrom(matches);
  const canonicalUrl = absoluteUrl(origin, '/process');

  return seo(
    { matches, location },
    {
      title: 'Import Door Hardware from India: Order Process | Arpit Impex',
      description:
        'Step-by-step guide to importing door hardware, locks, and hinges from Aligarh, India. Sourcing review, samples, MOQ, quality checks, and export shipment.',
      image: images.pressWorkshop,
      jsonLd: [
        {
          '@context': 'https://schema.org',
          '@type': 'WebPage',
          name: 'Import Door Hardware from India: Order Process',
          url: canonicalUrl,
          description:
            'How to import architectural door hardware, locks, cylinders, handles, and hinges from Aligarh, India.',
        },
        {
          '@context': 'https://schema.org',
          '@type': 'FAQPage',
          mainEntity: faqs.map(([q, a]) => ({
            '@type': 'Question',
            name: q,
            acceptedAnswer: {
              '@type': 'Answer',
              text: a,
            },
          })),
        },
      ],
    }
  );
}

export default function ProcessPage() {
  return (
    <main>
      <PageIntro
        eyebrow="SOURCING & EXPORT PROCESS"
        title="How to Import Door Hardware from India"
        text="A transparent 6-step roadmap for overseas hardware importers, distributors, and contractors. We coordinate each order from drawing review and quotation through pre-production sampling, 5-stage quality inspection, export packaging, and container dispatch."
      />
      <Process showProcessLink={false} />

      {/* Comprehensive Sourcing FAQs */}
      <section className="section faq-section">
        <div>
          <p className="eyebrow">ORDERING &amp; LOGISTICS QUESTIONS</p>
          <h2>
            Hardware Export &amp;<br />Ordering FAQs
          </h2>
          <p>
            Key details on sample requests, manufacturing lead times, custom finishes, container consolidation, and international shipping terms.
          </p>
        </div>
        <div>
          {faqs.map(([q, a]) => (
            <details key={q}>
              <summary>
                {q}
                <span>+</span>
              </summary>
              <p>{a}</p>
            </details>
          ))}
        </div>
      </section>

      <EnquiryBanner />
    </main>
  );
}
