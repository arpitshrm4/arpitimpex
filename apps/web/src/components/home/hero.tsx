import { Link } from 'react-router';
import { ArrowRight, ArrowUpRight, ShieldCheck, Cog, FileText } from 'lucide-react';
import { images } from '@/data/catalogue';

export function Hero() {
  return (
    <section className="hero">
      <img
        src={images.hero}
        alt="J-Lock penta-bolt rim door lock set with solid brass keys, strike box, and decorative escutcheon plate"
        width="1024"
        height="682"
        fetchPriority="high"
        loading="eager"
        className="hero-bg-img"
        style={{ aspectRatio: '1024 / 682' }}
      />
      <div className="hero-shade" />

      <div className="hero-content">
        <p className="eyebrow light">
          <span>01</span> ALIGARH HARDWARE & SOURCING SOLUTION
        </p>
        <h1>
          Sourcing made simpler.<br />
          <span className="hero-subheading">Door Hardware from India.</span>
        </h1>
        <p className="hero-copy">
          From standard locks to custom export tooling, Arpit Impex streamlines every step: drawing reviews, high-tolerance stamping, master carton packaging, and container delivery from Aligarh, India.
        </p>

        <div className="actions">
          <Link to="/contact" className="button button-light">
            Request a B2B Quote <ArrowRight size={16} />
          </Link>
          <Link to="/products" className="button button-outline-light">
            Explore 79 Products <ArrowUpRight size={16} />
          </Link>
        </div>

        <div className="hero-highlights">
          <div className="highlight-item">
            <Cog size={15} />
            <span>Power Press Tooling</span>
          </div>
          <div className="highlight-item">
            <ShieldCheck size={15} />
            <span>Pre-Dispatch QC</span>
          </div>
          <div className="highlight-item">
            <FileText size={15} />
            <span>Direct Export (FOB/CIF)</span>
          </div>
        </div>
      </div>
    </section>
  );
}
