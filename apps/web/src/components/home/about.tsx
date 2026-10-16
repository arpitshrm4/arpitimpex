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
        <h2>Connecting Buyers with<br/>Products from India</h2>
        <p>{aboutCopy}</p>
        <p>{approachCopy}</p>
        <Link className="text-link" to="/about">Explore Our Infrastructure & Facilities ↗</Link>
      </div>
    </section>
  );
}
