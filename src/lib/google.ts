export const searchAlongRoute = async (textQuery: string, polyline: string) => {
  console.log('Searching along polyline: ', polyline);

  const res = await fetch(
    'https://places.googleapis.com/v1/places:searchText',
    {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'X-Goog-Api-Key': `${process.env.NEXT_PUBLIC_GOOGLE_API_KEY}`,
        'X-Goog-FieldMask':
          'places.displayName,places.formattedAddress,places.priceLevel',
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
};
