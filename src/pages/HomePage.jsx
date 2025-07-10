import React from "react";
import { Container } from "@mui/material";
import FlightStatus from "../components/FlightStatus";
import ImageSlider from "../components/ImageSlider";
import CarReservationBanner from "../components/CarReservationBanner";
import PrivateMenuBanner from "../components/PrivateMenuBanner";

export default function HomePage() {
  const images = [
    "https://picsum.photos/300/200",
    "https://picsum.photos/300/200",
    "https://picsum.photos/300/200",
  ];

  return (
    <Container sx={{ py: 4 }}>
      <FlightStatus />
      <ImageSlider images={images} />
      <CarReservationBanner />
      <PrivateMenuBanner />
    </Container>
  );
}
