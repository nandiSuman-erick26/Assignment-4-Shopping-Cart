import { Box, Typography } from "@mui/material";
import { Egg, Home, Info, ShoppingBasket } from "lucide-react";
import { useNavigate } from "react-router-dom";
import { useContext } from "react";
import { CartContext } from "../hooks/context/Cart.create";
// import React from "react";

const navMenu = [
  {
    path: "",
    icon: <Home />,
    name: "HOME",
  },
  {
    path: "/mycart",
    icon: <ShoppingBasket />,
    name: "MY CART",
  },
  {
    path: "",
    icon: <Info />,
    name: "INFO",
  },
];

const Navbar = () => {
  const navigate = useNavigate();
  const context = useContext(CartContext);
  const cartLength = context?.cartState?.cart_length || 0;
  return (
    <Box
      sx={{
        width: "100%",
        maxWidth: "100vw",
        height: { xs: 50, md: 55, lg: 60 },
        bgcolor: "#d68140ff",
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        px: { xs: 1, md: 2, lg: 3 },
        boxSizing: "border-box",
      }}
    >
      {/* {logo} */}
      <Box sx={{ width: { xs: "40%", md: "30%", lg: "25%" } }}>
        <Box
          sx={{
            display: "flex",
            justifyContent: { xs: "flex-start", md: "center" },
            alignItems: "center",
            gap: { xs: 0.5, md: 1 },
          }}
        >
          <Egg fill="#deff05ff" strokeWidth={1} size={38} />
          <Typography
            sx={{
              textTransform: "uppercase",
              fontSize: { xs: 16, md: 19, lg: 21 },
              fontWeight: 800,
              color: "#f4e18dff",
            }}
          >
            wmf
          </Typography>
        </Box>
      </Box>
      {/* {navbar menu} */}
      <Box
        sx={{
          display: "flex",
          justifyContent: { xs: "flex-end", md: "center" },
          alignItems: "center",
          padding: { xs: 0.5, md: 1.5, lg: 2 },
          width: { xs: "60%", md: "50%", lg: "40%" },
          gap: { xs: 2, md: 3, lg: 4 },
        }}
      >
        {navMenu?.map((item, idx) => (
          <Box
            key={idx}
            sx={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              cursor: "pointer",
              transition: "transform 0.2s",
              "&:hover": {
                transform: "scale(1.05)",
              },
              position: "relative",
            }}
            onClick={() => navigate(item?.path)}
          >
            <Box
              sx={{
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                gap: { xs: 0.3, md: 0.5, lg: 1 },
                flexDirection: { xs: "column", md: "row" },
              }}
            >
              <Box
                sx={{
                  fontSize: { xs: 18, md: 20, lg: 24 },
                  position: "relative",
                }}
              >
                {item?.icon}
                {/* Cart Badge */}
                {item?.name === "MY CART" && cartLength > 0 && (
                  <Box
                    sx={{
                      position: "absolute",
                      top: {xs:-8, md:-10, sm:8},
                      right: {xs:-8, md:-12, sm:-8},
                      bgcolor: "#121a1d",
                      color: "#d68240",
                      borderRadius: "50%",
                      width: { xs: 18, md: 20 },
                      height: { xs: 18, md: 20 },
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      fontSize: { xs: 10, md: 11 },
                      fontWeight: 700,
                      border: "2px solid #d68240",
                    }}
                  >
                    {cartLength}
                  </Box>
                )}
              </Box>
              <Box>
                <Typography
                  sx={{
                    fontSize: { xs: 8, md: 10, lg: 12 },
                    fontWeight: 600,
                    display: { xs: "none", sm: "block" },
                  }}
                >
                  {item?.name}
                </Typography>
              </Box>
            </Box>
          </Box>
        ))}
      </Box>
    </Box>
  );
};

export default Navbar;
