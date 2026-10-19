import { Link } from 'react-router';
import { Phone, Mail, ArrowRight } from 'lucide-react';
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
          <Link to="/brochure">Product Brochure (PDF)</Link>
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
              style={{ color: 'var(--blue)', fontSize: '12px', textDecoration: 'none', fontWeight: 600 }}
            >
              📍 View on Google Maps →
            </a>
          </p>
          <div className="footer-contact-list">
            <div className="footer-contact-item">
              <span style={{ color: 'var(--quiet)', fontSize: '12px' }}>Contact:</span>
              <strong style={{ color: 'var(--navy)', fontSize: '12px' }}>{companyInfo.contactPerson}</strong>
            </div>
            <div className="footer-contact-item">
              <Phone size={14} style={{ color: 'var(--blue)', flexShrink: 0 }} />
              <a href={`tel:${companyInfo.phone}`} className="footer-contact-link">
                {companyInfo.phone}
              </a>
            </div>
            <div className="footer-contact-item">
              <Mail size={14} style={{ color: 'var(--blue)', flexShrink: 0 }} />
              <a href={`mailto:${companyInfo.email}`} className="footer-contact-link">
                {companyInfo.email}
              </a>
            </div>
          </div>
          <div className="footer-whatsapp-card">
            <a
              href="https://wa.me/918285687940"
              target="_blank"
              rel="noopener noreferrer"
              className="footer-qr-img-link"
              title="Open WhatsApp chat with Arpit Impex"
              aria-label="Scan or click WhatsApp QR Code"
            >
              <img
                src="/images/whatsapp-qr.png"
                alt="Scan WhatsApp QR code for quick business connect"
                width="64"
                height="64"
                className="footer-qr-code"
                loading="lazy"
              />
            </a>
            <div className="footer-qr-info">
              <span className="footer-qr-title">Quick WhatsApp Connect</span>
              <span className="footer-qr-sub">Scan QR or click to chat with sales desk</span>
              <a
                href="https://wa.me/918285687940"
                target="_blank"
                rel="noopener noreferrer"
                className="footer-qr-link"
              >
                Chat: +91 8285687940 ↗
              </a>
            </div>
          </div>
          <Link to="/contact" className="footer-enquiry-btn">
            Send Direct Enquiry <ArrowRight size={14} />
          </Link>
        </div>
      </div>
      <div className="footer-bottom">
        <span>© 2026 Arpit Impex. B2B hardware enquiries · Manufacturing and export supply from Aligarh, India</span>
        <div>
          <Link to="/privacy">Privacy Policy</Link>
          <Link to="/terms">Terms & Conditions</Link>
        </div>
      </div>
    </footer>
  );
}
