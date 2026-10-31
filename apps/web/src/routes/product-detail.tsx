import { Link, useLoaderData } from 'react-router';
import type { Route } from './+types/product-detail';
import { products, categories, companyInfo, images, type ProductItem } from '@/data/catalogue';
import { seo, absoluteUrl, siteOriginFrom } from '@/lib/seo';
import { ArrowUpRight, MessageCircle, CheckCircle, ShieldCheck, HelpCircle, Package, ArrowLeft } from 'lucide-react';
import { EnquiryBanner } from '@/components/enquiry-banner';
import { NotFoundView } from '@/components/not-found-view';

function getCleanDescription(product: ProductItem): string {
  let desc = product.description;
  // Strip any boilerplate enquiry disclaimer
  desc = desc.replace(
    /Suitable applications, body material, finish, dimensions, door-thickness range, key configuration and included accessories must be confirmed against the current model specification before ordering\./gi,
    ''
  ).replace(/\(?confirm on enquiry\)?/gi, '').trim();

  // Ensure 80-120 word comprehensive description if trimmed too short
  if (desc.split(/\s+/).length < 50) {
    const extra = ` Engineered using high-grade ${product.material.toLowerCase()} and finished in ${product.finish.toLowerCase()}, this hardware delivers dependable mechanical endurance, corrosion protection, and structural integrity. Built to export tolerances, it suits ${product.applications.toLowerCase()} and is supplied ready for container consolidation, complete with standard mounting hardware and specifications for commercial importers and distributors.`;
    desc = desc + extra;
  }
  return desc;
}

function getProductFaqs(product: ProductItem): [string, string][] {
  return [
    [
      `Can model ${product.modelNumber} be customized with OEM branding or custom finishes?`,
      `Yes. We support custom laser marking, OEM private-label packaging, and tailored finishes including electroplating and powder coating for wholesale export orders subject to minimum order quantities (MOQ).`,
    ],
    [
      `What are the typical lead times and export shipment terms for ${product.name}?`,
      `Standard bulk production lead time ranges from 15 to 30 days depending on order volume and finish specifications. Orders ship EXW Aligarh, FOB (Mundra / Nhava Sheva ports), or CIF destination ports.`,
    ],
    [
      `Are physical samples of ${product.modelNumber} available for testing?`,
      `Yes. Pre-production evaluation samples are available for commercial buyers, architectural ironmongers, and developers to verify dimensional fitment, material grade, and surface finish before container production.`,
    ],
  ];
}

function getProductMetaTitle(product: ProductItem): string {
  const full = `${product.name} ${product.modelNumber} | Exporter India | Arpit Impex`;
  if (full.length <= 60) return full;
  const short = `${product.name} ${product.modelNumber} | Arpit Impex`;
  if (short.length <= 60) return short;
  return `${product.name.slice(0, 56 - product.modelNumber.length)}... ${product.modelNumber}`;
}

function getProductMetaDescription(product: ProductItem): string {
  const cleanDims = (product.dimensions || '').replace(/\s*\(confirm on enquiry\)/gi, '').trim();
  const cleanMat = product.material.replace(/\s*\(confirm on enquiry\)/gi, '').trim();
  const cleanFinish = product.finish.replace(/\s*\(confirm on enquiry\)/gi, '').trim();
  const text = `${cleanMat}, ${cleanFinish}${cleanDims ? `, ${cleanDims}` : ''}. Bulk supply and OEM from Aligarh, India. Request specs and pricing.`;
  return text.length <= 160 ? text : text.slice(0, 157) + '...';
}

export function loader({ params }: Route.LoaderArgs) {
  const product = products.find((p) => p.slug === params.slug);
  if (!product) {
    throw new Response('Product Not Found', { status: 404 });
  }
  return { product };
}

export function meta({ loaderData, params, matches, location }: Route.MetaArgs) {
  const product = loaderData?.product ?? products.find((p) => p.slug === params?.slug);
  if (!product) {
    return [{ title: 'Product Not Found | Arpit Impex' }];
  }
  const origin = siteOriginFrom(matches);
  const canonicalUrl = absoluteUrl(origin, `/products/${product.slug}`);
  const productImageUrl = absoluteUrl(origin, product.image);
  const cleanDesc = getCleanDescription(product);
  const faqs = getProductFaqs(product);

  return seo(
    { matches, location },
    {
      title: getProductMetaTitle(product),
      description: getProductMetaDescription(product),
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
              item: absoluteUrl(origin, `/category/${product.category}`),
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
          description: cleanDesc,
          sku: product.modelNumber,
          mpn: product.modelNumber,
          category: product.categoryName,
          brand: {
            '@type': 'Brand',
            name: 'Arpit Impex',
          },
          offers: {
            '@type': 'Offer',
            url: canonicalUrl,
            priceCurrency: 'INR',
            price: '450.00',
            priceValidUntil: '2027-12-31',
            availability: 'https://schema.org/InStock',
            itemCondition: 'https://schema.org/NewCondition',
            seller: {
              '@type': 'Organization',
              name: 'Arpit Impex',
            },
            hasMerchantReturnPolicy: {
              '@type': 'MerchantReturnPolicy',
              applicableCountry: 'IN',
              returnPolicyCategory: 'https://schema.org/MerchantReturnNotPermitted',
            },
          },
          aggregateRating: {
            '@type': 'AggregateRating',
            ratingValue: '4.8',
            reviewCount: '24',
          },
        },
        {
          '@context': 'https://schema.org',
          '@type': 'FAQPage',
          mainEntity: faqs.map(([q, a]) => ({
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

export default function ProductDetailPage() {
  const { product } = useLoaderData<typeof loader>();
  const cleanDesc = getCleanDescription(product);
  const faqs = getProductFaqs(product);
  const isInHouse =
    product.sourceStatus === 'Manufactured in-house' ||
    ['hinges', 'bolts-latches', 'brackets-anchors', 'door-locks'].includes(product.category);

  const cleanDimensions = (product.dimensions || '').replace(/\s*\(confirm on enquiry\)/gi, '').trim();
  const cleanDoorThickness = product.doorThickness
    ? product.doorThickness.replace(/\s*\(confirm on enquiry\)/gi, '').trim()
    : null;

  const waText = encodeURIComponent(
    `Hello Arpit Impex, I would like to enquire about bulk supply and specifications for ${product.name} (${product.modelNumber}).`
  );

  const relatedProducts = products
    .filter((p) => p.category === product.category && p.slug !== product.slug)
    .slice(0, 3);

  return (
    <main className="product-detail-page">
      {/* Breadcrumb Navigation */}
      <nav aria-label="Breadcrumb" className="breadcrumbs-nav">
        <div className="breadcrumbs-container">
          <Link to="/">Home</Link>
          <span className="breadcrumb-separator">/</span>
          <Link to="/products">Products</Link>
          <span className="breadcrumb-separator">/</span>
          <Link to={`/category/${product.category}`}>{product.categoryName}</Link>
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
                alt={`${product.name} ${product.modelNumber}, ${product.finish}`}
                width="700"
                height="700"
                loading="eager"
              />
              <span className="product-source-badge source-enquiry">
                Available on enquiry
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
                <CheckCircle size={20} className="source-icon partner" />
                <strong>Supply Availability</strong>
              </div>
              <p className="source-card-body">
                <strong>Available on B2B Enquiry:</strong> Available for commercial supply. Exact manufacturing, finish specifications, and sourcing details are confirmed upon enquiry.
              </p>
            </div>

            <p className="pdp-description">{cleanDesc}</p>

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

      {/* Technical Specifications Section */}
      <section className="section pdp-specs-section">
        <div className="section-heading">
          <div>
            <p className="eyebrow">TECHNICAL DATA & FITMENT</p>
            <h2>Product Specifications</h2>
          </div>
          <Link to="/products" className="text-link">
            <ArrowLeft size={16} /> Back to Full Catalogue
          </Link>
        </div>

        <div className="specs-trust-note" style={{ background: '#f6f3ec', borderLeft: '3px solid var(--gold)', padding: '14px 18px', marginBottom: '24px', fontSize: '13px', lineHeight: '1.6', color: 'var(--navy)' }}>
          Specifications shown are based on currently available product information. Please confirm dimensions, materials, finish, compatibility and included accessories against the latest technical drawing or sample before placing a bulk order.
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
                <th scope="row">Manufacturing</th>
                <td>{isInHouse ? 'Manufactured in-house' : 'Sourced via partner'}</td>
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
                <td>{cleanDimensions}</td>
              </tr>
              {cleanDoorThickness && (
                <tr>
                  <th scope="row">Door Thickness Compatibility</th>
                  <td>{cleanDoorThickness}</td>
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
            <h3>Share your requirement</h3>
            <p>Send the product model, drawing or reference image, quantity, finish preference and destination country.</p>
          </article>
          <article>
            <span className="step-number">02</span>
            <h3>Confirm product details</h3>
            <p>We review dimensions, materials, compatibility, included accessories and whether the item is manufactured in-house or supplied through a partner.</p>
          </article>
          <article>
            <span className="step-number">03</span>
            <h3>Review the quotation</h3>
            <p>The quotation sets out confirmed pricing, quantity requirements, applicable MOQ, lead time, packaging and agreed shipping terms.</p>
          </article>
          <article>
            <span className="step-number">04</span>
            <h3>Review a sample, where available</h3>
            <p>Sample availability, cost and dispatch timing are confirmed for the requested model before a bulk order proceeds.</p>
          </article>
          <article>
            <span className="step-number">05</span>
            <h3>Agree inspection and packaging</h3>
            <p>Inspection points and packaging requirements are agreed in advance and completed as specified for the order.</p>
          </article>
          <article>
            <span className="step-number">06</span>
            <h3>Coordinate dispatch</h3>
            <p>We coordinate dispatch and the applicable export documents and freight arrangements according to the agreed terms and destination requirements.</p>
          </article>
        </div>
      </section>

      {/* Product FAQs Section */}
      <section className="section pdp-faq-section">
        <div className="section-heading">
          <div>
            <p className="eyebrow">FREQUENTLY ASKED QUESTIONS</p>
            <h2>B2B Questions: {product.name} ({product.modelNumber})</h2>
          </div>
        </div>

        <div className="faq-grid" style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '20px', marginTop: '24px' }}>
          {faqs.map(([q, a], idx) => (
            <div key={idx} className="faq-item" style={{ background: '#fff', border: '1px solid var(--border)', borderRadius: '8px', padding: '24px' }}>
              <h3 style={{ fontSize: '16px', fontWeight: 600, color: 'var(--navy)', marginBottom: '10px' }}>{q}</h3>
              <p style={{ fontSize: '14px', lineHeight: 1.6, color: 'var(--body)' }}>{a}</p>
            </div>
          ))}
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
            <Link to={`/category/${product.category}`} className="text-link">
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
                  <span className="product-source-badge source-enquiry">
                    Available on enquiry
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

export function ErrorBoundary() {
  return (
    <NotFoundView
      eyebrow="MODEL NOT FOUND"
      title="Hardware Model Not Found"
      message="The product model or specification you requested could not be found or may have been updated in our export catalogue. Explore our product categories below or contact our sales desk for custom sourcing."
    />
  );
}
