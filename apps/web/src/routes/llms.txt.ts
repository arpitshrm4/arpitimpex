import type { Route } from './+types/llms.txt';
import { siteOrigin } from '@/lib/site-origin.server';
export function loader({ request }: Route.LoaderArgs) {
 const origin = siteOrigin(request);
 return new Response(`# Arpit Impex\n\n> India-based hardware sourcing and export coordination. Catalogue products and photography are illustrative.\n\n## Pages\n- [Products](${origin}/products): Representative locks, handles, hinges and accessories; availability requires confirmation.\n- [About](${origin}/about): Sourcing business positioning.\n- [Process](${origin}/process): Enquiry to shipment coordination.\n- [Contact](${origin}/contact): Form inactive pending business email configuration.\n`, { headers: { 'Content-Type': 'text/plain; charset=utf-8' } });
}
