import { Form, useSearchParams } from 'react-router';
import { categories } from '@/data/catalogue';
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
        Bulk B2B supply catalogue. Manufacturing status, dimensional specifications, finish samples, and export packaging details are confirmed on enquiry.
      </p>

      <ProductGrid category={category} />
    </section>
  );
}
