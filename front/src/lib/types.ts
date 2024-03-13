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
  value: number;
  currency: "ARS" | "USD";
  availabilityDate: Date;
  description: string;
  province: string;
  city: string;
  addressStreet: string;
  addressNumber: string;
  lat: number | undefined;
  lon: number | undefined;
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

export interface User {
  address: string;
  city: string;
  email: string;
  favourites: [];
  firstName: string;
  lastName: string;
  phone: string;
  profilePicture: { url: string | null };
  role: string;
  _id: string;
  token: string
}

export interface PropertyCard {
  propertyId: string;
  userOwner: {
    userId: string;
    firstName: string;
    lastName: string;
    email: string;
    role: string;
    phone: string;
  };
  title: string;
  category: string;
  type: string;
  availabilityDate: string;
  description: string;
  propertyPictures: {
    url: string;
    public_id: string;
    _id: string;
  }[];
  value: number;
  currency: string;
  province: string;
  city: string;
  addressStreet: string;
  addressNumber: string;
  lat: number;
  lon: number;
  totalArea: number;
  coveredArea: number;
  rooms: number;
  bedrooms: number;
  bathrooms: number
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
  age: string;
  disposition: string;
  orientation: string;
  condition: string;
  state: string;
  favourites: number;
  status: string;
}


export interface PropsFormCargarPropiedad {
  setFormValues: React.Dispatch<React.SetStateAction<Property>>,
}

