'use client';
import { useQuery } from '@tanstack/react-query';

export interface QueryParams {
  limit?: number;
  searchQuery?: string;
}

const createQueryString = (params: QueryParams | undefined): string => {
  if (!params) {
    return '';
  }

  // Filter out undefined or null values
  const queryString = Object.entries(params)
    // eslint-disable-next-line no-unused-vars
    .filter(([_, value]) => value !== undefined && value !== null) // Exclude undefined and null
    .map(
      ([key, value]) =>
        `${encodeURIComponent(key)}=${encodeURIComponent(String(value))}`,
    ) // Encode key and value
    .join('&'); // Join with '&'

  return queryString;
};

const useGasStations = (queryParams?: QueryParams) => {
  return useQuery({
    queryKey: ['gasStations', queryParams],
    queryFn: async () => {
      const queryString = createQueryString(queryParams);

      let url = '/api/database/gas-stations';

      if (queryString) {
        url = `${url}?${queryString}`;
      }

      console.log('Searching for gas stations: ', url);

      const res = await fetch(url);
      if (!res.ok) {
        throw new Error('Network response was not ok');
      }

      const data = res.json();
      return data;
    },
  });
};

export default useGasStations;
