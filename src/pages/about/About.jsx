import React from "react";
import { Container, Typography, Box } from "@mui/material";
import theme from "../../theme";

const About = () => {
  return (
    <Container>
      <Box sx={{ py: 4,color:theme.colors.secondary }}>
        <Typography variant="h3" gutterBottom>
          About Voltsmasters Energy
        </Typography>
        <Typography variant="body1" paragraph>
          Voltsmasters Energy, established in July 2023, is a dynamic company providing
          reliable power backup solutions including UPS systems and batteries. We
          specialize in offering high-quality products and maintenance services such as
          Annual Maintenance Contracts (AMCs) to businesses across industries.
        </Typography>
        <Typography variant="body1" paragraph>
          Our mission is to deliver energy-efficient solutions tailored to the needs
          of businesses. We are focused on ensuring business continuity and minimizing
          risks by providing customized UPS systems from leading brands like Eaton, APC, Delta, and Exide.
        </Typography>
      </Box>
    </Container>
  );
};

export default About;
