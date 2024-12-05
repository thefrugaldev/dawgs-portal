import React from 'react';
import { Skeleton } from '../ui/skeleton';

const SkeletonCard = ({ count }: { count: number }) => {
  return Array.from({ length: count }, (_, i) => (
    <div key={i} className="flex flex-col space-y-3 w-full">
      <Skeleton className="h-[125px] w-full rounded-xl bg-gray-200" />
      <div className="space-y-2">
        <Skeleton className="h-4 w-full bg-gray-200" />
        <Skeleton className="h-4 w-full bg-gray-200" />
      </div>
    </div>
  ));
};

export default SkeletonCard;
