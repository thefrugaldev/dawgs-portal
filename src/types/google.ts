interface Location {
  latitude: number;
  longitude: number;
}

interface FuelOptions {
  fuelPrices: [];
}

interface AccessibilityOptions {
  wheelchairAccessibleParking: boolean;
  wheelchairAccessibleEntrance: boolean;
  wheelchairAccessibleRestroom: boolean;
  wheelchairAccessibleSeating: boolean;
}

export interface GooglePlace {
  id: string;
  displayName: { text: string; languageCode: string };
  formattedAddress: string;
  location: Location;
  googleMapsUri: string;
  evChargeOptions: { connectorCount: number };
  fuelOptions: FuelOptions;
  accessibilityOptions: AccessibilityOptions;
}
