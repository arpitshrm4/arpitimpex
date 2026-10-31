import { Form, Link, useSearchParams } from 'react-router';
import { FileText, Printer, ArrowRight } from 'lucide-react';
import { categories, products } from '@/data/catalogue';
import { ProductGrid } from '@/components/product-grid';

export function Catalogue() {
  const [params] = useSearchParams();
  const category = params.get('category') || 'all';

  return (
    <section className="section catalogue">
      <p className="eyebrow">ARCHITECTURAL HARDWARE EXPORT CATALOGUE</p>
      <h1>Door Locks, Hinges, Bolts &amp; Gate Hardware from India</h1>
      <p className="section-intro" style={{ maxWidth: '880px', lineHeight: '1.8' }}>
        Browse our comprehensive export catalogue of {products.length} architectural door locks, precision euro cylinders, luxury lever handles, heavy-duty T-hinges, galvanized padbolts, and gate latches manufactured in Aligarh, India. Serving international importers, regional building material wholesalers, and institutional contractors, Arpit Impex provides verified dimensional drawings, surface electroplating options, and flexible OEM private-label packaging with full container export coordination.
      </p>

      {/* Prominent Digital Brochure Callout Banner */}
      <div className="catalogue-brochure-banner">
        <div className="brochure-banner-content">
          <span className="brochure-banner-tag">
            <FileText size={14} /> OFFICIAL 2026 DIGITAL BROCHURE
          </span>
          <h3>Looking for our Complete Product Brochure &amp; Specification Sheets?</h3>
          <p>
            Access the full compendium of all {products.length} catalogued architectural hardware and ironmongery items with detailed engineering dimensions, finish treatments, locking mechanisms, and print-ready export sheets.
          </p>
        </div>
        <div className="brochure-banner-actions">
          <Link to="/brochure" className="button brochure-banner-btn">
            <Printer size={16} />
            <span>Open &amp; Print Brochure</span>
            <ArrowRight size={15} />
          </Link>
        </div>
      </div>

      <div className="filters">
        <Link
          to="/products"
          className={category === 'all' ? 'selected' : ''}
        >
          All Products ({products.length})
        </Link>
        {categories.map((c) => (
          <Link
            key={c.id}
            to={`/category/${c.id}`}
            className={category === c.id ? 'selected' : ''}
          >
            {c.name}
          </Link>
        ))}
      </div>

      <p className="catalogue-note">
        Bulk B2B supply catalogue. Manufacturing status, dimensional specifications, finish samples, and export packaging details are confirmed on enquiry.
      </p>

      <ProductGrid category={category} />
    </section>
  );
}
