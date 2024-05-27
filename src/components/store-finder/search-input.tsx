'use client';

import React, { useEffect, useRef, useState } from 'react';
import { Input } from '../ui/input';
import { Button } from '../ui/button';
import { Search } from 'lucide-react';
import { useMap, useMapsLibrary } from '@vis.gl/react-google-maps';

export interface SearchResult {
  name: string;
  address: string;
}

const SearchInput = () => {
  // const map = useMap();
  // const placesLib = useMapsLibrary('places');
  // const [query, setQuery] = useState<string>('');

  // const searchNearby = async () => {
  //   console.log('Search Query: ', query);

  //   if (!placesLib || !map) return;
  //   const svc = new placesLib.AutocompleteService();

  //   const bounds = map.getBounds();

  //   const places = await svc.getPlacePredictions({
  //     input: query,
  //     locationRestriction: bounds,
  //     types: ['gas_station'],
  //   });

  //   places.predictions.map<SearchResult>((place) => ({
  //     name: place.structured_formatting.main_text,
  //     address: place.structured_formatting.secondary_text,
  //   }));

  //   console.log(places);
  // };

  return (
    <>
      <div className="flex w-full max-w-sm items-center space-x-2">
        <Input
          type="text"
          placeholder="Find Gas Station"
          // value={query}
          // onChange={(e) => setQuery(e.target.value)}
        />

        <Button
          type="submit"
          // onClick={searchNearby}
        >
          <Search />
        </Button>
      </div>
    </>
  );
};

export default SearchInput;
