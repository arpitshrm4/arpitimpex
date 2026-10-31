import type { Route } from './+types/guides';
import { Link } from 'react-router';
import { seo, absoluteUrl, siteOriginFrom } from '@/lib/seo';
import { GUIDES_DATA } from '@/data/guides-data';
import { images } from '@/data/catalogue';
import { EnquiryBanner } from '@/components/enquiry-banner';
import { BookOpen, Clock, Calendar, ArrowRight, UserCheck, ChevronRight } from 'lucide-react';

export function meta({ matches, location }: Route.MetaArgs) {
  const origin = siteOriginFrom(matches);
  const canonicalUrl = absoluteUrl(origin, '/guides');

  return seo(
    { matches, location },
    {
      title: 'Hardware Sourcing & Export Guides | Arpit Impex',
      description:
        'Technical guides on importing door hardware from India, rim vs mortise locks, Euro cylinders, gate hinges, and shipping Incoterms (EXW, FOB, CIF).',
      image: images.pressWorkshop,
      jsonLd: [
        {
          '@context': 'https://schema.org',
          '@type': 'CollectionPage',
          name: 'Architectural Hardware Export Guides',
          url: canonicalUrl,
          description:
            'Technical guides and procurement insights for commercial hardware importers sourcing from India.',
        },
      ],
    }
  );
}

export default function GuidesIndexPage() {
  return (
    <main className="guides-page">
      <section className="section guides-hero">
        <nav className="pdp-breadcrumbs" aria-label="Breadcrumb">
          <Link to="/">Home</Link>
          <ChevronRight size={14} className="pdp-breadcrumb-sep" />
          <span aria-current="page">Hardware Guides</span>
        </nav>

        <p className="eyebrow">KNOWLEDGE BASE &amp; SOURCING INTELLIGENCE</p>
        <h1>Architectural Hardware Sourcing &amp; Export Guides</h1>
        <p className="section-intro" style={{ maxWidth: '850px', lineHeight: '1.8' }}>
          Authoritative technical resources, engineering comparisons, and logistics advice written for commercial buyers, architectural ironmongers, building contractors, and overseas importers sourcing door hardware from India.
        </p>
      </section>

      <section className="section guides-grid-section">
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))', gap: '32px' }}>
          {GUIDES_DATA.map((guide, idx) => (
            <article
              key={guide.slug}
              style={{
                background: '#fff',
                border: '1px solid var(--border)',
                borderRadius: '12px',
                padding: '32px',
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'space-between',
                boxShadow: '0 4px 16px rgba(0,0,0,0.03)',
                transition: 'transform 0.2s ease, box-shadow 0.2s ease',
              }}
            >
              <div>
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '16px' }}>
                  <span style={{ fontSize: '11px', fontWeight: 700, letterSpacing: '0.08em', textTransform: 'uppercase', color: 'var(--blue)', background: '#eff6ff', padding: '4px 10px', borderRadius: '12px' }}>
                    {guide.category}
                  </span>
                  <span style={{ display: 'flex', alignItems: 'center', gap: '4px', fontSize: '12px', color: 'var(--quiet)' }}>
                    <Clock size={13} /> {guide.readTime}
                  </span>
                </div>

                <h2 style={{ fontSize: '20px', color: 'var(--navy)', lineHeight: '1.4', marginBottom: '14px' }}>
                  <Link to={`/guides/${guide.slug}`} style={{ color: 'inherit', textDecoration: 'none' }}>
                    {guide.title}
                  </Link>
                </h2>

                <p style={{ fontSize: '14px', lineHeight: '1.65', color: 'var(--body)', marginBottom: '20px' }}>
                  {guide.summary}
                </p>
              </div>

              <div style={{ borderTop: '1px solid var(--border)', paddingTop: '16px', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                <span style={{ fontSize: '12px', color: 'var(--quiet)' }}>
                  By {guide.author} · {guide.publishedDate}
                </span>
                <Link
                  to={`/guides/${guide.slug}`}
                  className="text-link"
                  style={{ fontWeight: 600, fontSize: '13px' }}
                >
                  Read Guide <ArrowRight size={14} />
                </Link>
              </div>
            </article>
          ))}
        </div>
      </section>

      <EnquiryBanner />
    </main>
  );
}
