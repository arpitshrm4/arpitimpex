import { useState } from 'react';
import { useSearchParams, Link } from 'react-router';
import { products, categories, images, companyInfo } from '@/data/catalogue';
import { Phone, MessageCircle, Mail, MapPin, CheckCircle2, ShieldCheck, FileText } from 'lucide-react';

export function EnquiryForm() {
  const [params] = useSearchParams();
  const initialProduct = params.get('product') || '';
  const selected = products.find((p) => p.name === initialProduct || p.slug === initialProduct);

  const [formData, setFormData] = useState({
    name: '',
    company: '',
    email: '',
    country: '',
    phone: '',
    product: selected ? selected.name : initialProduct || (products[0]?.name ?? ''),
    quantity: '500 Pieces',
    specifications: '',
    packaging: '',
    destinationPort: '',
    details: '',
    consent: true,
  });

  const [submitted, setSubmitted] = useState(false);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>
  ) => {
    const { name, value, type } = e.target;
    if (type === 'checkbox') {
      const checked = (e.target as HTMLInputElement).checked;
      setFormData({ ...formData, [name]: checked });
    } else {
      setFormData({ ...formData, [name]: value });
    }
  };

  const handleWhatsAppSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const text = `*New B2B Quotation Request - Arpit Impex*
----------------------------------------
*Name:* ${formData.name || 'Not provided'}
*Company:* ${formData.company || 'Not provided'}
*Email:* ${formData.email || 'Not provided'}
*Country:* ${formData.country || 'Not specified'}
*Phone/WhatsApp:* ${formData.phone || 'Not provided'}
*Product Model:* ${formData.product}
*Target Quantity:* ${formData.quantity}
*Finish / Specs:* ${formData.specifications || 'Standard specifications'}
*Packaging / OEM:* ${formData.packaging || 'Standard export packaging'}
*Destination Port/City:* ${formData.destinationPort || 'Not specified'}
*Additional Notes:* ${formData.details || 'Please provide quotation, MOQ terms, and availability.'}`;

    const url = `https://wa.me/918285687940?text=${encodeURIComponent(text)}`;
    window.open(url, '_blank');
    setSubmitted(true);
  };

  const handleMailtoSubmit = () => {
    const subject = encodeURIComponent(`B2B Quotation Request: ${formData.product} - ${formData.company || formData.name}`);
    const body = encodeURIComponent(`B2B QUOTATION REQUEST - ARPIT IMPEX
=========================================
Contact Name: ${formData.name}
Company Name: ${formData.company}
Work Email: ${formData.email}
Country: ${formData.country}
Phone / WhatsApp: ${formData.phone}

Product Required: ${formData.product}
Target Quantity: ${formData.quantity}
Required Material / Finish / Dimensions: ${formData.specifications}
Packaging or Private-Label Requirement: ${formData.packaging}
Destination Port or City: ${formData.destinationPort}

Enquiry Notes & Specifications:
${formData.details}`);

    window.location.href = `mailto:${companyInfo.email}?subject=${subject}&body=${body}`;
  };

  return (
    <section className="section contact-section">
      <div>
        <p className="eyebrow">DIRECT SOURCING & EXPORT DESK</p>
        <h1>Request a B2B Quote</h1>
        <p>
          Connect directly with our sales and export coordination team in Aligarh, India. Share your target product models, expected volume, and destination for a quotation and specification review.
        </p>

        <div className="contact-info-card">
          <div style={{ display: 'flex', alignItems: 'center', gap: '14px', marginBottom: '14px' }}>
            <img src="/images/logo.png" alt="Arpit Impex" width="48" height="48" style={{ objectFit: 'contain' }} />
            <div>
              <h3 style={{ margin: 0 }}>{companyInfo.name}</h3>
              <small style={{ color: 'var(--blue)', fontWeight: 700, fontSize: '12px', letterSpacing: '0.5px' }}>
                ALIGARH SOURCING & EXPORT DESK
              </small>
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
                  View on Google Maps ↗
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
              <Phone size={16} /> Call Sales Desk
            </a>
          </div>
        </div>

        {selected ? (
          <div className="selected-product-preview">
            <div className="selected-product-img">
              <img
                src={selected.image}
                alt={`${selected.name} model ${selected.modelNumber}`}
                width="400"
                height="300"
              />
            </div>
            <h4>{selected.name} (SKU: {selected.modelNumber})</h4>
            <p className="selected-product-desc">{selected.description}</p>
            {selected.sourceStatus === 'Available on enquiry' && (
              <div style={{ marginTop: '8px', fontSize: '12px', color: 'var(--blue)', fontWeight: 600 }}>
                Available on enquiry
              </div>
            )}
          </div>
        ) : (
          <div className="selected-product-preview">
            <div className="selected-product-img">
              <img
                src={images.executiveOffice}
                alt="Arpit Impex Commercial Sourcing Desk and Executive Office"
                width="400"
                height="300"
                style={{ objectFit: 'cover' }}
              />
            </div>
            <h4>Official Factory & Sourcing Desk</h4>
            <p className="selected-product-desc">
              Direct factory coordination from our facilities in Aligarh, Uttar Pradesh. Supplying wholesale distributors, retail hardware chains, and overseas export trade partners.
            </p>
          </div>
        )}
      </div>

      <div className="form-panel">
        <h2>Request a B2B Quotation</h2>
        <p className="form-subheading">
          Provide your order specifications below. We review technical details and respond with per-unit pricing, confirmed MOQ, production timelines, and freight terms.
        </p>

        {submitted ? (
          <div className="form-success-box">
            <CheckCircle2 size={36} color="#16a34a" />
            <h3>Quotation Request Generated!</h3>
            <p style={{ maxWidth: '420px', margin: '0 auto' }}>
              Your product specifications have been prepared and opened in WhatsApp. You can also send a copy directly to our business email inbox.
            </p>
            <div style={{ display: 'flex', gap: '12px', marginTop: '16px', flexWrap: 'wrap', justifyContent: 'center' }}>
              <button
                type="button"
                className="button outline"
                onClick={handleMailtoSubmit}
              >
                <Mail size={16} /> Send via Email Too
              </button>
              <button
                type="button"
                className="button"
                onClick={() => setSubmitted(false)}
              >
                Submit Another Enquiry
              </button>
            </div>
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
                Business / Company Name *
                <input
                  required
                  name="company"
                  value={formData.company}
                  onChange={handleChange}
                  placeholder="e.g. Smith Hardware Ltd / Global Traders"
                />
              </label>
              <label>
                Work Email *
                <input
                  required
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  placeholder="name@company.com"
                />
              </label>
              <label>
                Country / Region *
                <input
                  required
                  name="country"
                  value={formData.country}
                  onChange={handleChange}
                  placeholder="e.g. United Arab Emirates, United Kingdom, USA, India"
                />
              </label>
              <label>
                WhatsApp / Phone (with country code)
                <input
                  name="phone"
                  type="tel"
                  value={formData.phone}
                  onChange={handleChange}
                  placeholder="+971 50 123 4567 / +91 98765 43210"
                />
              </label>
              <label>
                Target Order Quantity
                <input
                  name="quantity"
                  value={formData.quantity}
                  onChange={handleChange}
                  placeholder="e.g. 500 Pieces, 2000 Sets"
                />
              </label>

              <label className="full">
                Product Name or Model *
                <select
                  name="product"
                  value={formData.product}
                  onChange={handleChange}
                >
                  <optgroup label="Door Locks & Rim Locks">
                    {products
                      .filter((p) => p.category === 'door-locks')
                      .map((p) => (
                        <option key={p.slug} value={p.name}>
                          {p.name} ({p.modelNumber}){p.sourceStatus === 'Available on enquiry' ? ' — Available on enquiry' : ''}
                        </option>
                      ))}
                  </optgroup>
                  <optgroup label="Mortise Lock Bodies & Latches">
                    {products
                      .filter((p) => p.category === 'lock-bodies')
                      .map((p) => (
                        <option key={p.slug} value={p.name}>
                          {p.name} ({p.modelNumber}){p.sourceStatus === 'Available on enquiry' ? ' — Available on enquiry' : ''}
                        </option>
                      ))}
                  </optgroup>
                  <optgroup label="Cylinder Locks & Keys">
                    {products
                      .filter((p) => p.category === 'cylinder-locks')
                      .map((p) => (
                        <option key={p.slug} value={p.name}>
                          {p.name} ({p.modelNumber}){p.sourceStatus === 'Available on enquiry' ? ' — Available on enquiry' : ''}
                        </option>
                      ))}
                  </optgroup>
                  <optgroup label="Door Handles & Fittings">
                    {products
                      .filter((p) => p.category === 'door-handles')
                      .map((p) => (
                        <option key={p.slug} value={p.name}>
                          {p.name} ({p.modelNumber}){p.sourceStatus === 'Available on enquiry' ? ' — Available on enquiry' : ''}
                        </option>
                      ))}
                  </optgroup>
                  <optgroup label="General Category Enquiries">
                    {categories.map((c) => (
                      <option key={c.id} value={`${c.name} (General Enquiry)`}>
                        {c.name} (General Category Supply)
                      </option>
                    ))}
                  </optgroup>
                  <option value="Custom Hardware / OEM Stamping">Custom Hardware / OEM Tooling Drawing</option>
                </select>
              </label>

              <label>
                Required Finish / Material / Dimensions (optional)
                <input
                  name="specifications"
                  value={formData.specifications}
                  onChange={handleChange}
                  placeholder="e.g. Matte Black finish, 70mm cylinder, 60mm backset"
                />
              </label>

              <label>
                Packaging or Private-Label (optional)
                <input
                  name="packaging"
                  value={formData.packaging}
                  onChange={handleChange}
                  placeholder="e.g. Standard export carton, buyer branded box"
                />
              </label>

              <label className="full">
                Destination Port or Delivery City (optional)
                <input
                  name="destinationPort"
                  value={formData.destinationPort}
                  onChange={handleChange}
                  placeholder="e.g. Jebel Ali Port, Dubai / Felixstowe, UK / Nhava Sheva / Mumbai"
                />
              </label>

              <label className="full">
                Message / Specification Details
                <textarea
                  name="details"
                  rows={4}
                  value={formData.details}
                  onChange={handleChange}
                  placeholder="Please mention any specific dimension requirements, keying requirements (keyed alike / master keyed), target delivery date, or certification/compliance requirements..."
                />
              </label>

              <div className="full" style={{ marginTop: '4px' }}>
                <label style={{ flexDirection: 'row', alignItems: 'center', gap: '8px', cursor: 'pointer', fontSize: '12px', color: 'var(--quiet)' }}>
                  <input
                    type="checkbox"
                    name="consent"
                    checked={formData.consent}
                    onChange={handleChange}
                    required
                    style={{ width: 'auto', margin: 0 }}
                  />
                  <span>
                    I agree to Arpit Impex contacting me regarding this commercial hardware inquiry in accordance with the <Link to="/privacy" style={{ color: 'var(--blue)', textDecoration: 'underline' }}>Privacy Policy</Link>.
                  </span>
                </label>
              </div>
            </div>

            <div className="form-submit-actions">
              <button type="submit" className="button submit-whatsapp-btn">
                <MessageCircle size={18} /> Send via WhatsApp
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
              Direct connection with Arpit Impex sales desk. Bulk commercial supply only. We review specifications and reply with quotation, confirmed MOQ, production timelines, and freight options.
            </small>
          </form>
        )}
      </div>
    </section>
  );
}
