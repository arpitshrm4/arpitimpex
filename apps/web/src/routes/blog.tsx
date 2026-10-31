import { useState } from 'react';
import { Link, useSearchParams } from 'react-router';
import type { Route } from './+types/blog';
import { seo, absoluteUrl, siteOriginFrom } from '@/lib/seo';
import { BLOG_POSTS, BLOG_CATEGORIES, type BlogPost } from '@/data/blog-data';
import { EnquiryBanner } from '@/components/enquiry-banner';
import {
  BookOpen,
  Clock,
  Calendar,
  ArrowRight,
  UserCheck,
  ChevronRight,
  Filter,
  CheckCircle2,
  FileText,
} from 'lucide-react';

export function meta({ matches, location }: Route.MetaArgs) {
  const origin = siteOriginFrom(matches);
  const canonicalUrl = absoluteUrl(origin, '/blog');

  return seo(
    { matches, location },
    {
      title: 'Hardware Export Blog & Sourcing Guides | Arpit Impex',
      description:
        'Practical guides on importing architectural door hardware, locks, cylinders, and hinges from Aligarh, India. Sourcing advice, Incoterms, and specifications.',
      image: '/images/workshop-power-press-lines.png',
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
              name: 'Blog',
              item: canonicalUrl,
            },
          ],
        },
        {
          '@context': 'https://schema.org',
          '@type': 'CollectionPage',
          name: 'Arpit Impex Hardware Blog & Sourcing Guides',
          url: canonicalUrl,
          description:
            'Articles, buying checklists, and technical comparisons for importers, distributors, and contractors sourcing door hardware from India.',
        },
      ],
    }
  );
}

export default function BlogIndexPage() {
  const [searchParams, setSearchParams] = useSearchParams();
  const selectedCategory = searchParams.get('category') || 'All';

  const filteredPosts = selectedCategory === 'All'
    ? BLOG_POSTS
    : BLOG_POSTS.filter((p) => p.category === selectedCategory);

  return (
    <main className="blog-index-page">
      {/* Blog Hero & Breadcrumbs */}
      <section className="section blog-hero">
        <nav className="pdp-breadcrumbs" aria-label="Breadcrumb">
          <Link to="/">Home</Link>
          <ChevronRight size={14} className="pdp-breadcrumb-sep" aria-hidden="true" />
          <span aria-current="page">Blog</span>
        </nav>

        <p className="eyebrow">PRACTICAL HARDWARE SOURCING INSIGHTS</p>
        <h1>Arpit Impex Hardware Blog &amp; Sourcing Guides</h1>
        <p className="section-intro" style={{ maxWidth: '850px', lineHeight: '1.8' }}>
          Real-world export advice, technical specifications, and procurement checklists for overseas importers, building material distributors, and project contractors sourcing architectural door hardware from Aligarh, India.
        </p>

        {/* Category Filter Pills */}
        <div className="filters" style={{ marginTop: '24px' }}>
          {BLOG_CATEGORIES.map((cat) => {
            const isSelected = selectedCategory === cat;
            return (
              <button
                key={cat}
                type="button"
                className={`filters-btn ${isSelected ? 'selected' : ''}`}
                onClick={() => {
                  if (cat === 'All') {
                    setSearchParams({});
                  } else {
                    setSearchParams({ category: cat });
                  }
                }}
              >
                {cat}
              </button>
            );
          })}
        </div>
      </section>

      {/* Blog Posts Grid */}
      <section className="section blog-posts-section" style={{ paddingTop: 0 }}>
        {filteredPosts.length === 0 ? (
          <div style={{ textAlign: 'center', padding: '60px 20px', background: '#f8f9fa', borderRadius: '12px' }}>
            <h3>No articles published in this category yet.</h3>
            <p style={{ color: 'var(--body)' }}>Check back soon as we publish 2 new technical guides each month.</p>
            <button
              type="button"
              className="button outline"
              onClick={() => setSearchParams({})}
              style={{ marginTop: '16px' }}
            >
              View All Articles
            </button>
          </div>
        ) : (
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(340px, 1fr))', gap: '32px' }}>
            {filteredPosts.map((post) => (
              <article
                key={post.slug}
                className="blog-card"
                style={{
                  background: '#ffffff',
                  border: '1px solid var(--border)',
                  borderRadius: '12px',
                  overflow: 'hidden',
                  display: 'flex',
                  flexDirection: 'column',
                  justifyContent: 'space-between',
                  boxShadow: '0 4px 16px rgba(0,0,0,0.03)',
                  transition: 'transform 0.2s ease, box-shadow 0.2s ease',
                }}
              >
                <div>
                  <Link to={`/blog/${post.slug}`} className="photo-link" style={{ display: 'block', height: '220px', background: '#f8f9fa', overflow: 'hidden' }}>
                    <img
                      src={post.image}
                      alt={post.imageAlt}
                      width="600"
                      height="340"
                      loading="lazy"
                      style={{ width: '100%', height: '100%', objectFit: 'cover' }}
                    />
                  </Link>
                  <div style={{ padding: '24px 24px 0 24px' }}>
                    <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '12px' }}>
                      <span style={{ fontSize: '11px', fontWeight: 700, letterSpacing: '0.08em', textTransform: 'uppercase', color: 'var(--blue)', background: '#eff6ff', padding: '4px 10px', borderRadius: '12px' }}>
                        {post.category}
                      </span>
                      <span style={{ display: 'flex', alignItems: 'center', gap: '4px', fontSize: '12px', color: 'var(--quiet)' }}>
                        <Clock size={13} /> {post.readTime}
                      </span>
                    </div>

                    <h2 style={{ fontSize: '20px', color: 'var(--navy)', lineHeight: '1.4', marginBottom: '12px' }}>
                      <Link to={`/blog/${post.slug}`} style={{ color: 'inherit', textDecoration: 'none' }}>
                        {post.title}
                      </Link>
                    </h2>

                    <p style={{ fontSize: '14px', lineHeight: '1.65', color: 'var(--body)', marginBottom: '16px' }}>
                      {post.summary}
                    </p>
                  </div>
                </div>

                <div style={{ padding: '16px 24px 24px 24px', borderTop: '1px solid var(--border)', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                  <span style={{ fontSize: '12px', color: 'var(--quiet)' }}>
                    By {post.author} · {post.publishedDate}
                  </span>
                  <Link
                    to={`/blog/${post.slug}`}
                    className="text-link"
                    style={{ fontWeight: 600, fontSize: '13px' }}
                  >
                    Read Guide <ArrowRight size={14} />
                  </Link>
                </div>
              </article>
            ))}
          </div>
        )}
      </section>

      {/* Editorial Calendar / Upcoming Topics Callout */}
      <section className="section blog-calendar-section" style={{ background: '#fdfbf7', padding: '48px 32px', borderRadius: '16px', margin: '40px auto', maxWidth: '1200px', border: '1px solid var(--border)' }}>
        <div style={{ maxWidth: '800px', margin: '0 auto', textAlign: 'center' }}>
          <p className="eyebrow">EDITORIAL ROADMAP · 2 POSTS PER MONTH</p>
          <h2 style={{ fontSize: '26px', color: 'var(--navy)', marginBottom: '12px' }}>Upcoming Export Sourcing Topics</h2>
          <p style={{ fontSize: '15px', lineHeight: '1.7', color: 'var(--body)', marginBottom: '28px' }}>
            We share practical engineering data, tolerance specs, and logistics guides drawn directly from our Aligarh factory floor and export consignments.
          </p>
        </div>

        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '16px', maxWidth: '960px', margin: '0 auto' }}>
          <div style={{ background: '#ffffff', padding: '16px 20px', borderRadius: '8px', border: '1px solid var(--border)', display: 'flex', gap: '12px', alignItems: 'flex-start' }}>
            <CheckCircle2 size={18} color="var(--gold)" style={{ flexShrink: 0, marginTop: '2px' }} />
            <div>
              <strong style={{ fontSize: '14px', color: 'var(--navy)', display: 'block' }}>Door Handle Finishes Compared</strong>
              <span style={{ fontSize: '12px', color: 'var(--quiet)' }}>Brushed Gold, Matte Black, Antique Brass &amp; Chrome</span>
            </div>
          </div>

          <div style={{ background: '#ffffff', padding: '16px 20px', borderRadius: '8px', border: '1px solid var(--border)', display: 'flex', gap: '12px', alignItems: 'flex-start' }}>
            <CheckCircle2 size={18} color="var(--gold)" style={{ flexShrink: 0, marginTop: '2px' }} />
            <div>
              <strong style={{ fontSize: '14px', color: 'var(--navy)', display: 'block' }}>Pre-Dispatch Inspection Checklist</strong>
              <span style={{ fontSize: '12px', color: 'var(--quiet)' }}>What to verify before container departure</span>
            </div>
          </div>

          <div style={{ background: '#ffffff', padding: '16px 20px', borderRadius: '8px', border: '1px solid var(--border)', display: 'flex', gap: '12px', alignItems: 'flex-start' }}>
            <CheckCircle2 size={18} color="var(--gold)" style={{ flexShrink: 0, marginTop: '2px' }} />
            <div>
              <strong style={{ fontSize: '14px', color: 'var(--navy)', display: 'block' }}>Barrel, Tower &amp; Padbolts Differences</strong>
              <span style={{ fontSize: '12px', color: 'var(--quiet)' }}>Throw travel, mounting styles &amp; padlocking</span>
            </div>
          </div>

          <div style={{ background: '#ffffff', padding: '16px 20px', borderRadius: '8px', border: '1px solid var(--border)', display: 'flex', gap: '12px', alignItems: 'flex-start' }}>
            <CheckCircle2 size={18} color="var(--gold)" style={{ flexShrink: 0, marginTop: '2px' }} />
            <div>
              <strong style={{ fontSize: '14px', color: 'var(--navy)', display: 'block' }}>Private Label Door Hardware (OEM)</strong>
              <span style={{ fontSize: '12px', color: 'var(--quiet)' }}>Tooling, laser branding &amp; custom box packaging</span>
            </div>
          </div>
        </div>
      </section>

      {/* Enquiry Banner */}
      <EnquiryBanner />
    </main>
  );
}

