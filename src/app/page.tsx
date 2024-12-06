'use client';

import GoogleMap from '@/components/map/google-map';
import StoreFinder from '@/components/map/store-finder';
import { APIProvider } from '@vis.gl/react-google-maps';
import { useState } from 'react';
import { IGasStation } from '@/models/gas-station';

export default function Home() {
  const [selectedStation, setSelectedStation] = useState<IGasStation>();

  return (
    <main className="flex min-h-screen justify-between">
      <APIProvider apiKey={process.env.NEXT_PUBLIC_GOOGLE_API_KEY || ''}>
        <aside className="flex-1 h-screen">
          <StoreFinder onStationSelect={setSelectedStation} />
        </aside>
        <div className="overflow-hidden h-screen w-8/12 relative">
          <GoogleMap selectedGasStation={selectedStation} />
        </div>
      </APIProvider>
    </main>
  );
}
