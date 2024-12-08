import { IGasStation } from '@/models/gas-station';
import { AdvancedMarker, Pin } from '@vis.gl/react-google-maps';
import React, { useState } from 'react';
import { Fuel } from 'lucide-react';

interface CustomAdvancedMarkerProps {
  gasStation: IGasStation;
  placeId?: string;
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
        onClick={() => {
          setClicked(!clicked);
        }}
      >
        <div className="relative">
          {/* TODO: Uncomment if you want a custom marker and comment out the Pin/Fuel components */}
          {/* <CustomInfoWindow
            placeId={placeId}
            gasStation={gasStation}
            open={clicked}
          /> */}
          <Pin glyphColor={'#fff'} scale={1.3}>
            <Fuel />
          </Pin>
        </div>
      </AdvancedMarker>
    </div>
  );
};

export default CustomAdvancedMarker;
