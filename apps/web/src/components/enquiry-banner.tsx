import { Link } from 'react-router';
import { ArrowUpRight } from 'lucide-react';
import { companyInfo } from '@/data/catalogue';

export function EnquiryBanner() {
  return (
    <section className="enquiry-banner">
      <div>
        <p className="eyebrow">DIRECT FACTORY SOURCING</p>
        <h2>Have a Bulk Hardware Requirement?</h2>
        <p>
          Discuss model specifications, custom finishes, wholesale discounts, and export packaging directly with our team in Aligarh.
        </p>
      </div>
      <div style={{ display: 'flex', flexDirection: 'column', gap: '10px', alignItems: 'center' }}>
        <Link to="/contact" className="button light">
          Request a Quote <ArrowUpRight size={18} />
        </Link>
        <a
          href={`tel:${companyInfo.phone}`}
          className="email-note"
          style={{ textDecoration: 'none', color: '#cad5e2', fontSize: '12px' }}
        >
          Call: {companyInfo.phone}
        </a>
      </div>
    </section>
  );
}
