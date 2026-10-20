import { Form, Link, useSearchParams } from 'react-router';
import { FileText, Printer, ArrowRight } from 'lucide-react';
import { categories, products } from '@/data/catalogue';
import { ProductGrid } from '@/components/product-grid';

export function Catalogue() {
  const [params] = useSearchParams();
  const category = params.get('category') || 'all';

  return (
    <section className="section catalogue">
      <p className="eyebrow">ARCHITECTURAL HARDWARE CATALOGUE</p>
      <h1>Door Locks, Lock Bodies & Architectural Fittings</h1>
      <p className="section-intro">
        Browse our range of door locks, mortise lock bodies, profile cylinders, and door handles from Aligarh, India. Enquire for specifications, finish options, volume pricing, and export supply terms.
      </p>

      {/* Prominent Digital Brochure Callout Banner */}
      <div className="catalogue-brochure-banner">
        <div className="brochure-banner-content">
          <span className="brochure-banner-tag">
            <FileText size={14} /> OFFICIAL 2026 DIGITAL BROCHURE
          </span>
          <h3>Looking for our Complete Product Brochure & Specification Sheets?</h3>
          <p>
            Access the full compendium of all {products.length} catalogued architectural hardware and ironmongery items with detailed engineering dimensions, finish treatments, locking mechanisms, and print-ready export sheets.
          </p>
        </div>
        <div className="brochure-banner-actions">
          <Link to="/brochure" className="button brochure-banner-btn">
            <Printer size={16} />
            <span>Open & Print Brochure</span>
            <ArrowRight size={15} />
          </Link>
        </div>
      </div>

      <Form method="get" className="filters">
        <button
          name="category"
          value="all"
          className={category === 'all' ? 'selected' : ''}
        >
          All Products ({products.length})
        </button>
        {categories.map((c) => (
          <button
            key={c.id}
            name="category"
            value={c.id}
            className={category === c.id ? 'selected' : ''}
          >
            {c.name}
          </button>
        ))}
      </Form>

      <p className="catalogue-note">
        Bulk B2B supply catalogue. Manufacturing status, dimensional specifications, finish samples, and export packaging details are confirmed on enquiry.
      </p>

      <ProductGrid category={category} />
    </section>
  );
}
