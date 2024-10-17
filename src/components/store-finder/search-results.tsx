import { GooglePlace } from '@/types/google';
import { Marker } from '@vis.gl/react-google-maps';
import React from 'react';

interface SearchResultsProps {
  searchResults?: GooglePlace[];
}

const SearchResults: React.FC<SearchResultsProps> = ({ searchResults }) => {
  if (!searchResults) return <></>;

  console.log();

  return searchResults?.map((r) => (
    <Marker
      key={r.id}
      position={{ lat: r.location.latitude, lng: r.location.longitude }}
    />
  ));
};

export default SearchResults;
