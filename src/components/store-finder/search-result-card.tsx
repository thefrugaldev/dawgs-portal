// TODO: remove useState and client directive
'use client';
import React, { useState } from 'react';
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

const SearchResultCard = () => {
  const [favorite, setFavorite] = useState<boolean>(false);

  return (
    <Card className="w-full border-glory">
      <CardHeader>
        <div className="flex items-center justify-between">
          <CardTitle>Citgo</CardTitle>

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
        <CardDescription>
          <StarRating />
        </CardDescription>
      </CardHeader>
      <CardContent>
        <p className="text-sm text-muted-foreground">314 5th St</p>
        <p className="text-sm text-muted-foreground">Open - Closes 11pm</p>
        <p className="text-sm text-muted-foreground">(706) 323-4005</p>
        <p className="text-sm text-muted-foreground flex content-center gap-2">
          <Fuel />
          <p className="self-center">$3.25/Regular*</p>
        </p>
      </CardContent>
    </Card>
  );
};

export default SearchResultCard;
