import type { Route } from './+types/contact';
import { seo } from '@/lib/seo';
import { EnquiryForm } from '@/components/contact/enquiry-form';
import { companyInfo } from '@/data/catalogue';

export function meta({ matches, location }: Route.MetaArgs) {
  return seo(
    { matches, location },
    {
      title: 'Request a B2B Quote | Arpit Impex Aligarh Hardware Exporter',
      description: `Send bulk product enquiries, request specifications, and discuss export quotation terms with Arpit Impex in Aligarh, India. Official sales desk: ${companyInfo.phone}, email: ${companyInfo.email}.`,
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

