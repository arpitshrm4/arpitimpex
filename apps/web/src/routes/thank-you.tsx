import type { Route } from './+types/thank-you';
import { Link } from 'react-router';
import { seo, absoluteUrl, siteOriginFrom } from '@/lib/seo';
import { CheckCircle2, ArrowRight, Phone, Mail, FileText, Home } from 'lucide-react';
import { companyInfo } from '@/data/catalogue';

export function meta({ matches, location }: Route.MetaArgs) {
  const origin = siteOriginFrom(matches);
  const canonicalUrl = absoluteUrl(origin, '/thank-you');

  return seo(
    { matches, location },
    {
      title: 'Enquiry Received | Arpit Impex',
      description: 'Thank you for your B2B hardware quotation request. Our Aligarh export desk will review your specifications and respond shortly.',
      noindex: true,
      path: '/thank-you',
    }
  );
}

export default function ThankYouPage() {
  return (
    <main className="thank-you-page section" style={{ minHeight: '70vh', display: 'flex', alignItems: 'center', justifyContent: 'center', padding: '60px 24px' }}>
      <div style={{ maxWidth: '640px', width: '100%', textAlign: 'center', background: '#fff', border: '1px solid var(--border)', borderRadius: '16px', padding: '48px 32px', boxShadow: '0 8px 30px rgba(0,0,0,0.04)' }}>
        <div style={{ width: '64px', height: '64px', borderRadius: '50%', background: '#ecfdf5', color: '#059669', display: 'flex', alignItems: 'center', justifyContent: 'center', margin: '0 auto 24px auto' }}>
          <CheckCircle2 size={36} />
        </div>

        <p className="eyebrow" style={{ color: '#059669', marginBottom: '8px' }}>ENQUIRY CONFIRMED</p>
        <h1 style={{ fontSize: '32px', color: 'var(--navy)', marginBottom: '16px' }}>Thank You for Your Enquiry</h1>
        <p style={{ fontSize: '16px', lineHeight: '1.7', color: 'var(--body)', marginBottom: '28px' }}>
          We have received your hardware requirement. Our founder, <strong>{companyInfo.contactPerson}</strong>, and the Aligarh export desk are reviewing your models, requested finishes, and shipment destination.
        </p>

        <div style={{ background: '#f8f9fa', borderRadius: '12px', padding: '20px', textAlign: 'left', marginBottom: '32px', border: '1px solid var(--border)' }}>
          <h3 style={{ fontSize: '15px', color: 'var(--navy)', marginBottom: '8px', fontWeight: 600 }}>What Happens Next?</h3>
          <ul style={{ margin: 0, paddingLeft: '20px', fontSize: '14px', lineHeight: '1.7', color: 'var(--body)' }}>
            <li><strong>Drawing &amp; Spec Check:</strong> We cross-check dimensions and material suitability.</li>
            <li><strong>Official B2B Quote:</strong> We generate confirmed unit pricing, volume MOQ, and lead times within 12–24 business hours.</li>
            <li><strong>Sample Arrangement:</strong> Pre-production physical samples can be coordinated on request.</li>
          </ul>
        </div>

        <div style={{ display: 'flex', gap: '12px', justifyContent: 'center', flexWrap: 'wrap', marginBottom: '32px' }}>
          <Link to="/products" className="button" style={{ padding: '12px 24px' }}>
            Browse Full Catalogue <ArrowRight size={16} />
          </Link>
          <Link to="/" className="button outline" style={{ padding: '12px 24px' }}>
            <Home size={16} /> Back to Homepage
          </Link>
        </div>

        <div style={{ borderTop: '1px solid var(--border)', paddingTop: '20px', fontSize: '13px', color: 'var(--quiet)' }}>
          Need urgent assistance? Call or message direct: <strong style={{ color: 'var(--navy)' }}>{companyInfo.phone}</strong> · <a href={`mailto:${companyInfo.email}`} style={{ color: 'var(--blue)' }}>{companyInfo.email}</a>
        </div>
      </div>
    </main>
  );
}
