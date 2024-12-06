'use client';

import {
  Map,
  useApiLoadingStatus,
  useMap,
  useMapsLibrary,
} from '@vis.gl/react-google-maps';
import {} from '@vis.gl/react-google-maps';
import React from 'react';
import { IGasStation } from '@/models/gas-station';
import CustomAdvancedMarker from './custom-marker/custom-marker';

interface GoogleMapProps {
  selectedGasStation?: IGasStation;
}

const GoogleMap = ({ selectedGasStation }: GoogleMapProps) => {
  const position = { lat: 34.3257, lng: -83.3557 };
  // const map = useMap();
  // const placesLib = useMapsLibrary('places');
  // const status = useApiLoadingStatus();

  console.log('Selected Station for Map: ', selectedGasStation);

  // const routesLib = useMapsLibrary('routes');
  // const [route, setRoute] = useState<any>([]);
  // // const [searchResults, setSearchResults] = useState<GooglePlace[]>();
  // const [polyline, setPolyline] = useState<string>('');

  // const search = useCallback(async (polyline: string) => {
  //   const { places } = (await searchAlongRoute(
  //     'Gas Stations',
  //     polyline,
  //   )) as any;
  //   setSearchResults(places);
  // }, []);

  // useEffect(() => {
  //   if (route.length > 0 && route[0].overview_polyline) {
  //     setPolyline(route[0].overview_polyline);
  //     search(route[0].overview_polyline);
  //   }
  // }, [route, search]);

  // useEffect(() => {
  //   if (!routesLib || !map) return;

  //   const fetchRoute = async () => {
  //     const route = await new routesLib.DirectionsService().route({
  //       origin: '30769 US-441, Commerce, GA 30529',
  //       destination: '13 Lakeside Cir, Fair Play, SC 29643',
  //       travelMode: 'DRIVING' as any,
  //     });

  //     setRoute(route.routes);
  //   };

  //   fetchRoute();
  // }, [routesLib, map]);

  return (
    <Map
      mapId={process.env.NEXT_PUBLIC_GOOGLE_MAPS_ID}
      defaultCenter={position}
      defaultZoom={10}
      gestureHandling={'greedy'}
      disableDefaultUI
    >
      {selectedGasStation && (
        <CustomAdvancedMarker gasStation={selectedGasStation} />
      )}
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
