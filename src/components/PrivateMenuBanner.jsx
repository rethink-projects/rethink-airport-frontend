import React from "react";
import { Card, CardContent, Typography, Button } from "@mui/material";
import { useNavigate } from "react-router-dom";

export default function PrivateMenuBanner() {
  const navigate = useNavigate();
  return (
    <Card sx={{ display: "flex", alignItems: "center", mb: 4, p: 2 }}>
      <CardContent sx={{ flex: 1 }}>
        <Typography variant="h5" gutterBottom>
          Área Privada
        </Typography>
        <Typography variant="body1" gutterBottom>
          Acesse seu menu privado com login e senha.
        </Typography>
        <Button
          variant="outlined"
          onClick={() => navigate("/login")}
          sx={{ mt: 1 }}
        >
          Login
        </Button>
      </CardContent>
    </Card>
  );
}
