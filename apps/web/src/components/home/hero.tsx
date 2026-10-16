import { Link } from 'react-router';
import { ArrowRight, ArrowUpRight } from 'lucide-react';
import { images } from '@/data/catalogue';
export function Hero() {
  return (
    <section className="hero">
      <div className="hero-copy">
        <p className="eyebrow">
          <span /> ALIGARH, INDIA → B2B EXPORT SUPPLY
        </p>
        <h1>
          Architectural Door Hardware<br />
          <span>from India.</span>
        </h1>
        <p className="hero-description">
          Arpit Impex supplies door locks, mortise lock bodies, cylinders, handles and related architectural hardware to business buyers. Based in Aligarh, India, we support product enquiries, specification discussions, customization requests and export coordination for bulk orders.
        </p>
        <div className="actions">
          <Link to="/contact" className="button">
            Request a B2B Quote <ArrowRight size={18} />
          </Link>
          <Link to="/products" className="button outline">
            Explore Product Range <ArrowUpRight size={18} />
          </Link>
        </div>
        <p className="reassurance">
          Bulk enquiries <b>·</b> Product specifications <b>·</b> Customization discussions <b>·</b> Export coordination
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

