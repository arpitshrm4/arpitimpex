import type { Route } from './+types/quality-inspection';
import { Link } from 'react-router';
import { seo, absoluteUrl, siteOriginFrom } from '@/lib/seo';
import { images, companyInfo } from '@/data/catalogue';
import { EnquiryBanner } from '@/components/enquiry-banner';
import {
  ShieldCheck,
  CheckCircle2,
  FileCheck,
  Award,
  Layers,
  ArrowRight,
  ChevronRight,
  Gauge,
  Microscope,
  PackageCheck,
  Scale,
} from 'lucide-react';

export function meta({ matches, location }: Route.MetaArgs) {
  const origin = siteOriginFrom(matches);
  const canonicalUrl = absoluteUrl(origin, '/quality-inspection');

  return seo(
    { matches, location },
    {
      title: 'Hardware Quality Control & Inspection Standards | Arpit Impex',
      description:
        '5-stage architectural hardware inspection protocols from Aligarh, India: dimensional gauging, cycle endurance, salt-spray corrosion tests, drop testing.',
      image: images.pressWorkshop,
      jsonLd: [
        {
          '@context': 'https://schema.org',
          '@type': 'WebPage',
          name: 'Hardware Quality Control & Inspection Standards',
          url: canonicalUrl,
          description:
            'Quality assurance protocols, 5-stage inspection processes, and testing standards for architectural hardware export at Arpit Impex.',
        },
      ],
    }
  );
}

export default function QualityInspectionPage() {
  return (
    <main className="quality-page">
      <section className="section quality-hero">
        <nav className="pdp-breadcrumbs" aria-label="Breadcrumb">
          <Link to="/">Home</Link>
          <ChevronRight size={14} className="pdp-breadcrumb-sep" />
          <span aria-current="page">Quality &amp; Inspection</span>
        </nav>

        <p className="eyebrow">QUALITY ASSURANCE &amp; TESTING STANDARDS</p>
        <h1>Architectural Hardware Quality Control &amp; Inspection Standards</h1>
        <p className="section-intro" style={{ maxWidth: '880px', lineHeight: '1.8' }}>
          At Arpit Impex, quality control is not an afterthought at the packaging table — it is integrated across raw material intake, progressive metal stamping, electroplating bath chemistry, assembly line checks, and container packaging integrity. Our 5-stage quality assurance framework guarantees cross-border consistency for global distributors.
        </p>
      </section>

      {/* 5-Stage Inspection Protocol */}
      <section className="section quality-stages">
        <div className="section-heading">
          <div>
            <p className="eyebrow">OUR 5-STAGE FRAMEWORK</p>
            <h2>End-to-End Quality Inspection Protocol</h2>
          </div>
        </div>

        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))', gap: '24px', marginTop: '30px' }}>
          <div style={{ background: '#fff', border: '1px solid var(--border)', borderRadius: '12px', padding: '32px' }}>
            <span style={{ fontSize: '12px', fontWeight: 700, color: 'var(--gold)', letterSpacing: '0.05em' }}>STAGE 01</span>
            <div style={{ display: 'flex', alignItems: 'center', gap: '12px', margin: '8px 0 16px 0' }}>
              <Scale size={24} color="var(--navy)" />
              <h3 style={{ fontSize: '18px', color: 'var(--navy)', margin: 0 }}>Raw Material Intake Audit</h3>
            </div>
            <p style={{ fontSize: '14px', lineHeight: '1.6', color: 'var(--body)' }}>
              Verification of incoming metal stock: chemical spectrometry certification, sheet gauge micrometer measurement (CRCA cold-rolled steel), brass purity (CuZn39Pb3), and high-pressure Zamak zinc alloy density testing.
            </p>
          </div>

          <div style={{ background: '#fff', border: '1px solid var(--border)', borderRadius: '12px', padding: '32px' }}>
            <span style={{ fontSize: '12px', fontWeight: 700, color: 'var(--gold)', letterSpacing: '0.05em' }}>STAGE 02</span>
            <div style={{ display: 'flex', alignItems: 'center', gap: '12px', margin: '8px 0 16px 0' }}>
              <Gauge size={24} color="var(--navy)" />
              <h3 style={{ fontSize: '18px', color: 'var(--navy)', margin: 0 }}>In-Line Dimensional Gauging</h3>
            </div>
            <p style={{ fontSize: '14px', lineHeight: '1.6', color: 'var(--body)' }}>
              During progressive stamping and CNC machining, critical tolerances are inspected against engineering drawings: backset distance (±0.2mm), hole pitch, spindle hub clearance, and hinge pin alignment.
            </p>
          </div>

          <div style={{ background: '#fff', border: '1px solid var(--border)', borderRadius: '12px', padding: '32px' }}>
            <span style={{ fontSize: '12px', fontWeight: 700, color: 'var(--gold)', letterSpacing: '0.05em' }}>STAGE 03</span>
            <div style={{ display: 'flex', alignItems: 'center', gap: '12px', margin: '8px 0 16px 0' }}>
              <Microscope size={24} color="var(--navy)" />
              <h3 style={{ fontSize: '18px', color: 'var(--navy)', margin: 0 }}>Mechanical Endurance Testing</h3>
            </div>
            <p style={{ fontSize: '14px', lineHeight: '1.6', color: 'var(--body)' }}>
              Rigorous cycle testing of locking deadbolts, thumbturns, and spring latch returns. Lock mechanisms undergo continuous operational cycle testing (up to 100,000 cycles) to verify spring resilience and bolt throw reliability.
            </p>
          </div>

          <div style={{ background: '#fff', border: '1px solid var(--border)', borderRadius: '12px', padding: '32px' }}>
            <span style={{ fontSize: '12px', fontWeight: 700, color: 'var(--gold)', letterSpacing: '0.05em' }}>STAGE 04</span>
            <div style={{ display: 'flex', alignItems: 'center', gap: '12px', margin: '8px 0 16px 0' }}>
              <Layers size={24} color="var(--navy)" />
              <h3 style={{ fontSize: '18px', color: 'var(--navy)', margin: 0 }}>Salt-Spray Corrosion Evaluation</h3>
            </div>
            <p style={{ fontSize: '14px', lineHeight: '1.6', color: 'var(--body)' }}>
              Accelerated neutral salt spray chamber testing (ASTM B117) to verify corrosion resistance across electroplated antique brass, PVD satin gold, chrome plating, and electrostatic powder coats (48 to 96+ hours).
            </p>
          </div>

          <div style={{ background: '#fff', border: '1px solid var(--border)', borderRadius: '12px', padding: '32px' }}>
            <span style={{ fontSize: '12px', fontWeight: 700, color: 'var(--gold)', letterSpacing: '0.05em' }}>STAGE 05</span>
            <div style={{ display: 'flex', alignItems: 'center', gap: '12px', margin: '8px 0 16px 0' }}>
              <PackageCheck size={24} color="var(--navy)" />
              <h3 style={{ fontSize: '18px', color: 'var(--navy)', margin: 0 }}>Packaging &amp; Container Drop Testing</h3>
            </div>
            <p style={{ fontSize: '14px', lineHeight: '1.6', color: 'var(--body)' }}>
              Drop testing and compression verification of master 5-ply/7-ply corrugated export cartons. Verification of moisture-absorbing silica gel packs, barcode legibility, and nylon strap tension for maritime voyages.
            </p>
          </div>

          <div style={{ background: '#fdfbf7', border: '1px solid var(--gold)', borderRadius: '12px', padding: '32px', display: 'flex', flexDirection: 'column', justifyContent: 'center' }}>
            <ShieldCheck size={32} color="var(--gold)" style={{ marginBottom: '12px' }} />
            <h3 style={{ fontSize: '18px', color: 'var(--navy)', marginBottom: '8px' }}>Third-Party Inspection Support</h3>
            <p style={{ fontSize: '14px', lineHeight: '1.6', color: 'var(--body)', margin: 0 }}>
              We regularly accommodate pre-shipment inspections from international auditing agencies (SGS, Intertek, Bureau Veritas, TUV) nominated by overseas buyers.
            </p>
          </div>
        </div>
      </section>

      {/* Traceability Callout */}
      <section className="section quality-traceability" style={{ background: '#f8f9fa', padding: '48px 32px', borderRadius: '16px', margin: '40px auto', maxWidth: '1200px', border: '1px solid var(--border)' }}>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '32px', alignItems: 'center' }}>
          <div>
            <p className="eyebrow">BATCH TRACEABILITY &amp; REPORTS</p>
            <h2 style={{ fontSize: '26px', color: 'var(--navy)', marginBottom: '14px' }}>Certificate of Analysis (COA)</h2>
            <p style={{ fontSize: '15px', lineHeight: '1.7', color: 'var(--body)', margin: 0 }}>
              Every export shipment leaves our Aligarh facility accompanied by an internal inspection report detailing batch sample counts, visual surface check records, key duplication tolerance audits, and master packaging weights.
            </p>
          </div>
          <div style={{ textAlign: 'center' }}>
            <Link to="/contact" className="button" style={{ padding: '16px 32px' }}>
              Request Sample Inspection Report <ArrowRight size={16} />
            </Link>
          </div>
        </div>
      </section>

      <EnquiryBanner />
    </main>
  );
}
