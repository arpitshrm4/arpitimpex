import { companyInfo } from '@/data/catalogue';

export function LegalContent({ privacy }: { privacy: boolean }) {
  return (
    <section className="legal-content section">
      <p className="eyebrow">ARPIT IMPEX</p>
      <h1>{privacy ? 'Privacy Policy' : 'Terms & Conditions'}</h1>
      {privacy ? (
        <>
          <h2>Commercial Enquiry Information</h2>
          <p>
            When you request a quotation or enquire about product specifications through our website, you may provide your name, business email, company name, phone/WhatsApp number, target quantities, and technical requirements.
          </p>
          <h2>How Information is Used</h2>
          <p>
            The details you provide are used solely to prepare commercial quotations, evaluate product specifications, communicate regarding bulk order requirements, and coordinate applicable export supply arrangements. We do not sell, rent, or distribute commercial contact details to third parties.
          </p>
          <h2>Direct Communication Channels</h2>
          <p>
            Enquiry details are submitted directly through WhatsApp messaging or your email application addressed to our official sales desk at <strong>{companyInfo.email}</strong>.
          </p>
          <h2>Contact for Privacy Queries</h2>
          <p>
            For any questions regarding commercial enquiry records, please contact Arpit Impex at {companyInfo.location}, or by email at <a href={`mailto:${companyInfo.email}`}>{companyInfo.email}</a>.
          </p>
        </>
      ) : (
        <>
          <h2>B2B Catalogue Information</h2>
          <p>
            This website serves as a B2B product catalogue for architectural door hardware buyers, distributors, and contractors. Product images, descriptions, and specifications are provided for preliminary evaluation. Final dimensions, materials, finishes, compatibility, and included accessories must be verified against current technical drawings or physical samples before confirming an order.
          </p>
          <h2>Quotations & Commercial Contracts</h2>
          <p>
            All bulk supply arrangements, pricing, minimum order quantities (MOQ), production lead times, and freight terms (such as EXW, FOB, or CIF) are agreed on an order-specific basis through written commercial quotations. This website does not process retail payments or direct single-piece sales.
          </p>
          <h2>Manufacturing & Supply Arrangements</h2>
          <p>
            Arpit Impex manufactures selected hardware items at its Aligarh facility and coordinates additional products through verified local manufacturing partners. Model-level supply status is confirmed during quotation discussions.
          </p>
          <h2>Governing Jurisdiction</h2>
          <p>
            These website terms and any resulting commercial transactions are governed by the applicable laws of India, with jurisdiction in Aligarh, Uttar Pradesh.
          </p>
        </>
      )}
    </section>
  );
}
