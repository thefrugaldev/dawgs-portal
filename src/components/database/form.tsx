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
import useGasStations from '@/queries/useGasStations';
import { addGasStation } from '@/app/actions';
import { useRouter } from 'next/navigation';
import { IGasStation } from '@/models/gas-station';
import { useUser } from '@auth0/nextjs-auth0/client';
import { getPlaceId } from '@/lib/google';
import { useMap, useMapsLibrary } from '@vis.gl/react-google-maps';

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
  createdDate: z.date(),
  updatedBy: z.string(),
  googleLink: z.string().optional(),
});

interface DatabaseFormProps {
  onFormSubmit: () => void;
  selectedGasStation?: IGasStation;
}

const DatabaseForm = ({
  onFormSubmit,
  selectedGasStation,
}: DatabaseFormProps) => {
  const { refetch } = useGasStations();
  const router = useRouter();
  const { user } = useUser();
  const map = useMap(process.env.NEXT_PUBLIC_GOOGLE_API_KEY);
  const placesLib = useMapsLibrary('places');

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: selectedGasStation
      ? {
          ...selectedGasStation,
          updatedBy: user?.email!,
          createdDate: new Date(),
        }
      : {
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
          createdDate: new Date(),
          updatedBy: user?.email!,
          googleLink: '',
        },
  });

  useEffect(() => {
    console.log('Map: ', map, placesLib);
  }, [map, placesLib]);

  useEffect(() => {
    console.log(
      'ERRORS',

      form.formState.errors,
    );
  }, [form.formState.errors]);

  const onSubmit = async (values: z.infer<typeof formSchema>) => {
    const {
      formState: { errors },
    } = form;
    if (Object.keys(errors).length) {
      console.error(errors);

      return;
    }

    const placeId = await getPlaceId(values);

    let googleLink = `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(
      values.stationAddress,
    )}`;

    if (placeId) {
      console.log('Adding place id: ', placeId);

      googleLink = `${googleLink}&query_place_id=${placeId}`;
    }

    values = {
      ...values,
      googleLink,
    };

    console.log('Google Link: ', googleLink);

    console.log('No errors, creating gas station.', values);
    await addGasStation(values);
    refetch();
    router.refresh();
    onFormSubmit();
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
        </form>
      </Form>
    </FormProvider>
  );
};

export default DatabaseForm;
