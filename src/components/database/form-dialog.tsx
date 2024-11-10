import React from 'react';
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from '../ui/dialog';
import { Button } from '../ui/button';

import DatabaseForm from './form';
import { ScrollArea } from '../ui/scroll-area';

const DatabaseFormDialog = () => {
  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button>Add Gas Station</Button>
      </DialogTrigger>
      <ScrollArea>
        <DialogContent>
          <DialogHeader>
            <DialogTitle>Add new Gas Station</DialogTitle>
            <DialogDescription>
              Fill in the form below to save a new gas station to the database
            </DialogDescription>
          </DialogHeader>
          <DatabaseForm />
          <DialogFooter>
            <Button type="submit">Save changes</Button>
          </DialogFooter>
        </DialogContent>
      </ScrollArea>
    </Dialog>
  );
};

export default DatabaseFormDialog;
