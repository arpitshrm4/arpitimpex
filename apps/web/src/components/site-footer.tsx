import { Link } from 'react-router';
import { categories, companyInfo } from '@/data/catalogue';

export function SiteFooter() {
  return (
    <footer>
      <div className="footer-grid">
        <div>
          <Link to="/" className="footer-brand">
            <img
              src="/images/logo.png"
              alt="Arpit Impex"
              className="footer-logo-img"
              width="36"
              height="36"
            />
            <span>ARPIT IMPEX<span className="gold">.</span></span>
          </Link>
          <p>
            Architectural door hardware manufacturer and export supply partner based in Aligarh, India. Supplying door locks, mortise lock bodies, cylinders, and handles to B2B buyers.
          </p>
          <small>Bulk enquiries · Product specifications · Customization discussions · Export coordination</small>
        </div>
        <div>
          <h3>Explore</h3>
          <Link to="/products">All Products</Link>
          <Link to="/about">About Us</Link>
          <Link to="/process">Export Process</Link>
          <Link to="/contact">Request a B2B Quote</Link>
        </div>
        <div>
          <h3>Product Categories</h3>
          {categories.map((c) => (
            <Link key={c.id} to={`/products?category=${c.id}`}>
              {c.name}
            </Link>
          ))}
        </div>
        <div>
          <h3>Get in Touch</h3>
          <p>
            <strong>{companyInfo.name}</strong>
            <br />
            {companyInfo.location}
          </p>
          <p style={{ marginTop: '-4px', marginBottom: '8px' }}>
            <a
              href={companyInfo.googleBusinessUrl}
              target="_blank"
              rel="noopener noreferrer"
              style={{ color: 'var(--blue)', fontSize: '13px', textDecoration: 'none', fontWeight: 600 }}
            >
              📍 View on Google Maps →
            </a>
          </p>
          <p>
            Contact: {companyInfo.contactPerson}
            <br />
            Phone:{' '}
            <a href={`tel:${companyInfo.phone}`} style={{ color: 'inherit', fontWeight: 600 }}>
              {companyInfo.phone}
            </a>
            <br />
            Email:{' '}
            <a href={`mailto:${companyInfo.email}`} style={{ color: 'inherit' }}>
              {companyInfo.email}
            </a>
          </p>
          <Link to="/contact">Send Direct Enquiry →</Link>
        </div>
      </div>
      <div className="footer-bottom">
        <span>© 2026 Arpit Impex. Verified IndiaMART Supplier.</span>
        <div>
          <Link to="/privacy">Privacy Policy</Link>
          <Link to="/terms">Terms & Conditions</Link>
        </div>
      </div>
    </footer>
  );
}
