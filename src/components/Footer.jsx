import React from "react";
import { Box, Container, Grid, Typography, Link } from "@mui/material";

export default function Footer() {
  return (
    <Box sx={{ bgcolor: "grey.900", color: "grey.100", py: 4, mt: 8 }}>
      <Container maxWidth="lg">
        <Grid container spacing={4}>
          <Grid item xs={12} sm={4}>
            <Typography variant="h6" gutterBottom>
              Rethink Airport
            </Typography>
            <Typography variant="body2">
              Teste técnico para Desenvolvedor com experiência em Strapi na
              Rethink.
            </Typography>
          </Grid>
          <Grid item xs={12} sm={4}>
            <Typography variant="h6" gutterBottom>
              Links Rápidos
            </Typography>
            <Link display="block" color="inherit" href="#">
              Destinos
            </Link>
            <Link display="block" color="inherit" href="#">
              Ofertas
            </Link>
            <Link display="block" color="inherit" href="#">
              Suporte
            </Link>
          </Grid>
          <Grid item xs={12} sm={4}>
            <Typography variant="h6" gutterBottom>
              Contato
            </Typography>
            <Typography variant="body2">
              Email: support@rethinkairport.com
            </Typography>
            <Typography variant="body2">Telefone: +55 11 1234-5678</Typography>
          </Grid>
        </Grid>
        <Typography
          variant="caption"
          align="center"
          display="block"
          sx={{ mt: 2 }}
        >
          &copy; {new Date().getFullYear()} Rethink Airport
        </Typography>
      </Container>
    </Box>
  );
}
