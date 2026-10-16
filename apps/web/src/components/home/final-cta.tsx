import { Link } from 'react-router';
import { ArrowUpRight } from 'lucide-react';

export function FinalCta() {
  return (
    <section className="final-cta">
      <p className="eyebrow">EXPORT SUPPLY & CUSTOMIZATION</p>
      <h2>Ready to Discuss Your Hardware Requirements?</h2>
      <p style={{ maxWidth: '640px', margin: '0 auto 28px', fontSize: '14px', lineHeight: '1.75', color: 'var(--quiet)' }}>
        Share your product list, target quantity and destination country. We will review the requirements and respond with the applicable specifications, commercial terms and next steps.
      </p>
      <Link className="button" to="/contact">
        Request a B2B Quote <ArrowUpRight size={18} />
      </Link>
    </section>
  );
}
