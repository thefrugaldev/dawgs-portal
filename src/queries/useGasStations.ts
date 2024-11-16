'use client';
import { useQuery } from '@tanstack/react-query';

const useGasStations = () => {
  return useQuery({
    queryKey: ['gasStations'],
    queryFn: async () => {
      console.log('Searching for gas stations');

      const res = await fetch('/api/database/gas-stations');
      if (!res.ok) {
        throw new Error('Network response was not ok');
      }

      const data = res.json();
      return data;
    },
  });
};

export default useGasStations;
