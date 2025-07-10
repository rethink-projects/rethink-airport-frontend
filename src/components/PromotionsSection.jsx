import React from "react";
import {
  Grid,
  Card,
  CardMedia,
  CardContent,
  Typography,
  Button,
} from "@mui/material";

const promotions = [
  {
    title: "Lounges 50% Off",
    img: "https://picsum.photos/400/200?lounge",
    desc: "Relaxe na nossa sala VIP.",
  },
  {
    title: "Fast Track Pass",
    img: "https://picsum.photos/400/200?fasttrack",
    desc: "Evite filas e ganhe tempo.",
  },
  {
    title: "Airport Shuttle",
    img: "https://picsum.photos/400/200?shuttle",
    desc: "Confortáveis viagens de/para o aeroporto.",
  },
  {
    title: "Inesquecível",
    img: "https://picsum.photos/400/200?enjoy",
    desc: "Aproveite tudo aqui.",
  },
];

export default function PromotionsSection() {
  return (
    <Grid container justifyContent="space-around">
      {promotions.map((promo, idx) => (
        <Grid item xs={12} sm={4} key={idx}>
          <Card sx={{ boxShadow: 3 }}>
            <CardMedia
              component="img"
              height="140"
              image={promo.img}
              alt={promo.title}
            />
            <CardContent>
              <Typography variant="h6" gutterBottom>
                {promo.title}
              </Typography>
              <Typography variant="body2" gutterBottom>
                {promo.desc}
              </Typography>
              <Button size="small">Leia mais</Button>
            </CardContent>
          </Card>
        </Grid>
      ))}
    </Grid>
  );
}
