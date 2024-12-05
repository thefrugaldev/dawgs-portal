import React, { useEffect, useState } from 'react';
import SearchInput from './search-input';
import SearchResultCardContainer from './search-result-card-container';
import useGasStations from '@/queries/useGasStations';
import SkeletonCard from './skeleton-card';

const NUMBER_OF_STATIONS_TO_SHOW = 15;

const StoreFinder = () => {
  const [search, setSearch] = useState<string | undefined>(undefined);
  const { data, isLoading } = useGasStations({
    limit: NUMBER_OF_STATIONS_TO_SHOW,
    searchQuery: search,
  });

  const handleSearch = (input: string) => {
    setSearch(input);
  };

  useEffect(() => {
    console.log('New Data Back!', data);
  }, [data]);

  return (
    <div className="flex flex-col items-center gap-3 p-6">
      <SearchInput onSearch={handleSearch} />
      {isLoading ? (
        <SkeletonCard count={NUMBER_OF_STATIONS_TO_SHOW} />
      ) : (
        <SearchResultCardContainer gasStations={data} />
      )}
    </div>
  );
};

export default StoreFinder;
