import React from 'react';
import { useFormContext } from 'react-hook-form';

import {
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from '@/components/ui/form';
import { Input } from '@/components/ui/input';

const ECInfoFormGroup = () => {
  const { control } = useFormContext();

  return (
    <div className="grid grid-cols-4 gap-2">
      <FormField
        control={control}
        name="ecLvl2"
        render={({ field }) => (
          <FormItem>
            <FormLabel>EC - Lvl 2</FormLabel>
            <FormControl>
              <Input type="number" {...field} />
            </FormControl>
            <FormMessage />
          </FormItem>
        )}
      />
      <FormField
        control={control}
        name="ecFastDC"
        render={({ field }) => (
          <FormItem>
            <FormLabel>EC - Fast DC</FormLabel>
            <FormControl>
              <Input type="number" {...field} />
            </FormControl>
            <FormMessage />
          </FormItem>
        )}
      />
      <FormField
        control={control}
        name="dcfc"
        render={({ field }) => (
          <FormItem>
            <FormLabel>DCFC</FormLabel>
            <FormControl>
              <Input type="number" {...field} />
            </FormControl>
            <FormMessage />
          </FormItem>
        )}
      />
      <FormField
        control={control}
        name="chargeCapacity"
        render={({ field }) => (
          <FormItem>
            <FormLabel>Chg Capacity</FormLabel>
            <FormControl>
              <Input type="number" {...field} />
            </FormControl>
            <FormMessage />
          </FormItem>
        )}
      />
    </div>
  );
};

export default ECInfoFormGroup;
