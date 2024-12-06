import { IGasStation } from '@/models/gas-station';
import { AdvancedMarker } from '@vis.gl/react-google-maps';
import React, { useState } from 'react';
import { MapPin } from 'lucide-react';

import './custom-marker.css';
import CustomInfoWindow from './custom-info-window';

interface CustomAdvancedMarkerProps {
  gasStation: IGasStation;
}

const CustomAdvancedMarker = ({ gasStation }: CustomAdvancedMarkerProps) => {
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
          <CustomInfoWindow gasStation={gasStation} open={clicked} />
          <MapPin size={32} color="#E4002B" className="absolute" />
        </div>
      </AdvancedMarker>
    </div>
  );
};

export default CustomAdvancedMarker;
