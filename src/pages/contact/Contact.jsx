import React from "react";
import { Container, Typography, Box, TextField, Button } from "@mui/material";
import theme from "../../theme"; // Import theme for colors

const Contact = () => {
  return (
    <Container>
      <Box
        sx={{
          py: 4,
          mt:5,
          backgroundColor: "#F5F5F5", // Light background color
          color: theme.colors.text, // Dark text color
          padding: "20px",
          borderRadius: "8px",
          boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)", // Subtle shadow for light theme
        }}
      >
        <Typography variant="h3" gutterBottom sx={{ color: theme.colors.primary }}>
          Contact Us
        </Typography>

        <Typography variant="body1" paragraph sx={{ color: theme.colors.text }}>
          If you have any questions or need more information about our services, feel
          free to reach out.
        </Typography>

        {/* Contact Details Section */}
        <Box
          sx={{
            backgroundColor: "#FFFFFF", // White background for contact details
            padding: "15px",
            borderRadius: "8px",
            boxShadow: "0 2px 4px rgba(0, 0, 0, 0.1)",
            marginBottom: "20px",
          }}
        >
          <Typography variant="h5" sx={{ color: theme.colors.primary, mb: 2 }}>
            Contact Details
          </Typography>
          <Typography variant="body1" sx={{ color: theme.colors.text }}>
            <strong>Name:</strong> Gaurav Srivastava
          </Typography>
          <Typography variant="body1" sx={{ color: theme.colors.text }}>
            <strong>Phone:</strong> 7428879034 / 9990906462
          </Typography>
          <Typography variant="body1" sx={{ color: theme.colors.text }}>
            <strong>Address:</strong> Voltsmasters Energy Pvt. Ltd. <br />
            Office - Flat No-131, Block No-33, Second Floor, Sec-99, Noida
          </Typography>
          <Typography variant="body1" sx={{ color: theme.colors.text }}>
            <strong>Email:</strong>{" "}
            <a
              href="mailto:sales@voltsmasters.com"
              style={{ color: theme.colors.accent, textDecoration: "none" }}
            >
              sales@voltsmasters.com
            </a>
          </Typography>
        </Box>

        {/* Contact Form */}
        <form>
          <TextField
            fullWidth
            label="Your Name"
            variant="outlined"
            margin="normal"
            InputLabelProps={{
              style: { color: theme.colors.text },
            }}
            InputProps={{
              style: {
                color: theme.colors.text,
                backgroundColor: "#FFFFFF", // White background for input
                borderRadius: "4px",
              },
            }}
            placeholder="Enter your name"
            sx={{
              "& .MuiOutlinedInput-root": {
                "& fieldset": {
                  borderColor: theme.colors.primary,
                },
                "&:hover fieldset": {
                  borderColor: theme.colors.accent,
                },
              },
              "& .MuiInputBase-input::placeholder": {
                color: theme.colors.secondaryText,
              },
            }}
          />

          <TextField
            fullWidth
            label="Your Email"
            variant="outlined"
            margin="normal"
            InputLabelProps={{
              style: { color: theme.colors.text },
            }}
            InputProps={{
              style: {
                color: theme.colors.text,
                backgroundColor: "#FFFFFF",
                borderRadius: "4px",
              },
            }}
            placeholder="Enter your email"
            sx={{
              "& .MuiOutlinedInput-root": {
                "& fieldset": {
                  borderColor: theme.colors.primary,
                },
                "&:hover fieldset": {
                  borderColor: theme.colors.accent,
                },
              },
              "& .MuiInputBase-input::placeholder": {
                color: theme.colors.secondaryText,
              },
            }}
          />

          <TextField
            fullWidth
            label="Your Message"
            variant="outlined"
            margin="normal"
            multiline
            rows={4}
            InputLabelProps={{
              style: { color: theme.colors.text },
            }}
            InputProps={{
              style: {
                color: theme.colors.text,
                backgroundColor: "#FFFFFF",
                borderRadius: "4px",
              },
            }}
            placeholder="Enter your message"
            sx={{
              "& .MuiOutlinedInput-root": {
                "& fieldset": {
                  borderColor: theme.colors.primary,
                },
                "&:hover fieldset": {
                  borderColor: theme.colors.accent,
                },
              },
              "& .MuiInputBase-input::placeholder": {
                color: theme.colors.secondaryText,
              },
            }}
          />

          <Button
            variant="contained"
            sx={{
              mt: 2,
              backgroundColor: theme.colors.primary,
              color: "#FFFFFF",
              "&:hover": {
                backgroundColor: theme.colors.secondary,
              },
            }}
          >
            Submit
          </Button>
        </form>
      </Box>
    </Container>
  );
};

export default Contact;
