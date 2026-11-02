import { Link } from 'react-router';
import { ArrowRight, ArrowUpRight } from 'lucide-react';
import { ProductGrid } from '@/components/product-grid';
import { products } from '@/data/catalogue';

const FEATURED_SLUGS = [
  'j-lock-mild-steel-door-penta-bolt-lock-set',
  '6-lever-zinc-alloy-single-chal-mortise-lock',
  'euro-cylinder-lock-numbered-keys',
  '160mm-brushed-gold-door-handle',
  'matte-black-heavy-duty-t-hinge',
  'heavy-duty-galvanized-sliding-barrel-bolt-latch',
  'heavy-duty-black-metal-hasp-hinge-latch',
  'solid-brass-architectural-barrel-tower-bolt',
];

export function Featured() {
  const featuredProducts = FEATURED_SLUGS
    .map((slug) => products.find((p) => p.slug === slug))
    .filter((p): p is NonNullable<typeof p> => Boolean(p));

  return (
    <section className="featured-section">
      <div className="section-heading">
        <div>
          <p className="eyebrow">CURATED EXPORT HIGHLIGHTS</p>
          <h2>Products we recommend first.</h2>
        </div>
        <div>
          <p className="section-heading-desc">
            High-demand architectural locks, brass cylinders, handles, and forged gate ironmongery proven with overseas buyers and bulk distributors.
          </p>
          <Link to="/products" className="link-inline">
            Explore All {products.length} Products <ArrowUpRight size={15} />
          </Link>
        </div>
      </div>

      <ProductGrid items={featuredProducts} limit={8} firstCover={true} />

      <div className="featured-bottom-cta">
        <Link to="/products" className="button button-dark">
          Browse Full Export Catalogue ({products.length} Items) <ArrowRight size={16} />
        </Link>
      </div>
    </section>
  );
}
