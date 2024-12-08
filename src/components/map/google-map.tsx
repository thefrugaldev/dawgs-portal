'use client';

import { Map } from '@vis.gl/react-google-maps';
import {} from '@vis.gl/react-google-maps';
import React, { useState } from 'react';
import { IGasStation } from '@/models/gas-station';
import CustomAdvancedMarker from './custom-marker/custom-marker';

interface GoogleMapProps {
  selectedGasStations: IGasStation[];
}

const GoogleMap = ({ selectedGasStations }: GoogleMapProps) => {
  // eslint-disable-next-line no-unused-vars
  const [placeId, setPlaceId] = useState<string>();

  const position = { lat: 34.3257, lng: -83.3557 };

  console.log('Selected Stations for Map: ', selectedGasStations);

  return (
    <Map
      mapId={process.env.NEXT_PUBLIC_GOOGLE_MAPS_ID}
      defaultCenter={position}
      defaultZoom={10}
      gestureHandling={'greedy'}
      disableDefaultUI
    >
      {selectedGasStations?.length > 0 &&
        selectedGasStations.map((station) => (
          <CustomAdvancedMarker
            key={station._id}
            gasStation={station}
            placeId={placeId}
          />
        ))}
      {/* <Polyline
        encodedPath={polyline}
        strokeWeight={10}
        strokeColor={'#0f53ff'}
      /> */}

      {/* <SearchResults searchResults={searchResults} /> */}
    </Map>
  );
};

export default GoogleMap;
