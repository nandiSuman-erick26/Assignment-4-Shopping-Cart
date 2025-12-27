// import React from 'react'
import {
  Box,
  Divider,
  ListItem,
  ListItemText,
  Typography,
} from "@mui/material";
import {
  Egg,
  Facebook,
  Instagram,
  Linkedin,
  MessageSquareText,
  Phone,
  Twitter,
} from "lucide-react";
const Footer = () => {
  return (
    <Box
      sx={{
        bgcolor: "#001d28ff",
        minHeight: { xs: "auto", md: 200 },
        width: "100%",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        flexDirection: "column",
        gap: { xs: 3, md: 6, lg: 10 },
        py: { xs: 3, md: 4, lg: 5 },
        px: { xs: 2, sm: 3, md: 4 },
      }}
    >
      <Box
        sx={{
          display: "flex",
          flexDirection: { xs: "column", md: "row" },
          gap: { xs: 4, sm: 6, md: 10, lg: 15 },
          width: "100%",
          maxWidth: "1400px",
        }}
      >
        {/* logo description social media handles */}
        <Box
          sx={{
            width: { xs: "100%", md: 380 },
            display: "flex",
            justifyContent: "flex-start",
            alignItems: { xs: "center", md: "flex-start" },
            flexDirection: "column",
            gap: { xs: 1.5, md: 2 },
          }}
        >
          <Box sx={{ height: { xs: 24, md: 27 }, width: { xs: 65, md: 75 } }}>
            <Box
              sx={{
                display: "flex",
                justifyContent: { xs: "center", md: "flex-start" },
                alignItems: "center",
              }}
            >
              <Egg fill="#deff05ff" strokeWidth={1} size={32} />
              <Typography
                sx={{
                  textTransform: "uppercase",
                  fontSize: { xs: 18, md: 21 },
                  fontWeight: 800,
                  color: "#f4e18dff",
                }}
              >
                wmf
              </Typography>
            </Box>
          </Box>
          <Box sx={{ width: "100%" }}>
            <Typography
              sx={{
                color: "#ffffff4b",
                fontSize: { xs: 12, md: 13 },
                textAlign: { xs: "center", md: "left" },
              }}
            >
              Lorem ipsum dolor sit elit. Id quis rerum beatae, labore
              blanditiis inventore. Ullam dolore iure ut quas, numquam
              temporibus quo, sint eius aut omnis accusantium!{" "}
              <Divider sx={{ padding: 2 }} />
              ©2025 DEC,All rights reserved , Developed by Suman Nandi.
            </Typography>
          </Box>
          <Box
            sx={{
              width: "100%",
              textAlign: "center",
              display: "flex",
              justifyContent: { xs: "center", md: "flex-start" },
              alignItems: "center",
              gap: { xs: 1.5, md: 2 },
              mt: { xs: 1, md: 0 },
            }}
          >
            <Box
              sx={{
                bgcolor: "#121a1d",
                borderRadius: 60,
                px: { xs: 1, md: 1.1 },
                py: { xs: 0.8, md: 0.9 },
              }}
            >
              <Facebook fill="#fff" color="#fff" size={14} />
            </Box>
            <Box
              sx={{
                bgcolor: "#121a1d",
                borderRadius: 60,
                px: { xs: 1, md: 1.1 },
                py: { xs: 0.8, md: 0.9 },
              }}
            >
              <Twitter color="#fff" size={14} />
            </Box>
            <Box
              sx={{
                bgcolor: "#121a1d",
                borderRadius: 60,
                px: { xs: 1, md: 1.1 },
                py: { xs: 0.8, md: 0.9 },
              }}
            >
              <Instagram size={14} color="#fff" />
            </Box>
            <Box
              sx={{
                bgcolor: "#121a1d",
                borderRadius: 60,
                px: { xs: 1, md: 1.1 },
                py: { xs: 0.8, md: 0.9 },
              }}
            >
              <Linkedin size={14} color="#fff" />
            </Box>
          </Box>
        </Box>
        <Box
          sx={{
            display: "flex",
            flexDirection: { xs: "column", sm: "row" },
            justifyContent: { xs: "center", md: "flex-start" },
            gap: { xs: 4, sm: 5, md: 5 },
            flex: 1,
          }}
        >
          {/* contact us */}
          <Box sx={{ flex: { xs: "1", sm: "0 1 auto" } }}>
            <Box>
              <Typography
                variant="h5"
                sx={{
                  color: "#fff",
                  textTransform: "capitalize",
                  fontSize: { xs: 15, md: 16 },
                  fontWeight: 600,
                  textAlign: { xs: "center", sm: "left" },
                }}
              >
                contact us
              </Typography>
            </Box>
            <Box
              sx={{
                display: "flex",
                flexDirection: "column",
                alignItems: { xs: "center", sm: "flex-start" },
              }}
            >
              <Box
                sx={{
                  display: "flex",
                  alignItems: "center",
                  gap: 1,
                  py: { xs: 2, md: 3 },
                }}
              >
                <MessageSquareText
                  color="#ffffffb4"
                  size={14}
                  style={{
                    padding: 5,
                    borderRadius: "60%",
                    backgroundColor: "#182b32ff",
                  }}
                />
                <Typography
                  color="#ffffff4a"
                  sx={{
                    textAlign: "center",
                    fontSize: { xs: 12, md: 14 },
                    wordBreak: "break-word",
                  }}
                >
                  suman26nandi@gmail.com
                </Typography>
              </Box>
              <Box
                sx={{
                  display: "flex",
                  alignItems: "center",
                  gap: 1,
                }}
              >
                <Phone
                  fill="#ffffffb4"
                  size={14}
                  style={{
                    padding: 5,
                    borderRadius: "60%",
                    backgroundColor: "#182b32ff",
                  }}
                />
                <Typography
                  color="#ffffff4a"
                  sx={{ textAlign: "center", fontSize: { xs: 12, md: 14 } }}
                >
                  +919163807459
                </Typography>
              </Box>
            </Box>
          </Box>
          {/* user link */}
          <Box sx={{ flex: { xs: "1", sm: "0 1 auto" } }}>
            <Box>
              <Typography
                variant="h5"
                sx={{
                  color: "#fff",
                  textTransform: "capitalize",
                  fontSize: { xs: 15, md: 16 },
                  fontWeight: 600,
                  textAlign: { xs: "center", sm: "left" },
                }}
              >
                user link
              </Typography>
            </Box>
            <Box>
              <ListItem
                sx={{
                  display: "flex",
                  flexDirection: "column",
                  alignItems: { xs: "center", sm: "flex-start" },
                  textTransform: "capitalize",
                  p: 0,
                  py: { xs: 1.5, md: 2 },
                }}
              >
                <ListItemText>
                  <Typography
                    color="#ffffff4a"
                    sx={{ textAlign: "center", fontSize: { xs: 12, md: 14 } }}
                  >
                    about us
                  </Typography>
                </ListItemText>
                <ListItemText>
                  <Typography
                    color="#ffffff4a"
                    sx={{ textAlign: "center", fontSize: { xs: 12, md: 14 } }}
                  >
                    contact us
                  </Typography>
                </ListItemText>
                <ListItemText>
                  <Typography
                    color="#ffffff4a"
                    sx={{ textAlign: "center", fontSize: { xs: 12, md: 14 } }}
                  >
                    order delivery
                  </Typography>
                </ListItemText>
                <ListItemText>
                  <Typography
                    color="#ffffff4a"
                    sx={{ textAlign: "center", fontSize: { xs: 12, md: 14 } }}
                  >
                    payments & tex
                  </Typography>
                </ListItemText>
                <ListItemText>
                  <Typography
                    color="#ffffff4a"
                    sx={{ textAlign: "center", fontSize: { xs: 12, md: 14 } }}
                  >
                    terms and services
                  </Typography>
                </ListItemText>
              </ListItem>
            </Box>
          </Box>
          {/* location */}
          <Box sx={{ flex: { xs: "1", sm: "0 1 auto" } }}>
            <Box>
              <Typography
                variant="h5"
                sx={{
                  color: "#fff",
                  textTransform: "capitalize",
                  fontSize: { xs: 15, md: 16 },
                  fontWeight: 600,
                  textAlign: { xs: "center", sm: "left" },
                }}
              >
                location
              </Typography>
            </Box>
            <Box>
              <Box
                sx={{
                  width: { xs: "100%", md: 190 },
                  py: { xs: 1.5, md: 2 },
                  textAlign: { xs: "center", sm: "left" },
                }}
              >
                <Typography
                  color="#ffffff4a"
                  sx={{ fontSize: { xs: 12, md: 14 } }}
                >
                  543 Country Club Ave, NC 27587, London, UK
                </Typography>
                <Typography
                  color="#ffffff4a"
                  sx={{ fontSize: { xs: 12, md: 14 }, mt: 0.5 }}
                >
                  +1257 6541120
                </Typography>
              </Box>
            </Box>
          </Box>
        </Box>
      </Box>
    </Box>
  );
};

export default Footer;
