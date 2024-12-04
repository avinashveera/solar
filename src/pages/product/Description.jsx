import React from 'react';
import { useParams } from 'react-router-dom';
import products from '../../product'; // Import products data
import { Container, Typography, Box } from '@mui/material';

const ProductDetails = () => {
  const { id } = useParams(); // Get product ID from URL

  const product = products.find((p) => p._id === Number(id)); // Find product by ID

  console.log(product)

  if (!product) {
    return <Typography variant="h5">Product not found</Typography>;
  }

  return (
    <Container>
      <Box sx={{ py: 4 }}>
        <Typography variant="h3" gutterBottom>{product.title}</Typography>
        <img src={product.image} alt={product.title} style={{ width: '100%', maxHeight: '400px', objectFit: 'cover' }} />
        <Typography variant="body1" sx={{ mt: 2 }}>{product.description}</Typography>
        <Typography variant="h6" sx={{ mt: 3 }}>Features:</Typography>
        
        <Typography variant="h4" color="primary" sx={{ mt: 4 }}>${product.price}</Typography>
      </Box>
    </Container>
  );
};

export default ProductDetails;
