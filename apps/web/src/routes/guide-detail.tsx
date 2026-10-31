import type { Route } from './+types/guide-detail';
import { Link, useLoaderData } from 'react-router';
import { seo, absoluteUrl, siteOriginFrom } from '@/lib/seo';
import { GUIDES_DATA } from '@/data/guides-data';
import { images, products } from '@/data/catalogue';
import { EnquiryBanner } from '@/components/enquiry-banner';
import { NotFoundView } from '@/components/not-found-view';
import { Clock, Calendar, UserCheck, ChevronRight, ArrowRight, ArrowLeft, BookOpen } from 'lucide-react';

export function loader({ params }: Route.LoaderArgs) {
  const guide = GUIDES_DATA.find((g) => g.slug === params.slug);
  if (!guide) {
    throw new Response('Guide Not Found', { status: 404 });
  }

  const relatedPosts = GUIDES_DATA.filter((g) => g.slug !== guide.slug).slice(0, 2);
  const sampleProducts = products.filter((p) => p.category === guide.relatedCategory).slice(0, 3);

  return { guide, relatedPosts, sampleProducts };
}

export function meta({ loaderData, params, matches, location }: Route.MetaArgs) {
  const guide = loaderData?.guide ?? GUIDES_DATA.find((g) => g.slug === params?.slug);
  if (!guide) {
    return [{ title: 'Guide Not Found | Arpit Impex' }];
  }

  const origin = siteOriginFrom(matches);
  const canonicalUrl = absoluteUrl(origin, `/guides/${guide.slug}`);

  return seo(
    { matches, location },
    {
      title: guide.metaTitle,
      description: guide.metaDescription,
      image: images.pressWorkshop,
      type: 'article',
      jsonLd: [
        {
          '@context': 'https://schema.org',
          '@type': 'BreadcrumbList',
          itemListElement: [
            {
              '@type': 'ListItem',
              position: 1,
              name: 'Home',
              item: absoluteUrl(origin, '/'),
            },
            {
              '@type': 'ListItem',
              position: 2,
              name: 'Guides',
              item: absoluteUrl(origin, '/guides'),
            },
            {
              '@type': 'ListItem',
              position: 3,
              name: guide.title,
              item: canonicalUrl,
            },
          ],
        },
        {
          '@context': 'https://schema.org',
          '@type': 'Article',
          headline: guide.h1,
          description: guide.metaDescription,
          url: canonicalUrl,
          datePublished: guide.publishedDate,
          author: {
            '@type': 'Person',
            name: guide.author,
          },
          publisher: {
            '@type': 'Organization',
            name: 'Arpit Impex',
            logo: 'https://arpitimpex.com/images/logo.png',
          },
        },
      ],
    }
  );
}

export default function GuideDetailPage() {
  const { guide, relatedPosts, sampleProducts } = useLoaderData<typeof loader>();

  return (
    <main className="guide-detail-page">
      <article className="section guide-article" style={{ maxWidth: '860px', margin: '0 auto', padding: '40px 24px' }}>
        {/* Breadcrumb Navigation */}
        <nav className="pdp-breadcrumbs" aria-label="Breadcrumb" style={{ marginBottom: '24px' }}>
          <Link to="/">Home</Link>
          <ChevronRight size={14} className="pdp-breadcrumb-sep" />
          <Link to="/guides">Guides</Link>
          <ChevronRight size={14} className="pdp-breadcrumb-sep" />
          <span aria-current="page">{guide.title.slice(0, 36)}...</span>
        </nav>

        {/* Header */}
        <header style={{ marginBottom: '32px', borderBottom: '1px solid var(--border)', paddingBottom: '24px' }}>
          <span style={{ fontSize: '12px', fontWeight: 700, letterSpacing: '0.08em', textTransform: 'uppercase', color: 'var(--blue)', background: '#eff6ff', padding: '4px 12px', borderRadius: '12px' }}>
            {guide.category}
          </span>
          <h1 style={{ fontSize: '32px', color: 'var(--navy)', marginTop: '16px', marginBottom: '16px', lineHeight: '1.3' }}>
            {guide.h1}
          </h1>
          <div style={{ display: 'flex', gap: '20px', alignItems: 'center', fontSize: '13px', color: 'var(--quiet)', flexWrap: 'wrap' }}>
            <span style={{ display: 'flex', alignItems: 'center', gap: '6px' }}>
              <UserCheck size={15} /> By {guide.author}
            </span>
            <span style={{ display: 'flex', alignItems: 'center', gap: '6px' }}>
              <Calendar size={15} /> {guide.publishedDate}
            </span>
            <span style={{ display: 'flex', alignItems: 'center', gap: '6px' }}>
              <Clock size={15} /> {guide.readTime}
            </span>
          </div>
        </header>

        {/* Executive Summary */}
        <div style={{ background: '#f8f9fa', borderLeft: '4px solid var(--gold)', padding: '20px 24px', borderRadius: '8px', marginBottom: '36px', fontSize: '15px', lineHeight: '1.7', color: 'var(--navy)' }}>
          <strong>Executive Summary:</strong> {guide.summary}
        </div>

        {/* Content Body */}
        <div
          className="guide-content-body"
          style={{ fontSize: '16px', lineHeight: '1.8', color: 'var(--body)' }}
          dangerouslySetInnerHTML={{ __html: guide.contentHtml }}
        />

        {/* Author Bio Card */}
        <div style={{ background: '#fdfbf7', border: '1px solid var(--border)', borderRadius: '12px', padding: '24px', marginTop: '48px', display: 'flex', gap: '16px', alignItems: 'center' }}>
          <div style={{ width: '48px', height: '48px', borderRadius: '50%', background: 'var(--navy)', color: '#fff', display: 'flex', alignItems: 'center', justifyContent: 'center', fontWeight: 700, fontSize: '18px', flexShrink: 0 }}>
            AS
          </div>
          <div>
            <h4 style={{ margin: 0, fontSize: '16px', color: 'var(--navy)' }}>Written by Arpit Sharma</h4>
            <p style={{ margin: '4px 0 0 0', fontSize: '13px', color: 'var(--quiet)', lineHeight: '1.5' }}>
              Founder &amp; Export Director at Arpit Impex. Specialized in architectural hardware stamping, lock assembly engineering, and cross-border container logistics from Aligarh, India.
            </p>
          </div>
        </div>

        {/* Related Products from this Category */}
        {sampleProducts.length > 0 && (
          <div style={{ marginTop: '48px', paddingTop: '32px', borderTop: '1px solid var(--border)' }}>
            <h3 style={{ fontSize: '20px', color: 'var(--navy)', marginBottom: '16px' }}>
              Related Hardware from Our Export Catalogue
            </h3>
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))', gap: '16px' }}>
              {sampleProducts.map((p) => (
                <div key={p.slug} style={{ background: '#fff', border: '1px solid var(--border)', borderRadius: '8px', padding: '16px', textAlign: 'center' }}>
                  <img src={p.image} alt={p.name} width="160" height="160" style={{ objectFit: 'contain', margin: '0 auto 10px auto', display: 'block' }} loading="lazy" />
                  <h4 style={{ fontSize: '14px', margin: '0 0 6px 0', color: 'var(--navy)' }}>{p.name}</h4>
                  <span style={{ fontSize: '11px', color: 'var(--quiet)', display: 'block', marginBottom: '10px' }}>SKU: {p.modelNumber}</span>
                  <Link to={`/products/${p.slug}`} className="text-link" style={{ fontSize: '12px', fontWeight: 600 }}>
                    Specs &amp; Quote →
                  </Link>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* Back Link */}
        <div style={{ marginTop: '40px' }}>
          <Link to="/guides" className="button outline" style={{ fontSize: '13px' }}>
            <ArrowLeft size={15} /> Back to All Hardware Guides
          </Link>
        </div>
      </article>

      <EnquiryBanner />
    </main>
  );
}

export function ErrorBoundary() {
  return (
    <NotFoundView
      eyebrow="GUIDE NOT FOUND"
      title="Hardware Guide Not Found"
      message="The architectural hardware guide or article you requested could not be located. Explore our knowledge base below or browse our catalogue."
    />
  );
}
