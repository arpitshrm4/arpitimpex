export const images = {
  hero: '/images/products/j-lock-mild-steel-door-penta-bolt-lock-set.jpeg',
  locks: '/images/products/6-lever-zinc-alloy-double-chal-mortise-lock.jpeg',
  handles: '/images/products/160mm-brushed-gold-door-handle.jpeg',
  cylinders: '/images/products/euro-cylinder-lock-numbered-keys.jpeg',
  lockBodies: '/images/products/aluminium-section-mortise-lock-body.jpeg',
  logo: '/images/logo.png',
  factoryEntrance: '/images/factory-entrance.png',
  pressWorkshop: '/images/press-workshop.png',
  executiveOffice: '/images/executive-office.png',
};

export const facilities = [
  {
    id: 'press-workshop',
    title: 'Press & Tooling Workshop',
    tag: 'PRODUCTION WORKSHOP',
    image: '/images/press-workshop.png',
    alt: 'Arpit Impex Power Press Workshop and Tooling Line in Aligarh',
    description: 'Equipped with mechanical power presses, stamping dies, and tooling equipment to form mild steel lock casings, mortise bodies, and strike plates.',
  },
  {
    id: 'executive-office',
    title: 'Commercial & Export Sourcing Desk',
    tag: 'SOURCING DESK',
    image: '/images/executive-office.png',
    alt: 'Arpit Impex Executive Office and Commercial Sourcing Desk',
    description: 'Dedicated workstation for product specification reviews, quotation preparation, international buyer communication, and export documentation coordination.',
  },
  {
    id: 'factory-entrance',
    title: 'Premises & Dispatch Facility',
    tag: 'ALIGARH PREMISES',
    image: '/images/factory-entrance.png',
    alt: 'Arpit Impex Facility Entrance in Shastri Nagar, Aligarh',
    description: 'Situated at Shastri Nagar, Chhawani Road, Aligarh, coordinating domestic logistics, pre-dispatch packaging checks, and export cargo handoff.',
  },
];

export const categories = [
  {
    id: 'door-locks',
    name: 'Door Locks & Rim Locks',
    description: 'Penta bolt rim locks, multi-lever mortise locks, and antique-finish surface rim lock sets.',
    image: '/images/products/j-lock-mild-steel-door-penta-bolt-lock-set.jpeg',
  },
  {
    id: 'door-handles',
    name: 'Door Handles & Fittings',
    description: 'Rose gold, matte black, and brushed satin gold architectural door handles for residential and commercial projects.',
    image: '/images/products/160mm-brushed-gold-door-handle.jpeg',
  },
  {
    id: 'cylinder-locks',
    name: 'Cylinder Locks & Keys',
    description: 'Euro profile and BSK mortise lock cylinders with numbered brass keys for organized key tracking.',
    image: '/images/products/euro-cylinder-lock-numbered-keys.jpeg',
  },
  {
    id: 'lock-bodies',
    name: 'Lock Bodies & Latches',
    description: 'Narrow aluminium section lock bodies with SS strike, standard mortise cases, double-throw bodies, and interior baby latches.',
    image: '/images/products/aluminium-section-mortise-lock-body.jpeg',
  },
];

export interface ProductItem {
  slug: string;
  name: string;
  modelNumber: string;
  category: string;
  categoryName: string;
  sourceStatus: 'Manufactured by Arpit Impex' | 'Partner-sourced' | 'Available on enquiry';
  material: string;
  finish: string;
  mechanism: string;
  keys: string;
  dimensions: string;
  doorThickness?: string;
  packaging: string;
  image: string;
  description: string;
  applications: string;
}

export const products: ProductItem[] = [
  {
    slug: 'j-lock-mild-steel-door-penta-bolt-lock-set',
    name: 'Penta Bolt Rim Door Lock Set',
    modelNumber: 'JL-PB01',
    category: 'door-locks',
    categoryName: 'Rim Door Lock',
    sourceStatus: 'Manufactured by Arpit Impex',
    material: 'Mild Steel Casing & Bolt Assembly',
    finish: 'Dual-tone Metallic Powder Coated with Polished Accents',
    mechanism: 'Multi-bolt (5-bolt) rim deadbolt mechanism with key-operated exterior and interior thumbturn/knob',
    keys: '4 Numbered Brass Keys',
    dimensions: 'Standard rim lock housing footprint (~130mm x 95mm)',
    doorThickness: '30mm – 55mm wooden & metal doors',
    packaging: 'Individual product box; master corrugated export cartons',
    image: '/images/products/j-lock-mild-steel-door-penta-bolt-lock-set.jpeg',
    description: 'Surface-mounted rim door lock featuring a multi-bolt (5-bolt) deadbolt configuration for entrance doors. Fabricated in our Aligarh workshop from mild steel plate with durable surface coating and numbered key entry.',
    applications: 'Main entrance wooden doors, security gates, apartment entry doors, and perimeter utility doors.',
  },
  {
    slug: '6-lever-zinc-alloy-single-chal-mortise-lock',
    name: '6-Lever Single-Throw Mortise Lock',
    modelNumber: 'No. 6052',
    category: 'door-locks',
    categoryName: 'Mortise Lock',
    sourceStatus: 'Manufactured by Arpit Impex',
    material: 'Zinc Alloy Casing with Stamped Steel Lever Pack',
    finish: 'Nickel Plated / Zinc Passivated Options',
    mechanism: '6-lever single chal (single-throw bolt throw of approx. 12mm on a single key rotation)',
    keys: '2 or 3 Numbered Steel Keys',
    dimensions: '65mm backset standard; mortise depth approx. 70mm',
    doorThickness: '32mm – 45mm interior and exterior doors',
    packaging: 'Individually boxed with strike plate; master export cartons',
    image: '/images/products/6-lever-zinc-alloy-single-chal-mortise-lock.png',
    description: 'Standard 6-lever mortise lock (Lock No. 6052) designed for flush wooden and composite doors. Utilizes a single-throw bolt mechanism with precision stamped lever tumblers for smooth everyday operation.',
    applications: 'Office doors, residential bedrooms, commercial utility rooms, and interior partitions.',
  },
  {
    slug: '6-lever-zinc-alloy-double-chal-mortise-lock',
    name: '6-Lever Double-Throw Mortise Lock',
    modelNumber: 'No. 68',
    category: 'door-locks',
    categoryName: 'Mortise Lock',
    sourceStatus: 'Manufactured by Arpit Impex',
    material: 'Zinc Alloy Body with Steel Internal Levers',
    finish: 'Zinc Plated / Satin Finish Faceplate',
    mechanism: '6-lever double chal (double-throw bolt mechanism with extended deadbolt travel on two key turns)',
    keys: '3 Numbered Keys',
    dimensions: 'Standard mortise pocket profile (~75mm depth)',
    doorThickness: '35mm – 50mm wooden doors',
    packaging: 'Individual box packaging; corrugated export cartons',
    image: '/images/products/6-lever-zinc-alloy-double-chal-mortise-lock.jpeg',
    description: 'Traditional double chal (double-throw) 6-lever mortise lock (Lock No. 68). The two-turn key mechanism extends the deadbolt deeper into the door frame strike plate for dependable closure.',
    applications: 'Residential wooden doors, hotel service doors, and commercial interior installations.',
  },
  {
    slug: 'antique-brass-door-rim-lock-set',
    name: 'Antique Brass Finish Rim Lock Set',
    modelNumber: 'RL-AB04',
    category: 'door-locks',
    categoryName: 'Rim Lock',
    sourceStatus: 'Available on enquiry',
    material: 'Pressed Steel Body with Electroplated Antique Brass Finish',
    finish: 'Antique Brass (Aged Patina Appearance)',
    mechanism: 'Surface-mounted rim deadbolt and latch combination with interior snib',
    keys: 'Numbered Brass Keys',
    dimensions: 'Approx. 120mm x 85mm surface mount housing',
    doorThickness: '30mm – 50mm exterior and heritage doors',
    packaging: 'Individual presentation box; master trade cartons',
    image: '/images/products/antique-brass-door-rim-lock-set.png',
    description: 'Surface-mount rim lock set finished with a classic antique brass electroplating. Suitable for period doors, traditional interiors, and wooden perimeter gates requiring exterior key and interior snib operation.',
    applications: 'Heritage properties, boutique hotels, vintage interior decor, and decorative wooden gates.',
  },
  {
    slug: '160mm-black-door-handle',
    name: '160mm Two-Tone Door Handle (Rose Gold & Black)',
    modelNumber: 'DH-160RGB',
    category: 'door-handles',
    categoryName: 'Door Handle',
    sourceStatus: 'Partner-sourced',
    material: 'Zinc Alloy / Aluminium Alloy Casting',
    finish: 'Matte Black Powder Coat with Rose Gold Electroplated Accents',
    mechanism: 'Spring-assisted lever return with 8mm square spindle drive',
    keys: 'N/A (Lever Handle Fitting for Mortise Pairing)',
    dimensions: '160mm lever length; 50mm rose diameter / backplate',
    doorThickness: '35mm – 50mm wooden & flush doors',
    packaging: 'Matched pair packaging with spindle, escutcheons, and fixing screws',
    image: '/images/products/160mm-black-door-handle.jpeg',
    description: 'Contemporary architectural lever handle featuring a 160mm ergonomic profile. Finished in dual-tone matte black and electroplated rose gold accent for modern interior residential and hotel doors.',
    applications: 'Upscale residential bedrooms, luxury apartments, boutique hotel suites, and executive cabins.',
  },
  {
    slug: '175mm-black-door-handle',
    name: '175mm Contemporary Black Plate Door Handle Set',
    modelNumber: 'DH-175BLK',
    category: 'door-handles',
    categoryName: 'Door Handle Set',
    sourceStatus: 'Partner-sourced',
    material: 'Zinc Alloy / Extruded Aluminium Alloy',
    finish: 'Matte Black Electrostatic Finish',
    mechanism: 'Integrated backplate with spring-loaded lever return',
    keys: 'Keyhole cut-out for standard mortise pairing',
    dimensions: '175mm backplate length; 40mm width; 8mm spindle',
    doorThickness: '35mm – 55mm wooden & composite doors',
    packaging: 'Matched pair set with mounting screws and connecting spindle',
    image: '/images/products/175mm-black-door-handle.jpeg',
    description: 'Long-plate architectural lever handle set measuring 175mm in length. Designed for mortise lock pairings on wooden entry, office, and apartment doors with clean minimalist styling.',
    applications: 'Commercial offices, modern apartment doors, institutional buildings, and interior residential doors.',
  },
  {
    slug: '160mm-brushed-gold-door-handle',
    name: '160mm Brushed Gold Architectural Door Handle',
    modelNumber: 'DH-160BGD',
    category: 'door-handles',
    categoryName: 'Door Handle',
    sourceStatus: 'Partner-sourced',
    material: 'Solid Zinc Alloy Casting',
    finish: 'Brushed Satin Gold (Lacquered Protective Finish)',
    mechanism: 'Spring-loaded return cassette with horizontal stop',
    keys: 'N/A (Lever Handle Fitting)',
    dimensions: '160mm lever length; 52mm circular escutcheon rose',
    doorThickness: '32mm – 50mm wooden & laminate doors',
    packaging: 'Protective foam-lined pair packaging with hardware installation pack',
    image: '/images/products/160mm-brushed-gold-door-handle.jpeg',
    description: 'Modern straight-line lever handle in a warm brushed satin gold finish. Features internal spring cassette for positive horizontal alignment and smooth return action on interior door sets.',
    applications: 'Luxury residences, hospitality guest rooms, designer commercial interiors, and showroom doors.',
  },
  {
    slug: 'mortise-cylinder-numbered-keys',
    name: 'BSK Mortise Lock Cylinder with Numbered Keys',
    modelNumber: 'CYL-BSK2325',
    category: 'cylinder-locks',
    categoryName: 'Cylinder Lock',
    sourceStatus: 'Available on enquiry',
    material: 'Solid Brass Core with Sintered Steel Rotating Cam',
    finish: 'Satin Nickel / Natural Brass Finish',
    mechanism: 'Pin tumbler cylinder mechanism with balanced brass tumbler pins',
    keys: '3 or 5 Numbered Brass Keys',
    dimensions: 'Standard 60mm / 70mm symmetrical cylinder profiles',
    doorThickness: 'Compatible with standard mortise lock bodies',
    packaging: 'Individual box packaging with M5 cylinder mounting screw',
    image: '/images/products/mortise-cylinder-numbered-keys.jpeg',
    description: 'BSK profile mortise cylinder lock with numbered brass keys for organized key tracking. Features balanced pin tumblers and standard cam throw for mortise lock body integration.',
    applications: 'Residential mortise locks, office door mortise bodies, and commercial key-controlled access points.',
  },
  {
    slug: 'euro-cylinder-lock-numbered-keys',
    name: 'Euro Profile Cylinder Lock with Numbered Keys',
    modelNumber: 'CYL-EP2631',
    category: 'cylinder-locks',
    categoryName: 'Euro Cylinder',
    sourceStatus: 'Available on enquiry',
    material: 'Solid Extruded Brass Body with Steel Cam',
    finish: 'Satin Chrome / Brushed Brass Options',
    mechanism: 'Standard DIN Euro profile pin tumbler mechanism',
    keys: '3 Numbered Keys',
    dimensions: '60mm (30/30), 70mm (35/35), and 80mm (40/40) length options',
    doorThickness: '35mm – 65mm euro-profile door sets',
    packaging: 'Individual retail box or bulk poly packaging for OEM door manufacturers',
    image: '/images/products/euro-cylinder-lock-numbered-keys.jpeg',
    description: 'Standard DIN Euro profile cylinder lock for compatibility with European and international mortise lock cases. Includes numbered keys for systematic key management across multi-door installations.',
    applications: 'Apartment entry doors, office euro-lock cases, aluminum section doors, and commercial perimeter doors.',
  },
  {
    slug: 'aluminium-section-mortise-lock-body',
    name: 'Narrow-Backset Mortise Lock Body with SS Strike',
    modelNumber: 'LB-ALU20',
    category: 'lock-bodies',
    categoryName: 'Lock Body',
    sourceStatus: 'Manufactured by Arpit Impex',
    material: 'Galvanized Steel Lock Case with Stainless Steel Strike Plate (Kram)',
    finish: 'Satin Stainless Steel Faceplate',
    mechanism: 'Narrow-backset deadbolt and spring-loaded reversible latch',
    keys: 'Operated by Euro profile cylinder (sold separately)',
    dimensions: 'Narrow 20mm / 25mm backset for slim-profile sections; 85mm centres',
    doorThickness: 'Aluminium extrusion profiles and narrow stile metal doors',
    packaging: 'Individually wrapped with SS strike plate and mounting fasteners',
    image: '/images/products/aluminium-section-mortise-lock-body.jpeg',
    description: 'Specialized narrow-style mortise lock body engineered for aluminium section doors, sliding partitions, and metal profile joinery where standard deep-backset bodies cannot fit.',
    applications: 'Aluminium frame doors, glass partition perimeter frames, shopfronts, and commercial metal stiles.',
  },
  {
    slug: 'stainless-steel-sleek-mortise-lock-body',
    name: 'Stainless Steel Faceplate Sleek Mortise Lock Body',
    modelNumber: 'LB-SS85',
    category: 'lock-bodies',
    categoryName: 'Lock Body',
    sourceStatus: 'Manufactured by Arpit Impex',
    material: 'Pressed Steel Body Casing with Stainless Steel Front Plate',
    finish: 'Brushed Stainless Steel Faceplate & Strike',
    mechanism: 'Reversible brass latch bolt and double-turn deadbolt mechanism',
    keys: 'Euro profile cylinder operated (cylinder paired separately)',
    dimensions: '85mm centre distance; 45mm / 50mm backset standard',
    doorThickness: '35mm – 55mm wooden and hollow metal doors',
    packaging: 'Individual box with stainless steel strike plate and fixing screws',
    image: '/images/products/stainless-steel-sleek-mortise-lock-body.jpeg',
    description: 'Full-case mortise lock body with reversible latch and deadbolt. Features a stainless steel front plate and precision-formed internal levers for standard wooden and metal architectural doors.',
    applications: 'Residential wooden entrance doors, commercial office interior doors, and institutional flush doors.',
  },
  {
    slug: 'zinc-alloy-double-chal-mortise-lock-body',
    name: 'Double-Throw (Double Chal) Mortise Lock Body',
    modelNumber: 'LB-DC68',
    category: 'lock-bodies',
    categoryName: 'Lock Body',
    sourceStatus: 'Manufactured by Arpit Impex',
    material: 'Zinc Alloy Internal Components with Heavy-Gauge Steel Body Case',
    finish: 'Zinc Passivated Case with Polished Brass or Chrome Faceplate',
    mechanism: 'Double-throw (double chal) deadbolt linkage with key-operated two-turn throw',
    keys: 'Key-operated via matched lever pack or cylinder interface',
    dimensions: 'Standard mortise pocket profile (~70mm case depth)',
    doorThickness: '35mm – 50mm wooden doors',
    packaging: 'Export trade cartons with matched strike plates',
    image: '/images/products/zinc-alloy-double-chal-mortise-lock-body.png',
    description: 'Double-throw (double chal) mortise lock case engineered for doors requiring dual-turn deadbolt extension. Produced in our Aligarh workshop with heavy-gauge side plates and durable latch linkages.',
    applications: 'Traditional residential wooden doors, apartment front doors, and commercial interior locking.',
  },
  {
    slug: 'zinc-alloy-door-baby-latch',
    name: 'Compact Zinc Alloy Door Baby Latch',
    modelNumber: 'LT-BL01',
    category: 'lock-bodies',
    categoryName: 'Baby Latch',
    sourceStatus: 'Manufactured by Arpit Impex',
    material: 'Zinc Alloy Body with Brass Latch Tongue',
    finish: 'Polished Nickel / Bright Brass',
    mechanism: 'Spring-loaded cylindrical tubular latch mechanism',
    keys: 'N/A (Push/Turn Interior Privacy Latch)',
    dimensions: 'Compact 50mm / 60mm backset tubular latch casing',
    doorThickness: '25mm – 45mm privacy and cabinet doors',
    packaging: 'Bulk contractor packaging (20 pcs/inner box) or individually boxed',
    image: '/images/products/zinc-alloy-door-baby-latch.png',
    description: 'Interior privacy baby latch designed for light-duty doors, bathroom doors, and partition panels. Compact casing allows rapid mortise boring and smooth push-to-close action.',
    applications: 'Bathroom privacy doors, bedroom doors with knob fittings, cabinetry, and interior room dividers.',
  },
];

export const companyInfo = {
  name: 'Arpit Impex',
  contactPerson: 'Jugendra Kumar Sharma',
  phone: '+91 8285687940',
  whatsapp: '+91 8285687940',
  address: '1/874, Gali No. 1, Shastri Nagar, Chhawani Road',
  city: 'Aligarh',
  state: 'Uttar Pradesh',
  pincode: '202001',
  country: 'India',
  location: '1/874, Gali No. 1, Shastri Nagar, Chhawani Road, Aligarh, Uttar Pradesh - 202001, India',
  email: 'arpitimpex@gmail.com',
  gstNumber: '09AEOPS8020A1ZH',
  gstVerified: true,
  memberSince: '7+ Years',
  googleBusinessUrl: 'https://share.google/WEMlvSsA4BpyfkvUf',
  googleMapsDirectionsUrl: 'https://www.google.com/maps/search/?api=1&query=Arpit+Impex+Shastri+Nagar+Aligarh',
  openingHours: 'Mon - Sat: 9:30 AM – 7:30 PM (Sun Closed)',
};

export const steps = [
  ['Share Requirements', 'Provide target product models, required quantities, finish preferences, and destination country.'],
  ['Confirm Specifications & Feasibility', 'We clarify product dimensions, materials, in-house vs partner supply status, and packaging details.'],
  ['Receive Commercial Quotation', 'We provide transparent per-unit pricing, order-specific MOQ terms, production lead times, and FOB/CIF freight options where mutually agreed.'],
  ['Sample Review & Pre-Production', 'Sample evaluation is coordinated where applicable before bulk production, tooling, and partner sourcing begin.'],
  ['Inspection & Packaging', 'Order-specific visual, dimensional, and functional checks are performed before protective export packaging and palletization.'],
  ['Export Documentation & Dispatch', 'We coordinate the agreed shipping arrangements and supply applicable export documentation, including Commercial Invoice and Packing List.'],
];

export const faqs = [
  [
    'Which architectural hardware products can I source from Arpit Impex?',
    'Our range covers four primary categories: door locks and rim locks (penta bolt and multi-lever locks), mortise lock bodies and latches (narrow section and standard mortise cases), profile cylinders (euro and mortise cylinders with numbered keys), and architectural door handles in various contemporary finishes.'
  ],
  [
    'Which products are manufactured in-house and which are partner-sourced?',
    'Arpit Impex operates a manufacturing and tooling unit in Aligarh where we produce selected mechanical lock bodies, lever mortise locks, baby latches, and pressed steel lock components. Certain handle sets, specialty cylinders, and specialized electroplated fittings are sourced through verified local partner manufacturers. We confirm the manufacturing or sourcing status of every SKU during enquiry discussions.'
  ],
  [
    'Do you accept bulk and wholesale business enquiries?',
    'Yes. We cater specifically to B2B clients including overseas importers, regional distributors, building material wholesalers, contractors, and institutional buyers seeking commercial supply.'
  ],
  [
    'Can you discuss custom finishes, dimensions, or private-label packaging?',
    'Yes, custom surface electroplating, dimensional adaptations, and private-label OEM box packaging can be reviewed subject to order volume feasibility and confirmed minimum order quantities (MOQ).'
  ],
  [
    'Can I request samples before confirming a bulk order?',
    'Sample requests can be arranged for evaluation of material, mechanism, and surface finish. Sample availability, lead time, and applicable dispatch charges are confirmed against the specific product models requested.'
  ],
  [
    'What details should I provide to receive an accurate quotation?',
    'Please specify the exact product model or specification drawing, required order quantity, preferred finish, packaging requirements, and target destination port or city.'
  ],
  [
    'How are minimum order quantities (MOQ) and production lead times determined?',
    'MOQ and lead times are order-specific. They depend on whether the item is manufactured in-house or partner-sourced, the raw material availability, required finish treatments, and customized packaging requirements. Exact timelines are confirmed on enquiry.'
  ],
  [
    'Which export and shipping terms can you quote?',
    'We can discuss Ex-Works (EXW), Free on Board (FOB Indian port), or Cost, Insurance and Freight (CIF destination port) terms where applicable and mutually agreed between both parties.'
  ],
  [
    'What quality checks are performed prior to dispatch?',
    'We perform order-specific dimensional verification, surface finish inspection, key operation testing, and secure packaging checks as appropriate to each product type before clearing goods for shipment.'
  ],
  [
    'Which export documents are provided for international shipments?',
    'Depending on destination regulations and agreed terms, we provide standard export trade documentation including Commercial Invoice, Packing List, Certificate of Origin, and shipping bills or courier airway bills.'
  ],
];

export const aboutCopy =
  'Arpit Impex is based in Aligarh, Uttar Pradesh, India, and serves business buyers seeking architectural door hardware. Our range includes door locks, mortise lock bodies, cylinders, handles and related fittings. We manufacture selected products in our own unit and can arrange additional products through supply partners, depending on the specification and order requirement. We work with buyers to clarify product details, quantities, finishes, packaging and commercial terms before confirming an order.';

export const approachCopy =
  'Our focus is practical communication and clear order expectations: identifying the required product, confirming its specifications and availability, agreeing pricing and delivery terms, and coordinating the applicable checks, packaging and dispatch documentation.';

