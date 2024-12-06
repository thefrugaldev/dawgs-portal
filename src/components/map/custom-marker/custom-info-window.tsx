/* eslint-disable @next/next/no-img-element */
import { Card, CardContent, CardFooter } from '@/components/ui/card';
import { IGasStation } from '@/models/gas-station';
import { ExternalLink } from 'lucide-react';
import React from 'react';

interface CustomInfoWindowProps {
  open: boolean;
  gasStation: IGasStation;
  placeId?: string;
}

const CustomInfoWindow = ({
  open = false,
  gasStation,
  placeId,
}: CustomInfoWindowProps) => {
  const { imageLink, stationAddress, stationName, lat, long } = gasStation;

  return (
    <div className="relative inline-block">
      <Card
        //   ref={ref}
        className={`${
          open ? 'block' : 'hidden'
        } absolute bottom-2 -left-28 w-72 overflow-hidden bg-white shadow-[0_1px_3px_0_rgba(0,0,0,0.1),0_1px_2px_0_rgba(0,0,0,0.06)]`}
      >
        {imageLink && (
          <div className="w-full h-40 overflow-hidden">
            <img
              src={imageLink}
              alt={'Gas Station Photo'}
              className="w-full h-full object-cover"
            />
          </div>
        )}
        <CardContent className="p-4">
          <h2 className="text-lg font-semibold mb-2">{stationName}</h2>
          <p className="text-sm text-gray-600 mb-2">{stationAddress}</p>
          <p className="text-xs text-gray-500">
            {Number(lat).toFixed(6)}, {Number(long).toFixed(6)}
          </p>
        </CardContent>
        <CardFooter className="bg-gray-50 p-4">
          <a
            href={`https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(
              stationAddress,
            )}${placeId ? `&query_place_id=${placeId}` : ''}`}
            target="_blank"
            rel="noopener noreferrer"
            className="text-blue-600 hover:text-blue-800 text-sm font-medium flex items-center"
          >
            Find more information
            <ExternalLink size={16} className="ml-1" />
          </a>
        </CardFooter>
      </Card>
      <div
        className={`${
          open ? 'block' : 'hidden'
        } absolute left-4 -translate-x-1/2 bottom-2 translate-y-full`}
        style={{
          width: '20px',
          height: '10px',
        }}
      >
        <div
          className="w-0 h-0 border-l-[10px] border-r-[10px] border-l-transparent border-r-transparent"
          style={{
            borderTop: '10px solid white',
            filter: 'drop-shadow(0 1px 2px rgba(0,0,0,0.1))',
          }}
        />
      </div>
    </div>
  );
};

export default CustomInfoWindow;
