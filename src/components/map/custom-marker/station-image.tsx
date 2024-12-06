import Image from 'next/image';
import React from 'react';

interface StationImageProps {
  image: string;
  isExtended: boolean;
}

const StationImage = ({ image, isExtended = false }: StationImageProps) => {
  return (
    <div className={`photo-gallery ${isExtended ? 'extended' : ''}`}>
      <Image src={image} width={50} height={50} alt="Gas Station Image Photo" />
    </div>
  );
};

export default StationImage;
