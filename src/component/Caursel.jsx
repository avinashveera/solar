import React, { useState, useEffect } from 'react';
import { Box, Typography, Button, IconButton } from '@mui/material';
import ArrowBackIosNewIcon from '@mui/icons-material/ArrowBackIosNew';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import theme from '../theme'; // Import the theme file
import img1 from '../img/img1.png';
import img2 from '../img/img2.jpg';
import img3 from '../img/img3.jpg';

const sliderData = [
  {
    title: 'Harness Solar Energy',
    description: 'Power your home with renewable solar energy.',
    image: img1,
  },
  {
    title: 'Sustainability at Its Best',
    description: 'Eco-friendly solutions for a brighter future.',
    image: img2,
  },
  {
    title: 'Innovate with Clean Energy',
    description: 'Join the revolution in renewable energy technology.',
    image: img3,
  },
];

function Slider() {
  const [currentSlide, setCurrentSlide] = useState(0);

  // Autoplay functionality
  useEffect(() => {
    const autoplay = setInterval(() => {
      setCurrentSlide((prevSlide) => (prevSlide === sliderData.length - 1 ? 0 : prevSlide + 1));
    }, 3000); // Change slide every 3 seconds (3000ms)

    // Clear the interval on component unmount
    return () => clearInterval(autoplay);
  }, []);

  // Handle previous slide
  const handlePrev = () => {
    setCurrentSlide((prevSlide) => (prevSlide === 0 ? sliderData.length - 1 : prevSlide - 1));
  };

  // Handle next slide
  const handleNext = () => {
    setCurrentSlide((prevSlide) => (prevSlide === sliderData.length - 1 ? 0 : prevSlide + 1));
  };

  return (
    <Box sx={{ position: 'relative', width: '100%', overflow: 'hidden' }}>
      <Box
        sx={{
          display: 'flex',
          transition: 'transform 0.5s ease-in-out',
          transform: `translateX(-${currentSlide * 100}vw)`, // Slide container by 100vw per slide
          width: `${sliderData.length * 100}vw`, // Set the container width to the sum of all slides
        }}
      >
        {sliderData.map((slide, index) => (
          <Box
            key={index}
            sx={{
              position: 'relative',
              width: '100vw', // Each slide takes up 100vw (100% of viewport width)
              height: { xs: '300px', sm: '500px' }, // Adjust height based on screen size
              backgroundImage: `url(${slide.image})`,
              backgroundSize: 'cover',
              backgroundPosition: 'center',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              textAlign: 'center',
              color: theme.colors.buttonText,
            }}
          >
            {/* Overlay */}
            <Box
              sx={{
                position: 'absolute',
                top: 0,
                left: 0,
                width: '100%',
                height: '100%',
                backgroundColor: 'rgba(0, 0, 0, 0.5)', // Semi-transparent black overlay
                zIndex: 1,
              }}
            />

            {/* Slide Content */}
            <Box sx={{ position: 'relative', zIndex: 2 }}>
              <Typography
                variant="h4"
                sx={{
                  fontWeight: 'bold',
                  marginBottom: 2,
                  fontSize: { xs: '1.5rem', sm: '2rem' }, // Adjust font size for mobile
                  color:theme.colors.primary
                }}
              >
                {slide.title}
              </Typography>
              <Typography
                variant="h6"
                sx={{
                  marginBottom: 3,
                  fontSize: { xs: '1rem', sm: '1.25rem' }, // Adjust font size for mobile
                }}
              >
                {slide.description}
              </Typography>
              <Button
                variant="contained"
                sx={{
                  backgroundColor: theme.colors.accent,
                  color: theme.colors.buttonText,
                  '&:hover': {
                    backgroundColor: theme.colors.secondary,
                  },
                }}
              >
                Learn More
              </Button>
            </Box>
          </Box>
        ))}
      </Box>

      {/* Navigation Arrows */}
      <IconButton
        onClick={handlePrev}
        sx={{
          position: 'absolute',
          top: '50%',
          left: '10px',
          transform: 'translateY(-50%)',
          color: theme.colors.buttonText,
          backgroundColor: theme.colors.secondary,
          '&:hover': {
            backgroundColor: theme.colors.primary,
          },
          display: { xs: 'none', sm: 'block' }, // Hide arrows on mobile
        }}
      >
        <ArrowBackIosNewIcon />
      </IconButton>

      <IconButton
        onClick={handleNext}
        sx={{
          position: 'absolute',
          top: '50%',
          right: '10px',
          transform: 'translateY(-50%)',
          color: theme.colors.buttonText,
          backgroundColor: theme.colors.secondary,
          '&:hover': {
            backgroundColor: theme.colors.primary,
          },
          display: { xs: 'none', sm: 'block' }, // Hide arrows on mobile
        }}
      >
        <ArrowForwardIosIcon />
      </IconButton>
    </Box>
  );
}

export default Slider;
