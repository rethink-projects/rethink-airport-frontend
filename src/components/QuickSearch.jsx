import React from "react";
import { Grid, TextField, Button } from "@mui/material";
import FlightTakeoffIcon from "@mui/icons-material/FlightTakeoff";
import FlightLandIcon from "@mui/icons-material/FlightLand";

export default function QuickSearch() {
  return (
    <Grid container spacing={2} alignItems="center">
      <Grid item xs={12} sm={5}>
        <TextField
          fullWidth
          label="Local de partida"
          InputProps={{ startAdornment: <FlightTakeoffIcon sx={{ mr: 1 }} /> }}
        />
      </Grid>
      <Grid item xs={12} sm={5}>
        <TextField
          fullWidth
          label="Destino"
          InputProps={{ startAdornment: <FlightLandIcon sx={{ mr: 1 }} /> }}
        />
      </Grid>
      <Grid item xs={12} sm={2}>
        <Button variant="contained" fullWidth sx={{ height: "100%" }}>
          Buscar
        </Button>
      </Grid>
    </Grid>
  );
}
