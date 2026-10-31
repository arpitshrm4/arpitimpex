import type { Route } from './+types/home';
import { seo } from '@/lib/seo';
import { images, companyInfo, faqs } from '@/data/catalogue';
import { Hero } from '@/components/home/hero';
import { Categories } from '@/components/home/categories';
import { WhyUs } from '@/components/home/why-us';
import { Process } from '@/components/home/process';
import { Featured } from '@/components/home/featured';
import { EnquiryBanner } from '@/components/enquiry-banner';
import { About } from '@/components/home/about';
import { FacilityShowcase } from '@/components/home/facility-showcase';
import { Faq } from '@/components/home/faq';
import { FinalCta } from '@/components/home/final-cta';
export function meta({ matches, location }: Route.MetaArgs) {
  return seo(
    { matches, location },
    {
      title: 'Door Lock & Hardware Exporter from India | Arpit Impex',
      description:
        'Door locks, mortise lock bodies, cylinders, handles, hinges and gate hardware for importers and distributors. Request a bulk quote.',
      image: images.hero,
      jsonLd: [
        {
          '@context': 'https://schema.org',
          '@type': 'Organization',
          name: 'Arpit Impex',
          url: 'https://arpitimpex.com',
          telephone: companyInfo.phone,
          email: companyInfo.email,
          vatID: companyInfo.gstNumber,
          taxID: companyInfo.gstNumber,
          foundingDate: '2017',
          founder: {
            '@type': 'Person',
            name: 'Arpit Sharma',
          },
          address: {
            '@type': 'PostalAddress',
            streetAddress: companyInfo.address,
            addressLocality: companyInfo.city,
            addressRegion: companyInfo.state,
            postalCode: companyInfo.pincode,
            addressCountry: 'IN',
          },
          sameAs: [companyInfo.googleBusinessUrl],
          description:
            'Architectural door hardware supplier and manufacturer based in Aligarh, India, providing door locks, mortise lock bodies, cylinders, handles, and export coordination for bulk B2B orders.',
        },
        {
          '@context': 'https://schema.org',
          '@type': 'FAQPage',
          mainEntity: faqs.slice(0, 4).map(([q, a]) => ({
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
export default function HomePage() { return <main><Hero /><Categories /><WhyUs /><Featured /><Process /><EnquiryBanner /><About /><FacilityShowcase /><Faq /><FinalCta /></main> }
