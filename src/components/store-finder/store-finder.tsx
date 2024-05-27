import React from 'react';
import SearchInput from './search-input';
import SearchResultCardContainer from './search-result-card-container';

const StoreFinder = () => {
  return (
    <div className="flex flex-col items-center gap-3 p-5">
      <SearchInput />
      <SearchResultCardContainer />
    </div>
  );
};

export default StoreFinder;
