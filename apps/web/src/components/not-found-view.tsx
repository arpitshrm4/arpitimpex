import { Link } from 'react-router';
import { categories, companyInfo } from '@/data/catalogue';
import { Home, ArrowRight, ArrowUpRight, MessageCircle, Mail, Phone, Compass } from 'lucide-react';

interface NotFoundViewProps {
  eyebrow?: string;
  title?: string;
  message?: string;
}

export function NotFoundView({
  eyebrow = '404 · PAGE NOT FOUND',
  title = 'This Page Could Not Be Found',
  message = 'The page you are looking for might have been moved, removed, or is temporarily unavailable. Let us help you find what you need across our architectural door hardware catalogue.',
}: NotFoundViewProps) {
  return (
    <main className="not-found-page">
      {/* Hero Section */}
      <section className="not-found-hero">
        <div className="not-found-hero-inner">
          <div className="eyebrow not-found-eyebrow">
            <span />
            {eyebrow}
          </div>

          <div className="not-found-badge">
            <span className="not-found-number">404</span>
            <span className="not-found-sub">HARDWARE CATALOGUE</span>
          </div>

          <h1 className="not-found-title">{title}</h1>
          <p className="not-found-desc">{message}</p>

          <div className="not-found-actions">
            <Link to="/" className="button not-found-btn-primary">
              <Home size={16} /> Return to Homepage
            </Link>
            <Link to="/products" className="button outline not-found-btn-secondary">
              Browse All Products <ArrowRight size={16} />
            </Link>
            <Link to="/brochure" className="button outline not-found-btn-secondary">
              Product Brochure (PDF) <ArrowUpRight size={16} />
            </Link>
          </div>
        </div>
      </section>

      {/* Suggested Categories Section */}
      <section className="section not-found-categories-section">
        <div className="section-heading">
          <div>
            <div className="eyebrow">
              <span />
              EXPLORE OUR PRODUCT RANGE
            </div>
            <h2>Looking for Architectural Hardware?</h2>
            <p>Select any category below to browse verified specifications, technical drawings, and export models.</p>
          </div>
          <Link to="/products" className="text-link">
            View All Hardware <ArrowRight size={14} />
          </Link>
        </div>

        <div className="category-grid">
          {categories.map((cat) => (
            <article key={cat.id} className="category-card">
              <Link to={`/products?category=${cat.id}`} className="photo-link" aria-label={`Browse ${cat.name}`}>
                <img src={cat.image} alt={cat.name} loading="lazy" width="280" height="230" />
                <span>{cat.name}</span>
              </Link>
              <h3>{cat.name}</h3>
              <p>{cat.description}</p>
              <Link to={`/products?category=${cat.id}`} className="text-link">
                Explore Category <ArrowRight size={13} />
              </Link>
            </article>
          ))}
        </div>
      </section>

      {/* Direct Contact Support Box */}
      <section className="section not-found-help-section">
        <div className="not-found-help-card">
          <div className="not-found-help-text">
            <div className="eyebrow" style={{ color: 'var(--gold)' }}>
              <Compass size={14} style={{ display: 'inline', verticalAlign: 'middle', marginRight: '6px' }} />
              DIRECT SOURCING ASSISTANCE
            </div>
            <h3>Need Help Locating a Specific Model or Drawing?</h3>
            <p>
              Our Aligarh export desk can immediately verify model availability, custom finishes, stamping tooling, and export terms.
            </p>
          </div>

          <div className="not-found-help-links">
            <a
              href={`https://wa.me/${companyInfo.whatsapp.replace(/[^0-9]/g, '')}?text=${encodeURIComponent(
                'Hello Arpit Impex, I was looking for a page on your website and need help finding a product.'
              )}`}
              target="_blank"
              rel="noopener noreferrer"
              className="button light not-found-help-btn"
            >
              <MessageCircle size={16} /> WhatsApp Sales Desk
            </a>
            <a href={`mailto:${companyInfo.email}`} className="not-found-help-email">
              <Mail size={14} /> {companyInfo.email}
            </a>
            <a href={`tel:${companyInfo.phone}`} className="not-found-help-phone">
              <Phone size={14} /> {companyInfo.phone}
            </a>
          </div>
        </div>
      </section>
    </main>
  );
}

