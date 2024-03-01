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
  availability_date: Date;
  description: string;
  province: string;
  city: string;
  address_street: string;
  address_number: string;

  lat: number | undefined;
  lng: number | undefined;

  total_area?: number; // Optional property
  covered_area?: number; // Optional property
  bathrooms: number;
  rooms: number;
  bedrooms: number;
  wifi: boolean;
  tv: boolean;
  kitchen: boolean;
  ac: boolean;
  free_parking: boolean;
  paid_parking: boolean;
  washing_machine: boolean;
  workspace: boolean;
  pool: boolean;
  jacuzzi: boolean;
  gym: boolean;
  bbq: boolean;
  backyard: boolean;
  garden: boolean;
  soccer_field: boolean;
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