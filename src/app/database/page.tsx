import React from 'react';
import {
  dehydrate,
  HydrationBoundary,
  QueryClient,
} from '@tanstack/react-query';
import DatabaseContainer from '@/components/database/database-container';

export default async function App() {
  const queryClient = new QueryClient();

  await queryClient.prefetchQuery({
    queryKey: ['gasStations'],
    queryFn: async () => {
      console.log('Searching for gas stations');

      const res = await fetch('/api/database/gas-stations');
      if (!res.ok) {
        throw new Error('Network response was not ok');
      }

      const json = await res.json();

      return json;
    },
  });

  return (
    <HydrationBoundary state={dehydrate(queryClient)}>
      <DatabaseContainer />
    </HydrationBoundary>
  );
}
