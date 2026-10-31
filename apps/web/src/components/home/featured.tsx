import { Link } from 'react-router';
import { ArrowRight } from 'lucide-react';
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
    <section className="section featured">
      <div className="section-heading">
        <div>
          <p className="eyebrow">FEATURED HARDWARE HIGHLIGHTS</p>
          <h2>Featured Hardware from Aligarh</h2>
          <p className="section-intro" style={{ marginBottom: 0 }}>
            Selected high-demand door locks, mortise cylinders, architectural handles, and heavy-duty ironmongery.
          </p>
        </div>
        <Link to="/products" className="button outline" style={{ whiteSpace: 'nowrap', alignSelf: 'flex-start' }}>
          View Full Catalogue ({products.length} Products) <ArrowRight size={16} />
        </Link>
      </div>

      <ProductGrid items={featuredProducts} limit={8} />

      <div style={{ textAlign: 'center', marginTop: '40px' }}>
        <Link to="/products" className="button" style={{ padding: '16px 32px' }}>
          Explore All {products.length} Products in Catalogue <ArrowRight size={18} />
        </Link>
      </div>
    </section>
  );
}
