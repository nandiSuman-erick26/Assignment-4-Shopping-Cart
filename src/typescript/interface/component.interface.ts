import type { Product } from "./product.interface";

export interface ProductCardProps {
  item: Product;
  openCart: () => void;
  addItemToCart: (item: Product) => void;
}

export interface CartItemProp {
  item: Product;
}
