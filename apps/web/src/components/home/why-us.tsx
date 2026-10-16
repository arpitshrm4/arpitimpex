import { Wrench, Layers, CheckCircle2, PackageCheck } from 'lucide-react';

export function WhyUs() {
  const features = [
    {
      icon: Wrench,
      title: 'In-house manufacturing',
      text: 'Selected locks, lock bodies and pressed components are produced in our Aligarh workshop. Manufacturing status is confirmed by model.',
    },
    {
      icon: Layers,
      title: 'Product matching',
      text: 'Share a model number, drawing, dimensions or reference sample. We review the requirement and confirm the closest available specification before quoting.',
    },
    {
      icon: CheckCircle2,
      title: 'Order-specific inspection',
      text: 'Inspection requirements are agreed for each order. Depending on the product, checks may include dimensions, finish, mechanism operation and packaging condition.',
    },
    {
      icon: PackageCheck,
      title: 'Bulk packaging and export coordination',
      text: 'We discuss standard or buyer-branded packaging, subject to product availability and order quantity, and coordinate applicable shipment documentation and freight arrangements.',
    },
  ];

  return (
    <section className="why-section section">
      <div>
        <p className="eyebrow">CAPABILITIES & SOURCING</p>
        <h2>
          Manufacturing Capability and<br />
          Product Sourcing
        </h2>
        <p>
          We manufacture selected hardware products in our Aligarh unit and coordinate additional products through local supply partners. For each enquiry, we confirm the product specification, supply arrangement, available finish options, order quantity and packaging requirements before quotation.
        </p>
      </div>
      <div className="feature-list">
        {features.map((f) => (
          <div className="feature" key={f.title}>
            <f.icon size={24} strokeWidth={1.5} />
            <div>
              <h3>{f.title}</h3>
              <p>{f.text}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

