'use client';
import React, { useEffect } from 'react';
import { z } from 'zod';

import { v4 as uuidv4 } from 'uuid';
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from '../ui/form';
import { FormProvider, useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { Input } from '../ui/input';
import GasInfoFormGroup from './form-groups/gas-info';
import AreaFormGroup from './form-groups/area';
import ECInfoFormGroup from './form-groups/ec-info';
import AmmenitiesInfoFormGroup from './form-groups/ammenities-info';
import { DialogFooter } from '../ui/dialog';
import { Button } from '../ui/button';

export const formSchema = z.object({
  _id: z.string(),
  stationName: z.string(),
  stationAddress: z.string(),
  lat: z.string(),
  long: z.string(),
  gasPumps: z.coerce.number(),
  dieselPumps: z.coerce.number(),
  ecLvl2: z.coerce.number(),
  ecFastDC: z.coerce.number(),
  dcfc: z.coerce.number(),
  ecCount: z.coerce.number(),
  chargeCapacity: z.coerce.number(),
  shopCount: z.coerce.number(),
  shopNames: z.string(),
  truckStop: z.boolean(),
  bathroomStallCount: z.coerce.number(),
  seatingAvailable: z.boolean(),
  greenspaceAvailable: z.boolean(),
  dailyCustomers: z.coerce.number(),
  imageLink: z.string(),
  notes: z.string(),
});

const DatabaseForm = () => {
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      _id: uuidv4(),
      stationName: '',
      stationAddress: '',
      lat: '',
      long: '',
      gasPumps: 0,
      dieselPumps: 0,
      ecLvl2: 0,
      ecFastDC: 0,
      dcfc: 0,
      ecCount: 0,
      chargeCapacity: 0,
      shopCount: 0,
      shopNames: '',
      truckStop: true,
      bathroomStallCount: 0,
      seatingAvailable: true,
      greenspaceAvailable: true,
      dailyCustomers: 0,
      imageLink: '',
      notes: '',
    },
  });

  useEffect(() => {
    console.log(
      'ERRORS',

      form.formState.errors,
    );
  }, [form.formState.errors]);

  const onSubmit = (values: z.infer<typeof formSchema>) => {
    // Do something with the form values.
    // ✅ This will be type-safe and validated.
    console.log(values);
  };

  return (
    <FormProvider {...form}>
      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
          <FormField
            control={form.control}
            name="stationName"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Station Name</FormLabel>
                <FormControl>
                  <Input {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          <FormField
            control={form.control}
            name="stationAddress"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Station Address</FormLabel>
                <FormControl>
                  <Input {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <AreaFormGroup />
          <GasInfoFormGroup />
          <ECInfoFormGroup />
          <AmmenitiesInfoFormGroup />

          <DialogFooter>
            <Button type="submit">Save changes</Button>
          </DialogFooter>
          {/* <Button type="submit">Submit</Button> */}
        </form>
      </Form>
    </FormProvider>
  );
};

export default DatabaseForm;
