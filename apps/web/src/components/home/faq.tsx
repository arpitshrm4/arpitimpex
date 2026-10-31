import { Link } from 'react-router';
import { ArrowUpRight } from 'lucide-react';
import { faqs } from '@/data/catalogue';

export function Faq() {
  const topFaqs = faqs.slice(0, 4);

  return (
    <section className="section faq-section">
      <div>
        <p className="eyebrow">A FEW USEFUL ANSWERS</p>
        <h2>
          Frequently Asked<br />Questions
        </h2>
        <p>
          Every requirement is different.<br />
          Here are key answers about sourcing with us.
        </p>
        <div style={{ marginTop: '24px' }}>
          <Link to="/process" className="text-link" style={{ fontWeight: 600 }}>
            View Full Export Process & Sourcing FAQs <ArrowUpRight size={16} />
          </Link>
        </div>
      </div>
      <div>
        {topFaqs.map(([q, a]) => (
          <details key={q}>
            <summary>
              {q}
              <span>+</span>
            </summary>
            <p>{a}</p>
          </details>
        ))}
      </div>
    </section>
  );
}
