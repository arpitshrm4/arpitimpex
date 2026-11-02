import { Link } from 'react-router';
import { ArrowRight, MessageCircle, Mail } from 'lucide-react';
import { companyInfo } from '@/data/catalogue';

export function EnquiryBanner() {
  const waUrl = `https://wa.me/918285687940?text=${encodeURIComponent(
    'Hello Arpit Impex, I have a bulk hardware requirement and would like to discuss specifications and pricing.'
  )}`;

  return (
    <section className="inquiry-cta-section">
      <div className="inquiry-cta-content">
        <p className="eyebrow light">DIRECT B2B SOURCING DESK</p>
        <h2>Have a hardware product or project in mind?</h2>
        <p className="inquiry-cta-lead">
          Share your target model numbers, drawings, dimensions, or required volumes. Our Aligarh commercial desk reviews specifications and provides FOB/CIF quotations within 24 hours.
        </p>

        <div className="inquiry-cta-actions">
          <Link to="/contact" className="button button-light">
            Request Formal B2B Quote <ArrowRight size={16} />
          </Link>
          <a
            href={waUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="button button-outline-light"
          >
            <MessageCircle size={16} />
            Instant WhatsApp Chat
          </a>
          <a
            href={`mailto:${companyInfo.email}`}
            className="button button-outline-light"
          >
            <Mail size={16} />
            {companyInfo.email}
          </a>
        </div>
      </div>
    </section>
  );
}
