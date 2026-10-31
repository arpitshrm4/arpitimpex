import { Link } from 'react-router';
import { steps } from '@/data/catalogue';

export function Process({ showProcessLink = true }: { showProcessLink?: boolean }) {
  return (
    <section className="section">
      <div className="section-heading">
        <div>
          <p className="eyebrow">A CLEAR PATH FORWARD</p>
          <h2>From Enquiry to Shipment</h2>
        </div>
        {showProcessLink && (
          <Link className="text-link" to="/process">
            Our sourcing process ↗
          </Link>
        )}
      </div>
      <div className="steps">
        {steps.map(([title, text], i) => (
          <article key={title}>
            <span className="step-number">0{i + 1}</span>
            <h3>{title}</h3>
            <p>{text}</p>
          </article>
        ))}
      </div>
    </section>
  );
}
