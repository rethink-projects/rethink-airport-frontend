import React from "react";
import { Container, Box, Grid } from "@mui/material";
import FlightStatus from "../components/FlightStatus";
import ImageSlider from "../components/ImageSlider";
import CarReservationBanner from "../components/CarReservationBanner";
import PrivateMenuBanner from "../components/PrivateMenuBanner";

export default function HomePage() {
  const images = [
    "https://picsum.photos/800/300?random=1",
    "https://picsum.photos/800/300?random=2",
    "https://picsum.photos/800/300?random=3",
    "https://picsum.photos/800/300?random=4",
  ];

  return (
    <Container maxWidth="lg">
      <Box sx={{ mt: 4 }}>
        <FlightStatus />
        <ImageSlider images={images} />
        <Grid container spacing={4}>
          <Grid item xs={12} md={6}>
            <CarReservationBanner />
          </Grid>
          <Grid item xs={12} md={6}>
            <PrivateMenuBanner />
          </Grid>
        </Grid>
      </Box>
    </Container>
  );
}
