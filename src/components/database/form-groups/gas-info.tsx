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

const GasInfoFormGroup = () => {
  const { control } = useFormContext();

  return (
    <div className="grid grid-cols-3 gap-1">
      <FormField
        control={control}
        name="gasPumps"
        render={({ field }) => (
          <FormItem>
            <FormLabel>Gas Pumps</FormLabel>
            <FormControl>
              <Input type="number" {...field} />
            </FormControl>
            <FormMessage />
          </FormItem>
        )}
      />
      <FormField
        control={control}
        name="dieselPumps"
        render={({ field }) => (
          <FormItem>
            <FormLabel>Diesel Pumps</FormLabel>
            <FormControl>
              <Input type="number" {...field} />
            </FormControl>
            <FormMessage />
          </FormItem>
        )}
      />
      <FormField
        control={control}
        name="ecCount"
        render={({ field }) => (
          <FormItem>
            <FormLabel>EC Stations</FormLabel>
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

export default GasInfoFormGroup;
