import type { Route } from './+types/contact';
import { seo, absoluteUrl, siteOriginFrom } from '@/lib/seo';
import { EnquiryForm } from '@/components/contact/enquiry-form';
import { images, companyInfo } from '@/data/catalogue';

export function meta({ matches, location }: Route.MetaArgs) {
  const origin = siteOriginFrom(matches);
  const canonicalUrl = absoluteUrl(origin, '/contact');

  return seo(
    { matches, location },
    {
      title: 'Request a Hardware Export Quote | Arpit Impex',
      description:
        'Send Arpit Impex your product models, quantity, finish and destination to discuss architectural hardware supply and export quotations from India.',
      image: images.executiveOffice,
      jsonLd: [
        {
          '@context': 'https://schema.org',
          '@type': 'ContactPage',
          name: 'Contact Arpit Impex',
          url: canonicalUrl,
          description: 'Direct contact and quotation request desk for door hardware exports from Aligarh, India.',
        },
        {
          '@context': 'https://schema.org',
          '@type': 'Organization',
          name: 'Arpit Impex',
          url: 'https://arpitimpex.com',
          logo: 'https://arpitimpex.com/images/logo.png',
          email: 'exports@arpitimpex.com',
          telephone: '+91-8285687940',
          address: {
            '@type': 'PostalAddress',
            streetAddress: '1/874, Gali No. 1, Shastri Nagar, Chhawani Road',
            addressLocality: 'Aligarh',
            addressRegion: 'Uttar Pradesh',
            postalCode: '202001',
            addressCountry: 'IN',
          },
        },
      ],
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
