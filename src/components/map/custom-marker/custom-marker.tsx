import { IGasStation } from '@/models/gas-station';
import { AdvancedMarker } from '@vis.gl/react-google-maps';
import React, { useState } from 'react';
import { MapPin } from 'lucide-react';

import CustomInfoWindow from './custom-info-window';

interface CustomAdvancedMarkerProps {
  gasStation: IGasStation;
  placeId?: string;
}

const CustomAdvancedMarker = ({
  gasStation,
  placeId,
}: CustomAdvancedMarkerProps) => {
  const [clicked, setClicked] = useState(false);

  const position = {
    lat: Number(gasStation.lat),
    lng: Number(gasStation.long),
  };

  return (
    <div className="advanced-marker-example">
      <AdvancedMarker
        position={position}
        title={'Custom Gas Station Marker.'}
        // onMouseEnter={() => setHovered(true)}
        // onMouseLeave={() => setHovered(false)}
        onClick={() => {
          setClicked(!clicked);
        }}
      >
        <div className="relative">
          <CustomInfoWindow
            placeId={placeId}
            gasStation={gasStation}
            open={clicked}
          />
          <MapPin size={32} color="#E4002B" className="absolute" />
        </div>
      </AdvancedMarker>
    </div>
  );
};

export default CustomAdvancedMarker;
