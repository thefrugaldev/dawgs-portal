'use client';
import React, { useEffect, useState } from 'react';
import { Input } from '../ui/input';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@radix-ui/react-select';
import DatabaseFormDialog from './form-dialog';
import { DownloadButton } from '../ui/download';
import { IGasStation } from '@/models/gas-station';
import Table from '@/app/database/table';

const DatabaseContainer = () => {
  const [selectedGasStation, setSelectedGasStation] = useState<IGasStation>();
  const [modalOpen, setModalOpen] = useState<boolean>(false);

  const handleOpenChange = (open: boolean) => {
    setSelectedGasStation(undefined);
    setModalOpen(open);
  };

  useEffect(() => {
    !!selectedGasStation && setModalOpen(true);
  }, [selectedGasStation]);

  return (
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
        <DatabaseFormDialog
          isOpen={modalOpen}
          onOpenChange={handleOpenChange}
          selectedGasStation={selectedGasStation}
        />
        <DownloadButton />
      </div>
      <Table onRowClick={setSelectedGasStation} />
    </div>
  );
};

export default DatabaseContainer;
