import connectToDatabase from '@/lib/db';
import GasStation from '@/models/gas-station';

export async function GET() {
  await connectToDatabase();

  // console.log('LOOKING FOR GAS STATIONS');

  const gasStations = await GasStation.find();
  // const parsed = JSON.parse(JSON.stringify(gasStations));

  // console.log('GAS STATIONS', parsed);

  return Response.json(gasStations);
}
