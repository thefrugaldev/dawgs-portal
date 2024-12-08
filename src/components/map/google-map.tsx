'use client';

import { Map, useMap, useMapsLibrary } from '@vis.gl/react-google-maps';
import {} from '@vis.gl/react-google-maps';
import React, { useEffect, useState } from 'react';
import { IGasStation } from '@/models/gas-station';
import CustomAdvancedMarker from './custom-marker/custom-marker';

interface GoogleMapProps {
  selectedGasStations: IGasStation[];
}

const GoogleMap = ({ selectedGasStations }: GoogleMapProps) => {
  const [placeId, setPlaceId] = useState<string>();

  const position = { lat: 34.3257, lng: -83.3557 };
  const map = useMap();
  const placesLib = useMapsLibrary('places');

  console.log('Selected Stations for Map: ', selectedGasStations);

  // GET PLACE ID
  // useEffect(() => {
  //   if (!selectedGasStations ||  || !placesLib || !map) {
  //     console.warn('Could not retrieve place id for gas station');
  //     return;
  //   }

  //   const svc = new placesLib.PlacesService(map);

  //   svc.findPlaceFromQuery(
  //     {
  //       query: `${selectedGasStation.stationName} ${selectedGasStation.stationAddress}`,
  //       fields: ['name', 'place_id'],
  //     },
  //     (place) => {
  //       if (place && place.length > 0) {
  //         setPlaceId(place[0].place_id);
  //       }
  //       console.log('Found a place: ', place);
  //       // setPlaceId(place.place+)
  //     },
  //   );
  // }, [map, placesLib, selectedGasStation]);

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
      {selectedGasStations?.length > 0 &&
        selectedGasStations.map((station) => (
          <CustomAdvancedMarker gasStation={station} placeId={placeId} />
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
