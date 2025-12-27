// import React from 'react'

import { Avatar, Box, Divider, Drawer, Typography } from "@mui/material";
import { MinusCircle, PlusCircle, ShoppingBasket } from "lucide-react";

import React, { useContext } from "react";

import { CartContext } from "../hooks/context/Cart.create";

const CartDrawer: React.FC<{ open: boolean; onClose: () => void }> = ({
  open,
  onClose,
}) => {
  const context = useContext(CartContext);
  if (!context) {
    throw new Error("Your component must be wrapped with <FormProvider>");
  }

  const { cartState, increaseQuantity, decreaseQuantity } = context;

  return (
    <Drawer anchor="right" open={open} onClose={onClose}>
      <Box
        sx={{
          width: { xs: 320, md: 380 },
          bgcolor: "#121a1d",
          height: "100vh",
          display: "flex",
          flexDirection: "column",
        }}
      >
        {/* Header */}
        <Box
          sx={{
            bgcolor: "#d68240",
            p: 2,
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            boxShadow: "0 2px 8px rgba(0,0,0,0.2)",
          }}
        >
          <Typography
            sx={{
              color: "#fff",
              fontSize: 18,
              fontWeight: 700,
              textTransform: "uppercase",
              letterSpacing: 1,
            }}
          >
            My Cart
          </Typography>
          <Box sx={{ display: "flex", alignItems: "center", gap: 1 }}>
            <Box
              sx={{
                bgcolor: "#121a1d",
                color: "#d68240",
                borderRadius: "50%",
                width: 24,
                height: 24,
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                fontSize: 12,
                fontWeight: 700,
              }}
            >
              {cartState?.cart_length || 0}
            </Box>
            <ShoppingBasket color="#fff" size={24} />
          </Box>
        </Box>

        {/* Cart Items */}
        <Box
          sx={{
            flex: 1,
            overflowY: "auto",
            p: 2,
            "&::-webkit-scrollbar": {
              width: "6px",
            },
            "&::-webkit-scrollbar-track": {
              bgcolor: "#0b3141ff",
            },
            "&::-webkit-scrollbar-thumb": {
              bgcolor: "#d68240",
              borderRadius: 1,
            },
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
              <ShoppingBasket color="#ffffff30" size={60} />
              <Typography
                sx={{
                  color: "#ffffff50",
                  fontSize: 16,
                  fontWeight: 500,
                }}
              >
                Your cart is empty
              </Typography>
            </Box>
          ) : (
            cartState?.cart.map((item, index) => (
              <Box key={item?.product_id}>
                <Box
                  sx={{
                    display: "flex",
                    gap: 2,
                    py: 2,
                    alignItems: "center",
                  }}
                >
                  {/* Product Image */}
                  <Avatar
                    src={item?.product_image}
                    sx={{
                      width: 60,
                      height: 60,
                      borderRadius: 2,
                      border: "2px solid #0b3141ff",
                    }}
                    variant="rounded"
                  />

                  {/* Product Details */}
                  <Box sx={{ flex: 1, minWidth: 0 }}>
                    <Typography
                      sx={{
                        color: "#fff",
                        fontSize: 13,
                        fontWeight: 500,
                        textTransform: "uppercase",
                        mb: 0.5,
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
                        fontSize: 15,
                        fontWeight: 600,
                        mb: 1,
                      }}
                    >
                      ₹{item?.product_price}
                    </Typography>

                    {/* Quantity Controls */}
                    <Box
                      sx={{
                        display: "flex",
                        alignItems: "center",
                        gap: 1.5,
                        bgcolor: "#0b3141ff",
                        borderRadius: 2,
                        px: 1.5,
                        py: 0.8,
                        width: "fit-content",
                      }}
                    >
                      <Box
                        onClick={() => decreaseQuantity(item)}
                        sx={{
                          cursor:
                            item?.product_qty <= 1 ? "not-allowed" : "pointer",
                          display: "flex",
                          alignItems: "center",
                          opacity: item?.product_qty <= 1 ? 0.5 : 1,
                          transition: "transform 0.2s",
                          ":hover": {
                            transform:
                              item?.product_qty > 1 ? "scale(1.2)" : "none",
                          },
                        }}
                      >
                        <MinusCircle size={18} color="#ef0a0aff" />
                      </Box>
                      <Typography
                        sx={{
                          color: "#fff",
                          fontWeight: 600,
                          fontSize: 14,
                          minWidth: 20,
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
                        <PlusCircle size={18} color="#03b009ff" />
                      </Box>
                    </Box>
                  </Box>

                  {/* Subtotal */}
                  <Box>
                    <Typography
                      sx={{
                        color: "#16b455ff",
                        fontSize: 16,
                        fontWeight: 600,
                      }}
                    >
                      ₹{item?.total_price?.toFixed(2)}
                    </Typography>
                  </Box>
                </Box>
                {index < cartState.cart.length - 1 && (
                  <Divider sx={{ borderColor: "#0b3141ff" }} />
                )}
              </Box>
            ))
          )}
        </Box>

        {/* Footer - Total */}
        {cartState?.cart.length > 0 && (
          <Box
            sx={{
              borderTop: "2px solid #d68240",
              bgcolor: "#0b3141ff",
              p: 2,
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
                  fontWeight: 600,
                }}
              >
                Total:
              </Typography>
              <Typography
                sx={{
                  color: "#16b455ff",
                  fontSize: 20,
                  fontWeight: 700,
                }}
              >
                ₹
                {cartState?.cart
                  .reduce((acc, item) => acc + item.total_price, 0)
                  .toFixed(2)}
              </Typography>
            </Box>
          </Box>
        )}
      </Box>
    </Drawer>
  );
};

export default CartDrawer;
