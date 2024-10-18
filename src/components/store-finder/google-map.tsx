'use client';

import { searchAlongRoute } from '@/lib/google';
import { Map, useMap, useMapsLibrary } from '@vis.gl/react-google-maps';
import {} from '@vis.gl/react-google-maps';
import React, { useCallback, useEffect, useState } from 'react';
import { Polyline } from '../google-maps/polyline';
import { GooglePlace } from '@/types/google';
import SearchResults from './search-results';

const GoogleMap = () => {
  const position = { lat: 34.3257, lng: -83.3557 };
  const map = useMap();
  const routesLib = useMapsLibrary('routes');
  const [route, setRoute] = useState<any>([]);
  const [searchResults, setSearchResults] = useState<GooglePlace[]>();
  const [polyline, setPolyline] = useState<string>('');

  const search = useCallback(async (polyline: string) => {
    const { places } = (await searchAlongRoute(
      'Gas Stations',
      polyline,
    )) as any;
    setSearchResults(places);
  }, []);

  useEffect(() => {
    if (route.length > 0 && route[0].overview_polyline) {
      setPolyline(route[0].overview_polyline);
      search(route[0].overview_polyline);
    }
  }, [route, search]);

  useEffect(() => {
    if (!routesLib || !map) return;

    const fetchRoute = async () => {
      const route = await new routesLib.DirectionsService().route({
        origin: '5636 Hwy 53, Braselton, GA 30517',
        destination: '200 W Fairplay Blvd, Fair Play, SC 29643',
        travelMode: 'DRIVING' as any,
      });

      setRoute(route.routes);
    };

    fetchRoute();
  }, [routesLib, map]);

  return (
    <Map
      mapId={process.env.NEXT_PUBLIC_GOOGLE_MAPS_ID}
      defaultCenter={position}
      defaultZoom={10}
    >
      <Polyline
        encodedPath={polyline}
        strokeWeight={10}
        strokeColor={'#0f53ff'}
      />

      <SearchResults searchResults={searchResults} />
    </Map>
  );
};

export default GoogleMap;
