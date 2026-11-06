export interface BlogPost {
  slug: string;
  title: string;
  metaTitle: string;
  metaDescription: string;
  h1: string;
  category: 'Buying Guides' | 'Product Knowledge' | 'Export & Compliance' | 'Aligarh & Manufacturing';
  targetKeyword: string;
  targetReader: string;
  publishedDate: string;
  readTime: string;
  author: string;
  image: string;
  imageAlt: string;
  summary: string;
  contentHtml: string;
  faqs?: [string, string][];
  relatedCategories?: { name: string; path: string }[];
}

export const BLOG_CATEGORIES = [
  'All',
  'Buying Guides',
  'Product Knowledge',
  'Export & Compliance',
  'Aligarh & Manufacturing',
] as const;

export const BLOG_POSTS: BlogPost[] = [
  {
    slug: 'architectural-ironmongery-manufacturer-exporter-india',
    title: 'Architectural Ironmongery Manufacturer & Exporter in India: Direct B2B Sourcing Guide',
    metaTitle: 'Architectural Ironmongery Manufacturer & Exporter | India Direct',
    metaDescription: 'Direct architectural ironmongery manufacturer & exporter from Aligarh, India. Sourcing guide for gate hinges, bolts, latches, OEM private-label, MOQs & sea freight.',
    h1: 'Architectural Ironmongery Manufacturer & Exporter in India: The Direct B2B Sourcing Guide',
    category: 'Aligarh & Manufacturing',
    targetKeyword: 'architectural ironmongery manufacturer exporter',
    targetReader: 'Commercial buyers, overseas importers, architectural ironmongers, building material distributors',
    publishedDate: '2026-11-06',
    readTime: '9 min read',
    author: 'Arpit Sharma',
    image: '/images/ironmongery/ornate-black-iron-door-hardware-set.webp',
    imageAlt: 'Architectural ironmongery manufactured in Aligarh, India including black antique gate hinges, heavy padbolts, and door fittings',
    summary:
      'A comprehensive B2B sourcing guide for overseas importers, architectural ironmongers, and commercial hardware distributors seeking direct factory supply of gate hardware, security bolts, and architectural ironmongery from Aligarh, India.',
    faqs: [
      [
        'What distinguishes a direct architectural ironmongery manufacturer from an export trading agent?',
        'A direct manufacturer operates in-house tooling, mechanical power presses, forging lines, and assembly workshops. They own the dies, control steel gauge tolerances (3mm–5mm), provide direct factory gate pricing without middleman margins (15–30% savings), and offer custom OEM die modifications directly with toolroom engineers.',
      ],
      [
        'What types of architectural ironmongery are manufactured in Aligarh, India?',
        'Aligarh specializes in heavy-duty exterior gate ironmongery (T-hinges, strap hinges, reversible hinges), perimeter security hardware (Brenton padbolts, galvanized sliding barrel bolts, foot bolts, rim deadbolts), interior door fittings (mortise lock bodies, euro cylinders, lever handles), and ornamental black antique hardware (thumb latches, ring pull handles, cabin hooks).',
      ],
      [
        'What anti-corrosion surface finishes are recommended for exterior ironmongery exports?',
        'For high-salinity coastal and agricultural environments, Hot-Dip Galvanizing (HDG to ISO 1461, 85+ microns zinc) or Zinc Electroplating with Trivalent Passivation is recommended. For architectural timber gates, dual-coated UV-resistant Electrostatic Matte Black Powder Coating (60–80 microns, rated for 240+ hours neutral salt spray per ASTM B117) provides an enduring weather barrier.',
      ],
      [
        'What are the typical Minimum Order Quantities (MOQs) for direct ironmongery export orders?',
        'For standard catalogued ironmongery (such as heavy T-hinges or barrel bolts), factory MOQs typically start between 300 to 500 units/pairs per model. For bespoke OEM private-label designs requiring proprietary tooling and stamping dies, MOQs generally start at 1,000 to 2,000 units, with tooling costs amortized or credited on volume production runs.',
      ],
      [
        'Can overseas buyers request private-label packaging and stamped brand logos?',
        'Yes. Arpit Impex provides comprehensive OEM private-label manufacturing. We can stamp or laser-etch buyer brand logos directly onto steel hinge leaves and bolt strike plates, package in custom retail polybags or printed colored boxes with your specific EAN-13/UPC barcodes, and consolidate into branded master export cartons.',
      ],
      [
        'Which Indian sea ports handle container shipments of architectural ironmongery?',
        'Full Container Load (FCL) and Less than Container Load (LCL) shipments from our Aligarh factory are consolidated through Mundra Port (Gujarat) or Nhava Sheva (JNPT Mumbai). High-density ironmongery is securely palletized and shrink-wrapped, with standard maritime transit times of 18–25 days to the UK/Europe and 7–12 days to the Middle East (Jebel Ali, Dammam).',
      ],
    ],
    relatedCategories: [
      { name: 'Hinges & Gate Hardware', path: '/category/hinges' },
      { name: 'Bolts & Gate Latches', path: '/category/bolts-latches' },
      { name: 'Brackets, Anchors & Fixings', path: '/category/brackets-anchors' },
      { name: 'Door Locks & Rim Deadbolts', path: '/category/door-locks' },
    ],
    contentHtml: `
      <p class="blog-lead">
        For commercial hardware importers, builders merchants, and architectural ironmongers in the United Kingdom, Europe, North America, and the Middle East, sourcing directly from an established <strong>architectural ironmongery manufacturer in India</strong> provides an unmatched competitive advantage. By bypassing intermediary trading agents and connecting directly with manufacturing units in Aligarh—India's historic hardware capital—overseas distributors achieve 15% to 30% landed cost reductions, exact metallurgical compliance, and bespoke OEM tooling flexibility.
      </p>

      <h2><span class="blog-step-badge">OVERVIEW</span>What Is an Architectural Ironmongery Direct Manufacturer?</h2>
      <p>
        In the commercial hardware sector, the term <em>architectural ironmongery</em> encompasses all functional, security, and decorative metal fittings attached to doors, gates, windows, and perimeter structures. A <strong>direct manufacturer</strong> is a primary production entity that operates in-house mechanical power presses, forging dies, knuckle-rolling equipment, and assembly lines.
      </p>
      <p>
        Unlike commercial export trading firms that broker goods from fragmented third-party workshops with added markups, a direct manufacturer:
      </p>
      <ul class="blog-checklist">
        <li><strong>Controls Raw Metallurgy &amp; Steel Gauge:</strong> Uses certified Cold-Rolled Close-Annealed (CRCA) carbon steel, high-tensile mild steel, solid brass, and zinc alloys (Zamak-3 / Zamak-5) adhering to strict dimensional tolerances.</li>
        <li><strong>Maintains In-House Tooling &amp; Die Facilities:</strong> Develops bespoke stamping progressive dies, custom leaf patterns, and proprietary logo embossing without third-party delay.</li>
        <li><strong>Provides Transparent Factory-Gate Pricing:</strong> Eliminates middleman markups and export agent broker fees, ensuring direct commercial accountability.</li>
        <li><strong>Ensures Batch-by-Batch Quality Consistency:</strong> Executes structured pre-shipment inspections covering dimensional accuracy, knuckle alignment, weld strength, and salt-spray corrosion resistance.</li>
      </ul>

      <div class="blog-callout factory">
        <div class="blog-callout-header">🏭 The Aligarh Manufacturing Cluster Advantage</div>
        <p style="margin: 0;">
          Situated in Uttar Pradesh, India, <strong>Aligarh</strong> has been the world-renowned epicenter of lock manufacturing and architectural ironmongery craftsmanship for over 150 years. With a dense industrial ecosystem of certified steel slitting centers, specialized tool and die makers, modern electroplating plants, and automated powder coating facilities, Aligarh produces millions of gate hinges, security locks, and structural brackets exported globally every month through Mundra and Nhava Sheva (JNPT) container ports.
        </p>
      </div>

      <h2><span class="blog-step-badge">CATALOGUE</span>Core Architectural Ironmongery Categories Manufactured &amp; Exported</h2>
      <p>
        Direct manufacturers in Aligarh supply four primary product categories engineered to international building standards (including BS EN and ASTM specifications):
      </p>

      <div class="blog-table-wrapper">
        <table class="blog-table">
          <thead>
            <tr>
              <th>Ironmongery Category</th>
              <th>Representative Products</th>
              <th>Primary Material Grade</th>
              <th>Standard Export Finishes</th>
              <th>Target Commercial Market</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td><strong>Heavy-Duty Gate Ironmongery</strong></td>
              <td>T-Hinges (150mm–350mm), Heavy Strap Hinges, Reversible Gate Hinges, Hook &amp; Band Sets</td>
              <td>Structural Carbon Steel (3.0mm–4.5mm leaf thickness)</td>
              <td>Electrostatic Matte Black Powder Coat, Hot-Dip Galvanized (HDG)</td>
              <td>Fencing suppliers, timber merchants, agricultural hardware distributors</td>
            </tr>
            <tr>
              <td><strong>Perimeter &amp; Security Ironmongery</strong></td>
              <td>Heavy Brenton Padbolts, Galvanized Sliding Barrel Bolts, Garage Foot Bolts, Rim Deadbolts</td>
              <td>Cold-Rolled Mild Steel, Zinc-Plated Carbon Steel</td>
              <td>Bright Zinc Passivated (Cr3+), Yellow Dichromate, Black Epoxy</td>
              <td>Commercial perimeter gates, industrial warehouse doors, shed builders</td>
            </tr>
            <tr>
              <td><strong>Interior Architectural Fittings</strong></td>
              <td>Mortise Lock Bodies, Euro Profile Cylinders, Brass &amp; Zinc Lever Handles, Escutcheons</td>
              <td>Extruded Solid Brass, Zinc Alloy (Zamak-5), Stainless Steel 304</td>
              <td>Satin Chrome, Brushed Brass, PVD Matte Black, Antique Bronze</td>
              <td>Residential developers, commercial interior contractors, architectural ironmongers</td>
            </tr>
            <tr>
              <td><strong>Ornamental &amp; Black Antique Ironmongery</strong></td>
              <td>Cast Iron Thumb Latches, Ornate Ring Pulls, Fleur-de-Lys Straps, Heavy Cabin Hooks</td>
              <td>Malleable Cast Iron, Forged Mild Steel</td>
              <td>Textured Black Antique Powder Coat, Waxed Rust-Resistant Patina</td>
              <td>Heritage restoration, rustic residential housing, bespoke joinery manufacturers</td>
            </tr>
          </tbody>
        </table>
      </div>

      <h2><span class="blog-step-badge">ANALYSIS</span>Direct Manufacturer vs. Export Trading Intermediary</h2>
      <p>
        Overseas hardware importers often debate whether to engage an export trading house or establish a direct factory partnership. The commercial implications across pricing, quality, and supply chain control are substantial:
      </p>

      <div class="blog-table-wrapper">
        <table class="blog-table">
          <thead>
            <tr>
              <th>Evaluation Parameter</th>
              <th>Direct Factory Manufacturer (Arpit Impex)</th>
              <th>Export Trading Agent / Middleman</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td><strong>Pricing Structure</strong></td>
              <td><mark class="blog-highlight">True Factory-Gate Pricing</mark>. No intermediary commissions; direct volume price tiers.</td>
              <td>15%–30% markup added to raw factory cost to cover agency overhead.</td>
            </tr>
            <tr>
              <td><strong>Tooling &amp; Customization</strong></td>
              <td>In-house CAD review and toolroom die fabrication; direct engineering communication.</td>
              <td>Third-party subcontracting; delays in sample revisions and technical clarifications.</td>
            </tr>
            <tr>
              <td><strong>Quality Control &amp; AQL</strong></td>
              <td>Direct inspection by factory QC supervisors; batch tracking and material test certificates.</td>
              <td>Limited pre-shipment sampling; accountability disputes when defect claims arise.</td>
            </tr>
            <tr>
              <td><strong>MOQ &amp; Container Consolidation</strong></td>
              <td>Flexible cross-category consolidation across locks, hinges, and bolts in a single container.</td>
              <td>Rigid sub-supplier MOQs; inconsistent packaging and carton standards.</td>
            </tr>
            <tr>
              <td><strong>Supply Chain Transparency</strong></td>
              <td>Full visibility into raw material sourcing, production schedules, and port dispatch.</td>
              <td>Opaque supply chain; hidden sub-contractors with variable quality baselines.</td>
            </tr>
          </tbody>
        </table>
      </div>

      <h2><span class="blog-step-badge">FINISHING</span>Anti-Corrosion Surface Finishing Standards for Export</h2>
      <p>
        Because architectural ironmongery is subjected to high mechanical loads, UV exposure, and coastal salt-mist environments, surface treatment is the critical factor preventing premature oxidation and warranty claims:
      </p>

      <div class="blog-callout tip">
        <div class="blog-callout-header">💡 The 3 Pillars of Weatherproof Exterior Ironmongery</div>
        <p style="margin: 0; margin-bottom: 8px;">
          At Arpit Impex, we engineer our exterior ironmongery lines around three high-durability finishing standards:
        </p>
        <ul style="margin: 0; padding-left: 20px;">
          <li><strong>Electrostatic Matte Black Powder Coating (60–80 µm):</strong> Applied after chemical degreasing and iron phosphating. Cured at 200°C for exceptional chip and UV resistance; rated for 240+ hours neutral salt spray testing under ASTM B117.</li>
          <li><strong>Hot-Dip Galvanizing (HDG to ISO 1461):</strong> Molten zinc immersion resulting in an 85+ micron metallurgical bond. Unmatched protection for agricultural gates, marine environments, and heavy structural timber brackets.</li>
          <li><strong>Trivalent Zinc Electroplating (Cr3+):</strong> Environmentally compliant, hexavalent-chromium-free passivation delivering bright silver or yellow-gold finish with superior barrier protection.</li>
        </ul>
      </div>

      <h2><span class="blog-step-badge">PROCESS</span>The 6-Stage Direct Sourcing &amp; Manufacturing Workflow</h2>
      <p>
        How does an overseas importer successfully transition from technical requirements to container delivery? A structured 6-stage procurement protocol ensures seamless execution:
      </p>

      <ul class="blog-checklist">
        <li><strong>Stage 1: Requirement &amp; Engineering Drawing Sign-Off:</strong> The buyer shares detailed 2D/3D CAD technical drawings, physical sample references, or catalog model numbers, confirming leaf thickness, pin diameter, hole spacing, and finish specs.</li>
        <li><strong>Stage 2: Tooling &amp; First-Article Prototype:</strong> For custom OEM models, our Aligarh toolroom fabricates progressive stamping dies. First-off production samples are air-couriered to the buyer for physical installation fitment and mechanical sign-off.</li>
        <li><strong>Stage 3: High-Tonnage Stamping &amp; Knuckle Assembly:</strong> Upon sample approval, production commences on mechanical power presses. Stamped blanks are deburred, knuckles are precision-rolled, and solid steel pivot pins are cold-riveted under controlled pressure.</li>
        <li><strong>Stage 4: Surface Treatment &amp; Curing:</strong> Hardware enters automated ultrasonic cleaning, phosphating pre-treatment, and electrostatic powder coating or zinc galvanizing chambers.</li>
        <li><strong>Stage 5: 5-Point Quality Control (AQL 1.5/2.5):</strong> Comprehensive pre-dispatch checks: caliper dimensional verification, cross-hatch coating adhesion tests, torque and pin retention checks, and barcode scannability.</li>
        <li><strong>Stage 6: Palletization &amp; Port Container Dispatch:</strong> High-density ironmongery is packed in reinforced master cartons, palletized on heat-treated ISPM-15 wooden pallets, shrink-wrapped with edge protectors, and trucked to Mundra or Nhava Sheva (JNPT) sea port.</li>
      </ul>

      <h2><span class="blog-step-badge">LOGISTICS</span>Container Economics, Incoterms &amp; Customs HS Codes</h2>
      <p>
        Architectural ironmongery is dense, heavy cargo. Maximizing container payload is essential to minimizing your landed freight cost per unit:
      </p>
      <ul class="blog-checklist">
        <li><strong>20ft FCL vs. 40ft FCL Selection:</strong> Because steel hardware reaches its maximum legal weight limit (typically 24 to 27 metric tons) before filling the cubic volume, <mark class="blog-highlight">20ft dry containers are almost universally the most cost-effective option</mark> for ironmongery consignments.</li>
        <li><strong>Incoterms 2020:</strong> We quote transparently on <strong>FOB Mundra / Nhava Sheva</strong> (preferred by established importers with negotiated sea-freight contracts) or <strong>CIF / CFR Destination Port</strong> (ideal for buyers seeking all-inclusive landed freight quotes).</li>
        <li><strong>Harmonized System (HS) Tariff Codes:</strong>
          <ul>
            <li><strong>HS Code 8302.41:</strong> Base metal mountings, fittings and similar articles suitable for buildings (door handles, brackets, hinges).</li>
            <li><strong>HS Code 8302.49:</strong> Mountings, fittings for other architectural applications (gate hardware, padbolts, sliding bolts).</li>
            <li><strong>HS Code 8301.40:</strong> Other locks and locking mechanisms of base metal (rim deadbolts, mortise locks).</li>
          </ul>
        </li>
        <li><strong>Export Documentation Pack:</strong> Every consignment includes itemized Commercial Invoices, Packing Lists with net/gross weights, Original Ocean Bill of Lading, and preferential Certificate of Origin (COO).</li>
      </ul>

      <h2><span class="blog-step-badge">OEM</span>Bespoke Private-Label Branding for Importers &amp; Distributors</h2>
      <p>
        Many of our long-term distribution partners in the UK, Europe, and the Middle East market their architectural ironmongery under their own registered trademarks. Through our <a href="/oem-private-label">OEM &amp; Private-Label Manufacturing Program</a>, we provide:
      </p>
      <ul class="blog-checklist">
        <li><strong>Die-Stamped &amp; Laser-Etched Branding:</strong> Permanent embossed logo stamping on hinge leaves, padbolt strike plates, and cylinder faces.</li>
        <li><strong>Retail Clamshell &amp; Polybag Packaging:</strong> Custom printed retail polybags with hanging holes, matched structural wood screws, and high-resolution color inserts.</li>
        <li><strong>Custom Barcoding (EAN-13 &amp; UPC):</strong> Scannable retail barcodes and model numbering pre-applied on inner boxes and master export cartons.</li>
        <li><strong>Pallet Labeling &amp; Warehouse Tracking:</strong> Customized carton shipping marks for automated pallet scanning at your distribution center.</li>
      </ul>

      <div class="blog-callout tip">
        <div class="blog-callout-header">🤝 Partnering with Arpit Impex</div>
        <p style="margin: 0;">
          Whether you require container-load quantities of standard commercial gate ironmongery, custom-stamped private-label hardware, or specialized building fittings, our Aligarh manufacturing and export desk provides prompt engineering reviews and binding commercial quotations. Explore our full <a href="/products">Product Catalogue</a>, download the <a href="/brochure">Digital Engineering Brochure</a>, or contact our export team directly at <a href="mailto:exports@arpitimpex.com">exports@arpitimpex.com</a> or via WhatsApp at <a href="https://wa.me/918285687940">+91 8285687940</a>.
        </p>
      </div>
    `,
  },
  {
    slug: 'import-door-hardware-from-india',
    title: "How to Import Door Hardware from India: A Buyer's Guide",
    metaTitle: "How to Import Door Hardware from India: Buyer's Guide",
    metaDescription: 'Step-by-step guide to importing door locks, handles, hinges and ironmongery from India: specs, samples, MOQ, shipping terms and documents.',
    h1: "How to Import Door Hardware from India: A Buyer's Guide",
    category: 'Buying Guides',
    targetKeyword: 'import door hardware from India',
    targetReader: 'Importers, distributors',
    publishedDate: '2026-10-31',
    readTime: '7 min read',
    author: 'Arpit Sharma',
    image: '/images/press-workshop.webp',
    imageAlt: 'Arpit Impex Press & Tooling Workshop in Aligarh, India',
    summary:
      'A practical step-by-step roadmap walking through how an import order normally works, what to prepare before you contact a supplier, and the mistakes that cost first-time buyers time and money.',
    faqs: [
      [
        'Do you accept small trial orders?',
        'MOQ is confirmed per model, finish and packaging requirement. Send your requirement and we will advise what is workable.',
      ],
      [
        'Can I have my own packaging or brand?',
        'Private-label and buyer-branded packaging can be reviewed, subject to order volume and confirmed MOQ.',
      ],
      [
        'Can I customize the finish or dimensions?',
        'Custom electroplating and dimensional adaptations can be discussed, depending on the product and volume.',
      ],
      [
        'What shipping terms can you quote?',
        'EXW, FOB (Indian port) and CIF (destination port) where mutually agreed.',
      ],
      [
        'How do I get started?',
        'Send the model number or drawing, quantity, preferred finish, packaging requirement and destination.',
      ],
    ],
    relatedCategories: [
      { name: 'Door Locks & Rim Deadbolts', path: '/category/door-locks' },
      { name: 'Cylinder Locks & Keys', path: '/category/cylinders' },
      { name: 'Hinges & Gate Hardware', path: '/category/hinges' },
    ],
    contentHtml: `
      <p class="blog-lead">
        If you buy door locks, handles, hinges or gate hardware in volume, India is worth a serious look. Aligarh in Uttar Pradesh has long been known as India's premier lock and architectural hardware manufacturing cluster. This guide walks through how an import order normally works, what to prepare before contacting a supplier, and the mistakes that cost first-time buyers time and money.
      </p>

      <h2><span class="blog-step-badge">STEP 01</span>Define Exactly What You Need</h2>
      <p>Suppliers can only quote accurately when your requirement is specific. Before submitting an enquiry, gather this complete specification checklist:</p>
      <ul class="blog-checklist">
        <li><strong>Product &amp; Model Reference:</strong> Exact model code, technical drawing, high-resolution photo, or physical reference sample.</li>
        <li><strong>Dimensional Tolerances &amp; Fit:</strong> Case depth, backset, door-thickness range, and cylinder profile (e.g. <a href="/category/cylinders">Euro profile DIN 18252 vs. round BSK cylinder</a>).</li>
        <li><strong>Material Grade &amp; Surface Finish:</strong> Mild steel stamping, die-cast zinc alloy, brass, stainless steel, hot-dip galvanized, electroplated satin brass, polished chrome, or powder-coated matte black.</li>
        <li><strong>Order Volumes &amp; Projections:</strong> Initial trial quantity (MOQ) and estimated recurring container volumes.</li>
        <li><strong>Branding &amp; Packaging Specifications:</strong> Standard neutral export packaging or custom private-label box branding (<a href="/oem-private-label">OEM Private Label Service</a>).</li>
        <li><strong>Destination Port:</strong> Exact seaport or inland container depot (ICD) for landed freight estimation.</li>
      </ul>
      <p>The more complete the enquiry, <mark class="blog-highlight">the faster and more binding your commercial quotation will be</mark>.</p>

      <h2><span class="blog-step-badge">STEP 02</span>Confirm How the Product Is Supplied</h2>
      <p>
        Not every item from an Indian hardware exporter is produced under one roof. Certain products are manufactured in the supplier's own press workshop, while others are consolidated through a network of specialized partner foundries and electroplating facilities.
      </p>
      
      <div class="blog-callout factory">
        <div class="blog-callout-header">🏭 Factory Direct vs. Consolidated Sourcing</div>
        <p style="margin: 0;">
          At Arpit Impex, we maintain complete transparency: we manufacture selected product lines (<a href="/category/door-locks">such as penta-bolt rim deadbolts</a>, <a href="/category/hinges">heavy-duty T-hinges</a>, and <a href="/category/bolts-latches">barrel bolts</a>) in our own Aligarh press and tooling workshop, while coordinating secondary fittings through vetted regional partner manufacturers. Always confirm the supply arrangement upfront as it directly impacts your lead time and MOQ flexibility.
        </p>
      </div>

      <h2><span class="blog-step-badge">STEP 03</span>Review the Commercial Quotation Thoroughly</h2>
      <p>A professional export quotation must be binding and clearly state:</p>
      <ul class="blog-checklist">
        <li><strong>Unit Price &amp; Currency:</strong> Stated in USD or agreed currency, with clear quantity-tiered discounts.</li>
        <li><strong>Confirmed MOQ:</strong> Stipulated per model, finish variation, and packaging tier.</li>
        <li><strong>Production Lead Time:</strong> Factory lead time from sample sign-off to container loading (typically 20–35 days).</li>
        <li><strong>Packaging Specs:</strong> Inner boxes, master export cartons, palletization, and gross container weights.</li>
        <li><strong>Shipping Incoterm:</strong> Clearly defined named port or factory gate (EXW, FOB, or CIF).</li>
        <li><strong>Payment Terms:</strong> Standard export terms (such as Irrevocable LC at sight or 30% advance T/T with balance against B/L copy).</li>
        <li><strong>Price Validity Window:</strong> <mark class="blog-highlight">Quotation expiry date</mark>, as international metal raw material indices (copper, zinc, steel) fluctuate.</li>
      </ul>

      <h2><span class="blog-step-badge">STEP 04</span>Order &amp; Physically Inspect Evaluation Samples</h2>
      <p>
        <mark class="blog-highlight">Never commit to bulk container production based purely on digital photographs or CAD renders.</mark> Physical evaluation is mandatory to verify hand feel, spring return action, key tolerances, and electroplating depth.
      </p>

      <div class="blog-callout tip">
        <div class="blog-callout-header">💡 Buyer Pro Tip: The Essential 5-Point Sample Check</div>
        <p style="margin: 0; margin-bottom: 8px;">When your evaluation samples arrive by air courier, rigorously test:</p>
        <ul style="margin: 0; padding-left: 20px;">
          <li><strong>Mechanical Movement:</strong> Smooth cylinder rotation, double-throw bolt extension without sticking, and solid spring latch return.</li>
          <li><strong>Plating &amp; Edges:</strong> Check recessed corners, strike edges, and screw countersinks for even coating thickness and zero bare spots.</li>
          <li><strong>Caliper Fitment:</strong> Measure case depth, backset, and spindle hub against your architectural door cutouts.</li>
          <li><strong>Key Configuration:</strong> Inspect brass key stamping, number engraving, and key duplication smoothness across all supplied keys.</li>
          <li><strong>Packaging Integrity:</strong> Ensure box rigidity and barcode legibility survive international handling.</li>
        </ul>
      </div>

      <h2><span class="blog-step-badge">STEP 05</span>Agree on Quality Standards &amp; Pre-Shipment Inspection</h2>
      <p>
        Define formal acceptable quality limits (AQL) in writing before tooling or stamping commences. Quality criteria should govern raw metal grade compliance, plating salt-spray resistance, and master carton drop testing. Review our detailed <a href="/quality-inspection">5-Stage Hardware Inspection Protocol</a> to understand the verification checkpoints implemented at our facility.
      </p>

      <h2><span class="blog-step-badge">STEP 06</span>Select the Right Shipping Term (Incoterms 2020)</h2>
      <p>Selecting the proper trade term balances logistics control with cost transparency:</p>

      <div class="blog-table-wrapper">
        <table class="blog-table">
          <thead>
            <tr>
              <th style="width: 22%;">Incoterm</th>
              <th style="width: 38%;">Seller (Arpit Impex) Responsibility</th>
              <th style="width: 40%;">Buyer (Importer) Responsibility</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td><span class="incoterm-chip">EXW</span> <strong>Ex Works</strong></td>
              <td>Manufacture hardware, export-grade carton packaging, and make cargo available at our Aligarh factory gate.</td>
              <td>Inland transport from Aligarh, Indian export customs clearance, port terminal handling, sea freight, transit insurance, and import clearance.</td>
            </tr>
            <tr>
              <td><span class="incoterm-chip">FOB</span> <strong>Free on Board</strong></td>
              <td>Factory packaging, inland trucking from Aligarh to Indian seaport (Mundra or Nhava Sheva JNPT), export customs clearance, and loading aboard the vessel.</td>
              <td>International ocean freight, marine transit cargo insurance, destination port clearance, import tariffs/taxes, and final warehouse delivery. <em>(Most recommended for volume buyers with existing freight forwarders).</em></td>
            </tr>
            <tr>
              <td><span class="incoterm-chip">CIF</span> <strong>Cost, Insurance &amp; Freight</strong></td>
              <td>All FOB responsibilities plus international ocean freight booking and marine cargo insurance to your designated destination seaport.</td>
              <td>Destination port terminal handling, customs brokerage, duty tariffs, container de-stuffing, and inland transport to your distribution center.</td>
            </tr>
          </tbody>
        </table>
      </div>

      <h2><span class="blog-step-badge">STEP 07</span>Prepare Export Documentation &amp; Customs Classifications</h2>
      <p>Smooth customs clearance requires synchronized documentation. For hardware imports from India, standard paperwork includes:</p>
      <ul class="blog-checklist">
        <li><strong>Commercial Invoice:</strong> Complete with itemized descriptions, unit prices, and HS codes.</li>
        <li><strong>Packing List:</strong> Net weights, gross weights, carton counts, and pallet configurations.</li>
        <li><strong>Bill of Lading (B/L):</strong> Clean on-board ocean bill of lading or Sea Waybill.</li>
        <li><strong>Certificate of Origin (COO):</strong> Issued by designated Indian export promotion councils for preferential tariff eligibility where applicable.</li>
      </ul>
      <p>
        Standard customs classifications for architectural door locks fall under <mark class="blog-highlight">HS Code 8301</mark> (Padlocks, locks, and keys of base metal), while handles, hinges, brackets, and gate fittings fall under <mark class="blog-highlight">HS Code 8302</mark>. Always verify duty schedules with your licensed customs broker prior to dispatch.
      </p>

      <h2><span class="blog-step-badge">WATCH-OUT</span>Critical Sourcing Mistakes to Avoid</h2>
      <p>Over our years of export supply, we see first-time importers stumble on five avoidable traps:</p>
      <ul class="blog-warning-list">
        <li><strong>Committing to Containers Without Physical Samples:</strong> Never sign off mass production based solely on screen photos. Dimensional variations of 1mm can compromise lock mortise installations.</li>
        <li><strong>Ambiguous Finish Specifications:</strong> Terms like "black hardware" or "gold finish" are dangerously vague. Specify exact electroplating or powder-coat codes (e.g., Matte Black Epoxy, 5–8 micron Satin Nickel, or PVD Brushed Gold).</li>
        <li><strong>Overlooking Inner Box Barcode &amp; Retail Requirements:</strong> Ensure retail EAN/UPC barcodes, model badges, and multilingual instructions are finalized before packaging print runs begin.</li>
        <li><strong>Skipping Pre-Dispatch Inspection Sign-Off:</strong> Require a pre-shipment photo and dimension inspection report before final wire payment and container seal application.</li>
        <li><strong>Uncalculated Landed Duty Calculations:</strong> Verify regional anti-dumping duties, value-added taxes, and terminal handling charges before calculating your retail margins.</li>
      </ul>
    `,
  },
];

/**
 * Draft blog posts preserved for future publication.
 */
export const DRAFT_BLOG_POSTS: BlogPost[] = [
  {
    slug: 'rim-lock-vs-mortise-lock',
    title: 'Rim Lock vs Mortise Lock: Which Should You Stock?',
    metaTitle: 'Rim Lock vs Mortise Lock: Which Should You Stock?',
    metaDescription: 'Compare rim locks and mortise locks for security, fitment and market demand. Sourcing guide for hardware wholesalers and contractors from Aligarh, India.',
    h1: 'Rim Lock vs Mortise Lock: Which Should You Stock?',
    category: 'Product Knowledge',
    targetKeyword: 'rim lock vs mortise lock',
    targetReader: 'Wholesalers, contractors',
    publishedDate: '2026-10-24',
    readTime: '6 min read',
    author: 'Arpit Sharma',
    image: '/images/hero-penta-bolt-rim-lock.webp',
    imageAlt: 'Heavy duty rim deadbolt lock set compared with mortise lock body',
    summary:
      'Understanding the engineering, security mechanisms, installation methods, and commercial applications of surface-mounted rim locks versus recessed mortise lock bodies.',
    relatedCategories: [
      { name: 'Door Locks & Rim Deadbolts', path: '/category/door-locks' },
      { name: 'Lock Bodies & Latches', path: '/category/lock-bodies' },
    ],
    contentHtml: `
      <p class="blog-lead">
        When stocking architectural hardware for residential developments, security gates, or regional distribution, choosing between surface-mounted rim deadbolts and recessed mortise lock bodies determines your inventory turnover, contractor fitment ease, and price points.
      </p>
      <h2>The Mechanical Differences</h2>
      <p>A rim lock mounts directly onto the inner surface of the door, preserving the full structural thickness of timber or metal stiles. In contrast, a mortise lock sits entirely inside a pocket routed into the leading door edge, providing clean, flush aesthetic lines favored in modern commercial and residential construction.</p>
      <h2>When to Stock Rim Deadbolts</h2>
      <p>Rim deadbolts (such as our penta-bolt sets) are essential for exterior security gates, perimeter portals, and residential main doors where high forced-entry resistance is paramount. They require only a circular cylinder through-hole, reducing installation time dramatically.</p>
      <h2>When to Stock Mortise Lock Bodies</h2>
      <p>Mortise locks are the standard for interior office partitions, luxury apartment entrance doors, and hospitality projects where modular euro cylinders and decorative lever handles on rose plates are required.</p>
    `,
  },
  {
    slug: 'euro-profile-vs-bsk-cylinders',
    title: 'Euro Profile vs BSK Mortise Cylinders Explained',
    metaTitle: 'Euro Profile vs BSK Cylinders: Technical Guide',
    metaDescription: 'Detailed dimensional and keying comparison between DIN standard Euro profile cylinders and round BSK cylinders for hardware importers and locksmiths.',
    h1: 'Euro Profile vs BSK Mortise Cylinders Explained',
    category: 'Product Knowledge',
    targetKeyword: 'euro profile cylinder vs mortise cylinder',
    targetReader: 'Distributors, locksmiths',
    publishedDate: '2026-10-18',
    readTime: '6 min read',
    author: 'Arpit Sharma',
    image: '/images/products/euro-cylinder-lock-numbered-keys.webp',
    imageAlt: 'Solid brass euro profile cylinder with numbered brass keys',
    summary:
      'A technical breakdown of Euro DIN 18252 profile cylinders versus round BSK lock cylinders, pin tumbler mechanics, and key duplication standards.',
    relatedCategories: [
      { name: 'Cylinder Locks & Keys', path: '/category/cylinders' },
    ],
    contentHtml: `
      <p class="blog-lead">
        The lock cylinder is the mechanical heart of any architectural locking assembly. Standardizing cylinder profiles determines compatibility with handles, escutcheons, master-keying capabilities, and replacement part availability.
      </p>
      <h2>Euro Profile Standards (DIN 18252 / EN 1303)</h2>
      <p>The Euro profile teardrop cross-section is the dominant standard across Europe, the Middle East, and Asia. Secured with a single M5 retaining screw through the lock body faceplate, it supports 60mm (30/30) and 70mm (35/35) symmetrical sizing as well as key-thumbturn combinations.</p>
      <h2>BSK Threaded Cylinders</h2>
      <p>BSK cylinders feature a circular threaded body commonly paired with traditional mortise deadbolts and industrial shutter mechanisms. Understanding the difference ensures your clients receive exact fitment.</p>
    `,
  },
  {
    slug: 't-hinge-vs-strap-hinge',
    title: 'T-Hinge vs Strap Hinge: Choosing Gate Hinges for Bulk Orders',
    metaTitle: 'T-Hinge vs Strap Hinge: Gate Hardware Guide',
    metaDescription: 'Compare heavy-duty T-hinges and strap hinges for exterior timber gates, agricultural doors, and sheds. Steel gauge, load ratings, and weather finishes.',
    h1: 'T-Hinge vs Strap Hinge: Choosing Gate Hinges for Bulk Orders',
    category: 'Product Knowledge',
    targetKeyword: 'T-hinge vs strap hinge',
    targetReader: 'Hardware retailers',
    publishedDate: '2026-10-12',
    readTime: '5 min read',
    author: 'Arpit Sharma',
    image: '/images/ironmongery/matte-black-t-hinge-product-photo.webp',
    imageAlt: 'Matte black heavy duty tee hinge for timber gate installations',
    summary:
      'How to choose between heavy-duty T-hinges and full strap hinges for exterior timber gates, agricultural doors, and architectural outbuildings.',
    relatedCategories: [
      { name: 'Hinges & Gate Hardware', path: '/category/hinges' },
    ],
    contentHtml: `
      <p class="blog-lead">
        Exterior gates and heavy shed doors endure severe mechanical leverage, wind load, and weather exposure. Choosing the proper hinge geometry and steel gauge prevents sagging and costly warranty returns.
      </p>
      <h2>T-Hinges (Tee Hinges)</h2>
      <p>T-hinges feature a vertical rectangular butt plate that mounts neatly onto narrow 75mm or 100mm timber posts, paired with a long horizontal strap. Stamped from 2.5mm to 3.5mm steel, they comfortably support gates up to 45 kg.</p>
      <h2>Double Strap Hinges</h2>
      <p>Double strap hinges utilize two symmetrical triangular leaves for wide timber posts, distributing dynamic load evenly across heavy agricultural and barn portals.</p>
    `,
  },
  {
    slug: 'exw-fob-cif-shipping-terms',
    title: 'EXW, FOB or CIF: Which Shipping Term Suits Your Hardware Order?',
    metaTitle: 'EXW, FOB or CIF: Hardware Export Shipping Terms',
    metaDescription: 'Understand risk transfer, ocean freight costs, and container customs clearance when importing hardware from India under EXW, FOB, and CIF Incoterms.',
    h1: 'EXW, FOB or CIF: Which Shipping Term Suits Your Hardware Order?',
    category: 'Export & Compliance',
    targetKeyword: 'EXW FOB CIF hardware export',
    targetReader: 'First-time importers',
    publishedDate: '2026-10-05',
    readTime: '6 min read',
    author: 'Arpit Sharma',
    image: '/images/executive-office.webp',
    imageAlt: 'Export coordination and commercial shipping desk at Arpit Impex',
    summary:
      'How to evaluate shipping Incoterms for architectural hardware consignments from India. Risk transfer points, freight cost structures, and customs documentation.',
    relatedCategories: [
      { name: 'Door Locks & Rim Deadbolts', path: '/category/door-locks' },
      { name: 'Bolts & Gate Latches', path: '/category/bolts-latches' },
    ],
    contentHtml: `
      <p class="blog-lead">
        Architectural door hardware and ironmongery are high-density, heavy cargoes. Selecting the right Incoterm ensures transparency regarding sea freight rates, inland transport, and export customs clearance.
      </p>
      <h2>FOB (Free on Board - Mundra Port / Nhava Sheva JNPT)</h2>
      <p>FOB is the most popular choice for established distributors who have their own freight forwarding contracts. Arpit Impex covers factory loading, trucking to the port, and export customs clearance in India.</p>
      <h2>CIF (Cost, Insurance, and Freight - Destination Port)</h2>
      <p>Under CIF, Arpit Impex coordinates ocean shipping and transit insurance all the way to your regional seaport, allowing first-time buyers an all-inclusive landed quote.</p>
    `,
  },
];

