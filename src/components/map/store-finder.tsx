import React, { useState } from 'react';
import SearchInput from './search-input';
import SearchResultCardContainer from './search-result-card-container';
import useGasStations from '@/queries/useGasStations';
import SkeletonCard from './skeleton-card';
import { IGasStation } from '@/models/gas-station';

const NUMBER_OF_STATIONS_TO_SHOW = 5;

interface StoreFinderProps {
  // eslint-disable-next-line no-unused-vars
  onStationSelect: (station: IGasStation) => void;
}

const StoreFinder = ({ onStationSelect }: StoreFinderProps) => {
  const [search, setSearch] = useState<string | undefined>(undefined);
  const { data, isLoading } = useGasStations({
    limit: NUMBER_OF_STATIONS_TO_SHOW,
    searchQuery: search,
  });

  const handleSearch = (input: string) => {
    setSearch(input);
  };

  return (
    <div className="flex flex-col items-center gap-3 p-6">
      <SearchInput onSearch={handleSearch} />
      <p className='text-sm italic'>By default, the 5 most recently edited stations are shown.</p>
      {isLoading ? (
        <SkeletonCard count={NUMBER_OF_STATIONS_TO_SHOW} />
      ) : (
        <SearchResultCardContainer
          onStationSelect={onStationSelect}
          gasStations={data}
        />
      )}
    </div>
  );
};

export default StoreFinder;
