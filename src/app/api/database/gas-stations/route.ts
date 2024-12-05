import connectToDatabase from '@/lib/db';
import GasStation from '@/models/gas-station';
import { NextRequest } from 'next/server';

export const dynamic = 'force-dynamic';

export async function GET(request: NextRequest) {
  await connectToDatabase();

  const params = request.nextUrl.searchParams;

  const limit = params.get('limit');
  const search = params.get('searchQuery');
  const queryOptions = {} as any;

  if (search) {
    // Add case-insensitive regex search
    queryOptions.stationName = { $regex: search, $options: 'i' };
  }

  const query = GasStation.find(queryOptions);

  if (limit && !Number.isNaN(limit)) {
    query.limit(Number(limit));
  }

  const gasStations = await query.sort({ createdDate: -1 }).exec();

  // const gasStations = await GasStation.find(queryOptions)
  //   .limit(100)
  //   .sort({ createdDate: -1 });
  // const parsed = JSON.parse(JSON.stringify(gasStations));

  // console.log('GAS STATIONS', gasStations.length);

  return Response.json(gasStations);
}
