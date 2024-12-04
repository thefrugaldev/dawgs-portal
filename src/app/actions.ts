'use server';

import connectToDatabase from '@/lib/db';
import GasStation, { IGasStation } from '../models/gas-station';

const addGasStation = async (gasStation: IGasStation) => {
  await connectToDatabase();

  const { _id } = gasStation;

  await GasStation.findByIdAndUpdate(_id, gasStation, { upsert: true });
};

export { addGasStation };
