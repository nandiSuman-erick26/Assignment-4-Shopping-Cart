import type { CartState } from "../../typescript/interface/cart.reducer.interface";
import type { CartAction } from "../../typescript/types/cart.action";

export const cartInitialState: CartState = {
  cart_length: 0,
  cart_total_price: 0,
  cart: [],
  loading: false,
  error: null,
};

export const getCartInitialData = (): CartState => {
  const localeStorageCartData = localStorage.getItem("cartData");
  if (localeStorageCartData) {
    try {
      return JSON.parse(localeStorageCartData);
    } catch (error) {
      console.log("Something went wrong!", error);
      return cartInitialState;
    }
  }
  return cartInitialState;
};

export const cartReducer = (state: CartState, action: CartAction) => {
  switch (action.type) {
    case "START":
      return { ...state, loading: true, error: null };
    case "ADD_ITEM":
      return { ...state, cart: action.payload, loading: false, error: null };
    case "REMOVE_ITEM":
      return { ...state, cart: action.payload, loading: false, error: null };
    case "INCREASE_QTY":
      return { ...state, cart: action.payload, loading: false, error: null };
    case "DECREASE_QTY":
      return { ...state, cart: action.payload, loading: false, error: null };
    case "RESET_CART":
      return { ...cartInitialState };
    case "CALCULATE_TOTAL":
      return {
        ...state,
        cart_length: action.payload.cart_length,
        cart_total_price: action.payload.cart_total_price,
      };
    case "FAILED":
      return { ...state, loading: false, error: action.payload };
    default:
      return state;
  }
};
