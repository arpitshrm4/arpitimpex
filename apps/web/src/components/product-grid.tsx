import { Link } from 'react-router';
import { ArrowUpRight, MessageCircle } from 'lucide-react';
import { products, type ProductItem } from '@/data/catalogue';

export function ProductGrid({
  category = 'all',
  limit,
  items,
}: {
  category?: string;
  limit?: number;
  items?: ProductItem[];
}) {
  const base = items ?? products;
  const filtered = base.filter(
    (p) => category === 'all' || p.category === category
  );
  const visible = limit ? filtered.slice(0, limit) : filtered;

  return (
    <>
      {visible.length ? (
        <div className="product-grid">
          {visible.map((p) => {
            const waText = encodeURIComponent(
              `Hello Arpit Impex, I would like to enquire about bulk supply and specifications for ${p.name} (${p.modelNumber}).`
            );

            return (
              <article key={p.slug} className="product-card">
                <div className="product-image-container">
                  <Link to={`/products/${p.slug}`} className="product-image-link" aria-label={`View specifications for ${p.name}`}>
                    <img
                      src={p.image}
                      alt={`${p.name}, model ${p.modelNumber}`}
                      width="500"
                      height="500"
                      loading="lazy"
                    />
                  </Link>
                  <span className="product-source-badge source-enquiry">
                    Available on enquiry
                  </span>
                </div>
                <div className="product-text">
                  <div className="product-meta-header">
                    <span className="product-category-tag">{p.categoryName || 'Hardware'}</span>
                    <span className="product-model-code">SKU: {p.modelNumber}</span>
                  </div>
                  <h3>
                    <Link to={`/products/${p.slug}`} className="product-title-link">
                      {p.name}
                    </Link>
                  </h3>
                  <p className="product-desc">{p.description}</p>
                  <div style={{ marginBottom: '14px' }}>
                    <Link to={`/products/${p.slug}`} className="product-view-spec-link">
                      View Full Specifications & Drawings →
                    </Link>
                  </div>
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
