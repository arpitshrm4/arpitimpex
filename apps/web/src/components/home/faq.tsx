import { faqs } from '@/data/catalogue';
export function Faq(){return <section className="section faq-section"><div><p className="eyebrow">A FEW USEFUL ANSWERS</p><h2>Frequently Asked<br/>Questions</h2><p>Every requirement is different.<br/>Let’s start with the essentials.</p></div><div>{faqs.map(([q,a])=><details key={q}><summary>{q}<span>+</span></summary><p>{a}</p></details>)}</div></section>}
