import { GooglePlace } from '@/types/google';
import {
  AdvancedMarker,
  Pin,
  useAdvancedMarkerRef,
} from '@vis.gl/react-google-maps';
import React, { useCallback, useState } from 'react';
import CustomInfoWindow from './custom-info-window';
import { Popover } from '../ui/popover';
import { Fuel } from 'lucide-react';

interface MarkerWithInfoWindowProps {
  position: google.maps.LatLng | google.maps.LatLngLiteral | null | undefined;
  markerInfo: GooglePlace;
}

const MarkerWithWindowInfo: React.FC<MarkerWithInfoWindowProps> = ({
  position,
  markerInfo,
}) => {
  // `markerRef` and `marker` are needed to establish the connection between
  // the marker and infowindow (if you're using the Marker component, you
  // can use the `useMarkerRef` hook instead).
  const [markerRef, marker] = useAdvancedMarkerRef();

  const [infoWindowShown, setInfoWindowShown] = useState(false);

  // clicking the marker will toggle the infowindow
  const handleMarkerClick = useCallback(
    () => setInfoWindowShown((isShown) => !isShown),
    [],
  );

  // if the maps api closes the infowindow, we have to synchronize our state
  const handleClose = useCallback(() => setInfoWindowShown(false), []);

  return (
    <Popover open={infoWindowShown}>
      <AdvancedMarker
        ref={markerRef}
        position={position}
        onClick={handleMarkerClick}
      >
        <Pin glyphColor={'#fff'} scale={1.3}>
          <Fuel />
        </Pin>
        {infoWindowShown && (
          <CustomInfoWindow
            markerInfo={markerInfo}
            anchor={marker}
            onClose={handleClose}
          />
        )}
      </AdvancedMarker>
    </Popover>
  );
};

export default MarkerWithWindowInfo;
