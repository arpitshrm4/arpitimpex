import { Link } from 'react-router';
import { ArrowUpRight } from 'lucide-react';
import { products, type ProductItem } from '@/data/catalogue';

export function ProductGrid({
  category = 'all',
  limit,
  items,
  firstCover = false,
}: {
  category?: string;
  limit?: number;
  items?: ProductItem[];
  firstCover?: boolean;
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
          {visible.map((p, index) => {
            const isFirst = firstCover && index === 0;

            return (
              <Link
                key={p.slug}
                to={`/products/${p.slug}`}
                className={`product-card ${isFirst ? 'product-card-first' : ''}`}
              >
                <div className={`product-image-container ${isFirst ? 'image-cover' : ''}`}>
                  <img
                    src={p.image}
                    alt={`${p.name}, model ${p.modelNumber}`}
                    width="500"
                    height="435"
                    loading="lazy"
                    className={isFirst ? 'product-image-cover' : ''}
                    style={{ aspectRatio: '1.15' }}
                  />
                </div>
                <div className="product-text">
                  <div className="product-meta-header">
                    <span className="product-category-tag">{p.categoryName || 'Hardware'}</span>
                    <span className="product-model-code">{p.modelNumber}</span>
                  </div>
                  <h3 className="product-title">
                    {p.name}
                  </h3>
                  <div className="product-card-footer">
                    <span className="product-view-spec">
                      View Specifications <ArrowUpRight size={13} />
                    </span>
                  </div>
                </div>
              </Link>
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
