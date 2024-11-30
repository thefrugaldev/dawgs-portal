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
import { Textarea } from '@/components/ui/textarea';
import { Switch } from '@/components/ui/switch';
import ImageUploadField from './image-upload-field';

const AmmenitiesInfoFormGroup = () => {
  const { control } = useFormContext();

  return (
    <>
      <div className="grid grid-cols-3 gap-2">
        <FormField
          control={control}
          name="shopCount"
          render={({ field }) => (
            <FormItem>
              <FormLabel># Shops</FormLabel>
              <FormControl>
                <Input type="number" {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={control}
          name="bathroomStallCount"
          render={({ field }) => (
            <FormItem>
              <FormLabel># Bathroom Stalls</FormLabel>
              <FormControl>
                <Input type="number" {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={control}
          name="dailyCustomers"
          render={({ field }) => (
            <FormItem>
              <FormLabel># Daily Customers</FormLabel>
              <FormControl>
                <Input type="number" {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
      </div>

      <div className="grid grid-cols-4 gap-2">
        <FormField
          control={control}
          name="truckStop"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Truck Stop?</FormLabel>
              <FormControl className="block">
                <Switch
                  checked={field.value}
                  onCheckedChange={field.onChange}
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={control}
          name="seatingAvailable"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Seating?</FormLabel>
              <FormControl className="block">
                <Switch
                  checked={field.value}
                  onCheckedChange={field.onChange}
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={control}
          name="greenspaceAvailable"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Greenspace?</FormLabel>
              <FormControl className="block">
                <Switch
                  checked={field.value}
                  onCheckedChange={field.onChange}
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <ImageUploadField />
      </div>

      <div>
        <FormField
          control={control}
          name="shopNames"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Shop Names</FormLabel>
              <FormControl>
                <Textarea
                  placeholder="List of shops near this gas station..."
                  {...field}
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={control}
          name="notes"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Additional Notes</FormLabel>
              <FormControl>
                <Textarea
                  placeholder="Provide any additional notes about this station here."
                  {...field}
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
      </div>
    </>
  );
};

export default AmmenitiesInfoFormGroup;
