import { IGasStation } from '@/models/gas-station';
import { GooglePlace } from '@/types/google';

export const searchAlongRoute = async (
  textQuery: string,
  polyline: string,
): Promise<GooglePlace[]> => {
  const res = await fetch(
    'https://places.googleapis.com/v1/places:searchText',
    {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'X-Goog-Api-Key': `${process.env.NEXT_PUBLIC_GOOGLE_API_KEY}`,
        'X-Goog-FieldMask':
          // '*',
          'places.id,places.displayName,places.formattedAddress,places.location,places.evChargeOptions,places.fuelOptions,places.accessibilityOptions,places.googleMapsUri',
      },
      body: JSON.stringify({
        textQuery: textQuery,
        searchAlongRouteParameters: {
          polyline: {
            encodedPolyline: polyline,
          },
        },
      }),
    },
  );

  const json = await res.json();
  console.log('RESPONSE: ', json);

  return json;
};

function findPlaceFromQueryAsync(
  googleMapsService: google.maps.places.PlacesService,
  request: google.maps.places.FindPlaceFromQueryRequest,
) {
  return new Promise((resolve, reject) => {
    googleMapsService.findPlaceFromQuery(request, (results, status) => {
      if (status === google.maps.places.PlacesServiceStatus.OK) {
        resolve(results);
      } else {
        reject(`Error: ${status}`);
      }
    });
  });
}

export async function callFindPlaceFromQuery(gastStation: IGasStation) {
  try {
    const googleMapsService = new google.maps.places.PlacesService(
      document.createElement('div'),
    );
    const request = {
      query: `${gastStation.stationName} ${gastStation.stationAddress}`,
      fields: ['name', 'place_id'],
    };

    // Wait for the callback to complete
    const places = (await findPlaceFromQueryAsync(
      googleMapsService,
      request,
    )) as google.maps.places.PlaceResult[];

    // Proceed with the results
    console.log('Place results:', places);

    if (places && places.length > 0) {
      return places[0].place_id;
    }

    return places;

    // Perform further operations here
  } catch (error) {
    console.error(error);
  }
}
