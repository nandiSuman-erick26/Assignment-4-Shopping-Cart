import React, { createContext } from "react";
import type {
  CartState,
  ProductDetail,
} from "../../typescript/interface/cart.reducer.interface";
import type { CartAction } from "../../typescript/types/cart.action";

export const CartContext = createContext<{
  cartState: CartState;
  cartDispatch: React.Dispatch<CartAction>;
  addItemToCart: (prod: ProductDetail) => void;
  increaseQuantity: (prodID: ProductDetail) => void;
  decreaseQuantity:(prodID: ProductDetail)=>void
  removeItem:(prod:ProductDetail)=>void
  emptyCart:()=>void
  calculateCartTotal:()=>void
} | null>(null);
