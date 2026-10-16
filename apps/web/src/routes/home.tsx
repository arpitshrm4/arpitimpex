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
import { Faq } from '@/components/home/faq';
import { FinalCta } from '@/components/home/final-cta';
export function meta({ matches, location }: Route.MetaArgs) {
  return seo(
    { matches, location },
    {
      title: 'Arpit Impex | Hardware Sourcing & Export from India',
      description:
        'Source locks, door handles, cylinders and architectural hardware from India. Arpit Impex provides dependable manufacturing, wholesale supply, and export coordination from Aligarh.',
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
          'Manufacturer and exporter of premium architectural door locks, luxury handles, euro cylinders, and precision hardware fittings based in Aligarh, Uttar Pradesh, India.',
      },
    }
  );
}
export default function HomePage(){return <main><Hero/><Categories/><WhyUs/><Process/><Featured/><EnquiryBanner/><About/><Faq/><FinalCta/></main>}
