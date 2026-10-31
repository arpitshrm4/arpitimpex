import type { Route } from './+types/sitemap.xml';
import { siteOrigin } from '@/lib/site-origin.server';
import { products } from '@/data/catalogue';
import { CATEGORIES_DATA } from '@/data/categories-data';
import { GUIDES_DATA } from '@/data/guides-data';

type SitemapEntry = {
	path: string;
	lastmod?: string;
};

const STATIC_PATHS = [
	'/',
	'/products',
	'/oem-private-label',
	'/quality-inspection',
	'/guides',
	'/brochure',
	'/about',
	'/process',
	'/contact',
	'/return-policy',
	'/privacy',
	'/terms',
];

function escapeXml(value: string): string {
	return value
		.replaceAll('&', '&amp;')
		.replaceAll('<', '&lt;')
		.replaceAll('>', '&gt;')
		.replaceAll('"', '&quot;')
		.replaceAll("'", '&apos;');
}

function toLoc(origin: string, path: string): string {
	return `${origin}${path.startsWith('/') ? path : `/${path}`}`;
}

function serializeSitemap(origin: string, entries: SitemapEntry[]): string {
	const urls = entries
		.map(entry => {
			const loc = escapeXml(toLoc(origin, entry.path));
			const lastmod = entry.lastmod
				? `\n\t\t<lastmod>${escapeXml(entry.lastmod)}</lastmod>`
				: '';

			return `\t<url>\n\t\t<loc>${loc}</loc>${lastmod}\n\t</url>`;
		})
		.join('\n');

	return `<?xml version="1.0" encoding="UTF-8"?>\n<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n${urls}\n</urlset>\n`;
}

/**
 * Public dynamic URLs (categories, guides, catalogue PDPs).
 */
async function getDynamicEntries(): Promise<SitemapEntry[]> {
	const categoryEntries: SitemapEntry[] = Object.keys(CATEGORIES_DATA).map(catId => ({
		path: `/category/${catId}`,
	}));

	const guideEntries: SitemapEntry[] = GUIDES_DATA.map(g => ({
		path: `/guides/${g.slug}`,
		lastmod: g.publishedDate,
	}));

	const productEntries: SitemapEntry[] = products.map(p => ({
		path: `/products/${p.slug}`,
	}));

	return [...categoryEntries, ...guideEntries, ...productEntries];
}

export async function loader({ request }: Route.LoaderArgs) {
	const origin = siteOrigin(request);
	const entries: SitemapEntry[] = [
		...STATIC_PATHS.map(path => ({ path })),
		...(await getDynamicEntries()),
	];

	return new Response(serializeSitemap(origin, entries), {
		headers: {
			'Content-Type': 'application/xml; charset=utf-8',
			'Cache-Control': 'public, max-age=3600',
			'Access-Control-Allow-Origin': '*',
		},
	});
}
