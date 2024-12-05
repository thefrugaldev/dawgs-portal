import { Place } from '@/types/place';
import {
  APILoadingStatus,
  useApiLoadingStatus,
  useMap,
  useMapsLibrary,
} from '@vis.gl/react-google-maps';
import React, { useCallback, useEffect, useState } from 'react';
import SearchResultCard from './search-result-card';
import { IGasStation } from '@/models/gas-station';

interface SearchResultCardContainerProps {
  gasStations: IGasStation[];
}

const SearchResultCardContainer = ({
  gasStations,
}: SearchResultCardContainerProps) => {
  // const map = useMap();
  // const placesLib = useMapsLibrary('places');
  // const status = useApiLoadingStatus();

  // const [results, setResults] = useState<Place[]>([]);

  // const getPlaces = useCallback(async () => {
  //   if (!placesLib || !map) return;

  //   const svc = new placesLib.PlacesService(map);

  //   svc.nearbySearch(
  //     { bounds: map.getBounds(), type: 'gas_station' },
  //     (places) => {
  //       if (!places) return;

  //       places.map((place) => {
  //         if (!place || !place.place_id) return;

  //         svc.getDetails({ placeId: place.place_id }, (place) => {
  //           if (!place) return;
  //           // console.log('Details: ', place);

  //           const mappedPlace: Place = {
  //             id: `${place.place_id!}${place.name}`,
  //             name: place.name,
  //             address: place.vicinity,
  //             rating: place.rating,
  //             phone: place.formatted_phone_number,
  //             website: place.website,
  //             isOpen: place.opening_hours?.isOpen(),
  //           };

  //           setResults((prev) => [...prev, mappedPlace]);
  //         });
  //       });
  //     },
  //   );
  // }, [map, placesLib]);

  // useEffect(() => {
  //   if (!placesLib || !map) return;

  //   getPlaces();
  // }, [placesLib, map, getPlaces]);

  // if (status === APILoadingStatus.FAILED) return <div>Error!</div>;

  // if (results.length === 0) return <div>Loading</div>;

  return gasStations.map((station) => (
    <SearchResultCard key={station._id} gasStation={station} />
  ));
};

export default SearchResultCardContainer;
