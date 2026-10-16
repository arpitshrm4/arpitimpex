import { Link } from 'react-router';
import { ArrowUpRight } from 'lucide-react';
export function EnquiryBanner(){return <section className="enquiry-banner"><div><p className="eyebrow">LET’S START A CONVERSATION</p><h2>Have a Product in Mind? Let's Talk.</h2><p>Share your product requirements, target quantity and destination country.<br/>We'll review your enquiry and discuss the next steps.</p></div><div><Link to="/contact" className="button light">Request a Quote <ArrowUpRight size={18}/></Link><small className="email-note">Business email to be provided</small></div></section>}
