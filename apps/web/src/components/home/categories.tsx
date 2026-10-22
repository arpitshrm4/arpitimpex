import { Link } from 'react-router';
import { ArrowUpRight } from 'lucide-react';
import { categories } from '@/data/catalogue';
export function Categories() {
  return (
    <section className="section">
      <div className="section-heading">
        <div>
          <p className="eyebrow">OUR PRODUCT CATEGORIES</p>
          <h2>Find the Right Products</h2>
          <p>Explore our hardware categories and tell us what your business needs.</p>
        </div>
        <Link className="text-link" to="/products">
          View all products <ArrowUpRight size={18} />
        </Link>
      </div>
      <div className="category-grid">
        {categories.map((c, i) => (
          <article key={c.id} className="category-card">
            <Link
              className="photo-link"
              to={`/products?category=${c.id}`}
              aria-label={`View ${c.name} category`}
            >
              <img
                src={c.image}
                alt={`Representative ${c.name.toLowerCase()}`}
                width="640"
                height="480"
                loading="lazy"
              />
              <span className="category-num">0{i + 1}</span>
            </Link>
            <h3>{c.name}</h3>
            <p>{c.description}</p>
            <Link className="text-link" to={`/products?category=${c.id}`}>
              View Products <ArrowUpRight size={16} />
            </Link>
          </article>
        ))}
      </div>
    </section>
  );
}
