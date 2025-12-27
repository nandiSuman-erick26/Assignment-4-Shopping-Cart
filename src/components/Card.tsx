// import React from 'react'
import { Box, IconButton, Stack, Typography } from "@mui/material";
import type React from "react";
import type { ProductCardProps } from "../typescript/interface/component.interface";
import { Heart, ShoppingBasket, Star } from "lucide-react";
import { memo } from "react";
// const colors = ["#FFB632", "#F855CA", "#EF7C6A"];
const Card: React.FC<ProductCardProps> = ({
  item,
  openCart,
  addItemToCart,
}) => {
  return (
    <Box
      sx={{
        bgcolor: "#0b3141ff",
        p: { xs: 1.5, md: 1.5, lg: 2 },
        borderRadius: 4,
        boxShadow: "0 4px 8px #070707ff",
        height: { xs: 340, md: 350, lg: 360 },
        width: "100%",
        maxWidth: { xs: "100%", md: 220, lg: 220 },
        mx: "auto",
        display: "flex",
        flexDirection: "column",
        overflow: "hidden",
      }}
    >
      <Box
        sx={{
          height: { xs: 180, md: 160, lg: 160 },
          width: "100%",
          position: "relative",
          bgcolor: item?.product_image ? "#d0b7b7ff" : `${item?.product_image}`,
          borderRadius: 5,
          flexShrink: 0,
        }}
      >
        <img
          src={item?.product_image}
          alt="aboutus"
          style={{
            objectFit: "cover",
            width: "100%",
            height: "100%",
            borderRadius: 20,
          }}
        />
        <Box
          sx={{
            position: "absolute",
            top: { xs: 5, md: 8, lg: 10 },
            right: { xs: 3, md: 5, lg: 5 },
          }}
        >
          <Heart
            color="#d68240"
            size={20}
            style={{
              backgroundColor: "#121a1d",
              borderRadius: "60%",
              padding: 6,
            }}
          />
        </Box>
      </Box>

      <Box
        sx={{
          width: "100%",
          flex: 1,
          display: "flex",
          flexDirection: "column",
          overflow: "hidden",
        }}
      >
        <Typography
          variant="h6"
          sx={{
            color: "#d68240",
            textTransform: "capitalize",
            fontWeight: 600,
            fontSize: { xs: 14, md: 15, lg: 16 },
            py: { xs: 0.5, md: 0.6, lg: 0.8 },
            lineHeight: 1.2,
          }}
        >
          {item?.product_name}
        </Typography>

        <Stack direction="row" spacing={0.5} sx={{ mb: { xs: 0.3, md: 0.5 } }}>
          {[...Array(5)].map((_, idx) => {
            const color = "#d68240";
            return (
              <Star
                key={idx}
                size={12}
                color={idx < Number(item?.ratings) ? color : "#4b5563"}
                fill={idx < Number(item?.ratings) ? color : "#4b5563"}
              />
            );
          })}
        </Stack>

        <Typography
          sx={{
            py: { xs: 0.3, md: 0.5, lg: 0.6 },
            color: "#acacac94",
            fontSize: { xs: 10, md: 10, lg: 11 },
            display: "-webkit-box",
            WebkitLineClamp: { xs: 2, md: 2, lg: 3 },
            WebkitBoxOrient: "vertical",
            overflow: "hidden",
            lineHeight: 1.4,
            flex: 1,
          }}
        >
          {item?.description}
        </Typography>
      </Box>

      <Box
        sx={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          mt: "auto",
          pt: { xs: 0.5, md: 0.8, lg: 1 },
          width: "100%",
        }}
      >
        <Typography
          sx={{
            color: "#d68240",
            fontSize: { xs: 14, md: 15, lg: 16 },
            fontWeight: 600,
          }}
        >
          <span>Rs.</span>
          {item?.product_price}
        </Typography>
        <IconButton
          onClick={() => {
            addItemToCart(item);
            openCart();
          }}
          sx={{
            border: "1px solid #d68240",
            color: "#fff",
            p: { xs: 0.5, md: 0.6, lg: 0.8 },
            "&:hover": {
              border: "1px solid #121a1d",
              bgcolor: "#d68240",
              color: "#fff",
              transform: "translateY(-2px)",
              transition: "0.2s",
            },
          }}
        >
          <ShoppingBasket size={16} />
        </IconButton>
      </Box>
    </Box>
  );
};

export default memo(Card);
