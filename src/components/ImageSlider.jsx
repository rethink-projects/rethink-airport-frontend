import React from "react";
import Slider from "react-slick";
import { Box } from "@mui/material";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

export default function ImageSlider({ images }) {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
  };

  return (
    <Box sx={{ mb: 4 }}>
      <Slider {...settings}>
        {images.map((src, i) => (
          <Box
            key={i}
            component="img"
            src={src}
            alt={`slide-${i}`}
            sx={{ width: "100%", height: 300, objectFit: "cover" }}
          />
        ))}
      </Slider>
    </Box>
  );
}
