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
    image: '/images/press-workshop.png',
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
        If you buy door locks, handles, hinges or gate hardware in volume, India is worth a serious look. Aligarh in Uttar Pradesh has long been known as a lock-making hub, and many hardware suppliers work from the region. This guide walks through how an import order normally works, what to prepare before you contact a supplier, and the mistakes that cost first-time buyers time and money.
      </p>

      <h2>Step 1: Define exactly what you need</h2>
      <p>Suppliers can only quote accurately when the requirement is specific. Before you send an enquiry, gather:</p>
      <ul>
        <li><strong>Product and model:</strong> a model number, drawing, photo or reference sample</li>
        <li><strong>Size and fit:</strong> dimensions, backset, door thickness range, cylinder type (for example <a href="/category/cylinders">euro profile or BSK</a>)</li>
        <li><strong>Material and finish:</strong> mild steel, zinc alloy, brass, stainless steel, galvanized, matte black, antique brass, chrome and so on</li>
        <li><strong>Quantity:</strong> your target order quantity, and whether you plan repeat orders</li>
        <li><strong>Packaging:</strong> standard boxes, or your own branding (<a href="/oem-private-label">OEM private label</a>)</li>
        <li><strong>Destination:</strong> port or city</li>
      </ul>
      <p>The more complete the enquiry, the faster you get a usable quotation.</p>

      <h2>Step 2: Confirm how the product is supplied</h2>
      <p>
        Not every item from an Indian hardware exporter is made in the same place. Some products are made in the supplier's own workshop, while others come through a network of partner manufacturers. Neither is a problem, but you should ask which applies to each model, because it affects lead time, customization options and minimum order quantity (MOQ).
      </p>
      <p>
        At Arpit Impex, we confirm this for every model during quotation, since we manufacture selected products (<a href="/category/door-locks">such as rim deadbolts</a>, <a href="/category/hinges">T-hinges</a>, and <a href="/category/bolts-latches">tower bolts</a>) in our Aligarh unit and coordinate others through vetted supply partners.
      </p>

      <h2>Step 3: Review the quotation carefully</h2>
      <p>A proper quotation should state:</p>
      <ul>
        <li>Unit price and the currency</li>
        <li>MOQ for each model and finish</li>
        <li>Lead time</li>
        <li>Packaging details</li>
        <li>Shipping term (see below)</li>
        <li>Payment terms</li>
      </ul>
      <p>MOQ and lead time depend on the model, the finish and the packaging, so treat any figure given without that context with caution.</p>

      <h2>Step 4: Ask for a sample</h2>
      <p>Before a bulk order, review a sample of the exact model. Check:</p>
      <ul>
        <li>Mechanism operation (key turns smoothly, bolts throw fully)</li>
        <li>Surface finish and plating quality</li>
        <li>Dimensions against your drawing</li>
        <li>Key quality and the number of keys supplied</li>
        <li>Packaging condition</li>
      </ul>
      <p>Sample availability, cost and dispatch time vary by model, so confirm them at the quotation stage.</p>

      <h2>Step 5: Agree inspection and packaging</h2>
      <p>
        Agree the inspection points in writing before production or dispatch. Depending on the product, checks can include dimensions, finish, key operation, mechanism movement and packaging condition. For export, ask how cartons will be marked and palletized, and whether you want your own labels or boxes. Review our <a href="/quality-inspection">5-stage quality inspection standards</a> for detailed criteria.
      </p>

      <h2>Step 6: Choose a shipping term</h2>
      <div class="blog-table-wrapper">
        <table class="specs-table">
          <thead>
            <tr>
              <th scope="col" style="width: 25%;">Term</th>
              <th scope="col">What it means in practice</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td><strong>EXW (Ex Works)</strong></td>
              <td>You collect the goods from the supplier's premises and handle export clearance, freight and insurance. Maximum control, maximum responsibility.</td>
            </tr>
            <tr>
              <td><strong>FOB (Free on Board)</strong></td>
              <td>The supplier delivers the goods to the Indian port and clears them for export. You pay sea freight, insurance and import costs from there.</td>
            </tr>
            <tr>
              <td><strong>CIF (Cost, Insurance and Freight)</strong></td>
              <td>The supplier arranges freight and insurance to your destination port. You handle import clearance and onward delivery.</td>
            </tr>
          </tbody>
        </table>
      </div>
      <p>
        FOB is a common choice for buyers who have their own freight forwarder. CIF suits buyers who prefer one quotation including freight. Terms are mutually agreed, so discuss them early during our <a href="/process">order process</a>.
      </p>

      <h2>Step 7: Prepare the export documents</h2>
      <p>The documents vary by shipment and destination country, but typically include:</p>
      <ul>
        <li>Commercial invoice</li>
        <li>Packing list</li>
        <li>Shipping bill (filed for export clearance in India)</li>
        <li>Certificate of origin, where required</li>
      </ul>
      <p>
        Also check your own country's import rules: duties, any product standards, and the customs classification (locks and door fittings usually fall under HS headings 8301 and 8302, but confirm the exact code with your customs broker).
      </p>

      <h2>Common mistakes to avoid</h2>
      <ul>
        <li><strong>Ordering without a sample:</strong> Finish and fit surprises are cheap to catch at sample stage and expensive after 40 cartons arrive.</li>
        <li><strong>Vague specifications:</strong> "Black handle" can mean five different finishes. Send drawings and photos.</li>
        <li><strong>Assuming MOQ and lead time are fixed:</strong> They change with model, finish and packaging.</li>
        <li><strong>Skipping the inspection agreement:</strong> Settle what will be checked and how before production.</li>
        <li><strong>Ignoring your own import rules:</strong> Check duties and standards before you commit.</li>
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
    image: '/images/hero-penta-bolt-rim-lock.jpg',
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
    image: '/images/products/euro-cylinder-lock-numbered-keys.jpeg',
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
    image: '/images/ironmongery/matte-black-t-hinge-product-photo.png',
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
    image: '/images/executive-office-showroom.png',
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

