import { Link, useLoaderData } from 'react-router';
import type { Route } from './+types/product-detail';
import { products, categories, companyInfo, images, type ProductItem } from '@/data/catalogue';
import { seo, absoluteUrl, siteOriginFrom } from '@/lib/seo';
import { ArrowUpRight, MessageCircle, CheckCircle, ShieldCheck, HelpCircle, Package, ArrowLeft } from 'lucide-react';
import { EnquiryBanner } from '@/components/enquiry-banner';

export function loader({ params }: Route.LoaderArgs) {
  const product = products.find((p) => p.slug === params.slug);
  if (!product) {
    throw new Response('Product Not Found', { status: 404 });
  }
  return { product };
}

export function meta({ data, params, matches, location }: Route.MetaArgs) {
  const product = data?.product ?? products.find((p) => p.slug === params?.slug);
  if (!product) {
    return [{ title: 'Product Not Found | Arpit Impex' }];
  }
  const origin = siteOriginFrom(matches);
  const canonicalUrl = absoluteUrl(origin, `/products/${product.slug}`);
  const productImageUrl = absoluteUrl(origin, product.image);

  return seo(
    { matches, location },
    {
      title: `${product.name} ${product.modelNumber} | Arpit Impex`,
      description: `View specifications and bulk supply options for ${product.name} (${product.modelNumber}) from Arpit Impex, India. Ask about materials, finishes, packaging, MOQ and export quotation.`,
      image: product.image,
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
              name: product.categoryName,
              item: absoluteUrl(origin, `/products?category=${product.category}`),
            },
            {
              '@type': 'ListItem',
              position: 4,
              name: product.name,
              item: canonicalUrl,
            },
          ],
        },
        {
          '@context': 'https://schema.org',
          '@type': 'Product',
          name: product.name,
          image: [productImageUrl],
          description: product.description,
          sku: product.modelNumber,
          mpn: product.modelNumber,
          category: product.categoryName,
          brand: {
            '@type': 'Brand',
            name: 'Arpit Impex',
          },
          manufacturer: {
            '@type': 'Organization',
            name: 'Arpit Impex',
            url: 'https://arpitimpex.com',
          },
        },
      ],
    }
  );
}

export default function ProductDetailPage() {
  const { product } = useLoaderData<typeof loader>();

  const waText = encodeURIComponent(
    `Hello Arpit Impex, I would like to enquire about bulk supply and specifications for ${product.name} (${product.modelNumber}).`
  );

  const relatedProducts = products
    .filter((p) => p.category === product.category && p.slug !== product.slug)
    .slice(0, 3);

  const sourceBadgeClass =
    product.sourceStatus === 'Manufactured by Arpit Impex'
      ? 'source-inhouse'
      : product.sourceStatus === 'Partner-sourced'
      ? 'source-partner'
      : 'source-enquiry';

  return (
    <main className="product-detail-page">
      {/* Breadcrumb Navigation */}
      <nav aria-label="Breadcrumb" className="breadcrumbs-nav">
        <div className="breadcrumbs-container">
          <Link to="/">Home</Link>
          <span className="breadcrumb-separator">/</span>
          <Link to="/products">Products</Link>
          <span className="breadcrumb-separator">/</span>
          <Link to={`/products?category=${product.category}`}>{product.categoryName}</Link>
          <span className="breadcrumb-separator">/</span>
          <span className="breadcrumb-current" aria-current="page">
            {product.name} ({product.modelNumber})
          </span>
        </div>
      </nav>

      {/* Main PDP Hero */}
      <section className="product-pdp-hero">
        <div className="pdp-grid">
          {/* Visual Column */}
          <div className="pdp-gallery-column">
            <div className="pdp-main-image-wrap">
              <img
                src={product.image}
                alt={`${product.name} model ${product.modelNumber}, architectural door hardware from Arpit Impex`}
                width="700"
                height="700"
                loading="eager"
              />
              <span className={`product-source-badge ${sourceBadgeClass}`}>
                {product.sourceStatus}
              </span>
            </div>
            <p className="pdp-image-note">
              SKU photo from our Aligarh catalogue. Surface finish samples and technical drawings are provided during quotation discussions.
            </p>

            <div className="pdp-highlights-box">
              <div className="highlight-item">
                <span className="highlight-label">Category</span>
                <strong className="highlight-val">{product.categoryName}</strong>
              </div>
              <div className="highlight-item">
                <span className="highlight-label">Model No.</span>
                <strong className="highlight-val">{product.modelNumber}</strong>
              </div>
              <div className="highlight-item">
                <span className="highlight-label">Standard Keys</span>
                <strong className="highlight-val">{product.keys}</strong>
              </div>
              <div className="highlight-item">
                <span className="highlight-label">Primary Material</span>
                <strong className="highlight-val">{product.material}</strong>
              </div>
            </div>
          </div>

          {/* Details & Enquiries Column */}
          <div className="pdp-info-column">
            <div className="pdp-header">
              <span className="product-category-tag">{product.categoryName}</span>
              <h1 className="pdp-title">{product.name}</h1>
              <p className="pdp-sku-badge">Item / Model Code: <strong>{product.modelNumber}</strong></p>
            </div>

            {/* Sourcing Clarification Card */}
            <div className="pdp-source-card">
              <div className="source-card-header">
                {product.sourceStatus === 'Manufactured by Arpit Impex' ? (
                  <ShieldCheck size={20} className="source-icon inhouse" />
                ) : (
                  <CheckCircle size={20} className="source-icon partner" />
                )}
                <strong>Manufacturing & Sourcing Status</strong>
              </div>
              <p className="source-card-body">
                {product.sourceStatus === 'Manufactured by Arpit Impex' ? (
                  <>
                    <strong>Manufactured by Arpit Impex:</strong> Fabricated in our Aligarh workshop utilizing mechanical power press tooling, stamping dies, and assembly checks.
                  </>
                ) : product.sourceStatus === 'Partner-sourced' ? (
                  <>
                    <strong>Partner-Sourced Supply:</strong> Supplied through verified local production partners under Arpit Impex specification management, visual inspection, and export coordination.
                  </>
                ) : (
                  <>
                    <strong>Available on B2B Enquiry:</strong> Available for commercial supply. Exact manufacturing and sourcing details confirmed upon enquiry.
                  </>
                )}
              </p>
            </div>

            <p className="pdp-description">{product.description}</p>

            {/* Practical B2B Commercial Reassurances */}
            <div className="pdp-terms-card">
              <h3 className="terms-card-title">Commercial & Order Terms</h3>
              <ul className="terms-list">
                <li>
                  <strong>Minimum Order Quantity (MOQ):</strong> Order-specific; confirmed on enquiry based on product model, finish, and packaging requirements.
                </li>
                <li>
                  <strong>Production & Dispatch Timelines:</strong> Confirmed against requested quantity, surface finishing schedule, and destination.
                </li>
                <li>
                  <strong>Customization & OEM:</strong> Dimensional adjustments, custom electroplating finishes, and private-label packaging can be reviewed subject to volume feasibility.
                </li>
                <li>
                  <strong>Export Shipment Terms:</strong> EXW Aligarh, FOB Indian port, or CIF destination port quotations provided where mutually agreed.
                </li>
              </ul>
            </div>

            {/* Primary Action Buttons */}
            <div className="pdp-actions">
              <Link
                className="button pdp-btn-quote"
                to={`/contact?product=${encodeURIComponent(product.name)}`}
              >
                Request Quote for This Model <ArrowUpRight size={18} />
              </Link>
              <a
                className="button pdp-btn-whatsapp"
                href={`https://wa.me/918285687940?text=${waText}`}
                target="_blank"
                rel="noopener noreferrer"
              >
                <MessageCircle size={18} /> Enquire on WhatsApp
              </a>
            </div>

            <small className="pdp-disclaimer">
              B2B bulk supply only. No retail single-piece checkout. Connect directly with our Aligarh desk for wholesale pricing.
            </small>
          </div>
        </div>
      </section>

      {/* Verified Technical Specifications Section */}
      <section className="section pdp-specs-section">
        <div className="section-heading">
          <div>
            <p className="eyebrow">TECHNICAL DATA & FITMENT</p>
            <h2>Verified Product Specifications</h2>
          </div>
          <Link to="/products" className="text-link">
            <ArrowLeft size={16} /> Back to Full Catalogue
          </Link>
        </div>

        <div className="specs-table-wrapper">
          <table className="specs-table">
            <tbody>
              <tr>
                <th scope="row">Product Name</th>
                <td>{product.name}</td>
              </tr>
              <tr>
                <th scope="row">Model / Item Number</th>
                <td>{product.modelNumber}</td>
              </tr>
              <tr>
                <th scope="row">Category</th>
                <td>{product.categoryName}</td>
              </tr>
              <tr>
                <th scope="row">Manufacturing Status</th>
                <td>
                  <span className={`specs-status-pill ${sourceBadgeClass}`}>
                    {product.sourceStatus}
                  </span>
                </td>
              </tr>
              <tr>
                <th scope="row">Body & Component Material</th>
                <td>{product.material}</td>
              </tr>
              <tr>
                <th scope="row">Surface Finish Options</th>
                <td>{product.finish}</td>
              </tr>
              <tr>
                <th scope="row">Mechanism & Operation</th>
                <td>{product.mechanism}</td>
              </tr>
              <tr>
                <th scope="row">Key System & Keys Included</th>
                <td>{product.keys}</td>
              </tr>
              <tr>
                <th scope="row">Dimensions & Footprint</th>
                <td>{product.dimensions}</td>
              </tr>
              {product.doorThickness && (
                <tr>
                  <th scope="row">Door Thickness Compatibility</th>
                  <td>{product.doorThickness}</td>
                </tr>
              )}
              <tr>
                <th scope="row">Standard Packaging</th>
                <td>{product.packaging}</td>
              </tr>
              <tr>
                <th scope="row">Recommended Applications</th>
                <td>{product.applications}</td>
              </tr>
              <tr>
                <th scope="row">Samples & Pre-Production</th>
                <td>Available on request. Sample availability and courier dispatch charges confirmed on enquiry.</td>
              </tr>
            </tbody>
          </table>
        </div>
      </section>

      {/* How Ordering Works 6-Step Workflow */}
      <section className="section pdp-workflow-section">
        <div className="section-heading">
          <div>
            <p className="eyebrow">ORDER COORDINATION</p>
            <h2>How B2B Ordering Works for This Model</h2>
          </div>
          <Link to="/process" className="text-link">
            Detailed Export Workflow ↗
          </Link>
        </div>

        <div className="steps">
          <article>
            <span className="step-number">01</span>
            <h3>Share Requirements</h3>
            <p>Provide target quantities, required surface finishes, destination country, and any custom branding needs.</p>
          </article>
          <article>
            <span className="step-number">02</span>
            <h3>Confirm Specifications</h3>
            <p>We review technical drawings, dimensional tolerances, and confirm in-house vs partner-sourced production status.</p>
          </article>
          <article>
            <span className="step-number">03</span>
            <h3>Commercial Terms</h3>
            <p>Receive a clear quotation covering per-unit pricing, confirmed MOQ, production lead time, and FOB/CIF freight options.</p>
          </article>
          <article>
            <span className="step-number">04</span>
            <h3>Sample Evaluation</h3>
            <p>Physical samples or pre-production check pieces can be arranged where applicable prior to bulk batch production.</p>
          </article>
          <article>
            <span className="step-number">05</span>
            <h3>Inspection & Packaging</h3>
            <p>Order-specific dimensional, surface, and mechanical checks are performed followed by export carton packaging.</p>
          </article>
          <article>
            <span className="step-number">06</span>
            <h3>Export Documentation</h3>
            <p>We supply commercial invoices, packing lists, and coordinate freight dispatch according to agreed Incoterms.</p>
          </article>
        </div>
      </section>

      {/* Related Catalogue Items */}
      {relatedProducts.length > 0 && (
        <section className="section pdp-related-section">
          <div className="section-heading">
            <div>
              <p className="eyebrow">RELATED PRODUCTS</p>
              <h2>More in {product.categoryName}</h2>
            </div>
            <Link to={`/products?category=${product.category}`} className="text-link">
              View All {product.categoryName} ↗
            </Link>
          </div>

          <div className="product-grid">
            {relatedProducts.map((p) => (
              <article key={p.slug} className="product-card">
                <div className="product-image-container">
                  <Link to={`/products/${p.slug}`} aria-label={`View ${p.name}`}>
                    <img
                      src={p.image}
                      alt={`${p.name} model ${p.modelNumber}`}
                      width="500"
                      height="500"
                      loading="lazy"
                    />
                  </Link>
                  <span className={`product-source-badge ${
                    p.sourceStatus === 'Manufactured by Arpit Impex'
                      ? 'source-inhouse'
                      : p.sourceStatus === 'Partner-sourced'
                      ? 'source-partner'
                      : 'source-enquiry'
                  }`}>
                    {p.sourceStatus}
                  </span>
                </div>
                <div className="product-text">
                  <div className="product-meta-header">
                    <span className="product-category-tag">{p.categoryName}</span>
                    <span className="product-model-code">SKU: {p.modelNumber}</span>
                  </div>
                  <h3>
                    <Link to={`/products/${p.slug}`} className="product-title-link">
                      {p.name}
                    </Link>
                  </h3>
                  <p className="product-desc">{p.description}</p>
                  <div style={{ marginBottom: '14px' }}>
                    <Link to={`/products/${p.slug}`} className="product-view-spec-link">
                      View Specifications →
                    </Link>
                  </div>
                  <div className="product-actions">
                    <Link
                      className="button-product-quote"
                      to={`/contact?product=${encodeURIComponent(p.name)}`}
                    >
                      Request Quote <ArrowUpRight size={14} />
                    </Link>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </section>
      )}

      {/* Bottom B2B Enquiry Banner */}
      <EnquiryBanner />
    </main>
  );
}
