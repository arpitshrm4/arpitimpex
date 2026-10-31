import { Link, useLoaderData } from 'react-router';
import type { Route } from './+types/category';
import { products } from '@/data/catalogue';
import { CATEGORIES_DATA } from '@/data/categories-data';
import { seo, absoluteUrl, siteOriginFrom } from '@/lib/seo';
import { ProductGrid } from '@/components/product-grid';
import { EnquiryBanner } from '@/components/enquiry-banner';
import { ArrowRight, ArrowUpRight, ShieldCheck, CheckCircle2, ChevronRight, HelpCircle } from 'lucide-react';
import { NotFoundView } from '@/components/not-found-view';

export function loader({ params }: Route.LoaderArgs) {
  const categoryId = params.category;
  const categoryData = CATEGORIES_DATA[categoryId];

  if (!categoryData) {
    throw new Response('Category Not Found', { status: 404 });
  }

  const categoryProducts = products.filter((p) => p.category === categoryId);

  return { categoryData, categoryProducts };
}

export function meta({ loaderData, params, matches, location }: Route.MetaArgs) {
  const categoryData = loaderData?.categoryData ?? (params?.category ? CATEGORIES_DATA[params.category] : undefined);
  if (!categoryData) {
    return [{ title: 'Category Not Found | Arpit Impex' }];
  }

  const origin = siteOriginFrom(matches);
  const canonicalUrl = absoluteUrl(origin, `/category/${categoryData.id}`);

  return seo(
    { matches, location },
    {
      title: categoryData.metaTitle,
      description: categoryData.metaDescription,
      image: categoryData.image,
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
              name: 'Products',
              item: absoluteUrl(origin, '/products'),
            },
            {
              '@type': 'ListItem',
              position: 3,
              name: categoryData.name,
              item: canonicalUrl,
            },
          ],
        },
        {
          '@context': 'https://schema.org',
          '@type': 'CollectionPage',
          name: categoryData.name,
          description: categoryData.metaDescription,
          url: canonicalUrl,
        },
        {
          '@context': 'https://schema.org',
          '@type': 'FAQPage',
          mainEntity: categoryData.faqs.map(([q, a]: [string, string]) => ({
            '@type': 'Question',
            name: q,
            acceptedAnswer: {
              '@type': 'Answer',
              text: a,
            },
          })),
        },
      ],
    }
  );
}

export default function CategoryPage() {
  const { categoryData, categoryProducts } = useLoaderData<typeof loader>();

  return (
    <main className="category-page">
      {/* Category Hero & Breadcrumb */}
      <section className="section category-hero">
        <nav className="pdp-breadcrumbs" aria-label="Breadcrumb">
          <Link to="/">Home</Link>
          <ChevronRight size={14} className="pdp-breadcrumb-sep" />
          <Link to="/products">Products</Link>
          <ChevronRight size={14} className="pdp-breadcrumb-sep" />
          <span aria-current="page">{categoryData.shortName}</span>
        </nav>

        <div className="eyebrow category-eyebrow">
          <span />
          {categoryData.eyebrow}
        </div>

        <h1 className="category-h1">{categoryData.h1}</h1>

        <div className="category-intro-box">
          <p className="category-intro-text">{categoryData.intro}</p>

          <div className="category-quick-specs">
            <div className="category-spec-pill">
              <strong>Materials:</strong> {categoryData.materials.join(', ')}
            </div>
            <div className="category-spec-pill">
              <strong>Available Finishes:</strong> {categoryData.finishes.join(', ')}
            </div>
            <div className="category-spec-pill">
              <strong>Target Buyers:</strong> {categoryData.buyerTypes.join(', ')}
            </div>
          </div>

          <div className="category-actions">
            <Link to={`/contact?product=${encodeURIComponent(categoryData.name)}`} className="button">
              Request Category Bulk Quote <ArrowUpRight size={16} />
            </Link>
            <Link to="/brochure" className="button outline">
              Download PDF Specification Sheets <ArrowRight size={16} />
            </Link>
          </div>
        </div>
      </section>

      {/* Product Grid */}
      <section className="section category-products-section">
        <div className="section-heading">
          <div>
            <div className="eyebrow">
              <span />
              VERIFIED CATALOGUE MODELS ({categoryProducts.length})
            </div>
            <h2>Export Models &amp; Specifications</h2>
            <p>
              Each model below is available for bulk wholesale orders, custom dimensional adaptation, and export consolidation.
            </p>
          </div>
          <Link to="/products" className="text-link">
            Explore All 79 Hardware Models <ArrowRight size={14} />
          </Link>
        </div>

        <ProductGrid category={categoryData.id} />
      </section>

      {/* Category FAQs */}
      {categoryData.faqs.length > 0 && (
        <section className="section category-faq-section" style={{ background: '#f8fafc', borderTop: '1px solid var(--line)' }}>
          <div className="section-heading">
            <div>
              <div className="eyebrow">
                <span />
                FREQUENTLY ASKED QUESTIONS
              </div>
              <h2>{categoryData.shortName} Procurement FAQs</h2>
              <p>Common questions from international distributors, importers, and procurement contractors.</p>
            </div>
          </div>

          <div className="category-faqs-grid" style={{ display: 'grid', gap: '20px', maxWidth: '1000px' }}>
            {categoryData.faqs.map(([q, a]) => (
              <div key={q} style={{ background: '#ffffff', border: '1px solid var(--line)', padding: '24px', borderRadius: '4px' }}>
                <h3 style={{ fontSize: '16px', color: 'var(--navy)', marginBottom: '8px', display: 'flex', alignItems: 'flex-start', gap: '10px' }}>
                  <HelpCircle size={18} style={{ color: 'var(--blue)', flexShrink: 0, marginTop: '2px' }} />
                  {q}
                </h3>
                <p style={{ margin: 0, fontSize: '13.5px', lineHeight: '1.7', color: 'var(--quiet)', paddingLeft: '28px' }}>
                  {a}
                </p>
              </div>
            ))}
          </div>
        </section>
      )}

      {/* Direct Category Bottom Banner */}
      <EnquiryBanner />
    </main>
  );
}

export function ErrorBoundary() {
  return (
    <NotFoundView
      eyebrow="CATEGORY NOT FOUND"
      title="Hardware Category Not Found"
      message="The product category you requested could not be found. Explore our 7 core hardware categories below or view the full catalogue."
    />
  );
}
