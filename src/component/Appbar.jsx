import React from 'react';
import { AppBar, Toolbar, Typography, IconButton, Menu, MenuItem, Box } from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import { Link } from 'react-router-dom';
import theme from '../theme';
import { WhatsApp } from '@mui/icons-material'; // Import WhatsApp icon
import logo from '../img/VOLTSMASTERS logo.png'

function ResponsiveAppBar() {
  const [anchorEl, setAnchorEl] = React.useState(null);
  const open = Boolean(anchorEl);

  const handleMenuOpen = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleMenuClose = () => {
    setAnchorEl(null);
  };

  const menuItems = [
    { label: 'Home', link: '/' },
    { label: 'About', link: '/about' },
    { label: 'Contact', link: '/contact' },
    { label: 'Our Product', link: '/product' },
  ];

  return (
    <Box sx={{ position: 'relative' }}>
      <AppBar position="static" sx={{ backgroundColor: theme.colors.primary }}>
        <Toolbar>
          {/* Logo on the left */}
          <Typography
            variant="h6"
            component="div"
            sx={{ flexGrow: 1, fontWeight: 'bold', color: theme.colors.buttonText }}
          >

            <Link to="/" style={{ textDecoration: 'none', color: 'inherit' }}>
              <img src={logo} alt="" srcset="" style={{width:'100px',height:"70px",backgroundColor:'#fff'}} />
            </Link>
          </Typography>

          {/* Responsive Menu */}
          <Box sx={{ display: { xs: 'none', md: 'flex' } }}>
            {menuItems.map((item) => (
              <Typography
                key={item.label}
                variant="body1"
                sx={{ marginRight: 2, color: theme.colors.buttonText }}
              >
                <Link to={item.link} style={{ textDecoration: 'none', color: 'inherit' }}>
                  {item.label}
                </Link>
              </Typography>
            ))}
          </Box>

          {/* Mobile Menu */}
          <IconButton
            size="large"
            edge="start"
            color="inherit"
            aria-label="menu"
            sx={{ display: { md: 'none' } }}
            onClick={handleMenuOpen}
          >
            <MenuIcon />
          </IconButton>
          <Menu
            anchorEl={anchorEl}
            open={open}
            onClose={handleMenuClose}
            sx={{ display: { md: 'none' } }}
          >
            {menuItems.map((item) => (
              <MenuItem key={item.label} onClick={handleMenuClose}>
                <Link to={item.link} style={{ textDecoration: 'none', color: 'inherit' }}>
                  {item.label}
                </Link>
              </MenuItem>
            ))}
          </Menu>
        </Toolbar>
      </AppBar>

      {/* WhatsApp Icon - Fixed Bottom Right */}
      <Box
  sx={{
    position: 'fixed',
    bottom: 50,
    right: 20,
    width: '60px',  // Increased size for better icon fit
    height: '60px', // Equal to width to maintain circle shape
    backgroundColor: theme.colors.secondary,
    borderRadius: '50%',
    zIndex:"999",
    display: 'flex',
    alignItems: 'center', // Centering icon vertically
    justifyContent: 'center', // Centering icon horizontally
    cursor: 'pointer',
    animation: 'pulse 2s infinite', // Pulse animation
    '&:hover': {
      backgroundColor: theme.colors.accent,
    },
  }}
>
  <a
    href="https://wa.me/1234567890" // Replace with your WhatsApp number
    target="_blank"
    rel="noopener noreferrer"
  >
    <WhatsApp sx={{ color: '#fff', fontSize: '40px' }} /> {/* Ideal size for icon */}
  </a>
</Box>

    </Box>
  );
}

export default ResponsiveAppBar;
