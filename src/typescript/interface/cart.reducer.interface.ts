export interface ProductDetail {
  product_id: null | string;
  product_name: null | string;
  product_price: null | string;
  product_image: File | any;
  product_qty: number;
  total_price: number;
}

export interface CartState {
  cart_length: number;
  cart_total_price: number;
  cart: ProductDetail[];
  loading: boolean;
  error: null | string;
}
