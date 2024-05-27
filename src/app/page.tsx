'use client';

import GoogleMap from '@/components/store-finder/google-map';
import StoreFinder from '@/components/store-finder/store-finder';
import { APIProvider } from '@vis.gl/react-google-maps';

export default function Home() {
  return (
    <main className="flex min-h-screen justify-between">
      <APIProvider apiKey={process.env.NEXT_PUBLIC_GOOGLE_API_KEY || ''}>
        <aside className="flex-1 h-screen">
          <StoreFinder />
        </aside>
        <div className="overflow-hidden h-screen w-8/12 relative">
          <GoogleMap />
        </div>
      </APIProvider>
    </main>
  );
}
