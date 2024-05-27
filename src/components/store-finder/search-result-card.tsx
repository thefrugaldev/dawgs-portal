// TODO: remove useState and client directive
'use client';
import React, { FC, useState } from 'react';
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from '../ui/card';
import { Fuel, Heart, Info } from 'lucide-react';
import StarRating from './star-rating';
import { Place } from '@/types/place';
import Link from 'next/link';

const SearchResultCard = ({ result }: { result: Place }) => {
  const [favorite, setFavorite] = useState<boolean>(false);
  const { name, address, rating, phone, website, isOpen } = result;

  return (
    <Card className="w-full border-glory">
      <CardHeader>
        <div className="flex items-center justify-between">
          <CardTitle>{name}</CardTitle>

          <div className="flex items-center gap-1">
            <Heart
              fill={`${favorite ? 'red' : 'none'}`}
              stroke={`${favorite ? 'red' : 'black'}`}
              className="cursor-pointer"
              onClick={() => setFavorite(!favorite)}
            />
            <Info className="cursor-pointer" />
          </div>
        </div>
        <StarRating rating={rating ?? 0} />
      </CardHeader>
      <CardContent>
        <p className="text-sm text-muted-foreground">{address}</p>
        <p className="text-sm text-muted-foreground">
          {isOpen ? 'Open' : 'Closed'}
        </p>
        <p className="text-sm text-muted-foreground">{phone}</p>
        {website && (
          <div className="flex content-center gap-2">
            <Fuel />
            <Link href={website} className="text-sm">
              Website {'>>'}
            </Link>
            {/* <span className="self-center">$3.25/Regular*</span> */}
          </div>
        )}
      </CardContent>
    </Card>
  );
};

export default SearchResultCard;
