import type { Route } from './+types/blog-detail';
import { Link, useLoaderData } from 'react-router';
import { seo, absoluteUrl, siteOriginFrom } from '@/lib/seo';
import { BLOG_POSTS, type BlogPost } from '@/data/blog-data';
import { EnquiryBanner } from '@/components/enquiry-banner';
import { NotFoundView } from '@/components/not-found-view';
import {
  Clock,
  Calendar,
  UserCheck,
  ChevronRight,
  ArrowRight,
  ArrowLeft,
  MessageCircle,
  Mail,
  CheckCircle2,
  HelpCircle,
  Layers,
} from 'lucide-react';

export function loader({ params }: Route.LoaderArgs) {
  const post = BLOG_POSTS.find((p) => p.slug === params.slug);
  if (!post) {
    throw new Response('Post Not Found', { status: 404 });
  }

  const relatedPosts = BLOG_POSTS.filter((p) => p.slug !== post.slug).slice(0, 2);

  return { post, relatedPosts };
}

export function meta({ loaderData, params, matches, location }: Route.MetaArgs) {
  const post = loaderData?.post ?? BLOG_POSTS.find((p) => p.slug === params?.slug);
  if (!post) {
    return [{ title: 'Post Not Found | Arpit Impex' }];
  }

  const origin = siteOriginFrom(matches);
  const canonicalUrl = absoluteUrl(origin, `/blog/${post.slug}`);
  const postImageUrl = absoluteUrl(origin, post.image);

  const jsonLdBlocks: object[] = [
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
          item: absoluteUrl(origin, '/blog'),
        },
        {
          '@type': 'ListItem',
          position: 3,
          name: post.title,
          item: canonicalUrl,
        },
      ],
    },
    {
      '@context': 'https://schema.org',
      '@type': 'Article',
      headline: post.h1,
      description: post.metaDescription,
      image: [postImageUrl],
      datePublished: post.publishedDate,
      dateModified: post.publishedDate,
      author: {
        '@type': 'Person',
        name: post.author,
      },
      publisher: {
        '@type': 'Organization',
        name: 'Arpit Impex',
        logo: 'https://arpitimpex.com/images/logo.png',
      },
      mainEntityOfPage: {
        '@type': 'WebPage',
        '@id': canonicalUrl,
      },
    },
  ];

  if (post.faqs && post.faqs.length > 0) {
    jsonLdBlocks.push({
      '@context': 'https://schema.org',
      '@type': 'FAQPage',
      mainEntity: post.faqs.map(([q, a]: [string, string]) => ({
        '@type': 'Question',
        name: q,
        acceptedAnswer: {
          '@type': 'Answer',
          text: a,
        },
      })),
    });
  }

  return seo(
    { matches, location },
    {
      title: post.metaTitle,
      description: post.metaDescription,
      image: post.image,
      type: 'article',
      jsonLd: jsonLdBlocks,
    }
  );
}

export default function BlogDetailPage() {
  const { post, relatedPosts } = useLoaderData<typeof loader>();

  const waText = encodeURIComponent(
    `Hello Arpit Impex, I read your guide "${post.title}" and would like to discuss specifications and a bulk quotation.`
  );

  return (
    <main className="blog-detail-page">
      <article className="section blog-article" style={{ maxWidth: '860px', margin: '0 auto', padding: '40px 24px' }}>
        {/* Breadcrumb Navigation */}
        <nav className="pdp-breadcrumbs" aria-label="Breadcrumb" style={{ marginBottom: '24px' }}>
          <Link to="/">Home</Link>
          <ChevronRight size={14} className="pdp-breadcrumb-sep" />
          <Link to="/blog">Blog</Link>
          <ChevronRight size={14} className="pdp-breadcrumb-sep" />
          <span aria-current="page">{post.title.slice(0, 36)}...</span>
        </nav>

        {/* Header */}
        <header style={{ marginBottom: '28px', borderBottom: '1px solid var(--border)', paddingBottom: '24px' }}>
          <span style={{ fontSize: '11px', fontWeight: 700, letterSpacing: '0.08em', textTransform: 'uppercase', color: 'var(--blue)', background: '#eff6ff', padding: '4px 12px', borderRadius: '12px' }}>
            {post.category}
          </span>
          <h1 style={{ fontSize: '32px', color: 'var(--navy)', marginTop: '16px', marginBottom: '16px', lineHeight: '1.3' }}>
            {post.h1}
          </h1>
          <div style={{ display: 'flex', gap: '20px', alignItems: 'center', fontSize: '13px', color: 'var(--quiet)', flexWrap: 'wrap' }}>
            <span style={{ display: 'flex', alignItems: 'center', gap: '6px' }}>
              <UserCheck size={15} /> By {post.author}
            </span>
            <span style={{ display: 'flex', alignItems: 'center', gap: '6px' }}>
              <Calendar size={15} /> {post.publishedDate}
            </span>
            <span style={{ display: 'flex', alignItems: 'center', gap: '6px' }}>
              <Clock size={15} /> {post.readTime}
            </span>
          </div>
        </header>

        {/* Lead Real Photo from Workshop / Dispatch Area */}
        <div style={{ marginBottom: '36px', borderRadius: '12px', overflow: 'hidden', border: '1px solid var(--border)', boxShadow: '0 4px 16px rgba(0,0,0,0.04)' }}>
          <img
            src={post.image}
            alt={post.imageAlt}
            width="860"
            height="460"
            style={{ width: '100%', height: 'auto', display: 'block', objectFit: 'cover' }}
          />
          <div style={{ background: '#f8f9fa', padding: '10px 16px', fontSize: '12px', color: 'var(--quiet)', borderTop: '1px solid var(--border)' }}>
            Photo: {post.imageAlt}
          </div>
        </div>

        {/* Content Body */}
        <div
          className="guide-content-body blog-content-body"
          style={{ fontSize: '16px', lineHeight: '1.8', color: 'var(--body)' }}
          dangerouslySetInnerHTML={{ __html: post.contentHtml }}
        />

        {/* Relevant Product & Category Quick Links */}
        {post.relatedCategories && post.relatedCategories.length > 0 && (
          <div style={{ background: '#fdfbf7', border: '1px solid var(--border)', borderRadius: '10px', padding: '20px 24px', margin: '36px 0' }}>
            <span style={{ fontSize: '12px', fontWeight: 700, textTransform: 'uppercase', letterSpacing: '0.06em', color: 'var(--gold)', display: 'block', marginBottom: '8px' }}>
              RELATED HARDWARE CATEGORIES IN OUR CATALOGUE
            </span>
            <div style={{ display: 'flex', gap: '12px', flexWrap: 'wrap' }}>
              {post.relatedCategories.map((cat) => (
                <Link
                  key={cat.path}
                  to={cat.path}
                  className="button outline"
                  style={{ fontSize: '13px', padding: '8px 14px' }}
                >
                  {cat.name} <ArrowRight size={13} />
                </Link>
              ))}
            </div>
          </div>
        )}

        {/* Frequently Asked Questions */}
        {post.faqs && post.faqs.length > 0 && (
          <section className="blog-faq-section" style={{ marginTop: '48px', paddingTop: '32px', borderTop: '1px solid var(--border)' }}>
            <h2 style={{ fontSize: '24px', color: 'var(--navy)', marginBottom: '20px' }}>
              Frequently Asked Questions
            </h2>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
              {post.faqs.map(([q, a], idx) => (
                <div key={idx} style={{ background: '#f8f9fa', border: '1px solid var(--border)', borderRadius: '8px', padding: '20px' }}>
                  <h3 style={{ fontSize: '16px', fontWeight: 600, color: 'var(--navy)', marginBottom: '8px' }}>{q}</h3>
                  <p style={{ fontSize: '14px', lineHeight: 1.6, color: 'var(--body)', margin: 0 }}>{a}</p>
                </div>
              ))}
            </div>
          </section>
        )}

        {/* Closing Call to Action: Ready to request a quotation? */}
        <section className="blog-quote-cta" style={{ background: 'var(--navy)', color: '#ffffff', borderRadius: '14px', padding: '36px 32px', marginTop: '48px' }}>
          <span style={{ fontSize: '12px', letterSpacing: '0.08em', textTransform: 'uppercase', color: 'var(--gold)', fontWeight: 700 }}>
            START YOUR ORDER
          </span>
          <h2 style={{ fontSize: '26px', color: '#ffffff', margin: '8px 0 14px 0' }}>
            Ready to request a quotation?
          </h2>
          <p style={{ fontSize: '15px', lineHeight: '1.7', color: 'rgba(255,255,255,0.85)', maxWidth: '680px', marginBottom: '24px' }}>
            Send your product list, quantity and destination country, and we will review the requirement and reply with specifications, commercial terms and next steps.
          </p>

          <div style={{ display: 'flex', gap: '14px', flexWrap: 'wrap', alignItems: 'center' }}>
            <Link
              to="/contact"
              className="button"
              style={{ background: 'var(--gold)', color: 'var(--navy)', fontWeight: 700, padding: '12px 24px', textDecoration: 'none' }}
            >
              Request a B2B Quote <ArrowRight size={16} />
            </Link>
            <a
              href={`https://wa.me/918285687940?text=${waText}`}
              target="_blank"
              rel="noopener noreferrer"
              className="button outline"
              style={{ color: '#ffffff', borderColor: 'rgba(255,255,255,0.4)', padding: '12px 20px', textDecoration: 'none' }}
            >
              <MessageCircle size={16} /> WhatsApp: +91 8285687940
            </a>
            <a
              href="mailto:exports@arpitimpex.com"
              style={{ color: 'rgba(255,255,255,0.8)', fontSize: '14px', marginLeft: '8px', textDecoration: 'underline' }}
            >
              exports@arpitimpex.com
            </a>
          </div>
        </section>

        {/* Author Bio Card */}
        <div style={{ background: '#fdfbf7', border: '1px solid var(--border)', borderRadius: '12px', padding: '24px', marginTop: '40px', display: 'flex', gap: '16px', alignItems: 'center' }}>
          <div style={{ width: '48px', height: '48px', borderRadius: '50%', background: 'var(--navy)', color: '#fff', display: 'flex', alignItems: 'center', justifyContent: 'center', fontWeight: 700, fontSize: '18px', flexShrink: 0 }}>
            AS
          </div>
          <div>
            <h4 style={{ margin: 0, fontSize: '16px', color: 'var(--navy)' }}>Written by Arpit Sharma</h4>
            <p style={{ margin: '4px 0 0 0', fontSize: '13px', color: 'var(--quiet)', lineHeight: '1.5' }}>
              Founder &amp; Export Director at Arpit Impex. Dedicated to providing transparent hardware manufacturing, precision lever tooling, and container export logistics from Aligarh, India.
            </p>
          </div>
        </div>

        {/* Related Posts */}
        {relatedPosts.length > 0 && (
          <div style={{ marginTop: '48px', paddingTop: '32px', borderTop: '1px solid var(--border)' }}>
            <h3 style={{ fontSize: '20px', color: 'var(--navy)', marginBottom: '16px' }}>
              More from the Arpit Impex Blog
            </h3>
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '20px' }}>
              {relatedPosts.map((r) => (
                <article key={r.slug} style={{ background: '#fff', border: '1px solid var(--border)', borderRadius: '8px', padding: '20px', display: 'flex', flexDirection: 'column', justifyContent: 'space-between' }}>
                  <div>
                    <span style={{ fontSize: '11px', color: 'var(--blue)', fontWeight: 700, textTransform: 'uppercase' }}>{r.category}</span>
                    <h4 style={{ fontSize: '16px', margin: '8px 0 8px 0', color: 'var(--navy)' }}>
                      <Link to={`/blog/${r.slug}`} style={{ color: 'inherit', textDecoration: 'none' }}>{r.title}</Link>
                    </h4>
                    <p style={{ fontSize: '13px', color: 'var(--quiet)', lineHeight: '1.5' }}>{r.summary.slice(0, 100)}...</p>
                  </div>
                  <Link to={`/blog/${r.slug}`} className="text-link" style={{ fontSize: '13px', fontWeight: 600, marginTop: '12px' }}>
                    Read Article →
                  </Link>
                </article>
              ))}
            </div>
          </div>
        )}

        {/* Back Link */}
        <div style={{ marginTop: '40px' }}>
          <Link to="/blog" className="button outline" style={{ fontSize: '13px' }}>
            <ArrowLeft size={15} /> Back to All Articles &amp; Guides
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
      eyebrow="POST NOT FOUND"
      title="Article Not Found"
      message="The hardware guide or blog article you requested could not be located. Explore our knowledge base below or browse our catalogue."
    />
  );
}

