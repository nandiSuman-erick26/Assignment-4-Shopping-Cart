import type React from "react";
import { useEffect, useReducer } from "react";
import { CartContext } from "./Cart.create";
import { cartReducer, getCartInitialData } from "../reduce/cart.reducer";
import type { ProductDetail } from "../../typescript/interface/cart.reducer.interface";

export const CartProvider = ({ children }: { children: React.ReactNode }) => {
  const [cartState, cartDispatch] = useReducer(
    cartReducer,
    getCartInitialData()
  );

  //===================================================================================

  const calculateCartTotal = () => {
    let cartValue = 0;
    cartState?.cart.forEach((item) => {
      cartValue += item?.total_price;
    });

    if (
      cartValue !== cartState.cart_total_price ||
      cartState.cart.length !== cartState.cart_length
    ) {
      cartDispatch({
        type: "CALCULATE_TOTAL",
        payload: {
          cart_length: cartState?.cart.length,
          cart_total_price: cartValue,
        },
      });
    }
  };

  useEffect(() => {
    localStorage.setItem("cartData", JSON.stringify(cartState));
    calculateCartTotal();
  }, [cartState.cart]);

  //===================================================================================
  const addItemToCart = (prod: ProductDetail) => {
    console.log("product detail from payload", prod);
    cartDispatch({ type: "START" });
    try {
      const existingProduct = cartState?.cart?.find(
        (item) => item?.product_id === prod?.product_id
      );
      let cartList;
      if (existingProduct) {
        cartList = cartState?.cart?.map((items) =>
          items?.product_id === prod?.product_id
            ? { ...items, product_qty: items?.product_qty + 1 }
            : items
        );
      } else {
        cartList = [...cartState?.cart, { ...prod, product_qty: 1 }];
      }
      cartDispatch({ type: "ADD_ITEM", payload: cartList });
    } catch (error) {
      console.log("failed to add item to cart", error);
      cartDispatch({ type: "FAILED", payload: error });
    }
  };
  //===================================================================================
  const increaseQuantity = (prodID: ProductDetail) => {
    console.log("fetching ID to increase the cart product", prodID);
    cartDispatch({ type: "START" });
    try {
      const newCart = cartState?.cart.map((item) => {
        if (item?.product_id === prodID?.product_id) {
          const newQty = item?.product_qty + 1;
          return {
            ...item,
            product_qty: newQty,
            total_price: Number(item?.product_price) * newQty,
          };
        }
        return item;
      });
      cartDispatch({ type: "INCREASE_QTY", payload: newCart });
    } catch (error) {
      console.log("failed to increase item", error);

      cartDispatch({ type: "FAILED", payload: error });
    }
  };
  //===================================================================================
  const decreaseQuantity = (prodID: ProductDetail) => {
    console.log("fetching ID to decrease the cart product", prodID);

    try {
      const newCart = cartState?.cart.map((item) => {
        if (item?.product_id === prodID?.product_id && item?.product_qty > 0) {
          const newQty = item?.product_qty - 1;
          return {
            ...item,
            product_qty: newQty,
            total_price: Number(item?.product_price) * newQty,
          };
        }
        return item;
      });
      cartDispatch({ type: "DECREASE_QTY", payload: newCart });
    } catch (error) {
      console.log("failed to decrease item", error);

      cartDispatch({ type: "FAILED", payload: error });
    }
  };
  //===================================================================================
  const removeItem = (prod: ProductDetail) => {
    console.log("Cart after Product Remove", prod);
    cartDispatch({ type: "START" });
    try {
      const newCart = cartState?.cart.filter(
        (item) => item?.product_id !== prod?.product_id
      );

      cartDispatch({ type: "REMOVE_ITEM", payload: newCart });
    } catch (error) {
      console.log("Unable to remove item", error);
      cartDispatch({ type: "FAILED", payload: error });
    }
  };
  //===================================================================================

  const emptyCart = () => {
    cartDispatch({ type: "RESET_CART" });
  };
  //===================================================================================
  return (
    <CartContext.Provider
      value={{
        cartState,
        cartDispatch,
        addItemToCart,
        increaseQuantity,
        decreaseQuantity,
        emptyCart,
        removeItem,
        calculateCartTotal,
      }}
    >
      {children}
    </CartContext.Provider>
  );
};
