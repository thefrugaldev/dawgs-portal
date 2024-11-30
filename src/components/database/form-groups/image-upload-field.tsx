import { Button } from '@/components/ui/button';
import {
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from '@/components/ui/form';
import { Input } from '@/components/ui/input';
import { Loader2 } from 'lucide-react';
import React, { ChangeEvent, useState } from 'react';
import { useFormContext } from 'react-hook-form';

const ImageUploadField = () => {
  const { control, setValue } = useFormContext();
  const [uploading, setUploading] = useState<boolean>(false);
  const [uploaded, setUploaded] = useState<boolean>(false);

  const uploadImage = async (e: ChangeEvent<HTMLInputElement>) => {
    const files = e.target.files;
    if (!files) {
      return;
    }

    const file = files[0];
    if (!file) {
      return;
    }

    setUploading(true);

    const response = await fetch('/api/aws/upload', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ filename: file.name, contentType: file.type }),
    });

    if (response.ok) {
      const { url, fields } = await response.json();
      const { key } = fields;

      console.log('image uploaded: ', url, key);

      const formData = new FormData();
      Object.entries(fields).forEach(([key, value]) => {
        formData.append(key, value as string);
      });
      formData.append('file', file);

      const uploadResponse = await fetch(url, {
        method: 'POST',
        body: formData,
      });

      console.log('image uploaded: ', uploadResponse);

      if (uploadResponse.ok) {
        const imgLink = `${url}${key}`;
        setValue('imageLink', imgLink);
        setUploaded(true);
      } else {
        console.error('S3 Upload Error:', uploadResponse);
        alert('Upload failed.');
        setUploaded(false);
      }
    } else {
      alert('Failed to get pre-signed URL.');
    }

    setUploading(false);
  };

  return (
    <FormField
      control={control}
      name="imageLink"
      // eslint-disable-next-line no-unused-vars
      render={({ field }) => (
        <FormItem>
          <FormLabel>Upload Image</FormLabel>
          <FormControl>
            {uploading ? (
              <Button disabled>
                <Loader2 className="animate-spin" />
                Uploading...
              </Button>
            ) : (
              <Input
                id="picture"
                onChange={(e) => uploadImage(e)}
                type="file"
                disabled={uploaded}
              />
            )}
          </FormControl>
          <FormMessage />
        </FormItem>
      )}
    />
  );
};

export default ImageUploadField;
