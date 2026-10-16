import { facilities } from '@/data/catalogue';

export function FacilityShowcase() {
  return (
    <section className="facility-section">
      <div className="section-heading">
        <div>
          <p className="eyebrow">OUR INFRASTRUCTURE & PREMISES</p>
          <h2>Behind Our Hardware Manufacturing</h2>
        </div>
        <p style={{ maxWidth: '480px', margin: 0 }}>
          Take a look inside our Aligarh operations — from power press tooling lines and machine workshops to our executive sourcing desk and registered facility.
        </p>
      </div>

      <div className="facility-grid">
        {facilities.map((fac) => (
          <article key={fac.id} className="facility-card">
            <div className="facility-img-wrap">
              <img
                src={fac.image}
                alt={fac.alt}
                width="600"
                height="450"
                loading="lazy"
              />
              <span className="facility-tag">{fac.tag}</span>
            </div>
            <div className="facility-content">
              <h3>{fac.title}</h3>
              <p>{fac.description}</p>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}
