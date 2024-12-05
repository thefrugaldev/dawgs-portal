import React, { useEffect, useState } from 'react';
import SearchInput from './search-input';
import SearchResultCardContainer from './search-result-card-container';
import useGasStations from '@/queries/useGasStations';

const StoreFinder = () => {
  const [search, setSearch] = useState<string | undefined>(undefined);
  const { data } = useGasStations({ limit: 15, searchQuery: search });

  const handleSearch = (input: string) => {
    setSearch(input);
  };

  useEffect(() => {
    console.log('New Data Back!', data);
  }, [data]);

  return (
    <div className="flex flex-col items-center gap-3 p-5">
      <SearchInput onSearch={handleSearch} />
      <SearchResultCardContainer />
    </div>
  );
};

export default StoreFinder;
