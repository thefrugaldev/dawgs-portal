import { GooglePlace } from '@/types/google';
import React from 'react';
import MarkerWithWindowInfo from '../google-maps/marker-with-window-info';

interface SearchResultsProps {
  searchResults?: GooglePlace[];
}

const SearchResults: React.FC<SearchResultsProps> = ({ searchResults }) => {
  if (!searchResults) return <></>;

  console.log();

  return searchResults?.map((r) => (
    <MarkerWithWindowInfo
      key={r.id}
      position={{ lat: r.location.latitude, lng: r.location.longitude }}
      markerInfo={r}
    />
  ));
};

export default SearchResults;
