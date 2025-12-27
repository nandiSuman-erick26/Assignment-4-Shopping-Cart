import type { ProductDetail } from "../interface/cart.reducer.interface";

export type CartAction =
  | { type: "START" }
  | { type: "ADD_ITEM"; payload: ProductDetail[] }
  | { type: "REMOVE_ITEM"; payload: ProductDetail[] }
  | { type: "INCREASE_QTY"; payload: ProductDetail[] }
  | { type: "DECREASE_QTY"; payload: ProductDetail[] }
  | { type: "RESET_CART" }
  | { type: "FAILED"; payload: any }
  | {
      type: "CALCULATE_TOTAL";
      payload: { cart_length: number; cart_total_price: number };
    };
