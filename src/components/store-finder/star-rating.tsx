import { Star, StarHalf } from 'lucide-react';
import React from 'react';

const StarRating = () => {
  return (
    <div className="relative">
      <div className="flex gap-1">
        {Array.from({ length: 5 }, (e, i) => (
          <Star key={i} fill="#111" strokeWidth={0} />
        ))}
      </div>
      <div className="flex gap-1 absolute top-0">
        <Star fill="yellow" strokeWidth={0} />
        <Star fill="yellow" strokeWidth={0} />
        <StarHalf fill="yellow" strokeWidth={0} />
      </div>
    </div>
  );
};

export default StarRating;
