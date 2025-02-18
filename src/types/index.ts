export interface Product {
  id: number;
  name: string;
  category: string;
  image: string;
  price: string;
  description: string;
  availability: string;
}

export interface CartItem extends Product {
  quantity: number;
}


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
  description: string;
  features: string[];
  availability: string;
  image: string;
  price: number;
}