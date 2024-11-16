'use server';

import connectToDatabase from '@/lib/db';
import GasStation, { IGasStation } from '../models/gas-station';

const addGasStation = async (gasStation: IGasStation) => {
  await connectToDatabase();

  await GasStation.create(gasStation);
};

export { addGasStation };
