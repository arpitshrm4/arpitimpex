import { Wrench, Layers, CheckCircle2, PackageCheck } from 'lucide-react';

export function WhyUs() {
  const features = [
    {
      icon: Wrench,
      title: 'In-House Manufacturing & Tooling',
      text: 'Direct workshop production in Aligarh for selected mortise locks, pressed steel lock bodies, latches, and internal mechanism components.',
    },
    {
      icon: Layers,
      title: 'Specification-Led Sourcing',
      text: 'We review drawings, dimensions, backsets, and finishes to provide exact matching options—combining in-house fabrication with verified local partners.',
    },
    {
      icon: CheckCircle2,
      title: 'Order-Specific Quality Checks',
      text: 'Every order undergoes physical checks—including dimensional tolerance, key operation, plating finish, and mechanism movement before packing.',
    },
    {
      icon: PackageCheck,
      title: 'Custom Packaging & Export Handling',
      text: 'We coordinate bulk export cartons, private-label branding (subject to MOQ), and standard export shipping documentation (FOB/CIF where mutually agreed).',
    },
  ];

  return (
    <section className="why-section section">
      <div>
        <p className="eyebrow">CAPABILITIES & STANDARDS</p>
        <h2>
          Architectural Hardware Backed by<br />
          Local Manufacturing & Verified Supply
        </h2>
        <p>
          Practical coordination. Model-level specifications.<br />
          Clear expectations from enquiry to dispatch.
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

