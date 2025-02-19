



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



export interface CartItemQuantity extends CarItem {
  quantity: number;
}


export interface CarFeatures extends CarItem {
  features: string[];
}
