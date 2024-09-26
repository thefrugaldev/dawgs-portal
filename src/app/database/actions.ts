'use server';

import GasStation from '../../models/gas-station';

const getGasStations = async () => {
  const gasStations = await GasStation.find();
  return gasStations;
};

export { getGasStations };
