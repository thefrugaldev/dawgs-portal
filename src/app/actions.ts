'use server';

import connectToDatabase from '@/lib/db';
import GasStation from '../models/gas-station';

const getGasStations = async () => {
  await connectToDatabase();

  const gasStations = await GasStation.find();
  return gasStations;
};

export { getGasStations };
