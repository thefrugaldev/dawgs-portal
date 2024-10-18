import { GooglePlace } from '@/types/google';
import { InfoWindow } from '@vis.gl/react-google-maps';
import { Accessibility, InfoIcon, Plug, Store, Truck } from 'lucide-react';
import Link from 'next/link';
import React from 'react';

// const DEFAULT_GAS_IMAGE =
//   'https://images.unsplash.com/photo-1644246905181-c3753e9a82bd?q=75&fm=jpg&w=1080&fit=max';

interface CustomInfoWindowProps {
  anchor?:
    | google.maps.marker.AdvancedMarkerElement
    | google.maps.Marker
    | null
    | undefined;
  onClose?: (() => void) | undefined;
  markerInfo: GooglePlace;
}

const CustomInfoWindow: React.FC<CustomInfoWindowProps> = ({
  anchor,
  onClose,
  markerInfo,
}) => {
  return (
    <InfoWindow
      anchor={anchor}
      onClose={onClose}
      style={{
        width: '250px',
        height: '75px',
        position: 'relative',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'end',
      }}
    >
      <div className="flex justify-between">
        <div>
          <h2 className="text-2xl font-semibold leading-none tracking-tight mb-5">
            {markerInfo.displayName.text}
          </h2>
          <div className="flex content-center gap-2">
            <InfoIcon />
            <Link
              href={markerInfo.googleMapsUri}
              target="_blank"
              className="text-sm"
            >
              View More Info
            </Link>
          </div>
        </div>
        <div className="grid grid-cols-2 gap-4">
          <div>
            <Accessibility />
          </div>
          <div>
            <Plug />
          </div>
          <div>
            <Truck />
          </div>
          <div>
            <Store />
          </div>
        </div>
      </div>
    </InfoWindow>
  );
};

export default CustomInfoWindow;
