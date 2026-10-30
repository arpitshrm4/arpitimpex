import type { Route } from './+types/products-feed.tsv';
import { siteOrigin } from '@/lib/site-origin.server';
import { serializeGoogleMerchantTsv } from '@/lib/product-feed.server';

export async function loader({ request }: Route.LoaderArgs) {
  const origin = siteOrigin(request);
  const url = new URL(request.url);
  const currency = url.searchParams.get('currency') || 'INR';

  const tsvContent = serializeGoogleMerchantTsv(origin, currency);

  return new Response(tsvContent, {
    headers: {
      'Content-Type': 'text/tab-separated-values; charset=utf-8',
      'Content-Disposition': 'inline; filename="arpit-impex-products-feed.tsv"',
      'Cache-Control': 'public, max-age=3600',
      'Access-Control-Allow-Origin': '*',
      'X-Robots-Tag': 'noindex, follow',
    },
  });
}
