import { Link } from 'react-router';
import { ArrowUpRight } from 'lucide-react';
import { categories } from '@/data/catalogue';

export function Categories() {
  return (
    <section className="products-section">
      <div className="section-heading">
        <div>
          <p className="eyebrow">ONE PARTNER · ARCHITECTURAL HARDWARE</p>
          <h2>One partner. More possibilities.</h2>
        </div>
        <div>
          <p className="section-heading-desc">
            Explore 7 specialized manufacturing and sourcing categories from Aligarh, India — from high-security rim deadbolts to outdoor heavy-duty gate ironmongery.
          </p>
          <Link className="link-inline" to="/products">
            View All 79 Products in Catalogue <ArrowUpRight size={15} />
          </Link>
        </div>
      </div>

      <div className="category-grid" role="region" aria-label="Product Categories Carousel">
        {categories.map((c, i) => (
          <article key={c.id} className="category-card">
            <Link
              to={`/category/${c.id}`}
              className="category-card-link"
              aria-label={`Explore ${c.name} category`}
            >
              <img
                src={c.image}
                alt={`Representative ${c.name.toLowerCase()}`}
                width="500"
                height="435"
                loading="lazy"
                style={{ aspectRatio: '1.15' }}
              />
              <div className="category-overlay" />
              <div className="category-copy">
                <span className="category-num">0{i + 1} / CATEGORY</span>
                <h3>{c.name}</h3>
                <p>{c.description}</p>
                <span className="category-link-text">
                  Explore Collection <ArrowUpRight size={14} />
                </span>
              </div>
            </Link>
          </article>
        ))}
      </div>
    </section>
  );
}
