import { Link } from 'react-router';
import { images, aboutCopy, approachCopy } from '@/data/catalogue';
export function About() {
  return (
    <section className="section about-section">
      <img
        src={images.factoryEntrance}
        alt="Arpit Impex Factory Entrance and Facilities in Aligarh"
        width="800"
        height="571"
        loading="lazy"
        style={{ objectFit: 'cover', aspectRatio: '1.4' }}
      />
      <div>
        <p className="eyebrow">ABOUT ARPIT IMPEX</p>
        <h2>Architectural Hardware Supply from Aligarh, India</h2>
        <p>{aboutCopy}</p>
        <p>{approachCopy}</p>
        <Link className="text-link" to="/about">Learn More About Our Capabilities & Facilities ↗</Link>
      </div>
    </section>
  );
}
