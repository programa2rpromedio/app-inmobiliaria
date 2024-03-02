export interface ISvg {
  className?: string
}

export type propertyCategory = "house" | "apartment" | "cabin" | "hotel" | "country-house" | "camping" | null
export type propertyType = "permanent" | "temporary" | null;
export type propertyStatus = "active" | "rented" | "paused" | null;


export interface Property {
  title: string;
  category: propertyCategory;
  type: propertyType;
  price: number;
  currency: "ARS" | "USD";
  availabilityDate: Date;
  description: string;
  province: string;
  city: string;
  addressStreet: string;
  addressNumber: string;
  lat: number | undefined;
  lng: number | undefined;
  totalArea?: number; // Optional property
  coveredArea?: number; // Optional property
  bathrooms: number;
  rooms: number;
  bedrooms: number;
  wifi: boolean;
  tv: boolean;
  kitchen: boolean;
  ac: boolean;
  freeParking: boolean;
  paidParking: boolean;
  washingMachine: boolean;
  workspace: boolean;
  pool: boolean;
  jacuzzi: boolean;
  gym: boolean;
  bbq: boolean;
  backyard: boolean;
  garden: boolean;
  soccerField: boolean;
  terrace: boolean;
  pets: boolean;
  age?: string; // Optional property
  disposition?: string; // Optional property
  orientation?: string; // Optional property
  condition?: string; // Optional property
  state?: string; // Optional property
  status?: propertyStatus;
}

export interface PropsFormCargarPropiedad {
  setFormValues: React.Dispatch<React.SetStateAction<Property>>,
  handleNextStep: () => void
}