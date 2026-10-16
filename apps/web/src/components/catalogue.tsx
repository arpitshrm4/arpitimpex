import { Form, useSearchParams } from 'react-router';
import { categories } from '@/data/catalogue';
import { ProductGrid } from '@/components/product-grid';

export function Catalogue() {
  const [params] = useSearchParams();
  const category = params.get('category') || 'all';

  return (
    <section className="section catalogue">
      <p className="eyebrow">MANUFACTURER & WHOLESALE EXPORTER</p>
      <h1>Our Products & Hardware Solutions</h1>
      <p className="section-intro">
        Browse our genuine range of heavy-duty locks, luxury door handles, computerized cylinder locks, and precision lock bodies manufactured in Aligarh, India. Get wholesale quotations, volume pricing, and custom finishes for your business.
      </p>

      <Form method="get" className="filters">
        <button
          name="category"
          value="all"
          className={category === 'all' ? 'selected' : ''}
        >
          All Products (13)
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
        Direct factory prices. Bulk wholesale orders, OEM branding, and international export packing available on request.
      </p>

      <ProductGrid category={category} />
    </section>
  );
}
