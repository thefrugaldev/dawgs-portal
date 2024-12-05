'use client';
import React, { useEffect, useState } from 'react';
import { Input } from '../ui/input';
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
