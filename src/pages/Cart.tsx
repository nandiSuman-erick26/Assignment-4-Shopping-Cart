// import React from 'react'

import { useContext } from "react";
import { CartContext } from "../hooks/context/Cart.create";
import { Avatar, Box, Typography } from "@mui/material";
import {
  ExternalLink,
  MinusCircle,
  PlusCircle,
  ShoppingBasket,
  Trash2,
} from "lucide-react";
import type { ProductDetail } from "../typescript/interface/cart.reducer.interface";

const Cart = () => {
  const context = useContext(CartContext);
  if (!context) {
    throw new Error("Your component must be wrapped with <FormProvider>");
  }

  const {
    cartState,
    removeItem,
    emptyCart,
    increaseQuantity,
    decreaseQuantity,
  } = context;

  const handleProductDelete = (data: ProductDetail) => {
    removeItem(data);
  };
  const handleEmptyCart = () => {
    emptyCart();
  };

  const totalPrice = cartState?.cart.reduce(
    (acc, item) => acc + item.total_price,
    0
  );

  return (
    <Box
      sx={{
        bgcolor: "#121a1d",
        display: "flex",
        // justifyContent: "center",
        alignItems: "flex-start",
        flexDirection: "column",
        width: "100%",
        maxWidth: "100vw",
        overflowX: "hidden",
        minHeight: "calc(100vh - 60px)",
        py: { xs: 2, md: 3, lg: 4 },
        px: { xs: 2, md: 3, lg: 4 },
        position: "relative",
      }}
    >
      {/* Header Section */}
      <Box
        sx={{
          display: "flex",
          flexDirection: { xs: "column", sm: "row" },
          justifyContent: "space-between",
          alignItems: "center",
          width: "100%",
          maxWidth: "1200px",
          margin: "0 auto",
          gap: { xs: 2, sm: 0 },
          mb: { xs: 3, md: 4 },
        }}
      >
        <Box
          sx={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            gap: 1.5,
          }}
        >
          <ShoppingBasket color="#d68240" size={28} />
          <Typography
            sx={{
              color: "#d68240",
              fontWeight: 500,
              fontSize: { xs: 18, md: 20, lg: 24 },
              textTransform: "uppercase",
              letterSpacing: 1,
            }}
          >
            My Cart
          </Typography>
        </Box>

        {/* Desktop Proceed Button */}
        {cartState?.cart.length > 0 && (
          <Box
            sx={{
              display: { xs: "none", md: "flex" },
              flexDirection: "column",
              alignItems: "flex-end",
              gap: 1,
            }}
          >
            <Typography
              sx={{
                color: "#fff",
                fontSize: 14,
                fontWeight: 500,
              }}
            >
              Total: ₹{totalPrice?.toFixed(2) || "0.00"}
            </Typography>
            <Box sx={{ display: "flex", gap: 1.5 }}>
              {/* Empty Cart Button */}
              <Box
                component="button"
                onClick={handleEmptyCart}
                sx={{
                  display: "flex",
                  alignItems: "center",
                  py: 1.2,
                  px: 2.5,
                  borderRadius: 2,
                  cursor: "pointer",
                  bgcolor: "#ef0a0aff",
                  gap: 1,
                  color: "#fff",
                  border: "none",
                  fontWeight: 500,
                  fontSize: 14,
                  transition: "all 0.3s ease",
                  ":hover": {
                    boxShadow: "0 4px 20px rgba(239, 10, 10, 0.4)",
                    transform: "translateY(-2px)",
                  },
                }}
              >
                <Trash2 size={18} color="#fff" />
                <Typography sx={{ fontSize: 14, fontWeight: 500 }}>
                  Empty Cart
                </Typography>
              </Box>
              {/* Proceed to Buy Button */}
              <Box
                component="button"
                sx={{
                  display: "flex",
                  alignItems: "center",
                  py: 1.2,
                  px: 3,
                  borderRadius: 2,
                  cursor: "pointer",
                  bgcolor: "#16b455ff",
                  gap: 1.5,
                  color: "#fff",
                  border: "none",
                  fontWeight: 500,
                  fontSize: 15,
                  transition: "all 0.3s ease",
                  ":hover": {
                    boxShadow: "0 4px 20px #cd8d0d66",
                    transform: "translateY(-2px)",
                  },
                }}
              >
                <Typography sx={{ fontSize: 15, fontWeight: 500 }}>
                  Proceed to Buy
                </Typography>
                <ExternalLink size={20} color="#fff" />
              </Box>
            </Box>
          </Box>
        )}
      </Box>

      {/* Cart Items */}
      <Box
        sx={{
          width: "100%",
          maxWidth: "1200px",
          margin: "0 auto",
          display: "flex",
          flexDirection: "column",
          gap: { xs: 2, md: 2.5 },
          pb: { xs: "100px", md: 0 },
        }}
      >
        {cartState?.cart.length === 0 ? (
          <Box
            sx={{
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              justifyContent: "center",
              py: 8,
              gap: 2,
            }}
          >
            <ShoppingBasket color="#ffffff30" size={80} />
            <Typography
              sx={{
                color: "#ffffff50",
                fontSize: { xs: 18, md: 22 },
                fontWeight: 500,
              }}
            >
              Your cart is empty
            </Typography>
          </Box>
        ) : (
          cartState?.cart.map((item) => (
            <Box
              key={item?.product_id}
              sx={{
                bgcolor: "transparent",
                borderRadius: 2,
                p: { xs: 1, md: 1.5 },
                display: "flex",
                flexDirection: "row",
                gap: { xs: 1.5, md: 2.5 },
                alignItems: "center",
                transition: "all 0.2s ease",
                borderBottom: "1px solid #0b3141ff",
                width: "100%",
                // ":hover": {
                //   borderBottomColor: "#d68240",
                // },
              }}
            >
              {/* Product Image */}
              <Avatar
                src={item?.product_image}
                sx={{
                  height: { xs: 50, md: 70 },
                  width: { xs: 50, md: 70 },
                  borderRadius: 2,
                  border: "2px solid #0b3141ff",
                  flexShrink: 0,
                }}
                variant="rounded"
              />

              {/* Product Details */}
              <Box
                sx={{
                  flex: 1,
                  display: "flex",
                  flexDirection: "row",
                  justifyContent: "space-between",
                  alignItems: "center",
                  gap: { xs: 1, md: 2 },
                  width: "100%",
                  overflow: "hidden",
                }}
              >
                {/* Name and Price */}
                <Box sx={{ flex: 1, minWidth: 0 }}>
                  <Typography
                    sx={{
                      color: "#fff",
                      fontSize: { xs: 13, md: 16 },
                      fontWeight: 500,
                      mb: { xs: 0, md: 0.5 },
                      textTransform: "uppercase",
                      overflow: "hidden",
                      textOverflow: "ellipsis",
                      whiteSpace: "nowrap",
                    }}
                  >
                    {item?.product_name}
                  </Typography>
                  <Typography
                    sx={{
                      color: "#d68240",
                      fontSize: { xs: 14, md: 17 },
                      fontWeight: 500,
                      display: { xs: "none", sm: "block" },
                    }}
                  >
                    ₹{item?.product_price}
                  </Typography>
                </Box>

                {/* Quantity Controls */}
                <Box
                  sx={{
                    display: "flex",
                    alignItems: "center",
                    gap: { xs: 1, md: 2 },
                    bgcolor: "#0f20283d",
                    borderRadius: 10,
                    px: { xs: 1, md: 1.5 },
                    py: { xs: 0.5, md: 1 },
                    flexShrink: 0,
                  }}
                >
                  <Box
                    onClick={() => decreaseQuantity(item)}
                    sx={{
                      cursor:
                        item?.product_qty <= 1 ? "not-allowed" : "pointer",
                      display: "flex",
                      alignItems: "center",
                      transition: "transform 0.2s",
                      opacity: item?.product_qty <= 1 ? 0.5 : 1,
                      ":hover": {
                        transform:
                          item?.product_qty > 1 ? "scale(1.2)" : "none",
                      },
                    }}
                  >
                    <MinusCircle size={20} color="#ef0a0aff" />
                  </Box>
                  <Typography
                    sx={{
                      color: "#fff",
                      fontWeight: 500,
                      fontSize: { xs: 12, md: 14 },
                      minWidth: { xs: 16, md: 20 },
                      textAlign: "center",
                    }}
                  >
                    {item?.product_qty}
                  </Typography>
                  <Box
                    onClick={() => increaseQuantity(item)}
                    sx={{
                      cursor: "pointer",
                      display: "flex",
                      alignItems: "center",
                      transition: "transform 0.2s",
                      ":hover": { transform: "scale(1.2)" },
                    }}
                  >
                    <PlusCircle size={20} color="#03b009ff" />
                  </Box>
                </Box>

                {/* Subtotal */}
                <Box
                  sx={{
                    display: "flex",
                    flexDirection: "column",
                    alignItems: "flex-end",
                    gap: 0.5,
                    flexShrink: 0,
                    minWidth: { xs: "60px", md: "80px" },
                  }}
                >
                  <Typography
                    sx={{
                      color: "#ffffff80",
                      fontSize: { xs: 8, md: 10 },
                      textTransform: "uppercase",
                      display: { xs: "none", md: "block" },
                    }}
                  >
                    Subtotal
                  </Typography>
                  <Typography
                    sx={{
                      color: "#16b455ff",
                      fontSize: { xs: 12, md: 14 },
                      fontWeight: 500,
                    }}
                  >
                    ₹{item?.total_price?.toFixed(2)}
                  </Typography>
                </Box>

                {/* Delete Button */}
                <Box
                  onClick={() => handleProductDelete(item)}
                  sx={{
                    cursor: "pointer",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    flexShrink: 0,
                    transition: "transform 0.2s",
                    ":hover": { transform: "scale(1.2)" },
                  }}
                >
                  <Trash2 size={20} color="#ef0a0aff" />
                </Box>
              </Box>
            </Box>
          ))
        )}
      </Box>

      {/* Floating Mobile Button */}
      {cartState?.cart.length > 0 && (
        <Box
          sx={{
            display: { xs: "flex", md: "none" },
            position: "fixed",
            bottom: 0,
            left: 0,
            right: 0,
            // bgcolor: "#0b314129",
            // borderTop: "2px solid #d68240",
            p: 2,
            zIndex: 1000,
            flexDirection: "column",
            gap: 1.5,
            boxShadow: "0 -4px 20px rgba(0, 0, 0, 0.3)",
          }}
        >
          <Box
            sx={{
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
            }}
          >
            <Typography
              sx={{
                color: "#fff",
                fontSize: 16,
                fontWeight: 500,
              }}
            >
              Total Amount:
            </Typography>
            <Typography
              sx={{
                color: "#16b455ff",
                fontSize: 20,
                fontWeight: 500,
              }}
            >
              ₹{totalPrice?.toFixed(2) || "0.00"}
            </Typography>
          </Box>
          <Box sx={{ display: "flex", gap: 1.5, width: "100%" }}>
            {/* Empty Cart Button - Mobile */}
            <Box
              component="button"
              onClick={handleEmptyCart}
              sx={{
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                py: 1.5,
                borderRadius: 2,
                cursor: "pointer",
                bgcolor: "#ef0a0aff",
                gap: 1,
                color: "#fff",
                border: "none",
                fontWeight: 700,
                fontSize: 14,
                flex: 1,
                transition: "all 0.3s ease",
                ":active": {
                  transform: "scale(0.98)",
                },
              }}
            >
              <Trash2 size={18} color="#fff" />
              <Typography sx={{ fontSize: 14, fontWeight: 700 }}>
                Empty
              </Typography>
            </Box>
            {/* Proceed to Buy Button - Mobile */}
            <Box
              component="button"
              sx={{
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                py: 1.5,
                borderRadius: 2,
                cursor: "pointer",
                bgcolor: "#16b455ff",
                gap: 1.5,
                color: "#fff",
                border: "none",
                fontWeight: 700,
                fontSize: 16,
                flex: 2,
                transition: "all 0.3s ease",
                ":active": {
                  transform: "scale(0.98)",
                },
              }}
            >
              <Typography sx={{ fontSize: 16, fontWeight: 700 }}>
                Proceed to Buy
              </Typography>
              <ExternalLink size={22} color="#fff" />
            </Box>
          </Box>
        </Box>
      )}
    </Box>
  );
};

export default Cart;
