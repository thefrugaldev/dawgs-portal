import React from 'react';
import { useForm } from 'react-hook-form';
import { formSchema } from '../form';
import { zodResolver } from '@hookform/resolvers/zod';
import {
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from '@/components/ui/form';
import { Input } from '@/components/ui/input';
import { z } from 'zod';

const GasInfoFormGroup = () => {
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
  });

  return (
    <div className="grid grid-cols-3 gap-1">
      <FormField
        control={form.control}
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
        control={form.control}
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
        control={form.control}
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
