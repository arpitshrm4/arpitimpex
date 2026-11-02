import { Link } from 'react-router';
import { ArrowRight } from 'lucide-react';
import { images } from '@/data/catalogue';

export function WhyUs() {
  const points = [
    {
      num: '01',
      title: 'In-House Pressing & Component Tooling',
      text: 'Mechanical power presses, stamping dies, and tooling equipment to form mild steel lock bodies, outer rim casings, and strike plates right here in Aligarh.',
    },
    {
      num: '02',
      title: 'Model-Level Specification Reviews',
      text: 'Share drawing files, CAD models, or physical samples. We analyze backset dimensions, spindle hubs, and finish requirements before quoting.',
    },
    {
      num: '03',
      title: 'Pre-Dispatch Quality & Mechanism Checks',
      text: 'Order-specific inspection covering bolt throw travel, spring latch tension, brass key smoothness, and salt-spray resistant coatings.',
    },
    {
      num: '04',
      title: 'Export Packaging & Logistics Coordination',
      text: 'Individual visual polybags, customized barcode labeling, heavy-duty sea freight master cartons, and complete export shipping documents.',
    },
  ];

  return (
    <section className="intro-section">
      <div className="intro-art">
        <div className="intro-art-frame">
          <img
            src={images.factoryEntrance}
            alt="Arpit Impex registered manufacturing and export premises in Aligarh, India"
            width="800"
            height="600"
            loading="lazy"
            style={{ aspectRatio: '4 / 3', objectFit: 'cover' }}
          />
        </div>
        <div className="intro-art-caption">
          <span>ALIGARH PREMISES</span>
          <span>01 / REGISTERED FACILITY & DISPATCH</span>
        </div>
      </div>

      <div className="intro-copy">
        <p className="eyebrow">SOURCING & TOOLING EXCELLENCE</p>
        <h2>More than products. A clearer way to source.</h2>
        <p className="intro-lead">
          We combine local Aligarh tooling capabilities with transparent export desk communication — eliminating middleman markups, reducing specification errors, and providing dependable hardware shipments worldwide.
        </p>

        <div className="intro-points">
          {points.map((p) => (
            <div className="point-row" key={p.num}>
              <span className="point-num">{p.num}</span>
              <div className="point-body">
                <strong>{p.title}</strong>
                <p>{p.text}</p>
              </div>
            </div>
          ))}
        </div>

        <div style={{ marginTop: '36px' }}>
          <Link to="/about" className="button button-dark">
            Our Manufacturing & Capabilities <ArrowRight size={16} />
          </Link>
        </div>
      </div>
    </section>
  );
}
