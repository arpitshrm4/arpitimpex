import type { Route } from './+types/llms.txt';
import { siteOrigin } from '@/lib/site-origin.server';
export function loader({ request }: Route.LoaderArgs) {
	const origin = siteOrigin(request);
	return new Response(
		`# Arpit Impex

> Architectural Ironmongery & Door Hardware Manufacturer and Exporter from Aligarh, India | Selected Manufacturing, Sourcing & Global Export Supply.
> Website: https://arpitimpex.com

## Business Overview
Arpit Impex is a premier direct manufacturer, sourcing partner, and bulk exporter of architectural ironmongery, gate hardware, door locks, mortise lock bodies, profile cylinders, and architectural fittings. Operating from the historic hardware manufacturing cluster of Aligarh, Uttar Pradesh, India, we supply overseas importers, building material distributors, wholesalers, and commercial contractors across the UK, Europe, Middle East (GCC), North America, and Africa.

## Core Capabilities & Product Lines
- **Architectural Gate Ironmongery:** Heavy-duty T-hinges (150mm to 350mm), straight strap hinges, reversible gate hinges, hook and band hinges, and heavy timber gate fittings.
- **Perimeter & Security Ironmongery:** Heavy galvanized Brenton padbolts, straight and necked barrel bolts, garage door foot bolts, penta-bolt rim deadbolts, and spring animal latches.
- **Lock Bodies & Cylinders:** Aluminium section narrow mortise lock bodies, stainless steel sashlocks, 6-lever mortise locks, and Euro profile DIN 18252 cylinders with computer-numbered keys.
- **Decorative & Antique Ironmongery:** Forged black antique thumb latches, ornate ring pull handles, cabin hooks, escutcheons, and textured beeswax/epoxy finished fittings.
- **OEM Private-Label Tooling:** In-house CAD drawing reviews, progressive stamping die fabrication, custom logo stamping, and customized retail polybag/carton barcoding (EAN-13/UPC).
- **Surface Weatherproofing:** High-durability finishes including Electrostatic Exterior Matte Black Powder Coating (60–80 µm, ASTM B117 240+ hrs neutral salt spray), Hot-Dip Galvanizing (HDG to ISO 1461), and Trivalent Zinc Passivation (Cr3+).
- **Export Logistics:** Container consolidation (FCL & LCL) through Mundra Port and Nhava Sheva (JNPT Mumbai) under FOB, CIF, or CFR Incoterms with complete commercial export documentation (HS Codes 8301 & 8302).

## Key Pages & Resources
- [Products](${origin}/products): Full catalogue of door locks, lock bodies, profile cylinders, handles, and architectural ironmongery with technical specifications.
- [Architectural Ironmongery Manufacturer Guide](${origin}/blog/architectural-ironmongery-manufacturer-exporter-india): The authoritative B2B direct sourcing guide for overseas importers, architectural ironmongers, and commercial hardware distributors.
- [OEM & Private Label Manufacturing](${origin}/oem-private-label): Custom tooling, stamping dies, and private-label packaging for international ironmongery distributors.
- [Quality & Inspection](${origin}/quality-inspection): 5-point factory testing protocol, dimensional tolerances, and salt-spray corrosion standards.
- [Digital Brochure](${origin}/brochure): Complete architectural hardware and ironmongery product brochure, printable engineering spec sheets, and comparison matrix for all catalogued models.
- [About Us](${origin}/about): Selected in-house manufacturing, local supply partners, and B2B export coordination from Aligarh, India.
- [Export Process](${origin}/process): 6-step ordering process from requirement sharing to documentation and export dispatch.
- [B2B Quote Enquiry](${origin}/contact): Official sales and export desk contact with direct WhatsApp (+91 8285687940) and email (${origin}/contact).
`,
		{ headers: { 'Content-Type': 'text/plain; charset=utf-8' } }
	);
}
