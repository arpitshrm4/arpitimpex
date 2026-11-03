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
      <section className="section" style={{ maxWidth: '1200px', margin: '0 auto 60px', padding: '0 24px' }}>
        <div style={{ marginBottom: '24px' }}>
          <p className="eyebrow">FACTORY &amp; DISPATCH LOCATION</p>
          <h2 style={{ fontSize: '28px', color: 'var(--navy)' }}>Find Arpit Impex in Aligarh</h2>
          <p style={{ color: 'var(--body)', maxWidth: '680px', lineHeight: '1.6', marginTop: '6px' }}>
            Visit our registered premises and tooling workshop at {companyInfo.location}.
          </p>
        </div>
        <div style={{ borderRadius: 0, overflow: 'hidden', border: '1px solid var(--border)', boxShadow: '0 4px 16px rgba(23, 19, 16, 0.06)' }}>
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3526.8174019528706!2d78.0865685760979!3d27.876878976085838!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3974a5c4a5881231%3A0x12ed45468d9307b3!2sArpit%20Impex!5e0!3m2!1sen!2sin!4v1793619161138!5m2!1sen!2sin"
            width="100%"
            height="450"
            style={{ border: 0, display: 'block' }}
            allowFullScreen
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            title="Arpit Impex Google Maps Location"
          />
        </div>
      </section>
    </main>
  );
}
