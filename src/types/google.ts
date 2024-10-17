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
  displayName: string;
  formattedAddress: string;
  location: Location;
  evChargeOptions: { connectorCount: number };
  fuelOptions: FuelOptions;
  accessibilityOptions: AccessibilityOptions;
}
