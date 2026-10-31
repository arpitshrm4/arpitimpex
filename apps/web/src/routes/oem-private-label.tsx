import type { Route } from './+types/oem-private-label';
import { Link } from 'react-router';
import { seo, absoluteUrl, siteOriginFrom } from '@/lib/seo';
import { images, companyInfo } from '@/data/catalogue';
import { EnquiryBanner } from '@/components/enquiry-banner';
import {
  Wrench,
  Package,
  Layers,
  Sparkles,
  FileCheck2,
  CheckCircle2,
  ArrowRight,
  ChevronRight,
  ShieldCheck,
  Cpu,
} from 'lucide-react';

export function meta({ matches, location }: Route.MetaArgs) {
  const origin = siteOriginFrom(matches);
  const canonicalUrl = absoluteUrl(origin, '/oem-private-label');

  return seo(
    { matches, location },
    {
      title: 'OEM & Private Label Door Hardware Manufacturer India | Arpit Impex',
      description:
        'Custom tooling, progressive stamping, private-label packaging, and bespoke electroplated finishes from Aligarh, India. Low MOQ OEM architectural hardware.',
      image: images.pressWorkshop,
      jsonLd: [
        {
          '@context': 'https://schema.org',
          '@type': 'WebPage',
          name: 'OEM & Private Label Hardware Manufacturing',
          url: canonicalUrl,
          description:
            'Bespoke architectural hardware manufacturing, OEM tooling, laser branding, and private-label packaging in Aligarh, India.',
        },
      ],
    }
  );
}

export default function OemPrivateLabelPage() {
  return (
    <main className="oem-page">
      <section className="section oem-hero">
        <nav className="pdp-breadcrumbs" aria-label="Breadcrumb">
          <Link to="/">Home</Link>
          <ChevronRight size={14} className="pdp-breadcrumb-sep" />
          <span aria-current="page">OEM &amp; Private Label</span>
        </nav>

        <p className="eyebrow">CUSTOM MANUFACTURING &amp; PRIVATE BRANDING</p>
        <h1>OEM &amp; Private Label Door Hardware Manufacturer in India</h1>
        <p className="section-intro" style={{ maxWidth: '880px', lineHeight: '1.8' }}>
          Arpit Impex delivers end-to-end OEM and private-label manufacturing solutions for global hardware brands, architectural distributors, building material chains, and security equipment wholesalers. From custom die stamping and CNC keyway milling to bespoke retail packaging and corrosion-resistant electroplating, we turn your engineering drawings into market-ready hardware.
        </p>
      </section>

      {/* 4 Pillars of OEM Service */}
      <section className="section oem-pillars">
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))', gap: '24px' }}>
          <div style={{ background: '#fff', border: '1px solid var(--border)', borderRadius: '12px', padding: '32px' }}>
            <div style={{ background: '#eff6ff', padding: '12px', borderRadius: '8px', width: 'fit-content', marginBottom: '16px' }}>
              <Wrench size={24} color="#2563eb" />
            </div>
            <h3 style={{ fontSize: '18px', color: 'var(--navy)', marginBottom: '10px' }}>Custom Tooling &amp; Dies</h3>
            <p style={{ fontSize: '14px', lineHeight: '1.6', color: 'var(--body)' }}>
              In-house tooling department fabricating progressive blanking dies, forming tools, and stamping fixtures for customized lock casings, brackets, and hinges.
            </p>
          </div>

          <div style={{ background: '#fff', border: '1px solid var(--border)', borderRadius: '12px', padding: '32px' }}>
            <div style={{ background: '#fdf4ff', padding: '12px', borderRadius: '8px', width: 'fit-content', marginBottom: '16px' }}>
              <Sparkles size={24} color="#a855f7" />
            </div>
            <h3 style={{ fontSize: '18px', color: 'var(--navy)', marginBottom: '10px' }}>Laser Branding &amp; Marking</h3>
            <p style={{ fontSize: '14px', lineHeight: '1.6', color: 'var(--body)' }}>
              High-precision fiber laser etching for customer logos, part numbers, batch traceability codes, and brand rosettes on brass, steel, and zinc surfaces.
            </p>
          </div>

          <div style={{ background: '#fff', border: '1px solid var(--border)', borderRadius: '12px', padding: '32px' }}>
            <div style={{ background: '#ecfdf5', padding: '12px', borderRadius: '8px', width: 'fit-content', marginBottom: '16px' }}>
              <Layers size={24} color="#059669" />
            </div>
            <h3 style={{ fontSize: '18px', color: 'var(--navy)', marginBottom: '10px' }}>Bespoke Surface Finishes</h3>
            <p style={{ fontSize: '14px', lineHeight: '1.6', color: 'var(--body)' }}>
              Tailored electroplating and powder-coat finishes: PVD brushed gold, antique satin brass, matte black epoxy, dual-tone metallic, and chrome plating.
            </p>
          </div>

          <div style={{ background: '#fff', border: '1px solid var(--border)', borderRadius: '12px', padding: '32px' }}>
            <div style={{ background: '#fff7ed', padding: '12px', borderRadius: '8px', width: 'fit-content', marginBottom: '16px' }}>
              <Package size={24} color="#ea580c" />
            </div>
            <h3 style={{ fontSize: '18px', color: 'var(--navy)', marginBottom: '10px' }}>Custom Box &amp; Retail Packaging</h3>
            <p style={{ fontSize: '14px', lineHeight: '1.6', color: 'var(--body)' }}>
              Retail-ready 4-color printed cartons, hanging blister clamshell packs, barcode labelling (EAN-13, UPC), and master export cartons with nylon strapping.
            </p>
          </div>
        </div>
      </section>

      {/* OEM Workflow */}
      <section className="section oem-workflow" style={{ background: '#fdfbf7', padding: '60px 24px', borderRadius: '16px', margin: '40px auto', maxWidth: '1200px' }}>
        <div style={{ textAlign: 'center', maxWidth: '750px', margin: '0 auto 40px auto' }}>
          <p className="eyebrow">DEVELOPMENT CYCLE</p>
          <h2 style={{ fontSize: '30px', color: 'var(--navy)' }}>How Our OEM Process Works</h2>
          <p style={{ color: 'var(--body)', lineHeight: '1.6' }}>
            From initial CAD drawing review to pre-production prototyping and full container consolidation:
          </p>
        </div>

        <div className="steps">
          <article>
            <span className="step-number">01</span>
            <h3>CAD / Drawing Review</h3>
            <p>Send 2D engineering drawings (PDF/DWG) or physical benchmark samples. We evaluate material tolerances and manufacturing feasibility.</p>
          </article>
          <article>
            <span className="step-number">02</span>
            <h3>Tooling &amp; Quotation</h3>
            <p>We provide a transparent quotation covering one-off tooling costs (amortized on agreed volume), unit piece rates, and required MOQ.</p>
          </article>
          <article>
            <span className="step-number">03</span>
            <h3>Golden Sample Approval</h3>
            <p>Pre-production physical samples are stamped, finished, and couriered via air express for your dimensional and mechanical fitment sign-off.</p>
          </article>
          <article>
            <span className="step-number">04</span>
            <h3>Mass Production &amp; Packaging</h3>
            <p>Full batch manufacturing in Aligarh under continuous quality inspection, branded packaging insertion, and export container loading.</p>
          </article>
        </div>
      </section>

      {/* Contact CTA */}
      <div style={{ textAlign: 'center', padding: '40px 24px' }}>
        <h2 style={{ fontSize: '24px', color: 'var(--navy)', marginBottom: '12px' }}>Have an OEM Project or Custom Hardware Drawing?</h2>
        <p style={{ color: 'var(--body)', marginBottom: '24px' }}>Discuss tooling lead times, MOQ requirements, and private-label packaging directly with our Aligarh engineering desk.</p>
        <Link to="/contact" className="button" style={{ padding: '16px 32px' }}>
          Start an OEM Discussion <ArrowRight size={18} />
        </Link>
      </div>

      <EnquiryBanner />
    </main>
  );
}
