import React from 'react';
import { useNavigate } from 'react-router-dom'; // Import useNavigate
import Coursel from '../../component/Caursel';
import ProductCard from '../../component/Product'; // Import the ProductCard
import products from '../../product';
import { Container, Typography, Grid, Box } from '@mui/material';
import Hero from '../../component/Hero';
import Contact from '../contact/Contact';
import theme from '../../theme';

const Home = () => {
  const navigate = useNavigate(); // Hook for navigation

  const handleProductClick = (productId) => {
    navigate(`/description/${productId}`); // Navigate to product details page
  };

  return (

    <div style={{marginTop:"50px"}}>
      <Coursel />
      <Hero />
      <Container>
        <Box sx={{ py: 4 }}>
          <Typography variant="h3" style={{ color: theme.colors.primary }} gutterBottom>
            Our Products
          </Typography>
          <Grid container spacing={4}>
            {products.map((product) => (
              <Grid item xs={12} sm={6} md={4} key={product._id}>
                <ProductCard
                  image={product.image}
                  title={product.title}
                  description={product.description}
                  features={product.features}
                  price={product.price}
                  onClick={() => handleProductClick(product._id)} // Pass the function
                />
              </Grid>
            ))}
          </Grid>
        </Box>
      </Container>
      <Contact />
    </div>
  );
};

export default Home;
