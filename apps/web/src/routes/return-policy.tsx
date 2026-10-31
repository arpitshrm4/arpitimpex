import type { Route } from './+types/return-policy';
import { seo, absoluteUrl, siteOriginFrom } from '@/lib/seo';
import { companyInfo } from '@/data/catalogue';

export function meta({ matches, location }: Route.MetaArgs) {
  const origin = siteOriginFrom(matches);
  const canonicalUrl = absoluteUrl(origin, '/return-policy');

  return seo(
    { matches, location },
    {
      title: 'Return & Refund Policy | Arpit Impex',
      description:
        'Official B2B Return and Refund Policy for Arpit Impex. Architectural door hardware manufacturing, made-to-order consignments, and commercial export terms.',
      jsonLd: {
        '@context': 'https://schema.org',
        '@type': 'MerchantReturnPolicy',
        name: 'Arpit Impex Commercial Return Policy',
        applicableCountry: ['IN', 'US', 'AE', 'GB', 'SA'],
        returnPolicyCategory: 'https://schema.org/MerchantReturnNotPermitted',
        merchantReturnDays: 0,
        returnMethod: 'https://schema.org/ReturnNotPermitted',
        returnFees: 'https://schema.org/ReturnFeesCustomerResponsibility',
        url: canonicalUrl,
      },
    }
  );
}

export default function ReturnPolicy() {
  return (
    <main>
      <section className="legal-content section">
        <p className="eyebrow">ARPIT IMPEX · COMMERCIAL SUPPLY TERMS</p>
        <h1>Return &amp; Refund Policy</h1>
        <p style={{ color: 'var(--quiet)', fontSize: '13px', marginBottom: '28px' }}>
          Effective Date: October 2026 | Governing B2B Wholesale &amp; International Export Consignments
        </p>

        <h2>1. Policy Overview: No Returns Accepted (Final Sale)</h2>
        <p>
          Arpit Impex is an industrial manufacturer, supply aggregator, and bulk exporter of architectural door hardware, mortise locks, rim deadbolts, profile cylinders, and ironmongery fittings based in Aligarh, India.
        </p>
        <p>
          Because all products are manufactured to agreed order specifications, custom finishes, or bulk wholesale volumes, <strong>we operate a strict No-Returns (Final Sale) policy</strong> for all commercial transactions. Once a purchase order is confirmed, production is initiated, or goods are dispatched from our facility, orders are non-returnable and non-refundable.
        </p>

        <h2>2. Summary of Policy Terms for Commercial Buyers &amp; Google Merchant Verification</h2>
        <ul style={{ paddingLeft: '20px', lineHeight: '2', color: 'var(--text)', fontSize: '14px', marginBottom: '24px' }}>
          <li><strong>Return Acceptance:</strong> No returns accepted (MerchantReturnNotPermitted).</li>
          <li><strong>Return Window:</strong> 0 days (All commercial orders are final sale).</li>
          <li><strong>Return Shipping Costs:</strong> Not applicable (returns are not accepted).</li>
          <li><strong>Restocking Fees:</strong> None (returns are not accepted).</li>
          <li><strong>Product Condition:</strong> B2B commercial production, factory-packed according to agreed export packaging.</li>
          <li><strong>Applicable Markets:</strong> Domestic commercial supply (India) and international export shipments.</li>
        </ul>

        <h2>3. Pre-Dispatch Verification &amp; Quality Agreement</h2>
        <p>
          To eliminate discrepancies and ensure that products match exact architectural drawings and project requirements, Arpit Impex adheres to a rigorous pre-dispatch confirmation process:
        </p>
        <p>
          Dimensions, base materials, electroplating finish codes, keying configurations, and master carton markings are confirmed in writing prior to production. Pre-production physical samples and pre-shipment photographic inspection reports are provided upon request prior to cargo dispatch.
        </p>

        <h2>4. Damaged in Transit or Verifiable Manufacturing Defects</h2>
        <p>
          While general returns are not permitted, we stand firmly behind the structural integrity of our manufacturing and contracted supply:
        </p>
        <p>
          In the rare event that an order arrives damaged during transit or contains a verified manufacturing defect departing from agreed specifications:
        </p>
        <ul style={{ paddingLeft: '20px', lineHeight: '2', color: 'var(--text)', fontSize: '14px', marginBottom: '20px' }}>
          <li>
            The buyer must notify Arpit Impex in writing within <strong>7 calendar days</strong> of receiving the shipment at the designated delivery destination or port of entry.
          </li>
          <li>
            The claim must include high-resolution photos, video documentation of the defects, shipping documentation, and package batch codes.
          </li>
          <li>
            Upon quality evaluation and confirmation of the defect, Arpit Impex will provide an agreed commercial remedy, which may include manufacturing replacement units in the subsequent shipment or issuing a commercial credit note.
          </li>
        </ul>

        <h2>5. Order Cancellations</h2>
        <p>
          For custom-manufactured hardware, specialized electroplating finishes, or private-label box packaging, orders cannot be cancelled once raw material stamping, tooling setup, or surface treatment has commenced.
        </p>

        <h2>6. Contact Details for Commercial Queries</h2>
        <p>
          If you have any questions regarding these commercial terms, specification confirmations, or order dispatch procedures, please contact our export desk:
        </p>
        <div style={{ background: '#f8fafc', border: '1px solid var(--line)', padding: '20px', borderRadius: '4px', marginTop: '16px' }}>
          <p style={{ margin: '0 0 6px 0', fontWeight: '700', color: 'var(--navy)' }}>{companyInfo.name}</p>
          <p style={{ margin: '0 0 6px 0', fontSize: '13px' }}>Attention: {companyInfo.contactPerson}</p>
          <p style={{ margin: '0 0 6px 0', fontSize: '13px' }}>Address: {companyInfo.location}</p>
          <p style={{ margin: '0 0 6px 0', fontSize: '13px' }}>
            Email: <a href={`mailto:${companyInfo.email}`} style={{ color: 'var(--blue)', fontWeight: '600' }}>{companyInfo.email}</a>
          </p>
          <p style={{ margin: '0', fontSize: '13px' }}>
            WhatsApp / Phone: <a href={`tel:${companyInfo.phone}`} style={{ color: 'var(--blue)', fontWeight: '600' }}>{companyInfo.phone}</a>
          </p>
        </div>
      </section>
    </main>
  );
}

