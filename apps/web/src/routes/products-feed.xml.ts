import type { Route } from './+types/products-feed.xml';
import { siteOrigin } from '@/lib/site-origin.server';
import { serializeGoogleMerchantXml } from '@/lib/product-feed.server';

export async function loader({ request }: Route.LoaderArgs) {
  const origin = siteOrigin(request);
  const url = new URL(request.url);
  const currency = url.searchParams.get('currency') || 'INR';

  const xmlContent = serializeGoogleMerchantXml(origin, currency);

  return new Response(xmlContent, {
    headers: {
      'Content-Type': 'application/xml; charset=utf-8',
      'Cache-Control': 'public, max-age=3600',
      'Access-Control-Allow-Origin': '*',
      'X-Robots-Tag': 'noindex, follow',
    },
  });
}
