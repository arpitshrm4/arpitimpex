import type { Route } from './+types/llms.txt';
import { siteOrigin } from '@/lib/site-origin.server';
export function loader({ request }: Route.LoaderArgs) {
	const origin = siteOrigin(request);
	return new Response(
		`# Arpit Impex

> Architectural Door Hardware from Aligarh, India | Selected Manufacturing, Sourcing & Export Supply.
> Website: https://arpitimpex.com

## Business Overview
Arpit Impex supplies door locks, mortise lock bodies, cylinders, handles, architectural ironmongery (gate hinges, sliding bolts, padbolts, brackets), and related hardware to importers, distributors, wholesalers and project buyers. Based in Aligarh, India, we support bulk enquiries, product-specification reviews, customization discussions, and export coordination. We manufacture selected products in our Aligarh unit and coordinate additional products through local supply partners.

## Core Capabilities
- In-house manufacturing: Selected locks, lock bodies and pressed components produced in our Aligarh workshop. Manufacturing status confirmed by model.
- Product matching: Model review, technical drawings, and closest available specification confirmation.
- Order-specific inspection: Visual, dimensional, and mechanism checks agreed for each order prior to dispatch.
- Bulk packaging and export coordination: Standard or custom packaging, commercial invoices, packing lists, and export freight coordination.

## Key Pages
- [Products](${origin}/products): Catalogue of door locks, lock bodies, profile cylinders, handles, and architectural ironmongery with model numbers and technical specifications.
- [Digital Brochure](${origin}/brochure): Complete architectural hardware and ironmongery product brochure, printable engineering spec sheets, and comparison matrix for all catalogued models.
- [About Us](${origin}/about): Selected in-house manufacturing, local supply partners, and B2B export coordination from Aligarh, India.
- [Export Process](${origin}/process): 6-step ordering process from requirement sharing to documentation and export dispatch.
- [B2B Quote Enquiry](${origin}/contact): Official sales and export desk contact with direct WhatsApp (+91 8285687940) and email (${origin}/contact).
`,
		{ headers: { 'Content-Type': 'text/plain; charset=utf-8' } }
	);
}
