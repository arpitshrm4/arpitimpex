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
      image: '/images/press-workshop.webp',
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
          <div style={{ textAlign: 'center', padding: '60px 20px', background: '#f8f9fa', borderRadius: 0 }}>
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
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(340px, 420px))', gap: '32px' }}>
            {filteredPosts.map((post) => (
              <article
                key={post.slug}
                className="blog-card"
                style={{
                  background: '#ffffff',
                  border: '1px solid var(--line)',
                  borderRadius: 0,
                  overflow: 'hidden',
                  display: 'flex',
                  flexDirection: 'column',
                  justifyContent: 'space-between',
                  boxShadow: '0 4px 20px rgba(23, 19, 16, 0.04)',
                  transition: 'transform 0.2s ease, box-shadow 0.2s ease',
                }}
              >
                <div>
                  <Link to={`/blog/${post.slug}`} className="blog-card-media">
                    <img
                      src={post.image}
                      alt={post.imageAlt}
                      width="800"
                      height="450"
                      loading="lazy"
                      className="blog-card-img"
                    />
                  </Link>
                  <div style={{ padding: '24px 24px 0 24px' }}>
                    <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '12px' }}>
                      <span style={{ fontSize: '11px', fontWeight: 600, letterSpacing: '0.08em', textTransform: 'uppercase', color: 'var(--ink)', background: 'rgba(23, 19, 16, 0.06)', padding: '4px 12px', borderRadius: 0 }}>
                        {post.category}
                      </span>
                      <span style={{ display: 'flex', alignItems: 'center', gap: '4px', fontSize: '12px', color: 'var(--quiet)' }}>
                        <Clock size={13} /> {post.readTime}
                      </span>
                    </div>

                    <h2 style={{ fontSize: '20px', color: 'var(--ink)', lineHeight: '1.4', marginBottom: '12px', letterSpacing: '-0.02em', fontWeight: 600 }}>
                      <Link to={`/blog/${post.slug}`} style={{ color: 'inherit', textDecoration: 'none' }}>
                        {post.title}
                      </Link>
                    </h2>

                    <p style={{ fontSize: '14px', lineHeight: '1.65', color: 'var(--body)', marginBottom: '16px' }}>
                      {post.summary}
                    </p>
                  </div>
                </div>

                <div style={{ padding: '16px 24px 24px 24px', borderTop: '1px solid var(--line)', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
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

      {/* Enquiry Banner */}
      <EnquiryBanner />
    </main>
  );
}

