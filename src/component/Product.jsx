import React from 'react';
import { Card, CardContent, CardMedia, Typography, Button, Box } from '@mui/material';

function ProductCard({ image, title, description, features, price,  onClick  }) {
  return (
    <Box
      display="flex"
      justifyContent="center"  // Center the card horizontally
      alignItems="flex-start"   // Align the card at the top to save vertical space
      sx={{
        padding: 2,             // Reduce padding around the card
        height: 'auto',         // Let the height adjust based on content
        maxWidth: '100%',       // Ensure the content takes full width on mobile
      }}
    >
      <Card
        sx={{
          width: '100%',            // Full width for mobile
          maxWidth: 345,            // Max width for larger screens
          margin: '0 auto',         // Center the card horizontally
          boxShadow: 3,             // Optional: adds shadow to make it stand out
          borderRadius: 2,          // Optional: rounded corners
          cursor: 'pointer'
        }}
        onClick={onClick}  
      >
        <CardMedia
          component="img"
          height="200"               // Set a fixed height for the image
          image={image}
          alt={title}
        />
        <CardContent sx={{ paddingBottom: 1 }}> {/* Reduced bottom padding */}
          <Typography variant="h5" component="div" sx={{ fontWeight: 'bold'}}>
            {title}
          </Typography>
          <Typography variant="body2" color="text.secondary" sx={{ mt: 1 }}>
            {description}
          </Typography>
          <Typography variant="body2" color="text.primary" sx={{ mt: 0.5 }}>
            {features}
          </Typography>
          <Typography variant="body2" color="text.primary" sx={{ mt: 0.5, fontWeight: 'bold' }}>
            {price}
          </Typography>
        </CardContent>
        <Button size="small" sx={{ m: 1 }}>Inquire Now</Button>
      </Card>
    </Box>
  );
}

export default ProductCard;
