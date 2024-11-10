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

const ECInfoFormGroup = () => {
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
  });

  return (
    <div className="grid grid-cols-4 gap-2">
      <FormField
        control={form.control}
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
        control={form.control}
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
        control={form.control}
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
        control={form.control}
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
