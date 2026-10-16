import type { Route } from './+types/llms.txt';
import { siteOrigin } from '@/lib/site-origin.server';
export function loader({ request }: Route.LoaderArgs) {
	const origin = siteOrigin(request);
	return new Response(
		`# Arpit Impex

> Architectural Door Hardware from Aligarh, India | Manufacturing, Customization & Export Supply.
> Website: https://arpitimpex.com

## Business Overview
Arpit Impex supplies door locks, mortise lock bodies, cylinders, handles, and related architectural hardware to business buyers. Based in Aligarh, India, we support product enquiries, technical specification discussions, customization requests, and export coordination for bulk B2B orders. We manufacture selected products in our own mechanical press workshop and supply additional architectural items through verified local manufacturing partners.

## Core Capabilities
- In-house power press workshop for mild steel rim locks, mortise lock cases, and strike plates.
- Specification-led sourcing for contemporary handles, euro profile cylinders, and specialized hardware.
- Order-specific visual, dimensional, and mechanical checks prior to dispatch.
- Export coordination including Commercial Invoices, Packing Lists, and FOB/CIF freight terms where mutually agreed.

## Key Pages
- [Products](${origin}/products): Full catalogue of door locks, lock bodies, profile cylinders, and door handles with model numbers and technical specifications.
- [About Us](${origin}/about): Manufacturing capability, Aligarh premises, and practical B2B order approach.
- [Export Process](${origin}/process): 6-step ordering process from requirement sharing to documentation and export dispatch.
- [B2B Quote Enquiry](${origin}/contact): Official sales and export desk contact with direct WhatsApp (+91 8285687940) and email (${origin}/contact).
`,
		{ headers: { 'Content-Type': 'text/plain; charset=utf-8' } }
	);
}
