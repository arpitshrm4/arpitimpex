import { Link } from 'react-router';
import { images, aboutCopy, approachCopy } from '@/data/catalogue';
export function About() {
  return (
    <section className="section about-section">
      <img
        src={images.factoryEntrance}
        alt="Arpit Impex Factory Entrance and Facilities in Aligarh"
        width="800"
        height="600"
        loading="lazy"
        style={{ objectFit: 'cover' }}
      />
      <div>
        <p className="eyebrow">ABOUT ARPIT IMPEX</p>
        <h2>Architectural Hardware Supply Backed by Local Manufacturing Capability</h2>
        <p>{aboutCopy}</p>
        <p>{approachCopy}</p>
        <Link className="text-link" to="/about">Learn More About Our Capabilities & Facilities ↗</Link>
      </div>
    </section>
  );
}
