import { useState } from 'react';
import { Link, NavLink } from 'react-router';
import { Menu, X, ArrowUpRight } from 'lucide-react';

const NAV_LINKS = [
  { to: '/', label: 'Home' },
  { to: '/products', label: 'Products' },
  { to: '/about', label: 'About Us' },
  { to: '/process', label: 'Export Process' },
  { to: '/blog', label: 'Blog' },
  { to: '/brochure', label: 'Brochure' },
  { to: '/contact', label: 'Contact' },
];

export function SiteHeader() {
  const [open, setOpen] = useState(false);

  return (
    <header
      className="site-header"
      style={{
        backgroundColor: '#ffffff',
        background: '#ffffff',
      }}
    >
      <Link className="brand" to="/" aria-label="Arpit Impex Home">
        <img
          src="/images/logo.webp"
          alt="Arpit Impex Logo"
          className="brand-logo-img"
          width="36"
          height="36"
          style={{ aspectRatio: '1 / 1' }}
        />
        <span className="brand-text">
          ARPIT IMPEX
          <small>ALIGARH · SOURCING · EXPORTS</small>
        </span>
      </Link>

      <nav
        className={`site-nav ${open ? 'is-open' : ''}`}
        aria-label="Main Navigation"
      >
        {NAV_LINKS.map((link) => (
          <NavLink
            key={link.to}
            to={link.to}
            end={link.to === '/'}
            className={({ isActive }) => (isActive ? 'active' : '')}
            onClick={() => setOpen(false)}
          >
            {link.label}
          </NavLink>
        ))}
      </nav>

      <div className="header-actions">
        <Link className="header-cta" to="/contact">
          Request Quote <ArrowUpRight size={15} />
        </Link>
        <button
          type="button"
          className="mobile-menu-toggle"
          aria-label={open ? 'Close menu' : 'Open menu'}
          aria-expanded={open}
          onClick={() => setOpen(!open)}
        >
          {open ? <X size={22} /> : <Menu size={22} />}
        </button>
      </div>
    </header>
  );
}
