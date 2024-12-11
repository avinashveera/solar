import React, { useState } from 'react';
import { AppBar, Toolbar, Typography, IconButton, Drawer, List, ListItem, ListItemText, Box } from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import { Link } from 'react-router-dom';
import theme from '../theme';
import { WhatsApp } from '@mui/icons-material';
import logo from '../img/VOLTSMASTERS logo.png';

function ResponsiveAppBar() {
  const [drawerOpen, setDrawerOpen] = useState(false);

  const menuItems = [
    { label: 'Home', link: '/' },
    { label: 'About', link: '/about' },
    { label: 'Contact', link: '/contact' },
    { label: 'Our Product', link: '/product' },
  ];

  const toggleDrawer = (open) => (event) => {
    if (event.type === 'keydown' && (event.key === 'Tab' || event.key === 'Shift')) {
      return;
    }
    setDrawerOpen(open);
  };

  return (
    <Box>
      <AppBar position="fixed" sx={{ backgroundColor: theme.colors.background ,color:theme.colors.secondary}}>
        <Toolbar>
          {/* Left Section - Logo and Company Name */}
          <Box sx={{ display: 'flex', alignItems: 'center', flexGrow: 1 }}>
            <img src={logo} alt="VOLTSMASTERS Logo" style={{ width: '60px', height: '60px', marginRight: '10px' }} />
            <Typography variant="h6" sx={{ fontWeight: 'bold', color: theme.colors.primary }}>
              VOLTSMASTERS
            </Typography>
          </Box>

          {/* Right Section - Menu */}
          <Box sx={{ display: { xs: 'none', md: 'flex' } }}>
            {menuItems.map((item) => (
              <Typography
                key={item.label}
                variant="body1"
                sx={{ marginRight: 2, color: theme.colors.buttonText }}
              >
                <Link to={item.link} style={{ textDecoration: 'none', color: theme.colors.primary }}>
                  {item.label}
                </Link>
              </Typography>
            ))}
          </Box>

          {/* Mobile Menu - Drawer Icon */}
          <IconButton
            size="large"
            edge="end"
            color="inherit"
            sx={{ display: { xs: 'flex', md: 'none' } }}
            onClick={toggleDrawer(true)}
          >
            <MenuIcon />
          </IconButton>
        </Toolbar>
      </AppBar>

      {/* Drawer for Mobile View */}
      <Drawer anchor="left" open={drawerOpen} onClose={toggleDrawer(false)}>
        <Box
          sx={{
            width: 250,
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            padding: 2,
          }}
          role="presentation"
          onClick={toggleDrawer(false)}
          onKeyDown={toggleDrawer(false)}
        >
          {/* Drawer Logo */}
          <img src={logo} alt="VOLTSMASTERS Logo" style={{ width: '80px', height: '80px', marginBottom: '20px' }} />
          {/* Menu List */}
          <List>
            {menuItems.map((item) => (
              <ListItem key={item.label} button component={Link} to={item.link}>
                <ListItemText primary={item.label} sx={{ textAlign: 'center' }} />
              </ListItem>
            ))}
          </List>
        </Box>
      </Drawer>

      {/* WhatsApp Icon - Fixed Bottom Right */}
      <Box
        sx={{
          position: 'fixed',
          bottom: 50,
          right: 20,
          width: '60px',
          height: '60px',
          backgroundColor: theme.colors.secondary,
          borderRadius: '50%',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          cursor: 'pointer',
          zIndex: 999,
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
          <WhatsApp sx={{ color: '#fff', fontSize: '40px' }} />
        </a>
      </Box>
    </Box>
  );
}

export default ResponsiveAppBar;
