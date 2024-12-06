import { IGasStation } from '@/models/gas-station';
import { AdvancedMarker, Pin } from '@vis.gl/react-google-maps';
import React, { useState } from 'react';
import StationImage from './station-image';
import { Bean, Fuel } from 'lucide-react';
import StationDetails from './station-details';

import './custom-marker.css';

interface CustomAdvancedMarkerProps {
  gasStation: IGasStation;
}

const CustomAdvancedMarker = ({ gasStation }: CustomAdvancedMarkerProps) => {
  const [clicked, setClicked] = useState(false);
  const [hovered, setHovered] = useState(false);
  const position = {
    lat: Number(gasStation.lat),
    lng: Number(gasStation.long),
  };
  // const position = { lat: 34.3257, lng: -83.3557 };

  const renderCustomPin = () => {
    return (
      <>
        <div className="custom-pin">
          <button className="close-button">
            <span className="material-symbols-outlined"> close </span>
          </button>
          <div className="image-container">
            <StationImage image={gasStation.imageLink} isExtended={clicked} />
            <span className="icon">
              <Pin glyphColor={'#000'} scale={1.3}>
                {/* <Fuel /> */}

                {/* <Bean /> */}
              </Pin>
            </span>
          </div>
          HERE IS MY CUSTOM PIN!
          <StationDetails gasStation={gasStation} />
        </div>

        <div className="tip" />
      </>
    );
  };

  return (
    <div className="advanced-marker-example">
      <AdvancedMarker
        position={position}
        title={'Custom Gas Station Marker.'}
        onMouseEnter={() => setHovered(true)}
        onMouseLeave={() => setHovered(false)}
        className={`real-estate-marker ${clicked ? 'clicked' : ''} ${
          hovered ? 'hovered' : ''
        }`}
        onClick={() => {
          console.log('CLICKED!');
          setClicked(!clicked);
        }}
      >
        {renderCustomPin()}
      </AdvancedMarker>
    </div>
  );
};

export default CustomAdvancedMarker;
