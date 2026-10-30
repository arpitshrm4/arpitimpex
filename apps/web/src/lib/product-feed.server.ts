import { products, type ProductItem } from '@/data/catalogue';

export interface FeedProduct {
  id: string;
  title: string;
  description: string;
  link: string;
  imageLink: string;
  availability: 'in_stock' | 'out_of_stock' | 'preorder' | 'backorder';
  price: string;
  brand: string;
  condition: 'new' | 'refurbished' | 'used';
  identifierExists: 'no' | 'yes';
  mpn: string;
  googleProductCategory: string;
  productType: string;
  material: string;
  color: string;
}

function cleanId(p: ProductItem): string {
  const raw = p.modelNumber?.trim() || p.slug;
  const sanitized = raw.replace(/\s+/g, '-').replace(/[^a-zA-Z0-9_-]/g, '').toUpperCase();
  return sanitized.slice(0, 50) || p.slug;
}

function getGoogleProductCategory(p: ProductItem): string {
  const text = `${p.category} ${p.categoryName} ${p.name}`.toLowerCase();
  if (text.includes('hinge')) {
    return '2474'; // Hardware > Hardware Accessories > Hinges
  }
  if (text.includes('lock') || text.includes('cylinder') || text.includes('latch') || text.includes('bolt') || text.includes('mortise')) {
    return '2475'; // Hardware > Hardware Accessories > Locks & Latches
  }
  return '2473'; // Hardware > Hardware Accessories
}

function getIndicativePrice(p: ProductItem, currency: string): string {
  const isUsd = currency.toUpperCase() === 'USD';
  const text = `${p.category} ${p.categoryName} ${p.name}`.toLowerCase();

  if (text.includes('closer')) {
    return isUsd ? '7.99 USD' : '650.00 INR';
  }
  if (text.includes('rim lock') || text.includes('penta bolt') || text.includes('door lock')) {
    return isUsd ? '6.99 USD' : '550.00 INR';
  }
  if (text.includes('mortise') || text.includes('lock body')) {
    return isUsd ? '5.50 USD' : '450.00 INR';
  }
  if (text.includes('cylinder')) {
    return isUsd ? '3.50 USD' : '280.00 INR';
  }
  if (text.includes('handle') || text.includes('bow pull')) {
    return isUsd ? '5.25 USD' : '420.00 INR';
  }
  if (text.includes('bracket') || text.includes('anchor')) {
    return isUsd ? '2.25 USD' : '180.00 INR';
  }
  if (text.includes('hinge') || text.includes('padbolt') || text.includes('ironmongery')) {
    return isUsd ? '4.50 USD' : '350.00 INR';
  }

  return isUsd ? '4.99 USD' : '399.00 INR';
}

function buildDescription(p: ProductItem): string {
  const parts = [
    p.description,
    p.material ? `Material: ${p.material}.` : '',
    p.finish ? `Finish: ${p.finish}.` : '',
    p.dimensions ? `Dimensions: ${p.dimensions}.` : '',
    p.mechanism ? `Mechanism: ${p.mechanism}.` : '',
    p.keys && p.keys !== 'N/A' ? `Keys: ${p.keys}.` : '',
    p.packaging ? `Packaging: ${p.packaging}.` : '',
    p.applications ? `Applications: ${p.applications}` : '',
  ].filter(Boolean);

  return parts.join(' ').replace(/\s+/g, ' ').trim();
}

function escapeXml(value: string): string {
  return value
    .replaceAll('&', '&amp;')
    .replaceAll('<', '&lt;')
    .replaceAll('>', '&gt;')
    .replaceAll('"', '&quot;')
    .replaceAll("'", '&apos;');
}

function toAbsoluteUrl(origin: string, path: string): string {
  if (path.startsWith('http://') || path.startsWith('https://')) return path;
  return `${origin}${path.startsWith('/') ? path : `/${path}`}`;
}

export function getFeedProducts(origin: string, currency = 'INR'): FeedProduct[] {
  return products.map((p) => {
    const id = cleanId(p);
    const title = `${p.name} (${p.modelNumber})`;
    const description = buildDescription(p);
    const link = toAbsoluteUrl(origin, `/products/${p.slug}`);
    const imageLink = toAbsoluteUrl(origin, p.image);
    const price = getIndicativePrice(p, currency);
    const googleProductCategory = getGoogleProductCategory(p);
    const productType = `Architectural Hardware > ${p.categoryName || p.category}`;

    return {
      id,
      title,
      description,
      link,
      imageLink,
      availability: 'in_stock',
      price,
      brand: 'Arpit Impex',
      condition: 'new',
      identifierExists: 'no',
      mpn: p.modelNumber,
      googleProductCategory,
      productType,
      material: p.material || 'Architectural Grade Hardware',
      color: p.finish || 'Standard Export Finish',
    };
  });
}

export function serializeGoogleMerchantXml(origin: string, currency = 'INR'): string {
  const items = getFeedProducts(origin, currency);

  const xmlItems = items
    .map((item) => {
      return `\t\t<item>
\t\t\t<g:id>${escapeXml(item.id)}</g:id>
\t\t\t<g:title><![CDATA[${item.title}]]></g:title>
\t\t\t<g:description><![CDATA[${item.description}]]></g:description>
\t\t\t<g:link>${escapeXml(item.link)}</g:link>
\t\t\t<g:image_link>${escapeXml(item.imageLink)}</g:image_link>
\t\t\t<g:condition>${item.condition}</g:condition>
\t\t\t<g:availability>${item.availability}</g:availability>
\t\t\t<g:price>${item.price}</g:price>
\t\t\t<g:brand>${escapeXml(item.brand)}</g:brand>
\t\t\t<g:identifier_exists>${item.identifierExists}</g:identifier_exists>
\t\t\t<g:mpn>${escapeXml(item.mpn)}</g:mpn>
\t\t\t<g:google_product_category>${item.googleProductCategory}</g:google_product_category>
\t\t\t<g:product_type><![CDATA[${item.productType}]]></g:product_type>
\t\t\t<g:material><![CDATA[${item.material}]]></g:material>
\t\t\t<g:color><![CDATA[${item.color}]]></g:color>
\t\t\t<g:shipping>
\t\t\t\t<g:country>IN</g:country>
\t\t\t\t<g:service>Standard Logistics / Road Freight</g:service>
\t\t\t\t<g:price>0.00 INR</g:price>
\t\t\t</g:shipping>
\t\t</item>`;
    })
    .join('\n');

  return `<?xml version="1.0" encoding="UTF-8"?>
<rss xmlns:g="http://base.google.com/ns/1.0" version="2.0">
\t<channel>
\t\t<title>Arpit Impex - Architectural Hardware &amp; Locks Product Catalogue</title>
\t\t<link>${escapeXml(origin)}</link>
\t\t<description>Official export product feed for Arpit Impex - Architectural door hardware, rim locks, mortise lock cases, brass cylinders, and heavy ironmongery.</description>
${xmlItems}
\t</channel>
</rss>
`;
}

export function serializeGoogleMerchantTsv(origin: string, currency = 'INR'): string {
  const items = getFeedProducts(origin, currency);
  const headers = [
    'id',
    'title',
    'description',
    'link',
    'image_link',
    'availability',
    'price',
    'brand',
    'condition',
    'identifier_exists',
    'mpn',
    'google_product_category',
    'product_type',
    'material',
    'color',
  ];

  const rows = items.map((item) => {
    return [
      item.id,
      item.title.replace(/[\t\r\n]+/g, ' '),
      item.description.replace(/[\t\r\n]+/g, ' '),
      item.link,
      item.imageLink,
      item.availability,
      item.price,
      item.brand,
      item.condition,
      item.identifierExists,
      item.mpn.replace(/[\t\r\n]+/g, ' '),
      item.googleProductCategory,
      item.productType.replace(/[\t\r\n]+/g, ' '),
      item.material.replace(/[\t\r\n]+/g, ' '),
      item.color.replace(/[\t\r\n]+/g, ' '),
    ].join('\t');
  });

  return [headers.join('\t'), ...rows].join('\n') + '\n';
}
