export const images = {
  hero: '/images/hero-penta-bolt-rim-lock.jpg',
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
  sourceStatus?: 'Available on enquiry';
  supplyArrangement?: string;
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
    supplyArrangement: 'Confirmed for this model during quotation',
    material: 'Mild Steel Casing & Bolt Assembly',
    finish: 'Dual-tone Metallic Powder Coated with Polished Accents',
    mechanism: 'Multi-bolt (5-bolt) rim deadbolt mechanism with key-operated exterior and interior thumbturn/knob',
    keys: '4 Numbered Brass Keys',
    dimensions: 'Approx. 130mm x 95mm housing (confirm on enquiry)',
    doorThickness: '30mm – 55mm (confirm on enquiry)',
    packaging: 'Individual product box; master corrugated export cartons',
    image: '/images/hero-penta-bolt-rim-lock.jpg',
    description: 'Surface-mounted rim door lock with a five-bolt locking configuration. Suitable applications, body material, finish, dimensions, door-thickness range, key configuration and included accessories must be confirmed against the current model specification before ordering.',
    applications: 'Main entrance wooden doors, security gates, apartment entry doors, and perimeter utility doors.',
  },
  {
    slug: '6-lever-zinc-alloy-single-chal-mortise-lock',
    name: '6-Lever Single-Throw Mortise Lock',
    modelNumber: 'No. 6052',
    category: 'door-locks',
    categoryName: 'Mortise Lock',
    supplyArrangement: 'Confirmed for this model during quotation',
    material: 'Zinc Alloy Casing with Stamped Steel Lever Pack',
    finish: 'Nickel Plated / Zinc Passivated Options',
    mechanism: '6-lever single chal (single-throw bolt throw of approx. 12mm on a single key rotation)',
    keys: '2 or 3 Numbered Steel Keys',
    dimensions: '65mm backset; mortise depth approx. 70mm (confirm on enquiry)',
    doorThickness: '32mm – 45mm (confirm on enquiry)',
    packaging: 'Individually boxed with strike plate; master export cartons',
    image: '/images/products/6-lever-zinc-alloy-single-chal-mortise-lock.png',
    description: 'Six-lever mortise lock with a single-throw bolt mechanism. Confirm the casing and lever-pack materials, backset, mortise depth, door-thickness compatibility, key count and finish against the current model drawing or sample.',
    applications: 'Office doors, residential bedrooms, commercial utility rooms, and interior partitions.',
  },
  {
    slug: '6-lever-zinc-alloy-double-chal-mortise-lock',
    name: '6-Lever Double-Throw Mortise Lock',
    modelNumber: 'No. 68',
    category: 'door-locks',
    categoryName: 'Mortise Lock',
    supplyArrangement: 'Confirmed for this model during quotation',
    material: 'Zinc Alloy Body with Steel Internal Levers',
    finish: 'Zinc Plated / Satin Finish Faceplate',
    mechanism: '6-lever double chal (double-throw bolt mechanism with extended deadbolt travel on two key turns)',
    keys: '3 Numbered Keys',
    dimensions: 'Standard mortise pocket profile (~75mm depth, confirm on enquiry)',
    doorThickness: '35mm – 50mm (confirm on enquiry)',
    packaging: 'Individual box packaging; corrugated export cartons',
    image: '/images/products/6-lever-zinc-alloy-double-chal-mortise-lock.jpeg',
    description: 'Traditional double-throw (double chal) 6-lever mortise lock. Two-turn key mechanism extends the deadbolt into the frame strike plate. Dimensions, materials, key count and finish options must be confirmed against current technical drawings.',
    applications: 'Residential wooden doors, hotel service doors, and commercial interior installations.',
  },
  {
    slug: 'antique-brass-door-rim-lock-set',
    name: 'Antique Brass Finish Rim Lock Set',
    modelNumber: 'RL-AB04',
    category: 'door-locks',
    categoryName: 'Rim Lock',
    sourceStatus: 'Available on enquiry',
    supplyArrangement: 'Confirmed for this model during quotation',
    material: 'Pressed Steel Body with Electroplated Antique Brass Finish',
    finish: 'Antique Brass (Aged Patina Appearance)',
    mechanism: 'Surface-mounted rim deadbolt and latch combination with interior snib',
    keys: 'Numbered Brass Keys',
    dimensions: 'Approx. 120mm x 85mm surface mount housing (confirm on enquiry)',
    doorThickness: '30mm – 50mm (confirm on enquiry)',
    packaging: 'Individual presentation box; master trade cartons',
    image: '/images/products/antique-brass-door-rim-lock-set.png',
    description: 'Surface-mount rim lock set with antique brass style finish. Suitable for period doors, traditional interiors, and wooden perimeter gates requiring exterior key and interior snib operation. Confirm dimensions, materials, and included accessories on enquiry.',
    applications: 'Heritage properties, boutique hotels, vintage interior decor, and decorative wooden gates.',
  },
  {
    slug: '160mm-black-door-handle',
    name: '160mm Two-Tone Door Handle (Rose Gold & Black)',
    modelNumber: 'DH-160RGB',
    category: 'door-handles',
    categoryName: 'Door Handle',
    supplyArrangement: 'Confirmed for this model during quotation',
    material: 'Zinc Alloy / Aluminium Alloy Casting',
    finish: 'Matte Black Powder Coat with Rose Gold Electroplated Accents',
    mechanism: 'Spring-assisted lever return with 8mm square spindle drive',
    keys: 'N/A (Lever Handle Fitting for Mortise Pairing)',
    dimensions: '160mm lever length; 50mm rose diameter / backplate',
    doorThickness: '35mm – 50mm wooden & flush doors (confirm on enquiry)',
    packaging: 'Matched pair packaging with spindle, escutcheons, and fixing screws',
    image: '/images/products/160mm-black-door-handle.jpeg',
    description: 'Architectural lever handle featuring a 160mm profile with two-tone finish. Designed for interior wooden and flush doors. Confirm material specifications, rose diameter, and spindle fitment on enquiry.',
    applications: 'Residential bedrooms, modern apartments, hotel suites, and executive cabins.',
  },
  {
    slug: '175mm-black-door-handle',
    name: '175mm Contemporary Black Plate Door Handle Set',
    modelNumber: 'DH-175BLK',
    category: 'door-handles',
    categoryName: 'Door Handle Set',
    supplyArrangement: 'Confirmed for this model during quotation',
    material: 'Zinc Alloy / Extruded Aluminium Alloy',
    finish: 'Matte Black Electrostatic Finish',
    mechanism: 'Integrated backplate with spring-loaded lever return',
    keys: 'Keyhole cut-out for standard mortise pairing',
    dimensions: '175mm backplate length; 40mm width; 8mm spindle',
    doorThickness: '35mm – 55mm wooden & composite doors (confirm on enquiry)',
    packaging: 'Matched pair set with mounting screws and connecting spindle',
    image: '/images/products/175mm-black-door-handle.jpeg',
    description: 'Long-plate architectural lever handle set measuring 175mm in length. Designed for mortise lock pairings on wooden entry, office, and apartment doors. Confirm dimensions and finish specifications during quotation.',
    applications: 'Commercial offices, apartment doors, institutional buildings, and interior residential doors.',
  },
  {
    slug: '160mm-brushed-gold-door-handle',
    name: '160mm Brushed Gold Architectural Door Handle',
    modelNumber: 'DH-160BGD',
    category: 'door-handles',
    categoryName: 'Door Handle',
    supplyArrangement: 'Confirmed for this model during quotation',
    material: 'Solid Zinc Alloy Casting',
    finish: 'Brushed Satin Gold (Lacquered Protective Finish)',
    mechanism: 'Spring-loaded return cassette with horizontal stop',
    keys: 'N/A (Lever Handle Fitting)',
    dimensions: '160mm lever length; 52mm circular escutcheon rose',
    doorThickness: '32mm – 50mm wooden & laminate doors (confirm on enquiry)',
    packaging: 'Protective foam-lined pair packaging with hardware installation pack',
    image: '/images/products/160mm-brushed-gold-door-handle.jpeg',
    description: 'Straight-line lever handle in a brushed satin gold finish for interior door sets. Confirm material, rose diameter, spring mechanism, and spindle dimensions on enquiry.',
    applications: 'Residential spaces, hospitality guest rooms, commercial interiors, and showroom doors.',
  },
  {
    slug: 'mortise-cylinder-numbered-keys',
    name: 'BSK Mortise Lock Cylinder with Numbered Keys',
    modelNumber: 'CYL-BSK2325',
    category: 'cylinder-locks',
    categoryName: 'Cylinder Lock',
    sourceStatus: 'Available on enquiry',
    supplyArrangement: 'Confirmed for this model during quotation',
    material: 'Brass Core with Rotating Cam',
    finish: 'Satin Nickel / Natural Brass Finish',
    mechanism: 'Pin tumbler cylinder mechanism',
    keys: '3 or 5 Numbered Brass Keys',
    dimensions: 'Standard 60mm / 70mm symmetrical cylinder profiles (confirm on enquiry)',
    doorThickness: 'Compatible with standard mortise lock bodies',
    packaging: 'Individual box packaging with M5 cylinder mounting screw',
    image: '/images/products/mortise-cylinder-numbered-keys.jpeg',
    description: 'Mortise lock cylinder with numbered keys for organized key tracking. Features pin tumbler mechanism and standard cam for mortise lock body pairing. Confirm cylinder length, material, and key count during quotation.',
    applications: 'Residential mortise locks, office door mortise bodies, and commercial key-controlled access points.',
  },
  {
    slug: 'euro-cylinder-lock-numbered-keys',
    name: 'Euro Profile Cylinder Lock with Numbered Keys',
    modelNumber: 'CYL-EP2631',
    category: 'cylinder-locks',
    categoryName: 'Euro Cylinder',
    sourceStatus: 'Available on enquiry',
    supplyArrangement: 'Confirmed for this model during quotation',
    material: 'Extruded Brass Body with Steel Cam',
    finish: 'Satin Chrome / Brushed Brass Options',
    mechanism: 'Standard Euro profile pin tumbler mechanism',
    keys: '3 Numbered Keys',
    dimensions: '60mm (30/30), 70mm (35/35), and 80mm (40/40) length options',
    doorThickness: '35mm – 65mm euro-profile door sets (confirm on enquiry)',
    packaging: 'Individual box or bulk packaging for OEM door manufacturers',
    image: '/images/products/euro-cylinder-lock-numbered-keys.jpeg',
    description: 'Euro profile cylinder lock designed for compatible mortise lock cases. Includes numbered keys for systematic key management. Confirm profile dimensions, alloy specification, and keying requirements before bulk ordering.',
    applications: 'Apartment entry doors, office euro-lock cases, aluminum section doors, and commercial perimeter doors.',
  },
  {
    slug: 'aluminium-section-mortise-lock-body',
    name: 'Narrow-Backset Mortise Lock Body with SS Strike',
    modelNumber: 'LB-ALU20',
    category: 'lock-bodies',
    categoryName: 'Lock Body',
    supplyArrangement: 'Confirmed for this model during quotation',
    material: 'Galvanized Steel Lock Case with Stainless Steel Strike Plate',
    finish: 'Satin Stainless Steel Faceplate',
    mechanism: 'Narrow-backset deadbolt and spring-loaded reversible latch',
    keys: 'Operated by Euro profile cylinder (sold separately)',
    dimensions: 'Narrow 20mm / 25mm backset for slim-profile sections; 85mm centres (confirm on enquiry)',
    doorThickness: 'Aluminium extrusion profiles and narrow stile metal doors',
    packaging: 'Individually wrapped with SS strike plate and mounting fasteners',
    image: '/images/products/aluminium-section-mortise-lock-body.jpeg',
    description: 'Narrow-backset mortise lock body with a stainless-steel strike plate, intended for compatible narrow-profile door systems. Confirm backset, centres, latch/bolt configuration, faceplate material, cylinder requirements and installation compatibility against the current drawing.',
    applications: 'Aluminium frame doors, narrow stile metal doors, and commercial perimeter profiles.',
  },
  {
    slug: 'stainless-steel-sleek-mortise-lock-body',
    name: 'Stainless Steel Faceplate Sleek Mortise Lock Body',
    modelNumber: 'LB-SS85',
    category: 'lock-bodies',
    categoryName: 'Lock Body',
    supplyArrangement: 'Confirmed for this model during quotation',
    material: 'Steel Body Casing with Stainless Steel Front Plate',
    finish: 'Brushed Stainless Steel Faceplate & Strike',
    mechanism: 'Reversible brass latch bolt and double-turn deadbolt mechanism',
    keys: 'Euro profile cylinder operated (cylinder paired separately)',
    dimensions: '85mm centre distance; 45mm / 50mm backset standard (confirm on enquiry)',
    doorThickness: '35mm – 55mm wooden and hollow metal doors',
    packaging: 'Individual box with stainless steel strike plate and fixing screws',
    image: '/images/products/stainless-steel-sleek-mortise-lock-body.jpeg',
    description: 'Full-case mortise lock body with reversible latch and deadbolt. Features stainless steel front plate and strike for standard architectural doors. Confirm backset, centres, and door thickness compatibility against current drawings.',
    applications: 'Residential wooden entrance doors, commercial office interior doors, and institutional flush doors.',
  },
  {
    slug: 'zinc-alloy-double-chal-mortise-lock-body',
    name: 'Double-Throw (Double Chal) Mortise Lock Body',
    modelNumber: 'LB-DC68',
    category: 'lock-bodies',
    categoryName: 'Lock Body',
    supplyArrangement: 'Confirmed for this model during quotation',
    material: 'Zinc Alloy Internal Components with Steel Body Case',
    finish: 'Zinc Passivated Case with Polished Brass or Chrome Faceplate',
    mechanism: 'Double-throw (double chal) deadbolt linkage with key-operated two-turn throw',
    keys: 'Key-operated via matched lever pack or cylinder interface',
    dimensions: 'Standard mortise pocket profile (~70mm case depth, confirm on enquiry)',
    doorThickness: '35mm – 50mm wooden doors',
    packaging: 'Export trade cartons with matched strike plates',
    image: '/images/products/zinc-alloy-double-chal-mortise-lock-body.png',
    description: 'Double-throw (double chal) mortise lock case engineered for doors requiring dual-turn deadbolt extension. Confirm case depth, backset, faceplate finish, and internal material specifications during enquiry.',
    applications: 'Traditional residential wooden doors, apartment front doors, and commercial interior locking.',
  },
  {
    slug: 'zinc-alloy-door-baby-latch',
    name: 'Compact Zinc Alloy Door Baby Latch',
    modelNumber: 'LT-BL01',
    category: 'lock-bodies',
    categoryName: 'Baby Latch',
    supplyArrangement: 'Confirmed for this model during quotation',
    material: 'Zinc Alloy Body with Brass Latch Tongue',
    finish: 'Polished Nickel / Bright Brass',
    mechanism: 'Spring-loaded cylindrical tubular latch mechanism',
    keys: 'N/A (Push/Turn Interior Privacy Latch)',
    dimensions: 'Compact 50mm / 60mm backset tubular latch casing (confirm on enquiry)',
    doorThickness: '25mm – 45mm privacy and cabinet doors',
    packaging: 'Bulk contractor packaging (20 pcs/inner box) or individually boxed',
    image: '/images/products/zinc-alloy-door-baby-latch.png',
    description: 'Interior privacy baby latch designed for light-duty doors, bathroom doors, and partition panels. Compact tubular casing allows straightforward mortise fitment. Confirm backset dimensions and finish options on quotation.',
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
  ['Share your requirement', 'Send the product model, drawing or reference image, quantity, finish preference and destination country.'],
  ['Confirm product details', 'We review dimensions, materials, compatibility, included accessories and whether the item is manufactured in-house or supplied through a partner.'],
  ['Review the quotation', 'The quotation sets out confirmed pricing, quantity requirements, applicable MOQ, lead time, packaging and agreed shipping terms.'],
  ['Review a sample, where available', 'Sample availability, cost and dispatch timing are confirmed for the requested model before a bulk order proceeds.'],
  ['Agree inspection and packaging', 'Inspection points and packaging requirements are agreed in advance and completed as specified for the order.'],
  ['Coordinate dispatch', 'We coordinate dispatch and the applicable export documents and freight arrangements according to the agreed terms and destination requirements.']
];

export const faqs = [
  [
    'Which architectural hardware products can I source from Arpit Impex?',
    'Our range covers four primary categories: door locks and rim locks (penta bolt and multi-lever locks), mortise lock bodies and latches (narrow section and standard mortise cases), profile cylinders (euro and mortise cylinders with numbered keys), and architectural door handles in various contemporary finishes.'
  ],
  [
    'Which products are manufactured in-house and which are partner-sourced?',
    'We manufacture selected hardware products in our Aligarh unit and coordinate additional products through local supply partners. For each enquiry, we confirm the product specification, supply arrangement, available finish options, order quantity and packaging requirements before quotation.'
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
    'Sample availability, cost and dispatch timing are confirmed for the requested model before a bulk order proceeds.'
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
    'Inspection requirements are agreed for each order. Depending on the product, checks may include dimensions, surface finish, key operation, mechanism movement and packaging condition. Any agreed inspection criteria are confirmed before dispatch.'
  ],
  [
    'Which export documents are provided for international shipments?',
    'Export documents are coordinated according to the shipment, destination requirements and agreed commercial terms. Applicable documents may include a commercial invoice, packing list, shipping bill and certificate of origin where required and available.'
  ],
];

export const aboutCopy =
  'Arpit Impex serves business buyers looking for architectural door hardware from India. Our range includes door locks, mortise lock bodies, cylinders, handles and related fittings. We manufacture selected products in our Aligarh unit and coordinate additional products through local supply partners. We work with buyers to confirm product specifications, manufacturing or sourcing arrangements, quantities, finish options, packaging and commercial terms before an order is accepted.';

export const approachCopy =
  'Our approach is straightforward: understand the requirement, clarify the product details, provide a quotation based on confirmed specifications, agree the applicable inspection and packaging requirements, and coordinate dispatch documentation and shipping arrangements.';

