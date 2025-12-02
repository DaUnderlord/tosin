export interface Car {
  id: string;
  make: string;
  model: string;
  year: number;
  price: number;
  mileage: number;
  transmission: string;
  fuel_type: string;
  color: string;
  description: string;
  images: string[];
  status: 'available' | 'sold' | 'reserved';
  created_at: string;
}

export interface Inquiry {
  id: string;
  car_id?: string;
  name: string;
  email: string;
  phone: string;
  message: string;
  status: 'new' | 'read' | 'contacted';
  created_at: string;
}
