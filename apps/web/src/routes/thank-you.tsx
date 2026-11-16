import { useEffect } from 'react';
import type { Route } from './+types/thank-you';
import { Link, useSearchParams } from 'react-router';
import { seo, absoluteUrl, siteOriginFrom } from '@/lib/seo';
import { CheckCircle2, ArrowRight, Phone, Mail, FileText, Home } from 'lucide-react';
import { companyInfo } from '@/data/catalogue';

function parseCountryCode(country?: string | null): string {
  if (!country) return 'US';
  const trimmed = country.trim();
  if (trimmed.length === 2) return trimmed.toUpperCase();
  const lower = trimmed.toLowerCase();
  if (lower.includes('united states') || lower.includes('usa') || lower.includes('america')) return 'US';
  if (lower.includes('united kingdom') || lower.includes('uk') || lower.includes('england') || lower.includes('britain')) return 'GB';
  if (lower.includes('india') || lower.includes('bharat')) return 'IN';
  if (lower.includes('emirates') || lower.includes('uae') || lower.includes('dubai')) return 'AE';
  if (lower.includes('canada')) return 'CA';
  if (lower.includes('australia')) return 'AU';
  if (lower.includes('germany') || lower.includes('deutschland')) return 'DE';
  if (lower.includes('saudi')) return 'SA';
  if (lower.includes('qatar')) return 'QA';
  if (lower.includes('kuwait')) return 'KW';
  if (lower.includes('oman')) return 'OM';
  if (lower.includes('singapore')) return 'SG';
  return 'US';
}

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

export function loader({ request }: Route.LoaderArgs) {
  const url = new URL(request.url);
  const orderId = url.searchParams.get('order_id') || `AI-${Date.now()}`;
  const email = url.searchParams.get('email') || 'exports@arpitimpex.com';
  const rawCountry = url.searchParams.get('country') || 'US';
  const deliveryCountry = parseCountryCode(rawCountry);

  // Google Customer Reviews requires estimated_delivery_date in the format YYYY-MM-DD in the future (+14 days)
  const deliveryDateObj = new Date();
  deliveryDateObj.setDate(deliveryDateObj.getDate() + 14);
  const estimatedDeliveryDate = deliveryDateObj.toISOString().split('T')[0];

  return {
    merchantId: 5886884173,
    orderId,
    email,
    deliveryCountry,
    estimatedDeliveryDate,
  };
}

export default function ThankYouPage({ loaderData }: Route.ComponentProps) {
  const [searchParams] = useSearchParams();

  const merchantId = loaderData?.merchantId ?? 5886884173;
  const orderId = searchParams.get('order_id') || loaderData?.orderId || `AI-${Date.now()}`;
  const email = searchParams.get('email') || loaderData?.email || 'exports@arpitimpex.com';
  const deliveryCountry = parseCountryCode(searchParams.get('country') || loaderData?.deliveryCountry || 'US');
  const estimatedDeliveryDate =
    loaderData?.estimatedDeliveryDate ||
    (() => {
      const d = new Date();
      d.setDate(d.getDate() + 14);
      return d.toISOString().split('T')[0];
    })();

  useEffect(() => {
    if (typeof window === 'undefined') return;

    (window as any).renderOptIn = function () {
      if ((window as any).gapi && (window as any).gapi.load) {
        (window as any).gapi.load('surveyoptin', function () {
          if ((window as any).gapi.surveyoptin && (window as any).gapi.surveyoptin.render) {
            (window as any).gapi.surveyoptin.render({
              merchant_id: merchantId,
              order_id: orderId,
              email: email,
              delivery_country: deliveryCountry,
              estimated_delivery_date: estimatedDeliveryDate,
              opt_in_style: 'CENTER_DIALOG',
            });
          }
        });
      }
    };

    if ((window as any).gapi && (window as any).gapi.load) {
      (window as any).renderOptIn();
    } else {
      const scriptId = 'google-customer-reviews-optin';
      if (!document.getElementById(scriptId)) {
        const script = document.createElement('script');
        script.id = scriptId;
        script.src = 'https://apis.google.com/js/platform.js?onload=renderOptIn';
        script.async = true;
        script.defer = true;
        document.body.appendChild(script);
      }
    }
  }, [merchantId, orderId, email, deliveryCountry, estimatedDeliveryDate]);

  return (
    <main className="thank-you-page section" style={{ minHeight: '70vh', display: 'flex', alignItems: 'center', justifyContent: 'center', padding: '60px 24px' }}>
      {/* Google Customer Reviews Survey Opt-in Module */}
      <script src="https://apis.google.com/js/platform.js?onload=renderOptIn" async defer />
      <script
        dangerouslySetInnerHTML={{
          __html: `
window.renderOptIn = function() {
  window.gapi.load('surveyoptin', function() {
    window.gapi.surveyoptin.render(
      {
        // REQUIRED FIELDS
        "merchant_id": ${merchantId},
        "order_id": ${JSON.stringify(orderId)},
        "email": ${JSON.stringify(email)},
        "delivery_country": ${JSON.stringify(deliveryCountry)},
        "estimated_delivery_date": ${JSON.stringify(estimatedDeliveryDate)},
        "opt_in_style": "CENTER_DIALOG"
      });
  });
};
`,
        }}
      />

      <div style={{ maxWidth: '640px', width: '100%', textAlign: 'center', background: '#fff', border: '1px solid var(--border)', borderRadius: 0, padding: '48px 32px', boxShadow: '0 8px 30px rgba(0,0,0,0.04)' }}>
        <div style={{ width: '64px', height: '64px', borderRadius: 0, background: '#ecfdf5', color: '#059669', display: 'flex', alignItems: 'center', justifyContent: 'center', margin: '0 auto 24px auto' }}>
          <CheckCircle2 size={36} />
        </div>

        <p className="eyebrow" style={{ color: '#059669', marginBottom: '8px' }}>ENQUIRY CONFIRMED</p>
        <h1 style={{ fontSize: '32px', color: 'var(--navy)', marginBottom: '16px' }}>Thank You for Your Enquiry</h1>
        <p style={{ fontSize: '16px', lineHeight: '1.7', color: 'var(--body)', marginBottom: '28px' }}>
          We have received your hardware requirement. Our founder, <strong>{companyInfo.contactPerson}</strong>, and the Aligarh export desk are reviewing your models, requested finishes, and shipment destination.
        </p>

        <div style={{ background: 'var(--paper-soft)', borderRadius: 0, padding: '20px', textAlign: 'left', marginBottom: '32px', border: '1px solid var(--border)' }}>
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
          Need urgent assistance? Call or message direct: <strong style={{ color: 'var(--navy)' }}>{companyInfo.phone}</strong> · <a href={`mailto:${companyInfo.email}`} style={{ color: 'var(--bronze)' }}>{companyInfo.email}</a>
        </div>
      </div>
    </main>
  );
}
