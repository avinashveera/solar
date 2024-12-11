// src/pages/Product.js
import React from 'react';
import { Container, Typography, Grid, Box } from '@mui/material';
import ProductCard from '../../component/Product'; // Import the ProductCard
import products from '../../product';
import theme from '../../theme';



const Product = () => {
  return (
    <Container>
      <Box sx={{ py: 4 ,mt:4}}>
        <Typography variant="h3" sx={{color:theme.colors.primary }} gutterBottom>
          Our Products
        </Typography>
        <Grid container spacing={4}>
          {products.map((product, index) => (
            <Grid item xs={12} sm={6} md={4} key={product._id}>
              <ProductCard
                image={product.image}
                title={product.title}
                description={product.description}
                features={product.features}
                price={product.price}
              />
            </Grid>
          ))}
        </Grid>
      </Box>
    </Container>
  );
};

export default Product;
