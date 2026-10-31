import type { Route } from './+types/about';
import { Link } from 'react-router';
import { seo, absoluteUrl, siteOriginFrom } from '@/lib/seo';
import { images, companyInfo } from '@/data/catalogue';
import { FacilityShowcase } from '@/components/home/facility-showcase';
import { EnquiryBanner } from '@/components/enquiry-banner';
import {
  ShieldCheck,
  CheckCircle2,
  Factory,
  Compass,
  MapPin,
  FileCheck,
  Globe2,
  Phone,
  Mail,
  UserCheck,
  Building2,
  ArrowRight,
  Layers,
  Wrench,
  Award,
} from 'lucide-react';

export function meta({ matches, location }: Route.MetaArgs) {
  const origin = siteOriginFrom(matches);
  const canonicalUrl = absoluteUrl(origin, '/about');

  return seo(
    { matches, location },
    {
      title: 'About Arpit Impex | Door Hardware Exporter, Aligarh',
      description:
        'Established in 2017 in Aligarh, India, Arpit Impex manufactures door locks, rim deadbolts, hinges, and bolts. Contact person: Arpit Sharma. GSTIN: 09AEOPS8020A1ZH.',
      image: images.factoryEntrance,
      jsonLd: [
        {
          '@context': 'https://schema.org',
          '@type': 'AboutPage',
          name: 'About Arpit Impex',
          url: canonicalUrl,
          description:
            'Company history, manufacturing infrastructure, in-house vs partner sourcing, and export capabilities of Arpit Impex.',
        },
        {
          '@context': 'https://schema.org',
          '@type': 'Organization',
          name: 'Arpit Impex',
          url: 'https://arpitimpex.com',
          logo: 'https://arpitimpex.com/images/logo.png',
          email: companyInfo.email,
          telephone: companyInfo.phone,
          vatID: companyInfo.gstNumber,
          taxID: companyInfo.gstNumber,
          foundingDate: '2017',
          founder: {
            '@type': 'Person',
            name: companyInfo.contactPerson,
          },
          address: {
            '@type': 'PostalAddress',
            streetAddress: companyInfo.address,
            addressLocality: companyInfo.city,
            addressRegion: companyInfo.state,
            postalCode: companyInfo.pincode,
            addressCountry: 'IN',
          },
        },
      ],
    }
  );
}

export default function AboutPage() {
  return (
    <main className="about-page">
      {/* Hero Header */}
      <section className="section about-hero">
        <p className="eyebrow">ESTABLISHED 2017 · ALIGARH, INDIA</p>
        <h1>About Arpit Impex: Door Hardware Exporter in Aligarh, India</h1>
        <p className="section-intro" style={{ maxWidth: '880px', lineHeight: '1.8' }}>
          Founded in 2017 and led by Arpit Sharma, Arpit Impex is a manufacturer and export coordinator of high-security door locks, rim deadbolts, precision euro cylinders, architectural door handles, and heavy ironmongery. Situated in the historic hardware industrial hub of Aligarh, Uttar Pradesh, we bridge the gap between traditional Indian metal craftsmanship and modern global procurement standards.
        </p>
      </section>

      {/* Main Overview Grid */}
      <section className="section about-overview-section">
        <div className="about-grid" style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))', gap: '40px', alignItems: 'center' }}>
          <div>
            <div className="image-frame">
              <img
                src={images.factoryEntrance}
                alt="Arpit Impex registered manufacturing facility entrance in Aligarh"
                width="800"
                height="600"
                style={{ width: '100%', height: 'auto', borderRadius: '12px', objectFit: 'cover' }}
              />
            </div>
            <div style={{ display: 'flex', gap: '16px', marginTop: '16px' }}>
              <div style={{ flex: 1, background: '#f8f9fa', padding: '16px', borderRadius: '8px', border: '1px solid var(--border)' }}>
                <span style={{ fontSize: '12px', color: 'var(--quiet)', display: 'block', textTransform: 'uppercase', letterSpacing: '0.05em' }}>Founding Year</span>
                <strong style={{ fontSize: '20px', color: 'var(--navy)' }}>2017</strong>
              </div>
              <div style={{ flex: 1, background: '#f8f9fa', padding: '16px', borderRadius: '8px', border: '1px solid var(--border)' }}>
                <span style={{ fontSize: '12px', color: 'var(--quiet)', display: 'block', textTransform: 'uppercase', letterSpacing: '0.05em' }}>Key Contact</span>
                <strong style={{ fontSize: '20px', color: 'var(--navy)' }}>{companyInfo.contactPerson}</strong>
              </div>
              <div style={{ flex: 1, background: '#f8f9fa', padding: '16px', borderRadius: '8px', border: '1px solid var(--border)' }}>
                <span style={{ fontSize: '12px', color: 'var(--quiet)', display: 'block', textTransform: 'uppercase', letterSpacing: '0.05em' }}>Verified GSTIN</span>
                <strong style={{ fontSize: '14px', color: 'var(--navy)', wordBreak: 'break-all' }}>{companyInfo.gstNumber}</strong>
              </div>
            </div>
          </div>

          <div>
            <p className="eyebrow">OUR MISSION & CAPABILITIES</p>
            <h2 style={{ fontSize: '28px', color: 'var(--navy)', marginBottom: '16px' }}>
              Engineered for Global Importers &amp; Hardware Wholesalers
            </h2>
            <p style={{ lineHeight: '1.7', color: 'var(--body)', marginBottom: '16px' }}>
              Aligarh is internationally recognized as India&apos;s lock and hardware capital. At Arpit Impex, we combine in-house stamping and fabrication with verified local specialized tooling partners to supply 79+ standardized architectural fittings, rim locks, mortise locksets, and gate ironmongery.
            </p>
            <p style={{ lineHeight: '1.7', color: 'var(--body)', marginBottom: '24px' }}>
              We eliminate the friction common in cross-border hardware procurement by ensuring every order undergoes rigid pre-dispatch dimensional checks, salt spray corrosion evaluations, and container consolidation packaging according to international logistics requirements.
            </p>
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: '16px' }}>
              <div style={{ display: 'flex', gap: '10px', alignItems: 'flex-start' }}>
                <CheckCircle2 size={18} color="var(--gold)" style={{ flexShrink: 0, marginTop: '3px' }} />
                <span style={{ fontSize: '14px', color: 'var(--navy)' }}>In-house press &amp; sheet-metal stamping lines</span>
              </div>
              <div style={{ display: 'flex', gap: '10px', alignItems: 'flex-start' }}>
                <CheckCircle2 size={18} color="var(--gold)" style={{ flexShrink: 0, marginTop: '3px' }} />
                <span style={{ fontSize: '14px', color: 'var(--navy)' }}>OEM private-label box packaging &amp; laser branding</span>
              </div>
              <div style={{ display: 'flex', gap: '10px', alignItems: 'flex-start' }}>
                <CheckCircle2 size={18} color="var(--gold)" style={{ flexShrink: 0, marginTop: '3px' }} />
                <span style={{ fontSize: '14px', color: 'var(--navy)' }}>Transparent in-house vs. partner sourcing model</span>
              </div>
              <div style={{ display: 'flex', gap: '10px', alignItems: 'flex-start' }}>
                <CheckCircle2 size={18} color="var(--gold)" style={{ flexShrink: 0, marginTop: '3px' }} />
                <span style={{ fontSize: '14px', color: 'var(--navy)' }}>EXW, FOB, and CIF export shipment coordination</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* In-House Manufacturing vs Partner Sourced Matrix */}
      <section className="section about-sourcing-matrix" style={{ background: '#fdfbf7', padding: '60px 24px', borderRadius: '16px', margin: '40px auto', maxWidth: '1200px' }}>
        <div style={{ textAlign: 'center', maxWidth: '750px', margin: '0 auto 40px auto' }}>
          <p className="eyebrow">TRANSPARENT SOURCING ARCHITECTURE</p>
          <h2 style={{ fontSize: '30px', color: 'var(--navy)' }}>What We Make In-House vs. What We Partner-Source</h2>
          <p style={{ color: 'var(--body)', lineHeight: '1.6' }}>
            We believe in complete transparency. To deliver competitive wholesale pricing and maintain tight quality control, we clearly distinguish between products fabricated in our own Aligarh workshop and items coordinated through verified specialized cluster partners.
          </p>
        </div>

        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))', gap: '24px' }}>
          {/* In-House Card */}
          <div style={{ background: '#fff', border: '1px solid var(--border)', borderRadius: '12px', padding: '32px' }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '12px', marginBottom: '16px' }}>
              <div style={{ background: '#ecfdf5', padding: '10px', borderRadius: '8px' }}>
                <Factory size={24} color="#059669" />
              </div>
              <div>
                <h3 style={{ fontSize: '20px', color: 'var(--navy)', margin: 0 }}>Manufactured In-House</h3>
                <span style={{ fontSize: '12px', color: '#059669', fontWeight: 600 }}>Aligarh Workshop Facility</span>
              </div>
            </div>
            <p style={{ fontSize: '14px', color: 'var(--body)', lineHeight: '1.6', marginBottom: '20px' }}>
              Fabricated directly in our Shastri Nagar workshop using our own mechanical presses, progressive stamping dies, and assembly fixtures:
            </p>
            <ul style={{ listStyle: 'none', padding: 0, margin: 0, display: 'flex', flexDirection: 'column', gap: '12px' }}>
              <li style={{ display: 'flex', gap: '10px', fontSize: '14px' }}>
                <CheckCircle2 size={16} color="#059669" style={{ flexShrink: 0, marginTop: '2px' }} />
                <span><strong>Surface Rim Locks &amp; Deadbolts:</strong> Mild steel casing stamping, bolt assembly, and fitting (including JL-PB01 penta-bolt locks).</span>
              </li>
              <li style={{ display: 'flex', gap: '10px', fontSize: '14px' }}>
                <CheckCircle2 size={16} color="#059669" style={{ flexShrink: 0, marginTop: '2px' }} />
                <span><strong>Heavy-Duty T-Hinges &amp; Strap Hinges:</strong> Cold-rolled steel cutting, knuckle forming, pin riveting, and rust-inhibiting finishes.</span>
              </li>
              <li style={{ display: 'flex', gap: '10px', fontSize: '14px' }}>
                <CheckCircle2 size={16} color="#059669" style={{ flexShrink: 0, marginTop: '2px' }} />
                <span><strong>Sliding Barrel Bolts &amp; Padbolts:</strong> Galvanized and black powder-coated security bolts with welded staples.</span>
              </li>
              <li style={{ display: 'flex', gap: '10px', fontSize: '14px' }}>
                <CheckCircle2 size={16} color="#059669" style={{ flexShrink: 0, marginTop: '2px' }} />
                <span><strong>Architectural Brackets &amp; Fixings:</strong> Shelf brackets, timber corner braces, and reinforcing mending plates.</span>
              </li>
            </ul>
          </div>

          {/* Partner Sourced Card */}
          <div style={{ background: '#fff', border: '1px solid var(--border)', borderRadius: '12px', padding: '32px' }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '12px', marginBottom: '16px' }}>
              <div style={{ background: '#eff6ff', padding: '10px', borderRadius: '8px' }}>
                <Layers size={24} color="#2563eb" />
              </div>
              <div>
                <h3 style={{ fontSize: '20px', color: 'var(--navy)', margin: 0 }}>Sourced via Verified Partners</h3>
                <span style={{ fontSize: '12px', color: '#2563eb', fontWeight: 600 }}>Aligarh Industrial Cluster Alliance</span>
              </div>
            </div>
            <p style={{ fontSize: '14px', color: 'var(--body)', lineHeight: '1.6', marginBottom: '20px' }}>
              Procured from vetted high-precision specialized manufacturers under Arpit Impex quality inspection protocols and export packing agreements:
            </p>
            <ul style={{ listStyle: 'none', padding: 0, margin: 0, display: 'flex', flexDirection: 'column', gap: '12px' }}>
              <li style={{ display: 'flex', gap: '10px', fontSize: '14px' }}>
                <CheckCircle2 size={16} color="#2563eb" style={{ flexShrink: 0, marginTop: '2px' }} />
                <span><strong>Solid Brass Profile Cylinders:</strong> Computer-pinned and dimple-key euro cylinders manufactured on precision CNC key-milling machinery.</span>
              </li>
              <li style={{ display: 'flex', gap: '10px', fontSize: '14px' }}>
                <CheckCircle2 size={16} color="#2563eb" style={{ flexShrink: 0, marginTop: '2px' }} />
                <span><strong>Die-Cast Zinc Alloy Handles:</strong> High-pressure Zamak alloy architectural pull handles and lever pairs on decorative rose plates.</span>
              </li>
              <li style={{ display: 'flex', gap: '10px', fontSize: '14px' }}>
                <CheckCircle2 size={16} color="#2563eb" style={{ flexShrink: 0, marginTop: '2px' }} />
                <span><strong>Multi-Throw Mortise Lock Bodies:</strong> Narrow-stile commercial mortise cases and roller latch mechanisms for commercial aluminium doors.</span>
              </li>
              <li style={{ display: 'flex', gap: '10px', fontSize: '14px' }}>
                <CheckCircle2 size={16} color="#2563eb" style={{ flexShrink: 0, marginTop: '2px' }} />
                <span><strong>Advanced PVD &amp; Electroplating:</strong> High-durability Physical Vapor Deposition (PVD) gold, antique satin brass, and chrome finishes.</span>
              </li>
            </ul>
          </div>
        </div>
      </section>

      {/* Press & Tooling Workshop Details */}
      <section className="section about-workshop-details">
        <div className="section-heading">
          <div>
            <p className="eyebrow">EQUIPMENT & TECHNICAL TOOLING</p>
            <h2>Press &amp; Tooling Workshop Capabilities</h2>
          </div>
          <Link to="/quality-inspection" className="button outline">
            Explore Inspection Protocols <ArrowRight size={16} />
          </Link>
        </div>

        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '24px', marginTop: '30px' }}>
          <div style={{ background: '#fff', border: '1px solid var(--border)', borderRadius: '10px', padding: '24px' }}>
            <Wrench size={24} color="var(--gold)" style={{ marginBottom: '12px' }} />
            <h3 style={{ fontSize: '18px', color: 'var(--navy)', marginBottom: '8px' }}>Power Press Stamping Lines</h3>
            <p style={{ fontSize: '14px', lineHeight: '1.6', color: 'var(--body)' }}>
              Mechanical and pneumatic power presses ranging from 20 to 100 metric tons handle progressive stamping, deep-drawn lock casings, bracket punching, and precision hinge knuckling.
            </p>
          </div>

          <div style={{ background: '#fff', border: '1px solid var(--border)', borderRadius: '10px', padding: '24px' }}>
            <Factory size={24} color="var(--gold)" style={{ marginBottom: '12px' }} />
            <h3 style={{ fontSize: '18px', color: 'var(--navy)', marginBottom: '8px' }}>Tool Room &amp; Die Maintenance</h3>
            <p style={{ fontSize: '14px', lineHeight: '1.6', color: 'var(--body)' }}>
              In-house tool room equipped with surface grinders, lathe machines, and spark EDM for tooling maintenance, custom punch fabrication, and customer-specific OEM profile adjustments.
            </p>
          </div>

          <div style={{ background: '#fff', border: '1px solid var(--border)', borderRadius: '10px', padding: '24px' }}>
            <Award size={24} color="var(--gold)" style={{ marginBottom: '12px' }} />
            <h3 style={{ fontSize: '18px', color: 'var(--navy)', marginBottom: '8px' }}>5-Stage Quality Inspection</h3>
            <p style={{ fontSize: '14px', lineHeight: '1.6', color: 'var(--body)' }}>
              Pre-production metal gauge audits, in-line dimensional calliper checks, lock tumbler keying verification, salt-spray plating tests, and carton drop testing for secure sea-freight transport.
            </p>
          </div>
        </div>
      </section>

      {/* Infrastructure Facility Showcase */}
      <FacilityShowcase />

      {/* Export Markets Served */}
      <section className="section about-export-markets" style={{ background: '#fdfbf7', padding: '60px 24px', borderRadius: '16px', margin: '40px auto', maxWidth: '1200px' }}>
        <div style={{ textAlign: 'center', maxWidth: '700px', margin: '0 auto 36px auto' }}>
          <p className="eyebrow">GLOBAL DISTRIBUTION</p>
          <h2 style={{ fontSize: '30px', color: 'var(--navy)' }}>Export Markets We Serve</h2>
          <p style={{ color: 'var(--body)', lineHeight: '1.6' }}>
            From Aligarh through India&apos;s leading sea ports (Mundra and Nhava Sheva, Mumbai), our architectural hardware is consolidated for B2B buyers worldwide:
          </p>
        </div>

        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))', gap: '20px' }}>
          <div style={{ background: '#fff', padding: '20px', borderRadius: '10px', border: '1px solid var(--border)' }}>
            <Globe2 size={24} color="var(--blue)" style={{ marginBottom: '10px' }} />
            <h3 style={{ fontSize: '17px', color: 'var(--navy)', marginBottom: '6px' }}>Middle East &amp; GCC</h3>
            <p style={{ fontSize: '13px', color: 'var(--body)', margin: 0 }}>United Arab Emirates, Saudi Arabia, Oman, Qatar, Bahrain, Kuwait.</p>
          </div>
          <div style={{ background: '#fff', padding: '20px', borderRadius: '10px', border: '1px solid var(--border)' }}>
            <Globe2 size={24} color="var(--blue)" style={{ marginBottom: '10px' }} />
            <h3 style={{ fontSize: '17px', color: 'var(--navy)', marginBottom: '6px' }}>Africa</h3>
            <p style={{ fontSize: '13px', color: 'var(--body)', margin: 0 }}>Kenya, Nigeria, Ghana, Tanzania, South Africa, Uganda, Ethiopia.</p>
          </div>
          <div style={{ background: '#fff', padding: '20px', borderRadius: '10px', border: '1px solid var(--border)' }}>
            <Globe2 size={24} color="var(--blue)" style={{ marginBottom: '10px' }} />
            <h3 style={{ fontSize: '17px', color: 'var(--navy)', marginBottom: '6px' }}>Europe &amp; UK</h3>
            <p style={{ fontSize: '13px', color: 'var(--body)', margin: 0 }}>United Kingdom, Germany, Poland, Spain (architectural ironmongery &amp; hinges).</p>
          </div>
          <div style={{ background: '#fff', padding: '20px', borderRadius: '10px', border: '1px solid var(--border)' }}>
            <Globe2 size={24} color="var(--blue)" style={{ marginBottom: '10px' }} />
            <h3 style={{ fontSize: '17px', color: 'var(--navy)', marginBottom: '6px' }}>North America</h3>
            <p style={{ fontSize: '13px', color: 'var(--body)', margin: 0 }}>United States and Canada (specialized OEM ironmongery and private-label components).</p>
          </div>
        </div>
      </section>

      {/* Corporate Verification & Interactive Map Section */}
      <section className="section about-legal-map">
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))', gap: '32px', alignItems: 'flex-start' }}>
          <div>
            <p className="eyebrow">BUSINESS VERIFICATION &amp; HEADQUARTERS</p>
            <h2 style={{ fontSize: '26px', color: 'var(--navy)', marginBottom: '16px' }}>Registered Aligarh Facility</h2>
            <p style={{ color: 'var(--body)', lineHeight: '1.6', marginBottom: '20px' }}>
              Prospective buyers, sourcing delegations, and third-party inspection agencies are welcome to coordinate visits to our registered unit in Shastri Nagar, Aligarh.
            </p>

            <div style={{ display: 'flex', flexDirection: 'column', gap: '14px', background: '#fff', border: '1px solid var(--border)', borderRadius: '10px', padding: '24px' }}>
              <div>
                <span style={{ fontSize: '12px', color: 'var(--quiet)', display: 'block', textTransform: 'uppercase' }}>Legal Entity</span>
                <strong style={{ fontSize: '16px', color: 'var(--navy)' }}>Arpit Impex</strong>
              </div>
              <div>
                <span style={{ fontSize: '12px', color: 'var(--quiet)', display: 'block', textTransform: 'uppercase' }}>Goods &amp; Services Tax Number (GSTIN)</span>
                <strong style={{ fontSize: '15px', color: 'var(--navy)' }}>{companyInfo.gstNumber}</strong>
                <span style={{ marginLeft: '8px', fontSize: '11px', background: '#ecfdf5', color: '#059669', padding: '2px 8px', borderRadius: '12px', fontWeight: 600 }}>Active &amp; Verified</span>
              </div>
              <div>
                <span style={{ fontSize: '12px', color: 'var(--quiet)', display: 'block', textTransform: 'uppercase' }}>Managing Executive</span>
                <strong style={{ fontSize: '15px', color: 'var(--navy)' }}>{companyInfo.contactPerson} (Founder)</strong>
              </div>
              <div>
                <span style={{ fontSize: '12px', color: 'var(--quiet)', display: 'block', textTransform: 'uppercase' }}>Registered Address</span>
                <p style={{ fontSize: '14px', color: 'var(--body)', margin: '4px 0 0 0', lineHeight: '1.5' }}>{companyInfo.location}</p>
              </div>
              <div>
                <span style={{ fontSize: '12px', color: 'var(--quiet)', display: 'block', textTransform: 'uppercase' }}>Direct Export Desk</span>
                <p style={{ fontSize: '14px', color: 'var(--navy)', margin: '4px 0 0 0', fontWeight: 600 }}>
                  <a href={`tel:${companyInfo.phone}`} style={{ color: 'inherit', textDecoration: 'none' }}>{companyInfo.phone}</a> · <a href={`mailto:${companyInfo.email}`} style={{ color: 'var(--blue)', textDecoration: 'none' }}>{companyInfo.email}</a>
                </p>
              </div>
            </div>
          </div>

          <div>
            <p className="eyebrow">LOCATION &amp; LOGISTICS</p>
            <h2 style={{ fontSize: '26px', color: 'var(--navy)', marginBottom: '16px' }}>Find Us on Google Maps</h2>
            <div className="about-map-container" style={{ borderRadius: '12px', overflow: 'hidden', border: '1px solid var(--border)', boxShadow: '0 4px 12px rgba(0,0,0,0.05)' }}>
              <iframe
                title="Arpit Impex Shastri Nagar Aligarh Facility Map"
                src="https://maps.google.com/maps?q=1%2F874%2C+Gali+No.+1%2C+Shastri+Nagar%2C+Chhawani+Road%2C+Aligarh%2C+Uttar+Pradesh+202001&t=&z=15&ie=UTF8&iwloc=&output=embed"
                width="100%"
                height="320"
                style={{ border: 0, display: 'block' }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />
            </div>
            <div style={{ marginTop: '14px', display: 'flex', gap: '12px', flexWrap: 'wrap' }}>
              <a
                href={companyInfo.googleMapsDirectionsUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="button outline"
                style={{ fontSize: '13px', padding: '10px 16px' }}
              >
                <MapPin size={15} /> Open in Google Maps
              </a>
              <a
                href={companyInfo.googleBusinessUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="button outline"
                style={{ fontSize: '13px', padding: '10px 16px' }}
              >
                Google Business Profile →
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Enquiry Banner */}
      <EnquiryBanner />
    </main>
  );
}
