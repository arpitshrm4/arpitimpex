import {
	data,
	isRouteErrorResponse,
	Links,
	Meta,
	Outlet,
	Scripts,
	ScrollRestoration,
} from 'react-router';
import type { Route } from './+types/root';
import stylesheet from '@/index.css?url';
import { SiteHeader } from '@/components/site-header';
import { SiteFooter } from '@/components/site-footer';
import { NotFoundView } from '@/components/not-found-view';
import { siteOrigin } from '@/lib/site-origin.server';
import { HorizonsPreviewScripts } from './horizons-preview-scripts';

export const links: Route.LinksFunction = () => [
	{ rel: 'stylesheet', href: stylesheet },
	{ rel: 'icon', href: '/favicon-32x32.png', type: 'image/png' },
	{ rel: 'apple-touch-icon', href: '/apple-touch-icon.png' },
	{ rel: 'preconnect', href: 'https://fonts.googleapis.com' },
	{
		rel: 'preconnect',
		href: 'https://fonts.gstatic.com',
		crossOrigin: 'anonymous',
	},
	{
		rel: 'stylesheet',
		href: 'https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700;800&display=swap',
	},
];

/**
 * Publishes the site's public origin, which `seo()` reads to build canonical and
 * `og:url` tags, and advertises the sitemap to crawlers that read response
 * headers rather than HTML.
 *
 * A `meta` export can only reach server data through `matches`, and the `headers`
 * export cannot see loader data at all, so both have to travel this way.
 */
export function loader({ request }: Route.LoaderArgs) {
	const origin = siteOrigin(request);

	return data(
		{ origin },
		{ headers: { Link: `<${origin}/sitemap.xml>; rel="sitemap"; type="application/xml", <${origin}/llms.txt>; rel="describedby"; type="text/plain"` } },
	);
}

/**
 * A page route that exports `headers` replaces this one, so merge `parentHeaders`
 * there rather than returning only that route's own headers.
 */
export function headers({ loaderHeaders }: Route.HeadersArgs) {
	return loaderHeaders;
}

export function Layout({ children }: { children: React.ReactNode }) {
	return (
		<html lang="en">
			<head>
				<meta charSet="utf-8" />
				<meta name="viewport" content="width=device-width, initial-scale=1" />
				<Meta />
				<Links />
				{/* Google Tag Manager */}
				<script
					dangerouslySetInnerHTML={{
						__html: `(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
})(window,document,'script','dataLayer','GTM-5P28WH78');`,
					}}
				/>
				{/* End Google Tag Manager */}
				{/* Google tag (gtag.js) */}
				<script async src="https://www.googletagmanager.com/gtag/js?id=G-CT08YBQKS7" />
				<script
					dangerouslySetInnerHTML={{
						__html: `
  window.dataLayer = window.dataLayer || [];
  function gtag(){dataLayer.push(arguments);}
  gtag('js', new Date());

  gtag('config', 'G-CT08YBQKS7');
`,
					}}
				/>
				<HorizonsPreviewScripts />
				{/* Google tag (gtag.js) event */}
				<script
					dangerouslySetInnerHTML={{
						__html: `
  gtag('event', 'conversion_event_request_quote', {
    // <event_parameters>
  });
`,
					}}
				/>
			</head>
			<body>
				{/* Google Tag Manager (noscript) */}
				<noscript>
					<iframe
						src="https://www.googletagmanager.com/ns.html?id=GTM-5P28WH78"
						height="0"
						width="0"
						style={{ display: 'none', visibility: 'hidden' }}
					/>
				</noscript>
				{/* End Google Tag Manager (noscript) */}
				<div id="root">{children}</div>
				<ScrollRestoration />
				<Scripts />
			</body>
		</html>
	);
}

export default function App() {
	return <><a href="#main-content" className="skip-link">Skip to content</a><SiteHeader /><div id="main-content"><Outlet /></div><SiteFooter /></>;
}

export function ErrorBoundary({ error }: Route.ErrorBoundaryProps) {
	let message = 'Oops!';
	let details = 'An unexpected error occurred.';
	let stack: string | undefined;

	const is404 = isRouteErrorResponse(error) && error.status === 404;

	if (isRouteErrorResponse(error)) {
		message = is404 ? '404' : 'Error';
		details =
			is404
				? 'The requested page could not be found.'
				: error.statusText || details;
	} else if (import.meta.env.DEV && error && error instanceof Error) {
		details = error.message;
		stack = error.stack;
	}

	return (
		<>
			<a href="#main-content" className="skip-link">Skip to content</a>
			<SiteHeader />
			<div id="main-content">
				<NotFoundView
					eyebrow={is404 ? '404 · PAGE NOT FOUND' : 'SYSTEM NOTICE'}
					title={is404 ? 'This Page Could Not Be Found' : 'Something Went Wrong'}
					message={details}
				/>
				{stack ? (
					<div className="section" style={{ paddingTop: 0 }}>
						<pre style={{ background: '#f1f5f9', padding: '16px', borderRadius: '4px', overflowX: 'auto', fontSize: '12px' }}>
							<code>{stack}</code>
						</pre>
					</div>
				) : null}
			</div>
			<SiteFooter />
		</>
	);
}
