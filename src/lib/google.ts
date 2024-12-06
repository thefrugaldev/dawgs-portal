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
