

export interface Product {
  id: number;
  name: string;
  category: string;
  description: string;
  ingredients?: string[];
  availability: string;
  image: string;
  price: string;
};

export interface CarItem {
  id: number;
  make: string;
  model: string;
  year: number;
  type: string;
  description: string;
  features: string[];
  availability: string;
  image: string;
  price: number;
}



export interface CartItem extends Product {
  quantity: number;
}
