'use client';

import { Map, useMap, useMapsLibrary } from '@vis.gl/react-google-maps';
import React, { useCallback, useEffect, useState } from 'react';

const GoogleMap = () => {
  const position = { lat: 34.3257, lng: -83.3557 };
  const map = useMap();
  const routesLib = useMapsLibrary('routes');
  const [route, setRoute] = useState<any>([]);

  const getGoogle = useCallback(async () => {
    const { Place } = (await window.google.maps.importLibrary(
      'places',
    )) as google.maps.PlacesLibrary;
    // const { AdvancedMarkerElement } = await window.google.maps.importLibrary("marker") as google.maps.MarkerLibrary;
    const request = {
      textQuery: 'Tacos in Mountain View',
      searchAlongRouteParameters: {
        polyline: {
          encodedPolyline:
            'wblcFptchVIFOd@G@EVw@Ms@dHKR}ApNA`AF~@Hf@TjAb@bBb@~@n@p@^Rd@~@Vz@HVz@nDLt@?d@Kr@c@~@mD`G?`@aEfGkCnDuChDm`@bb@[`@{GhHeEdEciBnnBkC`DkC~DaClEuKjT_Z|l@Qb@iR~_@}EzJ_AdB_Und@kAfCaOjZkg@vcAqBzD_]rr@iBlEaBxEgArD}AlG}AhHsA`IeAnH{@dIq@dJgL~iBq@rHu@vGgAtHwArHaBhHkBzG_DpJ}Nbc@iBhGkA|EgC|LcIjb@oAhG_AvDgAdDkApC_BzCiBpCsFvGii@vn@scAxlAmLjNgSzUeRjT{TzWqExEmG|FuNlMmMhLaRvPqOlNmbAl}@mFlF{PlOmJfIoElE}LtMiSbU_H`I}}@jcAwl@vp@oAbBqA~BeAhCm@tBg@fCWrBQ~BI|DaB~rBO~D[bEa@`Dm@pDaAdE{@vC_BbEkB~Def@|z@sEzHKJeS~]}K`S{\\~l@cXpe@sBpDm@bAuCxDkBrBiC~BwCtByBnAcBx@}Bt@{Bn@gh@|LaOpDeFhAoDj@aE^kVrA_E^iEr@yD~@uBr@gMjF_EnAcCh@eFr@_DRsAD}@Jsu@xCWDqIV}BCeCOyDm@cBa@_DmA}JeE_CwAsBcBiBoBuAqBmOoX{CuEkB_CoDqDkVoUoD{CeE_DkEkC_FeCqB}@sDuAoDgAeCe@cCW}CK}BDaDTeOlBcuBrYaNlBq@Dyd@rGyFt@yBb@eBf@oCnAoBlAkIpGkAp@wBbAaCt@oFdAwKjBoGxA{FbByIjC_HfB_@KmNdDuC|@uFzBcH|C{@\\[?sBv@}@VaBVoA@y@EmAQcA[w@]aBkAeAkA}BuDUKs@uAqBsCwBcCgAiAiN_MyKsJsG{GkBaBiBuA{BwAwDkBcOaHiC_AiCg@}BQcCAcBHqBVkB`@qEjAu@LgCVgAHwG@sG?mABsH^eNr@mBXy@NqBt@uAt@aBlAkAlA}BtCyApBiAdB_BxB{A`B}@j@oAf@s@PeCVcIf@gAAkAQy@YiAo@_A{@_DgEgJqM_DeEaM}PoBiCzAsBw@kAdAGVk@f@q@z@C',
        },
      },
    };

    //@ts-ignore
    const { places } = await Place.searchByText(request);

    if (places.length) {
      console.log('PLACES: ', places);
    }
  }, []);

  useEffect(() => {
    getGoogle();
  }, [getGoogle]);

  useEffect(() => {
    if (!routesLib || !map) return;

    const fetchRoute = async () => {
      const route = await new routesLib.DirectionsService().route({
        origin: '5636 Hwy 53, Braselton, GA 30517',
        destination: '200 W Fairplay Blvd, Fair Play, SC 29643',
        travelMode: 'DRIVING' as any,
      });

      setRoute(route.routes);
    };

    fetchRoute();
  }, [routesLib, map]);

  return (
    <Map defaultCenter={position} defaultZoom={10}>
      {/* <Marker position={position} /> */}
    </Map>
  );
};

export default GoogleMap;
