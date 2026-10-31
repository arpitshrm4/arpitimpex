import type { Route } from './+types/not-found';
import { seo } from '@/lib/seo';
import { NotFoundView } from '@/components/not-found-view';

export function loader() {
  return new Response(null, { status: 404, statusText: 'Not Found' });
}

export function meta({ matches, location }: Route.MetaArgs) {
  return seo(
    { matches, location },
    {
      title: 'Page Not Found (404) | Arpit Impex',
      description:
        'The page you were looking for could not be found. Browse Arpit Impex architectural hardware, door locks, mortise lock bodies, cylinders, and ironmongery.',
      noindex: true,
    }
  );
}

export default function NotFoundPage() {
  return <NotFoundView />;
}

export function ErrorBoundary() {
  return <NotFoundView />;
}
