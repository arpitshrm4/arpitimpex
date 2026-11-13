import type { Route } from './+types/llms.txt';
import { siteOrigin } from '@/lib/site-origin.server';
import { products, categories, companyInfo } from '@/data/catalogue';
import { BLOG_POSTS } from '@/data/blog-data';
import { GUIDES_DATA } from '@/data/guides-data';

export function loader({ request }: Route.LoaderArgs) {
  const origin = siteOrigin(request);

  // Group products by category
  const productsByCategory = categories.map((cat) => ({
    ...cat,
    items: products.filter((p) => p.category === cat.id),
  }));

  const content = `# Arpit Impex

> Premier Architectural Ironmongery, Gate Hardware, Security Locks & Door Fittings Direct Manufacturer and Exporter | Aligarh, Uttar Pradesh, India | ${origin}

## Business Overview
Arpit Impex is an established architectural door hardware manufacturer, OEM private-label partner, and global exporter of wholesale architectural hardware, heavy-duty architectural ironmongery, cast iron ironmongery, exterior gate hardware, security door locks, heavy duty mortise locks, heritage door handles, precision profile cylinders, and project-based architectural fittings. Operating from the historic hardware manufacturing capital of Aligarh, Uttar Pradesh, India—a globally recognized metallurgical cluster with over 140 years of lock-making heritage—we supply commercial building contractors, architectural ironmongers, hardware wholesalers, and builders merchants across the United Kingdom, Europe, the Middle East (GCC), North America, and Africa.

- **Company Name:** ${companyInfo.name}
- **Manufacturing Facility:** ${companyInfo.location}
- **GST Registration Number:** ${companyInfo.gstNumber} (Verified)
- **Primary Export Ports:** Mundra Port (Gujarat) and Nhava Sheva (JNPT Mumbai)
- **Commercial Shipping Terms:** EXW (Aligarh Factory), FOB (Indian Seaport), CIF / CFR (Destination Seaport)
- **Official B2B Export Desk:** ${companyInfo.email} | WhatsApp: +91 8285687940
- **Official Website:** ${origin}

## Core Manufacturing & Engineering Capabilities
- **High-Tonnage Press Stamping & Tooling:** In-house mechanical power presses, progressive stamping dies, precision knuckle-rolling machines, and solid steel cold-heading pivot riveting lines for heavy-gauge hinges and security bolts.
- **Brass Extrusion & High-Precision CNC Machining:** Machine-broached solid CW617N brass cylinder profiles, automated multi-spindle CNC pin chamber boring (holding ±0.02mm tolerances), and high-wear-resistant brass and zinc alloy (Zamak-5) lock bodies.
- **Architectural Surface Weatherproofing:**
  - *Electrostatic Matte Black Powder Coating:* 60–80 µm thickness, iron-phosphated pre-treatment, cured at 200°C; rated for 240+ hours neutral salt spray testing per ASTM B117.
  - *Hot-Dip Galvanizing (HDG):* Molten zinc immersion at 450°C conforming to BS EN ISO 1461 (85+ microns metallurgical zinc-iron alloy barrier).
  - *Trivalent Zinc Passivation (Cr3+):* Hexavalent-chromium-free bright silver and yellow-gold passivated electroplating.
- **Bespoke OEM Private-Label Program:** 2D/3D CAD technical reviews, custom progressive die stamping for buyer brand logos on steel leaves and strike plates, bespoke printed retail polybags with euro hanging holes, custom clamshells, and scannable retail barcoding (EAN-13 / UPC).
- **Export Container Logistics:** High-density cargo specialists maximizing 20ft FCL container payloads (24 to 28 metric tons) to eliminate wasted shipping volume; heat-treated ISPM-15 certified wooden pallets, heavy plastic shrink-wrap, corner protectors, and industrial calcium chloride container desiccant bags to prevent marine condensation.

## Core Architectural Hardware Categories
${categories
  .map(
    (cat) =>
      `- **[${cat.name}](${origin}${cat.path}):** ${cat.description}`
  )
  .join('\n')}

## Complete Product Catalogue (${products.length} Models)
Our complete range of architectural hardware is catalogued below, categorized by function with direct links to technical specification sheets:

${productsByCategory
  .map(
    (cat) => `### Category: ${cat.name} (${cat.items.length} Products)
Category Overview: ${cat.description}
Category URL: ${origin}${cat.path}

${cat.items
  .map(
    (p, idx) => `#### ${idx + 1}. ${p.name} (Model: ${p.modelNumber})
- **Product URL:** ${origin}/products/${p.slug}
- **Category:** ${p.categoryName}
- **Supply Arrangement:** ${p.sourceStatus}${p.supplyArrangement ? ` (${p.supplyArrangement})` : ''}
- **Material & Metallurgy:** ${p.material}
- **Surface Finish:** ${p.finish}
- **Mechanism:** ${p.mechanism}
- **Keys / Keyway:** ${p.keys}
- **Dimensions & Fit:** ${p.dimensions}${p.doorThickness ? ` | Door Thickness: ${p.doorThickness}` : ''}
- **Export Packaging:** ${p.packaging}
- **Technical Description:** ${p.description.trim()}
- **Recommended Applications:** ${p.applications}`
  )
  .join('\n\n')}`
  )
  .join('\n\n')}

## Authoritative B2B Guides & Technical Blogs (${BLOG_POSTS.length} Published Articles)
Comprehensive engineering analysis, metallurgical comparisons, and B2B sourcing playbooks authored by Arpit Impex:

${BLOG_POSTS.map(
  (b, idx) => `### [${idx + 1}] ${b.title}
- **Article URL:** ${origin}/blog/${b.slug}
- **Category:** ${b.category}
- **Reading Time:** ${b.readTime}
- **Author:** ${b.author} | **Published:** ${b.publishedDate}
- **Target Audience:** ${b.targetReader}
- **Target Keyword:** ${b.targetKeyword}
- **Summary:** ${b.summary}
${
  b.faqs && b.faqs.length > 0
    ? `- **Key Questions & Technical FAQs Addressed:**\n${b.faqs
        .map(([q, a]) => `  - **Q: ${q}**\n    *A: ${a}*`)
        .join('\n')}`
    : ''
}`
).join('\n\n')}

## Architectural Procurement & Import Playbooks (${GUIDES_DATA.length} Guides)
Step-by-step buyer workflows covering factory verification, Incoterms, and specifications:

${GUIDES_DATA.map(
  (g, idx) => `### [${idx + 1}] ${g.title}
- **Guide URL:** ${origin}/guides/${g.slug}
- **Category:** ${g.category} | **Reading Time:** ${g.readTime}
- **Published:** ${g.publishedDate} | **Author:** ${g.author}
- **Summary:** ${g.summary}`
).join('\n\n')}

## Commercial Terms, Order Policies & Quality Protocols
- **Minimum Order Quantities (MOQs):** Standard catalogued hardware lines (heavy T-hinges, padbolts, rim deadbolts) typically start at 300 to 500 units/pairs per model. Bespoke OEM private-label designs requiring custom stamping dies start at 1,000 to 2,000 units, with tooling charges credited against volume runs.
- **Evaluation Samples Policy:** Physical evaluation samples are air-couriered via DHL/FedEx for caliper dimension checks, mechanism smoothness, key operation, and electroplating inspection prior to mass container production.
- **Quotation Currency & Payment Terms:** Commercial export quotations are issued in USD (or EUR/GBP upon request). Standard payment terms include Irrevocable Letter of Credit (LC at sight) or 30% advance T/T deposit with the 70% balance payable against original Bill of Lading (B/L) copy.
- **Harmonized Tariff (HS) Codes for Customs Clearance:**
  - *HS Code 8301.40 / 8301.60:* Base metal door locks, rim deadbolts, mortise lock bodies, cylinders, and keys.
  - *HS Code 8302.41 / 8302.49:* Architectural ironmongery, hinges, padbolts, tower bolts, corner brackets, and gate latches.
- **Export Documentation Pack:** Every international sea shipment is accompanied by a signed Commercial Invoice, itemized Packing List with net/gross weights, Original Ocean Bill of Lading (or Express Sea Waybill), Certificate of Origin (COO), and ISPM-15 wooden pallet heat-treatment fumigation certificates.
- **Quality Inspection Protocol (AQL 1.5/2.5):** 5-point factory verification protocol covering raw metal spectroscopic grade compliance, caliper dimensional verification, cross-hatch coating adhesion, cycle fatigue testing, and export master carton drop tests.

## Key Pillar Pages & Direct Contact
- **Product Catalogue:** ${origin}/products
- **OEM Private-Label Manufacturing:** ${origin}/oem-private-label
- **Quality Inspection Protocol:** ${origin}/quality-inspection
- **Digital Engineering Brochure:** ${origin}/brochure
- **Factory Premises & About Us:** ${origin}/about
- **6-Step Export Ordering Process:** ${origin}/process
- **B2B Quotation Desk:** ${origin}/contact
- **Sitemap XML:** ${origin}/sitemap.xml
- **Direct WhatsApp:** https://wa.me/918285687940 (+91 8285687940)
- **Direct Export Email:** ${companyInfo.email}
`;

  return new Response(content, {
    headers: {
      'Content-Type': 'text/plain; charset=utf-8',
      'Cache-Control': 'public, max-age=3600',
    },
  });
}
