import { Link } from 'react-router';
import { images, aboutCopy, approachCopy } from '@/data/catalogue';
export function About(){return <section className="section about-section"><img src={images.handles} alt="Brushed metal door handles and brass cabinet fittings on a neutral surface" width="800" height="600" loading="lazy"/><div><p className="eyebrow">ABOUT ARPIT IMPEX</p><h2>Connecting Buyers with<br/>Products from India</h2><p>{aboutCopy}</p><p>{approachCopy}</p><Link className="text-link" to="/about">Get to know Arpit Impex ↗</Link></div></section>}
