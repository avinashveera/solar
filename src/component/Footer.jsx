import React from 'react';
import { Box, Container, Grid, Typography, Link, Divider, IconButton } from '@mui/material';
import { Facebook, Twitter, LinkedIn, Instagram } from '@mui/icons-material'; // Import the icons
import theme from '../theme'; // Import the theme object directly
import Logo from '../img/VOLTSMASTERS logo.png';

const Footer = () => {
  return (
    <Box
      component="footer"
      sx={{
        backgroundColor: theme.colors.headerFooter, // Use theme colors
        color: theme.colors.buttonText, // Use button text color for text
        padding: '40px 0',
      }}
    >
      <Container maxWidth="lg">
        <Grid container spacing={3} justifyContent="space-between">
          {/* Left Section with Logo */}
          <Grid item xs={12} sm={6} md={4} display="flex" alignItems="center">
            <img
              src={Logo} // Replace with your actual logo path
              alt="Logo"
              style={{ height: '120px', width: '120px', marginRight: '10px' }}
            />
            <Typography variant="h6" sx={{ fontWeight: 'bold', fontSize: '1.2rem' }}>
            Voltsmasters Energy
            </Typography>
          </Grid>

          {/* Center Section: Quick Links */}
          <Grid item xs={12} sm={3} md={2}>
            <Typography variant="h6" sx={{ fontWeight: 'bold', marginBottom: '8px' }}>
              Quick Links
            </Typography>
            <Box>
              <Link href="/" color="inherit" sx={{ display: 'block', marginBottom: '8px', textDecoration: 'none' }}>
                Home
              </Link>
              <Link href="/about" color="inherit" sx={{ display: 'block', marginBottom: '8px', textDecoration: 'none' }}>
                About
              </Link>
              <Link href="/contact" color="inherit" sx={{ display: 'block', marginBottom: '8px', textDecoration: 'none' }}>
                Contact
              </Link>
              <Link href="/product" color="inherit" sx={{ display: 'block', marginBottom: '8px', textDecoration: 'none' }}>
                Product
              </Link>
            </Box>
          </Grid>

          {/* Right Section: Contact Details */}
          <Grid item xs={12} sm={6} md={3}>
            <Typography variant="h6" sx={{ fontWeight: 'bold', marginBottom: '8px' }}>
              Contact Details
            </Typography>
            <Typography variant="body1" sx={{ marginBottom: '8px' }}>
              <strong>Name:</strong> Gaurav Srivastava
            </Typography>
            <Typography variant="body1" sx={{ marginBottom: '8px' }}>
              <strong>Phone:</strong> 7428879034 / 9990906462
            </Typography>
            <Typography variant="body1" sx={{ marginBottom: '8px' }}>
              <strong>Address:</strong> Voltsmasters Energy Pvt. Ltd. <br />
              Office - Flat No-131, Block No-33, Second Floor, Sec-99, Noida
            </Typography>
            <Typography variant="body1">
              <strong>Email:</strong>{' '}
              <Link href="mailto:sales@voltsmasters.com" color="inherit" sx={{ textDecoration: 'none' }}>
                sales@voltsmasters.com
              </Link>
            </Typography>
          </Grid>

          {/* Social Media Icons Section */}
          <Grid item xs={12} sm={3} md={2}>
            <Typography variant="h6" sx={{ fontWeight: 'bold', marginBottom: '8px' }}>
              Follow Us
            </Typography>
            <Box>
              <IconButton href="https://facebook.com" color="inherit" sx={{ marginRight: '10px', padding: '8px' }}>
                <Facebook />
              </IconButton>
              <IconButton href="https://twitter.com" color="inherit" sx={{ marginRight: '10px', padding: '8px' }}>
                <Twitter />
              </IconButton>
              <IconButton href="https://linkedin.com" color="inherit" sx={{ marginRight: '10px', padding: '8px' }}>
                <LinkedIn />
              </IconButton>
              <IconButton href="https://instagram.com" color="inherit" sx={{ padding: '8px' }}>
                <Instagram />
              </IconButton>
            </Box>
          </Grid>
        </Grid>

        {/* Divider Line */}
        <Divider sx={{ marginTop: '20px', borderColor: theme.colors.buttonText }} />

        {/* Footer Bottom */}
        <Box sx={{ marginTop: '20px', textAlign: 'center' }}>
          <Typography variant="body2" color="inherit">
            © 2025 Solar Energy Solutions. All rights reserved.
          </Typography>
        </Box>
      </Container>
    </Box>
  );
};

export default Footer;
