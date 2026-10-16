import type { Route } from './+types/contact';
import { seo } from '@/lib/seo';
import { EnquiryForm } from '@/components/contact/enquiry-form';
import { companyInfo } from '@/data/catalogue';

export function meta({ matches, location }: Route.MetaArgs) {
  return seo(
    { matches, location },
    {
      title: 'Request a Hardware Export Quote | Arpit Impex',
      description:
        'Send Arpit Impex your product models, quantity, finish and destination to discuss architectural hardware supply and export quotations from India.',
      jsonLd: {
        '@context': 'https://schema.org',
        '@type': 'LocalBusiness',
        name: companyInfo.name,
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
        hasMap: companyInfo.googleBusinessUrl,
        url: 'https://arpitimpex.com',
      },
    }
  );
}

export default function Contact() {
  return (
    <main>
      <EnquiryForm />
    </main>
  );
}

