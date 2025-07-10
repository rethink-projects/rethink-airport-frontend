import React from "react";
import { Card, CardContent, Typography, Button } from "@mui/material";

export default function CarReservationBanner() {
  return (
    <Card sx={{ display: "flex", alignItems: "center", mb: 4, p: 2 }}>
      <CardContent sx={{ flex: 1 }}>
        <Typography variant="h5" gutterBottom>
          Reserve seu carro com antecedência!
        </Typography>
        <Typography variant="body1" gutterBottom>
          Garanta seu transporte assim que chegar.
        </Typography>
        <Button variant="contained" href="#" sx={{ mt: 1 }}>
          Reservar Carro
        </Button>
      </CardContent>
    </Card>
  );
}
