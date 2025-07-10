import React from "react";
import {
  Container,
  Box,
  Grid,
  Typography,
  Button,
  TextField,
  Paper,
  InputAdornment,
} from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";
import FlightStatus from "../components/FlightStatus";
import ImageSlider from "../components/ImageSlider";
import CarReservationBanner from "../components/CarReservationBanner";
import PrivateMenuBanner from "../components/PrivateMenuBanner";
import PromotionsSection from "../components/PromotionsSection";
import QuickSearch from "../components/QuickSearch";
import Footer from "../components/Footer";

export default function HomePage() {
  const images = [
    "https://picsum.photos/800/300?random=1.webp",
    "https://picsum.photos/800/300?random=2.webp",
    "https://picsum.photos/800/300?random=3.webp",
    "https://picsum.photos/800/300?random=4.webp",
  ];

  return (
    <>
      {/* Hero Section */}
      <Box sx={{ width: "100%", backgroundColor: "#202020", py: 2 }}>
        <Container maxWidth="lg">
          <Typography variant="h6" sx={{ color: "white" }}>
            Rethink Airport
          </Typography>
        </Container>
      </Box>

      <Container maxWidth="lg">
        {/* Quick Search Flights */}
        <ImageSlider images={images} />
        <Paper sx={{ p: 4, mb: 4, borderRadius: 3 }} elevation={3}>
          <QuickSearch />
        </Paper>

        <FlightStatus />

        {/* Promotions Section */}
        <Box mb={4}>
          <PromotionsSection />
        </Box>

        <Grid container spacing={4} mb={4}>
          <Grid item xs={12} md={6}>
            <CarReservationBanner />
          </Grid>
          <Grid item xs={12} md={6}>
            <PrivateMenuBanner />
          </Grid>
        </Grid>
      </Container>

      {/* Footer */}
      <Footer />
    </>
  );
}
