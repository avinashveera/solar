import React from 'react';
import { Box, Grid, Typography } from '@mui/material';
import heroImg from '../img/Solar-Panel2.jpeg'

const HeroSection = () => {
  return (
    <Box
      sx={{
        minHeight: '100vh',
        width: '100%',
        backgroundColor: '#f4f4f4',
      }}
    >
      <Grid container>
       
        {/* Text Section */}
        <Grid
          item
          xs={12}
          md={6}
          sx={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            background: 'linear-gradient(135deg, #F58525 30%, #088D47 90%)',
            clipPath:'polygon(0 0, 100% 0, 100% 80%, 50% 100%, 0 80%)',
            padding: 5,
          }}
        >
          <Box>
            <Typography
              variant="h5"
              component="h1"
              sx={{ fontWeight: 'bold', color: '#fff', mb: 1, textAlign: 'center'
               }}
            >
              Voltsmasters Energy Pvt Ltd - Empowering Tomorrow, Energizing Today!
            </Typography>
            <Typography
              variant="body1"
              sx={{ 
                color: '#fff',
                lineHeight: 1.4,
                textAlign: 'center',
                fontSize: {
                  xs: '0.8rem', // Small font size for extra-small screens (mobile)
                  sm: '1rem',   // Default size for small screens (tablets)
                  md: '1.2rem', // Medium size for medium screens (desktop)
                  lg: '1.4rem', // Larger size for large screens (larger desktops)
                }
               }}
            >
              Welcome to Voltsmasters Energy Pvt Ltd, a trailblazer in the energy industry since
              July 2023. We offer top-tier UPS systems from 1 KVA to 1000 KVA, complemented by
              batteries ranging from 7Ah to 200Ah. We deliver exceptional quality and value, making
              us your go-to partner for reliable energy solutions.
            </Typography>
          </Box>
        </Grid>

         {/* Image Section */}
         <Grid
          item
          xs={12}
          md={6}
          sx={{
            height: { xs: 'auto', md: '100vh' },
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            overflow: 'hidden',
          }}
        >
          <Box
            component="img"
            src={heroImg} // Replace with your image URL
            alt="Solar Energy"
            sx={{
              width: '100%',
              height: '100%',
              objectFit: 'cover',
            }}
          />
        </Grid>

      </Grid>
    </Box>
  );
};

export default HeroSection;
