import { IGasStation } from '@/models/gas-station';
import React from 'react';

interface StationDetailsProps {
  gasStation: IGasStation;
}

const StationDetails = ({ gasStation }: StationDetailsProps) => {
  return (
    <div>
      <p>These will be the gas station details</p>
    </div>
  );
};

export default StationDetails;
