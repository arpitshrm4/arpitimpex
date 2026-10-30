import { type RouteConfig, index, route } from '@react-router/dev/routes';

export default [
	index('routes/home.tsx'),
	route('products', 'routes/products.tsx'),
	route('products/:slug', 'routes/product-detail.tsx'),
	route('brochure', 'routes/brochure.tsx'),
	route('about', 'routes/about.tsx'),
	route('process', 'routes/process.tsx'),
	route('contact', 'routes/contact.tsx'),
	route('privacy', 'routes/privacy.tsx'),
	route('terms', 'routes/terms.tsx'),
	route('llms.txt', 'routes/llms.txt.ts'),
	route('sitemap.xml', 'routes/sitemap.xml.ts'),
	route('products-feed.xml', 'routes/products-feed.xml.ts'),
	route('products-feed.tsv', 'routes/products-feed.tsv.ts'),
	route('robots.txt', 'routes/robots.txt.ts'),
	route('api/health', 'routes/api.health.ts'),
	route('api/*', 'routes/api.$.ts'),
	route('*', 'routes/not-found.tsx'),
] satisfies RouteConfig;
