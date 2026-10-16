import { Link } from 'react-router';
import type { Route } from './+types/not-found';
import { seo } from '@/lib/seo';
import { PageIntro } from '@/components/page-intro';
export function loader(){throw new Response('Page not found',{status:404})}
export function meta({matches,location}:Route.MetaArgs){return seo({matches,location},{title:'Page Not Found | Arpit Impex',description:'This page could not be found. Explore hardware sourcing products or return to the Arpit Impex homepage to find the information you need.',noindex:true})}
export function ErrorBoundary(){return <main><PageIntro eyebrow="404" title="This Page Could Not Be Found." text="Let’s get you back to the right place."/><div className="section"><Link className="button" to="/">Return to Home</Link></div></main>}
