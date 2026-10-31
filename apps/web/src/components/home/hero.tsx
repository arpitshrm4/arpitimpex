import { Link } from 'react-router';
import { ArrowRight, ArrowUpRight } from 'lucide-react';
import { images } from '@/data/catalogue';
export function Hero() {
  return (
    <section className="hero">
      <div className="hero-copy">
        <p className="eyebrow">
          <span /> ARCHITECTURAL HARDWARE · ALIGARH, INDIA
        </p>
        <h1>
          Door Lock & Architectural Hardware<br />
          <span>Exporter from India</span>
        </h1>
        <p className="hero-description">
          Arpit Impex supplies door locks, mortise lock bodies, cylinders, handles and related architectural hardware to importers, distributors, wholesalers and project buyers. Based in Aligarh, India, we support bulk enquiries, product-specification reviews, customization discussions and export coordination.
        </p>
        <div className="actions">
          <Link to="/contact" className="button">
            Request a B2B Quote <ArrowRight size={18} />
          </Link>
          <Link to="/products" className="button outline">
            Explore Products <ArrowUpRight size={18} />
          </Link>
        </div>
        <p className="reassurance">
          Bulk supply <b>·</b> Model-level specifications <b>·</b> Customization enquiries <b>·</b> Export coordination
        </p>
      </div>
      <div className="hero-media">
        <img
          src={images.hero}
          alt="J-Lock penta-bolt rim door lock set with solid brass keys, strike box, and decorative escutcheon plate"
          width="1024"
          height="682"
          fetchPriority="high"
        />
        <div className="image-caption">
          <span>ALIGARH MANUFACTURING & EXPORT SUPPLY</span>
          <span>01 / ARCHITECTURAL HARDWARE</span>
        </div>
        <div className="image-label">
          From India.<br />
          <strong>Direct B2B Supply.</strong>
        </div>
      </div>
    </section>
  );
}

