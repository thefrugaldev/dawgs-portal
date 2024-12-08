'use client';

import React from 'react';
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from '../ui/dialog';
import { Button } from '../ui/button';

import DatabaseForm from './form';
import { ScrollArea } from '../ui/scroll-area';
import { IGasStation } from '@/models/gas-station';

interface DatabaseFormDialogProps {
  selectedGasStation?: IGasStation;
  // eslint-disable-next-line no-unused-vars
  onOpenChange: (open: boolean) => void;
  isOpen: boolean;
}

const DatabaseFormDialog = ({
  selectedGasStation,
  onOpenChange,
  isOpen,
}: DatabaseFormDialogProps) => {
  return (
    <Dialog open={isOpen} onOpenChange={onOpenChange}>
      <DialogTrigger asChild>
        <Button>Add Gas Station</Button>
      </DialogTrigger>
      <DialogContent className="h-full sm:max-w-2xl max-h-[96%] p-4">
        <ScrollArea className="px-4">
          <DialogHeader>
            <DialogTitle>Add new Gas Station</DialogTitle>
            <DialogDescription>
              Fill in the form below to save a new gas station to the database
            </DialogDescription>
          </DialogHeader>
          <DatabaseForm
            selectedGasStation={selectedGasStation}
            onFormSubmit={() => onOpenChange(false)}
          />
        </ScrollArea>
      </DialogContent>
    </Dialog>
  );
};

export default DatabaseFormDialog;
