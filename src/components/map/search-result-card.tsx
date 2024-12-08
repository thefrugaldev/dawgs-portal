// TODO: remove useState and client directive
'use client';
import React from 'react';
import { Card, CardHeader, CardTitle } from '../ui/card';
import { ExternalLink, MapPin } from 'lucide-react';
import { IGasStation } from '@/models/gas-station';
import { Button } from '../ui/button';

interface SearchResultCardProps {
  gasStation: IGasStation;
  onMapButtonClick: () => void;
}

const SearchResultCard = ({
  gasStation,
  onMapButtonClick,
}: SearchResultCardProps) => {
  // const [favorite, setFavorite] = useState<boolean>(false);
  // const { name, address, rating, phone, website, isOpen } = result;
  const { stationName, stationAddress, lat, long, googleLink } = gasStation;

  return (
    <Card className="w-full border-glory">
      <CardHeader>
        <div className="flex items-center justify-between">
          <CardTitle>{stationName}</CardTitle>
          <Button
            onClick={onMapButtonClick}
            className="bg-glory hover:bg-glory/90"
          >
            Show on map
            <MapPin />
          </Button>

          {/* <div className="flex items-center gap-1">
            <Heart
              fill={`${favorite ? 'red' : 'none'}`}
              stroke={`${favorite ? 'red' : 'black'}`}
              className="cursor-pointer"
              onClick={() => setFavorite(!favorite)}
            />
            <Info className="cursor-pointer" />
          </div> */}
        </div>
        {/* <StarRating rating={rating ?? 0} /> */}
        <p>
          <strong>Address: </strong>
          <span className="text-muted-foreground">{stationAddress}</span>
        </p>
        <p>
          <strong>Location: </strong>
          <span className="text-muted-foreground">
            {lat}, {long}
          </span>
        </p>

        {googleLink && (
          <p>
            <a
              href={googleLink}
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-600 hover:text-blue-800 text-sm font-medium flex items-center"
            >
              More information
              <ExternalLink size={16} className="ml-1" />
            </a>
          </p>
        )}
      </CardHeader>
      {/* <CardContent>
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
            <span className="self-center">$3.25/Regular*</span>
          </div>
        )}
      </CardContent> */}
    </Card>
  );
};

export default SearchResultCard;
