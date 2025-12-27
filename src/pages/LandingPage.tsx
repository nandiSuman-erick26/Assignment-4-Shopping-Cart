import {
  Box,
  //  Typography
} from "@mui/material";
// import React from 'react'
import { products } from "../utils/json/products";
import Card from "../components/Card";
import CartDrawer from "../components/CartDrawer";
import { useContext, useState } from "react";
import { CartContext } from "../hooks/context/Cart.create";

import type { Product } from "../typescript/interface/product.interface";

const LandingPage = () => {
  const context = useContext(CartContext);
  if (!context) {
    throw new Error("Your component must be wrapped with <FormProvider>");
  }
  const { addItemToCart } = context;
  const [openCart, setOpenCart] = useState(false);
  const handleAddToCart = (item: Product) => {
    const productDetail = {
      product_id: item.product_id,
      product_name: item.product_name,
      product_price: item.product_price,
      product_image: item.product_image,
      product_qty: 1,
      total_price: Number(item.product_price),
    };
    addItemToCart(productDetail);
  };
  return (
    <Box
      sx={{
        bgcolor: "#121a1d",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        flexDirection: "column",
        width: "100%",
        maxWidth: "100vw",
        overflowX: "hidden",
        minHeight: "calc(100vh - 60px)",
      }}
    >
      <Box
        sx={{
          display: "grid",
          gridTemplateColumns: {
            xs: "1fr",
            sm: "1fr 1fr",
            md: "1fr 1fr 1fr",
            lg: "1fr 1fr 1fr",
          },
          gap: { xs: 2, md: 2, lg: 2.5 },
          padding: { xs: 2, md: 3, lg: 4 },
          maxWidth: "100%",
          // maxWidth: "1400px",
          justifyItems: "center",
        }}
      >
        {products?.map((item) => {
          return (
            <Card
              key={item.product_id}
              item={item}
              openCart={() => setOpenCart(true)}
              addItemToCart={handleAddToCart}
            />
          );
        })}
        <CartDrawer open={openCart} onClose={() => setOpenCart(false)} />
      </Box>
    </Box>
  );
};

export default LandingPage;
