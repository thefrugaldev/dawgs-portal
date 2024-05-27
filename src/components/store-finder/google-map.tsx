'use client';

import { APIProvider, Map, Marker } from '@vis.gl/react-google-maps';
import React from 'react';

const GoogleMap = () => {
  const position = { lat: 34.3257, lng: -83.3557 };

  return (
    <Map defaultCenter={position} defaultZoom={10}>
      <Marker position={position} />
    </Map>
  );
};

export default GoogleMap;
