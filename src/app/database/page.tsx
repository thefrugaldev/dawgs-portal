import { Input } from '@/components/ui/input';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select';
import React from 'react';
import { DownloadButton } from '@/components/ui/download';
import DatabaseFormDialog from '@/components/database/form-dialog';
import {
  dehydrate,
  HydrationBoundary,
  QueryClient,
} from '@tanstack/react-query';
import Table from './table';

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
      <div className="p-5">
        <div className="flex gap-2 mx-2 my-5">
          <Input
            type="text"
            className="max-w-sm"
            placeholder="Find a Gas Station..."
          />
          <Select>
            <SelectTrigger className="w-[280px]">
              <SelectValue placeholder="Sort" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="name">Station Name</SelectItem>
              <SelectItem value="address">Address</SelectItem>
              <SelectItem value="pumps">Number of Pumps</SelectItem>
              <SelectItem value="charge">Charge Capacity</SelectItem>
            </SelectContent>
          </Select>
          <DatabaseFormDialog />
          <DownloadButton />
        </div>
        <Table />
      </div>
    </HydrationBoundary>
  );
}
