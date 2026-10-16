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
    title: 'Precision Press & Machine Workshop',
    tag: 'PRODUCTION PLANT',
    image: '/images/press-workshop.png',
    alt: 'Arpit Impex Power Press Workshop and Tooling Line in Aligarh',
    description: 'Equipped with heavy-duty mechanical power presses, precision stamping dies, and automated cutting tools to produce durable lock bodies, latches, and architectural fittings.',
  },
  {
    id: 'executive-office',
    title: 'Executive Commercial & Sourcing Office',
    tag: 'SOURCING DESK',
    image: '/images/executive-office.png',
    alt: 'Arpit Impex Modern Executive Office and Commercial Sourcing Desk',
    description: 'Modern executive workstation and client coordination hub for specification reviews, volume pricing negotiations, digital communication, and overseas export documentation.',
  },
  {
    id: 'factory-entrance',
    title: 'Factory Premises & Dispatch Hub',
    tag: 'ALIGARH PREMISES',
    image: '/images/factory-entrance.png',
    alt: 'Arpit Impex Factory Entrance and Facility in Shastri Nagar, Aligarh',
    description: 'Centrally situated at Shastri Nagar, Chhawani Road, Aligarh, ensuring smooth logistics, strict pre-dispatch quality checks, and prompt domestic and international shipments.',
  },
];

export const categories = [
  {
    id: 'door-locks',
    name: 'Door Locks & Rim Locks',
    description: 'Heavy duty penta bolt locks, multi-lever mortise locks, and antique brass rim lock sets.',
    image: '/images/products/j-lock-mild-steel-door-penta-bolt-lock-set.jpeg',
  },
  {
    id: 'door-handles',
    name: 'Door Handles & Fittings',
    description: 'Luxury rose gold, matte black, and brushed gold architectural handles for residential and commercial doors.',
    image: '/images/products/160mm-brushed-gold-door-handle.jpeg',
  },
  {
    id: 'cylinder-locks',
    name: 'Cylinder Locks & Keys',
    description: 'Euro profile and BSK mortise cylinder locks with computerized numbered keys for high-security access.',
    image: '/images/products/euro-cylinder-lock-numbered-keys.jpeg',
  },
  {
    id: 'lock-bodies',
    name: 'Lock Bodies & Latches',
    description: 'Aluminium section lock bodies with SS kram, sleek mortise cases, double-chal bodies, and baby latches.',
    image: '/images/products/aluminium-section-mortise-lock-body.jpeg',
  },
];

export interface ProductItem {
  slug: string;
  name: string;
  category: string;
  categoryName?: string;
  image: string;
  description: string;
}

export const products: ProductItem[] = [
  {
    slug: 'j-lock-mild-steel-door-penta-bolt-lock-set',
    name: 'J Lock Mild Steel Door Penta Bolt Lock Set',
    category: 'door-locks',
    categoryName: 'Door Lock',
    image: '/images/products/j-lock-mild-steel-door-penta-bolt-lock-set.jpeg',
    description: 'The Penta Bolt Door Lock Heavy Duty is designed to provide enhanced door security with a robust multi-bolt locking mechanism. Its durable mild steel construction supports dependable everyday performance for residential and commercial doors.',
  },
  {
    slug: '6-lever-zinc-alloy-single-chal-mortise-lock',
    name: '6 Lever Zinc Alloy Single Chal Mortise Lock',
    category: 'door-locks',
    categoryName: 'Mortise Lock',
    image: '/images/products/6-lever-zinc-alloy-single-chal-mortise-lock.png',
    description: 'Lock Number 6052. Designed for secure and smooth door locking with a precision six-lever mechanism. Crafted with durable zinc alloy construction suitable for residential, office, and commercial mortise door installations.',
  },
  {
    slug: '6-lever-zinc-alloy-double-chal-mortise-lock',
    name: '6 Lever Zinc Alloy Double Chal Mortise Lock',
    category: 'door-locks',
    categoryName: 'Mortise Lock',
    image: '/images/products/6-lever-zinc-alloy-double-chal-mortise-lock.jpeg',
    description: 'Lock Number 68. Engineered for reliable two-way door security and convenient locking from both sides. Features a heavy-duty zinc alloy casing and a smooth 6-lever double-chal mechanism.',
  },
  {
    slug: 'antique-brass-door-rim-lock-set',
    name: 'Antique Brass Door Rim Lock Set',
    category: 'door-locks',
    categoryName: 'Rim Lock',
    image: '/images/products/antique-brass-door-rim-lock-set.png',
    description: 'Features a classic antique brass finish that adds a vintage heritage touch to doors and interiors. Offers dependable surface-mounted rim locking performance with high decorative appeal.',
  },
  {
    slug: '160mm-black-door-handle',
    name: '160mm Black Door Handle (Rose Gold & Black)',
    category: 'door-handles',
    categoryName: 'Door Handle',
    image: '/images/products/160mm-black-door-handle.jpeg',
    description: 'Luxury two-tone finish combining deep matte black with warm rose gold accents. Ergonomically sculpted for a comfortable grip in modern bedrooms, living rooms, hotels, and executive offices.',
  },
  {
    slug: '175mm-black-door-handle',
    name: '175mm Black Door Handle Set',
    category: 'door-handles',
    categoryName: 'Door Handle Set',
    image: '/images/products/175mm-black-door-handle.jpeg',
    description: 'Contemporary 175mm door handle set with integrated plate styling. Combines dual-tone black and metallic accents with heavy-duty durability for upscale residential and commercial projects.',
  },
  {
    slug: '160mm-brushed-gold-door-handle',
    name: '160mm Brushed Gold Door Handle Assembly',
    category: 'door-handles',
    categoryName: 'Door Handle',
    image: '/images/products/160mm-brushed-gold-door-handle.jpeg',
    description: 'Refined brushed gold finish bringing contemporary elegance to interior doors. Engineered for smooth spring-loaded action, corrosion resistance, and timeless architectural aesthetics.',
  },
  {
    slug: 'mortise-cylinder-numbered-keys',
    name: 'Mortise Cylinder with Numbered Keys (No. 2325)',
    category: 'cylinder-locks',
    categoryName: 'Cylinder Lock',
    image: '/images/products/mortise-cylinder-numbered-keys.jpeg',
    description: 'BSK precision-machined mortise cylinder lock with computerized numbered keys. Designed for smooth key entry, high pick resistance, and dependable everyday locking on mortise door sets.',
  },
  {
    slug: 'euro-cylinder-lock-numbered-keys',
    name: 'Euro Cylinder Lock with Numbered Keys (No. 2631)',
    category: 'cylinder-locks',
    categoryName: 'Euro Cylinder',
    image: '/images/products/euro-cylinder-lock-numbered-keys.jpeg',
    description: 'Standard euro profile cylinder lock engineered for universal compatibility with modern euro-lock cases. Includes numbered brass keys for organized key tracking and enhanced access control.',
  },
  {
    slug: 'aluminium-section-mortise-lock-body',
    name: 'Aluminium Section Mortise Lock Body with SS Kram',
    category: 'lock-bodies',
    categoryName: 'Lock Body',
    image: '/images/products/aluminium-section-mortise-lock-body.jpeg',
    description: 'Compact narrow-backset lock body with heavy-duty stainless steel strike (kram). Tailor-made for aluminium section doors, sliding partitions, and metal profile window installations.',
  },
  {
    slug: 'stainless-steel-sleek-mortise-lock-body',
    name: 'Stainless Steel Sleek Mortise Lock Body',
    category: 'lock-bodies',
    categoryName: 'Lock Body',
    image: '/images/products/stainless-steel-sleek-mortise-lock-body.jpeg',
    description: 'Ultra-durable sleek mortise lock case constructed from high-grade stainless steel components. Ensures jam-free latch movement and reliable deadbolt throw across commercial and residential wooden doors.',
  },
  {
    slug: 'zinc-alloy-double-chal-mortise-lock-body',
    name: 'Zinc Alloy Double Chal Mortise Lock Body',
    category: 'lock-bodies',
    categoryName: 'Lock Body',
    image: '/images/products/zinc-alloy-double-chal-mortise-lock-body.png',
    description: 'Sturdy double-throw (chal) mortise lock body built with premium zinc alloy components for doors requiring double-turn bolt extension and dependable everyday security.',
  },
  {
    slug: 'zinc-alloy-door-baby-latch',
    name: 'Zinc Alloy Door Baby Latch',
    category: 'lock-bodies',
    categoryName: 'Baby Latch',
    image: '/images/products/zinc-alloy-door-baby-latch.png',
    description: 'Smooth-acting interior baby latch fitting designed for quick, secure closure on privacy doors, bathroom doors, and cabinetry. Compact, durable, and easy to install.',
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
  ['Share Your Requirement', 'Tell us the product models, specifications, and estimated wholesale quantities you need.'],
  ['Discuss Product Options', 'We review your requirements and provide tailored sourcing options directly from our manufacturing base in Aligarh.'],
  ['Receive a Quotation', 'We provide transparent per-piece pricing, packaging options, MOQ terms, and export freight details.'],
  ['Coordinate Your Order', 'Upon confirmation, we coordinate strict quality inspection, packaging, documentation, and prompt shipment.'],
];

export const faqs = [
  ['What products are manufactured by Arpit Impex?', 'Arpit Impex specializes in door locks (penta bolt, 6-lever mortise, rim locks), luxury door handles (black, rose gold, brushed gold), euro & mortise cylinder locks, and mortise lock bodies.'],
  ['Where is Arpit Impex located?', 'Our manufacturing base and registered office are located at 1/874, Gali No. 1, Shastri Nagar, Chhawani Road, Aligarh, Uttar Pradesh - 202001, India — the global manufacturing hub of architectural hardware and locking systems.'],
  ['Can you handle bulk and wholesale export orders?', 'Yes, we cater to wholesale distributors, builders, contractors, and overseas buyers with competitive volume-based FOB/CIF quotations.'],
  ['Do your products come with custom finishes or branding?', 'Yes, we can discuss custom surface finishes, key combinations, and customized packaging based on your required order quantities.'],
  ['What information is needed to receive an exact quotation?', 'Please specify the product model, required quantity (MOQ), delivery city/country, and any special packaging or specification requirements.'],
];

export const aboutCopy = 'Arpit Impex is an Aligarh-based manufacturer and exporter of premium architectural door locks, luxury handles, euro cylinders, and precision hardware fittings. Established with a commitment to quality craftsmanship and dependable security solutions, we supply buyers across India and global trade markets.';

export const approachCopy = 'Our approach combines precision manufacturing, rigorous quality checks, and responsive commercial communication. From high-grade zinc alloy and stainless steel castings to modern electroplated finishes, we deliver hardware built for durability and style.';
