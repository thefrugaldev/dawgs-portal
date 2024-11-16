'use server';

import connectToDatabase from '@/lib/db';
import GasStation, { IGasStation } from '../models/gas-station';

const addGasStation = async (gasStation: IGasStation) => {
  await connectToDatabase();

  const gasStations = await GasStation.create(gasStation);
  return gasStations;
};

export { addGasStation };
