// import React from "react";
import { Outlet } from "react-router-dom";
import Navbar from "./Navbar";
import Footer from "./Footer";
import { Box } from "@mui/material";

export const Wrapper = () => {
  return (
    <Box sx={{ width: "100%", overflowX: "hidden" }}>
      <Navbar />
      <Outlet />
      <Footer />
    </Box>
  );
};
