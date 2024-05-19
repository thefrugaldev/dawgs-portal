'use client';

import { APIProvider, Map, Marker } from '@vis.gl/react-google-maps';
import React from 'react';

const GoogleMap = () => {
  const position = { lat: 53.54992, lng: 10.00678 };

  return (
    <APIProvider apiKey={process.env.NEXT_PUBLIC_GOOGLE_API_KEY || ''}>
      <Map defaultCenter={position} defaultZoom={10}>
        <Marker position={position} />
      </Map>
    </APIProvider>
  );
};

export default GoogleMap;
