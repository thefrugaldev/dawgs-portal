import React from 'react';
import SearchInput from './search-input';
import SearchResultCard from './search-result-card';

const StoreFinder = () => {
  return (
    <div className="flex flex-col items-center gap-3 p-5">
      <SearchInput />
      <SearchResultCard />
      <SearchResultCard />
      <SearchResultCard />
      <SearchResultCard />
    </div>
  );
};

export default StoreFinder;
