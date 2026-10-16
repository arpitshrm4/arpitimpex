import { Link } from 'react-router';
import { ArrowUpRight, MessageCircle } from 'lucide-react';
import { products } from '@/data/catalogue';

export function ProductGrid({ category = 'all' }: { category?: string }) {
  const visible = products.filter(
    (p) => category === 'all' || p.category === category
  );

  return (
    <>
      {visible.length ? (
        <div className="product-grid">
          {visible.map((p) => {
            const waText = encodeURIComponent(
              `Hello Arpit Impex, I am interested in "${p.name}". Please provide wholesale pricing, MOQ, and availability.`
            );
            return (
              <article key={p.slug} className="product-card">
                <div className="product-image-container">
                  <img
                    src={p.image}
                    alt={p.name}
                    width="500"
                    height="500"
                    loading="lazy"
                  />
                </div>
                <div className="product-text">
                  <span className="product-category-tag">{p.categoryName || 'Hardware'}</span>
                  <h3>{p.name}</h3>
                  <p className="product-desc">{p.description}</p>
                  <div className="product-actions">
                    <Link
                      className="button-product-quote"
                      to={`/contact?product=${encodeURIComponent(p.name)}`}
                    >
                      Request Quote <ArrowUpRight size={14} />
                    </Link>
                    <a
                      className="button-product-whatsapp"
                      href={`https://wa.me/918285687940?text=${waText}`}
                      target="_blank"
                      rel="noopener noreferrer"
                      title="Enquire on WhatsApp"
                      aria-label="Enquire on WhatsApp"
                    >
                      <MessageCircle size={15} />
                      <span>WhatsApp</span>
                    </a>
                  </div>
                </div>
              </article>
            );
          })}
        </div>
      ) : (
        <p className="no-products-msg">
          No items found in this category. Please contact us for custom hardware sourcing.
        </p>
      )}
    </>
  );
}
