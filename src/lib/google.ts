import { IGasStation } from '@/models/gas-station';
import { GooglePlace } from '@/types/google';
import { useMap, useMapsLibrary } from '@vis.gl/react-google-maps';

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

export const getPlaceId = async (gastStation: IGasStation) => {
  console.log('Selected Stations for Map: ', gastStation);

  // GET PLACE ID
  // if (!gastStation || !placesLib || !map) {
  //   console.warn(
  //     'Could not retrieve place id for gas station',
  //     gastStation,
  //     placesLib,
  //     map,
  //   );
  //   return;
  // }

  const svc = new google.maps.places.PlacesService(
    document.createElement('div'),
  );

  // const svc = new placesLib.PlacesService(map);

  svc.findPlaceFromQuery(
    {
      query: `${gastStation.stationName} ${gastStation.stationAddress}`,
      fields: ['name', 'place_id'],
    },
    (place) => {
      console.log('PLACE: ', place);

      if (place && place.length > 0) {
        return place[0].place_id;
      }
    },
  );

  return {};
};
