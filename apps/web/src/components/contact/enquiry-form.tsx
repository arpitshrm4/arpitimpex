import { useState } from 'react';
import { useSearchParams } from 'react-router';
import { products, categories, images, companyInfo } from '@/data/catalogue';
import { Phone, MessageCircle, Mail, MapPin, CheckCircle2 } from 'lucide-react';

export function EnquiryForm() {
  const [params] = useSearchParams();
  const initialProduct = params.get('product') || '';
  const selected = products.find((p) => p.name === initialProduct);

  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    country: 'India',
    phone: '',
    product: initialProduct || (products[0]?.name ?? ''),
    quantity: '500 Pieces',
    reference: '',
    details: '',
  });

  const [submitted, setSubmitted] = useState(false);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>
  ) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleWhatsAppSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const text = `*New Product Enquiry - Arpit Impex Website*
*Name:* ${formData.name || 'Not provided'}
*Company:* ${formData.company || 'Not provided'}
*Phone:* ${formData.phone || 'Not provided'}
*Email:* ${formData.email || 'Not provided'}
*Country:* ${formData.country || 'India'}
*Product:* ${formData.product}
*Quantity:* ${formData.quantity}
*Notes/Spec:* ${formData.details || 'Interested in price quotation and catalog.'}`;

    const url = `https://wa.me/918285687940?text=${encodeURIComponent(text)}`;
    window.open(url, '_blank');
    setSubmitted(true);
  };

  const handleMailtoSubmit = () => {
    const subject = encodeURIComponent(`Product Enquiry: ${formData.product} - ${formData.company || formData.name}`);
    const body = encodeURIComponent(`Name: ${formData.name}
Company: ${formData.company}
Phone: ${formData.phone}
Email: ${formData.email}
Country: ${formData.country}
Product: ${formData.product}
Quantity: ${formData.quantity}
Details: ${formData.details}`);
    window.location.href = `mailto:${companyInfo.email}?subject=${subject}&body=${body}`;
  };

  return (
    <section className="section contact-section">
      <div>
        <p className="eyebrow">DIRECT FACTORY ENQUIRY</p>
        <h1>Let’s Talk Hardware.</h1>
        <p>
          Connect directly with our sales & export team in Aligarh. Share your target product models, required quantities, and delivery location for instant pricing.
        </p>

        <div className="contact-info-card">
          <div style={{ display: 'flex', alignItems: 'center', gap: '14px', marginBottom: '14px' }}>
            <img src="/images/logo.png" alt="Arpit Impex" width="48" height="48" style={{ objectFit: 'contain' }} />
            <div>
              <h3 style={{ margin: 0 }}>{companyInfo.name}</h3>
              <small style={{ color: 'var(--blue)', fontWeight: 700, fontSize: '10px', letterSpacing: '0.5px' }}>OFFICIAL SOURCING DESK</small>
            </div>
          </div>
          <p className="contact-person">
            <strong>Contact Person:</strong> {companyInfo.contactPerson}
          </p>
          <div className="contact-detail-item">
            <MapPin size={18} className="contact-icon" style={{ flexShrink: 0, marginTop: '3px' }} />
            <div>
              <span>{companyInfo.location}</span>
              <div style={{ marginTop: '6px' }}>
                <a
                  href={companyInfo.googleBusinessUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  style={{
                    display: 'inline-flex',
                    alignItems: 'center',
                    gap: '4px',
                    fontSize: '12px',
                    color: 'var(--blue)',
                    fontWeight: 600,
                    textDecoration: 'none',
                  }}
                >
                  View on Google Maps / Business Profile ↗
                </a>
              </div>
            </div>
          </div>
          <div className="contact-detail-item">
            <Phone size={18} className="contact-icon" />
            <a href={`tel:${companyInfo.phone}`}>{companyInfo.phone}</a>
          </div>
          <div className="contact-detail-item">
            <Mail size={18} className="contact-icon" />
            <a href={`mailto:${companyInfo.email}`}>{companyInfo.email}</a>
          </div>
          <div style={{ marginTop: '12px', paddingTop: '10px', borderTop: '1px solid rgba(255,255,255,0.08)', fontSize: '12px', color: 'var(--text-muted)' }}>
            <span style={{ display: 'inline-block', marginRight: '14px' }}>
              <strong>GSTIN:</strong> {companyInfo.gstNumber} (Verified)
            </span>
            <span>
              <strong>Hours:</strong> {companyInfo.openingHours}
            </span>
          </div>

          <div className="contact-quick-actions">
            <a
              href={`https://wa.me/918285687940?text=${encodeURIComponent('Hi Arpit Impex, I would like to enquire about your hardware products.')}`}
              className="quick-btn-whatsapp"
              target="_blank"
              rel="noopener noreferrer"
            >
              <MessageCircle size={16} /> Chat on WhatsApp
            </a>
            <a href={`tel:${companyInfo.phone}`} className="quick-btn-call">
              <Phone size={16} /> Call Directly
            </a>
          </div>
        </div>

        {selected ? (
          <div className="selected-product-preview">
            <div className="selected-product-img">
              <img
                src={selected.image}
                alt={selected.name}
                width="400"
                height="300"
              />
            </div>
            <h4>{selected.name}</h4>
            <p className="selected-product-desc">{selected.description}</p>
          </div>
        ) : (
          <div className="selected-product-preview">
            <div className="selected-product-img">
              <img
                src={images.hero}
                alt="Arpit Impex Hardware"
                width="400"
                height="300"
              />
            </div>
            <h4>Door Locks & Architectural Hardware</h4>
            <p className="selected-product-desc">
              Precision manufactured in Aligarh, Uttar Pradesh. Supplying wholesale distributors, builders, and export trade partners.
            </p>
          </div>
        )}
      </div>

      <div className="form-panel">
        <h2>Request a Quotation</h2>
        <p className="form-subheading">
          Fill in your details below to send an instant enquiry directly to our WhatsApp or email.
        </p>

        {submitted ? (
          <div className="form-success-box">
            <CheckCircle2 size={32} color="#16a34a" />
            <h3>Enquiry Opened!</h3>
            <p>
              Your enquiry has been prepared and opened in WhatsApp. You can also send it via email below if preferred.
            </p>
            <button
              type="button"
              className="button outline"
              onClick={handleMailtoSubmit}
            >
              Send via Email as well
            </button>
          </div>
        ) : (
          <form onSubmit={handleWhatsAppSubmit}>
            <div className="form-grid">
              <label>
                Full Name *
                <input
                  required
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  placeholder="e.g. Ramesh Kumar / John Smith"
                />
              </label>
              <label>
                Phone / WhatsApp *
                <input
                  required
                  name="phone"
                  type="tel"
                  value={formData.phone}
                  onChange={handleChange}
                  placeholder="+91 98765 43210"
                />
              </label>
              <label>
                Business Email
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  placeholder="name@company.com"
                />
              </label>
              <label>
                Company / Firm Name
                <input
                  name="company"
                  value={formData.company}
                  onChange={handleChange}
                  placeholder="Your business or firm name"
                />
              </label>
              <label>
                Destination City / Country *
                <input
                  required
                  name="country"
                  value={formData.country}
                  onChange={handleChange}
                  placeholder="e.g. Mumbai, India / Dubai, UAE"
                />
              </label>
              <label>
                Estimated Quantity
                <input
                  name="quantity"
                  value={formData.quantity}
                  onChange={handleChange}
                  placeholder="e.g. 200 Pieces, 1000 Sets"
                />
              </label>
              <label className="full">
                Product Model / Requirement *
                <select
                  name="product"
                  value={formData.product}
                  onChange={handleChange}
                >
                  <optgroup label="Official IndiaMART Products">
                    {products.map((p) => (
                      <option key={p.slug} value={p.name}>
                        {p.name}
                      </option>
                    ))}
                  </optgroup>
                  <optgroup label="Categories">
                    {categories.map((c) => (
                      <option key={c.id} value={c.name}>
                        {c.name} (General Enquiry)
                      </option>
                    ))}
                  </optgroup>
                  <option value="Custom Hardware / Other">Other Custom Hardware Requirement</option>
                </select>
              </label>
              <label className="full">
                Enquiry Details & Specifications
                <textarea
                  name="details"
                  rows={4}
                  value={formData.details}
                  onChange={handleChange}
                  placeholder="Mention finish requirements (Brass/Antique/SS/Black), key combination preferences, packaging requirements, or delivery schedule..."
                />
              </label>
            </div>

            <div className="form-submit-actions">
              <button type="submit" className="button submit-whatsapp-btn">
                <MessageCircle size={18} /> Send via WhatsApp Instant
              </button>
              <button
                type="button"
                className="button outline"
                onClick={handleMailtoSubmit}
              >
                <Mail size={16} /> Send via Email
              </button>
            </div>
            <small className="form-disclaimer">
              Direct connection with Arpit Impex sales desk. We reply promptly within business hours.
            </small>
          </form>
        )}
      </div>
    </section>
  );
}
