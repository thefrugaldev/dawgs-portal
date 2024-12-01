import connectToDatabase from '@/lib/db';
import GasStation from '@/models/gas-station';

export const dynamic = 'force-dynamic';

export async function GET() {
  await connectToDatabase();

  // console.log('LOOKING FOR GAS STATIONS');

  const gasStations = await GasStation.find().sort({ createdDate: -1 });
  // const parsed = JSON.parse(JSON.stringify(gasStations));

  // console.log('GAS STATIONS', parsed);

  return Response.json(gasStations);
}
