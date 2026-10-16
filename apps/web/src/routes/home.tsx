import type { Route } from './+types/home';
import { seo } from '@/lib/seo';
import { images, companyInfo } from '@/data/catalogue';
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
      title: 'Architectural Door Hardware Manufacturer & Exporter India | Arpit Impex',
      description:
        'Explore door locks, mortise lock bodies, cylinders, handles and architectural hardware from Arpit Impex in Aligarh, India. Enquire about bulk supply, specifications and export orders.',
      image: images.hero,
      jsonLd: {
        '@context': 'https://schema.org',
        '@type': 'Organization',
        name: 'Arpit Impex',
        url: 'https://arpitimpex.com',
        telephone: companyInfo.phone,
        email: companyInfo.email,
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
    }
  );
}
export default function HomePage(){return <main><Hero/><Categories/><WhyUs/><Process/><Featured/><EnquiryBanner/><About/><FacilityShowcase/><Faq/><FinalCta/></main>}
