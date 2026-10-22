import { useState, useMemo } from 'react';
import { Link } from 'react-router';
import {
  Printer,
  Search,
  CheckCircle2,
  FileText,
  Table,
  Layers,
  ArrowUpRight,
  MessageCircle,
  ShieldCheck,
  Building2,
  Sparkles,
  Phone,
  Mail,
  MapPin,
  ExternalLink,
  SlidersHorizontal,
  Info,
  ArrowRight
} from 'lucide-react';
import { products, categories, companyInfo, images, type ProductItem } from '@/data/catalogue';

export function BrochurePage() {
  const [selectedCategory, setSelectedCategory] = useState<string>('all');
  const [searchQuery, setSearchQuery] = useState<string>('');
  const [viewMode, setViewMode] = useState<'cards' | 'matrix' | 'both'>('both');

  // Filter products by category and search query
  const filteredProducts = useMemo(() => {
    return products.filter((item) => {
      const matchesCategory =
        selectedCategory === 'all' || item.category === selectedCategory;

      const q = searchQuery.toLowerCase().trim();
      const matchesSearch =
        !q ||
        item.name.toLowerCase().includes(q) ||
        item.modelNumber.toLowerCase().includes(q) ||
        item.categoryName.toLowerCase().includes(q) ||
        item.material.toLowerCase().includes(q) ||
        item.finish.toLowerCase().includes(q) ||
        item.mechanism.toLowerCase().includes(q) ||
        item.applications.toLowerCase().includes(q);

      return matchesCategory && matchesSearch;
    });
  }, [selectedCategory, searchQuery]);

  // Group filtered products by category for structured catalog view
  const groupedProducts = useMemo(() => {
    const map = new Map<string, { categoryTitle: string; items: ProductItem[] }>();

    for (const cat of categories) {
      const itemsInCat = filteredProducts.filter((p) => p.category === cat.id);
      if (itemsInCat.length > 0) {
        map.set(cat.id, {
          categoryTitle: cat.name,
          items: itemsInCat,
        });
      }
    }

    // Handle any items with a category not in the main categories list if any
    const otherItems = filteredProducts.filter(
      (p) => !categories.some((c) => c.id === p.category)
    );
    if (otherItems.length > 0) {
      map.set('other', {
        categoryTitle: 'Additional Architectural Hardware',
        items: otherItems,
      });
    }

    return map;
  }, [filteredProducts]);

  const handlePrint = () => {
    if (typeof window !== 'undefined') {
      window.print();
    }
  };

  return (
    <div className="brochure-page-container">
      <table className="print-layout-table">
        <thead>
          <tr>
            <td>
              {/* Print-Only Official Document Header (Repeated on every printed page) */}
              <div className="brochure-print-header" aria-hidden="true">
                <div className="print-brand-wrap">
                  <div>
                    <h1 className="print-company-name">
                      ARPIT IMPEX<span className="gold">.</span>
                    </h1>
                    <p className="print-company-tagline">
                      Architectural Door Hardware Manufacturer &amp; Export Sourcing Partner
                    </p>
                  </div>
                  <div className="print-meta-right">
                    <p><strong>Contact Person:</strong> {companyInfo.contactPerson} | <strong>Location:</strong> Aligarh, India</p>
                    <p><strong>GSTIN:</strong> {companyInfo.gstNumber} | <strong>Verified B2B Manufacturer</strong></p>
                    <p><strong>WhatsApp / Tel:</strong> {companyInfo.phone} | <strong>Email:</strong> {companyInfo.email}</p>
                  </div>
                </div>
                <div className="print-doc-title-bar">
                  <span>COMPLETE ARCHITECTURAL HARDWARE PRODUCT SPECIFICATION BROCHURE</span>
                  <span>B2B EXPORT EDITION · ALL {products.length} CERTIFIED SKUS</span>
                </div>
              </div>
            </td>
          </tr>
        </thead>
        <tfoot>
          <tr>
            <td>
              {/* Print-Only Document Footer (Repeated on every printed page) */}
              <div className="brochure-print-footer" aria-hidden="true">
                <div className="print-footer-inner">
                  <p>
                    <strong>ARPIT IMPEX</strong> · Aligarh, Uttar Pradesh - 202001, India · Contact: <strong>{companyInfo.contactPerson}</strong> · 
                    WhatsApp: <strong>{companyInfo.phone}</strong> · Email: <strong>{companyInfo.email}</strong> · Web: <strong>https://arpitimpex.com</strong>
                  </p>
                  <p className="print-copy-notice">
                    Official B2B Export Product Specification Compendium. Confidential trade document. All dimensions, finishes, and MOQs confirmed on formal quotation.
                  </p>
                </div>
              </div>
            </td>
          </tr>
        </tfoot>
        <tbody>
          <tr>
            <td>

      {/* Screen Hero Banner */}
      <section className="brochure-hero-section">
        <div className="brochure-hero-inner">
          <div className="brochure-hero-badge">
            <span className="badge-dot" />
            OFFICIAL DIGITAL PRODUCT BROCHURE · B2B EXPORT EDITION
          </div>
          <h1 className="brochure-title">
            Architectural Door Hardware <span className="gold-accent">Brochure</span>
          </h1>
          <p className="brochure-subtitle">
            Complete technical specification manual and catalog compendium for all {products.length} door locks, 
            mortise lock bodies, euro cylinders, architectural handles, and ironmongery hardware from our manufacturing 
            and sourcing facility in Aligarh, India.
          </p>

          <div className="brochure-credentials-grid">
            <div className="cred-card">
              <Building2 className="cred-icon" size={20} />
              <div>
                <strong>Aligarh Hardware Cluster</strong>
                <span>Manufacturing & partner-sourced line</span>
              </div>
            </div>
            <div className="cred-card">
              <ShieldCheck className="cred-icon" size={20} />
              <div>
                <strong>GST Verified (India)</strong>
                <span>{companyInfo.gstNumber}</span>
              </div>
            </div>
            <div className="cred-card">
              <Layers className="cred-icon" size={20} />
              <div>
                <strong>{products.length} Complete SKUs</strong>
                <span>With full dimensions & finish specs</span>
              </div>
            </div>
            <div className="cred-card">
              <FileText className="cred-icon" size={20} />
              <div>
                <strong>Export Ready</strong>
                <span>EXW, FOB & CIF terms available</span>
              </div>
            </div>
          </div>

          <div className="brochure-top-actions">
            <button
              onClick={handlePrint}
              className="button brochure-print-btn"
              title="Print or Save this brochure as PDF via your browser print dialog"
              aria-label="Print or Save as PDF"
            >
              <Printer size={18} />
              <span>Print / Save as PDF Brochure</span>
            </button>
            <a
              href={`https://wa.me/918285687940?text=${encodeURIComponent(
                'Hello Arpit Impex, I am reviewing your 2026 Product Brochure and would like to enquire about bulk pricing, finish samples, and export supply terms.'
              )}`}
              target="_blank"
              rel="noopener noreferrer"
              className="button brochure-whatsapp-btn"
            >
              <MessageCircle size={18} />
              <span>Direct WhatsApp Desk</span>
            </a>
            <Link to="/contact" className="button brochure-quote-btn">
              <span>Request Custom Bulk RFQ</span>
              <ArrowUpRight size={18} />
            </Link>
          </div>
        </div>
      </section>

      {/* Interactive Controls Bar: Category tabs, Search, View Mode */}
      <section className="brochure-toolbar-wrapper">
        <div className="brochure-toolbar-inner">
          {/* Search Box */}
          <div className="brochure-search-box">
            <Search className="search-icon" size={18} />
            <input
              type="text"
              placeholder="Search by SKU / Model (e.g. JL-PB01, No. 68) or keyword..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              aria-label="Filter brochure products"
              className="brochure-search-input"
            />
            {searchQuery && (
              <button
                onClick={() => setSearchQuery('')}
                className="clear-search-btn"
                title="Clear search"
              >
                ✕
              </button>
            )}
          </div>

          {/* View Mode Toggle */}
          <div className="brochure-view-toggles" role="group" aria-label="Catalog view mode">
            <span className="view-toggle-label">
              <SlidersHorizontal size={14} /> View:
            </span>
            <button
              type="button"
              className={`view-toggle-btn ${viewMode === 'cards' ? 'active' : ''}`}
              onClick={() => setViewMode('cards')}
              title="Show Detailed Spec Sheets"
            >
              <Layers size={14} /> Spec Cards
            </button>
            <button
              type="button"
              className={`view-toggle-btn ${viewMode === 'matrix' ? 'active' : ''}`}
              onClick={() => setViewMode('matrix')}
              title="Show Technical Comparison Matrix"
            >
              <Table size={14} /> Specs Matrix
            </button>
            <button
              type="button"
              className={`view-toggle-btn ${viewMode === 'both' ? 'active' : ''}`}
              onClick={() => setViewMode('both')}
              title="Show Both Spec Cards and Matrix"
            >
              Both
            </button>
          </div>
        </div>

        {/* Category Pills Navigation */}
        <div className="brochure-category-pills">
          <button
            type="button"
            className={`cat-pill ${selectedCategory === 'all' ? 'active' : ''}`}
            onClick={() => setSelectedCategory('all')}
          >
            All Products ({products.length})
          </button>
          {categories.map((c) => {
            const count = products.filter((p) => p.category === c.id).length;
            return (
              <button
                key={c.id}
                type="button"
                className={`cat-pill ${selectedCategory === c.id ? 'active' : ''}`}
                onClick={() => setSelectedCategory(c.id)}
              >
                {c.name} ({count})
              </button>
            );
          })}
        </div>

        <div className="brochure-results-status">
          <span>Showing <strong>{filteredProducts.length}</strong> of {products.length} products</span>
          {searchQuery && (
            <span className="search-status-tag">Matching: &ldquo;{searchQuery}&rdquo;</span>
          )}
          <span className="print-hint-note">
            💡 <strong>Fast PDF Tip:</strong> Click <strong>&ldquo;Print / Save as PDF&rdquo;</strong> to save. Filter by category above for a compact targeted PDF, or select <strong>&ldquo;Specs Matrix&rdquo;</strong> for an ultra-lightweight ~2MB engineering table.
          </span>
        </div>
      </section>

      {/* Main Content Area */}
      <div className="brochure-content-wrapper">
        {/* Notice on B2B specifications */}
        <div className="brochure-b2b-notice">
          <Info size={18} className="notice-icon" />
          <p>
            <strong>B2B Sourcing Specification Note:</strong> All products are supplied for commercial 
            and export requirements from Aligarh, India. Dimensional tolerances, surface plating 
            treatments (e.g. Antique Brass, Rose Gold, PVD Gold, Matte Black, Yellow Zinc), custom stamping, 
            and OEM branded packaging are confirmed during quotation discussions.
          </p>
        </div>

        {/* No Results Fallback */}
        {filteredProducts.length === 0 && (
          <div className="brochure-empty-state">
            <h3>No products found matching your filter</h3>
            <p>Try searching for a different model number, finish, or reset your filters.</p>
            <button
              onClick={() => {
                setSearchQuery('');
                setSelectedCategory('all');
              }}
              className="button"
            >
              Reset All Filters
            </button>
          </div>
        )}

        {/* VIEW 1: DETAILED BROCHURE SPECIFICATION CARDS */}
        {(viewMode === 'cards' || viewMode === 'both') && filteredProducts.length > 0 && (
          <section className="brochure-spec-cards-section">
            {Array.from(groupedProducts.entries()).map(([catId, group]) => (
              <div key={catId} className="brochure-category-block" id={`cat-${catId}`}>
                <div className="category-block-header">
                  <div className="cat-eyebrow">CATEGORY SECTION</div>
                  <h2 className="cat-block-title">{group.categoryTitle}</h2>
                  <span className="cat-count-badge">
                    {group.items.length} {group.items.length === 1 ? 'Model' : 'Models'} Catalogued
                  </span>
                </div>

                <div className="brochure-cards-list">
                  {group.items.map((product) => {
                    const waText = encodeURIComponent(
                      `Hello Arpit Impex, I am reviewing your brochure and would like to enquire about bulk supply, pricing, and technical drawings for ${product.name} (SKU: ${product.modelNumber}).`
                    );

                    return (
                      <article
                        key={product.slug}
                        className="brochure-product-sheet"
                        id={`sheet-${product.modelNumber}`}
                      >
                        {/* Top Ribbon on Card */}
                        <div className="sheet-top-ribbon">
                          <div className="sheet-sku-tag">
                            <span className="sku-label">MODEL SKU:</span>
                            <strong className="sku-val">{product.modelNumber}</strong>
                          </div>
                          <span className="sheet-category-badge">{product.categoryName}</span>
                          <span className="sheet-avail-badge">B2B Bulk Supply</span>
                        </div>

                        {/* Sheet Main Layout */}
                        <div className="sheet-main-grid">
                          {/* Left: Product Imagery & Meta */}
                          <div className="sheet-image-column">
                            <div className="sheet-img-wrap">
                              <img
                                src={product.image}
                                alt={`${product.name} - ${product.modelNumber}`}
                                width="400"
                                height="400"
                                loading="lazy"
                              />
                            </div>
                            <div className="sheet-quick-facts">
                              <div className="quick-fact-row">
                                <span className="qf-label">Standard Keys</span>
                                <span className="qf-val">{product.keys}</span>
                              </div>
                              <div className="quick-fact-row">
                                <span className="qf-label">Packaging</span>
                                <span className="qf-val">{product.packaging}</span>
                              </div>
                            </div>
                          </div>

                          {/* Right: Technical Specifications & Information */}
                          <div className="sheet-details-column">
                            <h3 className="sheet-product-title">
                              <Link to={`/products/${product.slug}`} title="View online product page">
                                {product.name}
                              </Link>
                            </h3>
                            <p className="sheet-product-desc">{product.description}</p>

                            {/* Specification Table within Card */}
                            <div className="sheet-spec-table-wrap">
                              <table className="sheet-spec-table">
                                <tbody>
                                  <tr>
                                    <th scope="row">Primary Material</th>
                                    <td>{product.material}</td>
                                    <th scope="row">Surface Finish</th>
                                    <td>{product.finish}</td>
                                  </tr>
                                  <tr>
                                    <th scope="row">Mechanism / Core</th>
                                    <td>{product.mechanism}</td>
                                    <th scope="row">Overall Dimensions</th>
                                    <td>{product.dimensions}</td>
                                  </tr>
                                  <tr>
                                    <th scope="row">Door Compatibility</th>
                                    <td>{product.doorThickness || 'Standard interior & exterior wooden / metal doors'}</td>
                                    <th scope="row">Applications</th>
                                    <td>{product.applications}</td>
                                  </tr>
                                </tbody>
                              </table>
                            </div>

                            {/* Actions on Card (Hidden in Print Mode) */}
                            <div className="sheet-actions-bar">
                              <Link
                                to={`/contact?product=${encodeURIComponent(
                                  `${product.name} (${product.modelNumber})`
                                )}`}
                                className="button sheet-quote-btn"
                              >
                                <span>Request Quotation</span>
                                <ArrowUpRight size={15} />
                              </Link>
                              <a
                                href={`https://wa.me/918285687940?text=${waText}`}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="button sheet-wa-btn"
                                title="Chat on WhatsApp about this model"
                              >
                                <MessageCircle size={15} />
                                <span>WhatsApp Enquiry</span>
                              </a>
                              <Link
                                to={`/products/${product.slug}`}
                                className="sheet-view-online-link"
                              >
                                Full Specs & Drawings <ArrowRight size={13} />
                              </Link>
                            </div>
                          </div>
                        </div>
                      </article>
                    );
                  })}
                </div>
              </div>
            ))}
          </section>
        )}

        {/* VIEW 2: COMPREHENSIVE TECHNICAL MATRIX COMPARISON TABLE */}
        {(viewMode === 'matrix' || viewMode === 'both') && filteredProducts.length > 0 && (
          <section className="brochure-matrix-section">
            <div className="matrix-section-header">
              <div className="cat-eyebrow">ENGINEERING & PROCUREMENT DATA</div>
              <h2>Architectural Hardware Specification Matrix</h2>
              <p className="matrix-sub">
                Condensed engineering reference comparison table for architects, contractors, and international sourcing agents.
              </p>
            </div>

            <div className="matrix-table-scroll-container">
              <table className="brochure-matrix-table">
                <thead>
                  <tr>
                    <th scope="col" style={{ width: '100px' }}>Model SKU</th>
                    <th scope="col" style={{ width: '180px' }}>Product Name</th>
                    <th scope="col" style={{ width: '130px' }}>Category</th>
                    <th scope="col" style={{ width: '160px' }}>Primary Material</th>
                    <th scope="col" style={{ width: '170px' }}>Surface Finish</th>
                    <th scope="col" style={{ width: '220px' }}>Lock Mechanism / Operation</th>
                    <th scope="col" style={{ width: '120px' }}>Key Setup</th>
                    <th scope="col" style={{ width: '180px' }}>Dimensions</th>
                    <th scope="col" className="matrix-actions-col" style={{ width: '130px' }}>Enquire</th>
                  </tr>
                </thead>
                <tbody>
                  {filteredProducts.map((p) => (
                    <tr key={p.slug}>
                      <td>
                        <strong className="matrix-sku">{p.modelNumber}</strong>
                      </td>
                      <td>
                        <Link to={`/products/${p.slug}`} className="matrix-product-link">
                          {p.name}
                        </Link>
                      </td>
                      <td>
                        <span className="matrix-cat-tag">{p.categoryName}</span>
                      </td>
                      <td className="matrix-small-cell">{p.material}</td>
                      <td className="matrix-small-cell">{p.finish}</td>
                      <td className="matrix-small-cell">{p.mechanism}</td>
                      <td className="matrix-small-cell">{p.keys}</td>
                      <td className="matrix-small-cell">{p.dimensions}</td>
                      <td className="matrix-actions-col">
                        <Link
                          to={`/contact?product=${encodeURIComponent(
                            `${p.name} (${p.modelNumber})`
                          )}`}
                          className="matrix-quote-btn"
                          title={`Request quote for ${p.modelNumber}`}
                        >
                          Quote <ArrowUpRight size={12} />
                        </Link>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </section>
        )}

        {/* EXPORT ORDERING PROTOCOL & COMMERCIAL TERMS */}
        <section className="brochure-terms-section">
          <div className="cat-eyebrow">COMMERCIAL GUIDE</div>
          <h2>B2B Export & Procurement Protocol</h2>
          <p className="terms-lead">
            Arpit Impex delivers reliable hardware sourcing from Aligarh with clear commercial agreements:
          </p>

          <div className="brochure-terms-grid">
            <div className="terms-card">
              <h3>1. Quotation & Sourcing Terms</h3>
              <p>
                Each enquiry is reviewed against target specifications, drawings, and required volume. 
                Quotations specify exact material grade, plating finish, packaging type, and applicable MOQ.
              </p>
            </div>
            <div className="terms-card">
              <h3>2. Custom Finishes & Private Label</h3>
              <p>
                We accommodate custom surface electroplating (e.g. Antique Brass, Satin Gold, PVD Rose Gold, 
                Matte Black) and private-label master carton packaging subject to minimum batch order sizes.
              </p>
            </div>
            <div className="terms-card">
              <h3>3. Pre-Dispatch Quality Checks</h3>
              <p>
                Every production lot undergoes agreed pre-dispatch verification covering dimensional alignment, 
                plater salt-spray / adhesion checks, cylinder key turn smoothness, and latch spring fatigue.
              </p>
            </div>
            <div className="terms-card">
              <h3>4. Freight & Export Documentation</h3>
              <p>
                We support EXW (Aligarh), FOB (Nhava Sheva / Mundra Port / ICD Dadri), and CIF global 
                destinations. Complete export documentation includes Commercial Invoice, Packing List, 
                Certificate of Origin, and Shipping Bills.
              </p>
            </div>
          </div>
        </section>

        {/* OFFICIAL DESK CONTACT CARD & PRINT FOOTER */}
        <section className="brochure-contact-card">
          <div className="contact-card-header">
            <div>
              <p className="cat-eyebrow" style={{ color: 'var(--gold)' }}>DIRECT PROCUREMENT DESK</p>
              <h2>Ready to Order or Request Specification Samples?</h2>
              <p style={{ color: '#cbd5e1', maxWidth: '650px', fontSize: '13px', lineHeight: 1.6 }}>
                Connect directly with our commercial desk in Aligarh for customized quotations, technical data sheets, 
                sample requests, or export freight estimates.
              </p>
            </div>
          </div>

          <div className="contact-details-row">
            <div className="contact-detail-col">
              <span className="col-label">Commercial Desk</span>
              <strong>{companyInfo.name}</strong>
              <p>{companyInfo.location}</p>
            </div>
            <div className="contact-detail-col">
              <span className="col-label">Direct Contacts</span>
              <p><strong>Contact Person:</strong> {companyInfo.contactPerson}</p>
              <p><strong>Phone / WhatsApp:</strong> {companyInfo.phone}</p>
              <p><strong>Email:</strong> {companyInfo.email}</p>
            </div>
            <div className="contact-detail-col">
              <span className="col-label">Business Verification</span>
              <p><strong>GSTIN:</strong> {companyInfo.gstNumber} (Verified)</p>
              <p><strong>Operating Hours:</strong> {companyInfo.openingHours}</p>
              <p><strong>Heritage:</strong> Aligarh Lock Manufacturing Cluster</p>
            </div>
          </div>

          <div className="contact-card-actions">
            <Link to="/contact" className="button brochure-card-rfq-btn">
              <span>Send Official Online Enquiry</span>
              <ArrowRight size={16} />
            </Link>
            <a
              href={`https://wa.me/918285687940?text=${encodeURIComponent(
                'Hello Arpit Impex, I have downloaded your hardware brochure and wish to enquire about commercial terms.'
              )}`}
              target="_blank"
              rel="noopener noreferrer"
              className="button brochure-card-wa-btn"
            >
              <MessageCircle size={16} />
              <span>Message Sales Desk on WhatsApp</span>
            </a>
          </div>
        </section>
      </div>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  );
}
