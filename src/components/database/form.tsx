'use client';
import React from 'react';
import { z } from 'zod';
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from '../ui/form';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { Input } from '../ui/input';
import { Button } from '../ui/button';
import GasInfoFormGroup from './form-groups/gas-info';
import AreaFormGroup from './form-groups/area';
import ECInfoFormGroup from './form-groups/ec-info';
import AmmenitiesInfoFormGroup from './form-groups/ammenities-info';

export const formSchema = z.object({
  _id: z.string(),
  stationName: z.string(),
  stationAddress: z.string(),
  lat: z.number(),
  long: z.number(),
  gasPumps: z.number(),
  dieselPumps: z.number(),
  ecLvl2: z.number(),
  ecFastDC: z.number(),
  dcfc: z.number(),
  ecCount: z.number(),
  chargeCapacity: z.number(),
  shopCount: z.number(),
  shopNames: z.string(),
  truckStop: z.boolean(),
  bathroomStallCount: z.number(),
  seatingAvailable: z.boolean(),
  greenspaceAvailable: z.boolean(),
  dailyCustomers: z.number(),
  imageLink: z.string(),
  notes: z.string(),
});

const DatabaseForm = () => {
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
  });

  return (
    <Form {...form}>
      <form
        onSubmit={form.handleSubmit((data) =>
          console.log('Submitting form: ', data),
        )}
        className="space-y-2"
      >
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
        <Button type="submit">Submit</Button>
      </form>
    </Form>
  );
};

export default DatabaseForm;
