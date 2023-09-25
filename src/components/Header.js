import React, { useState } from 'react';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Divider from '@mui/material/Divider';
import Typography from '@mui/material/Typography';
import { Link } from 'react-router-dom';
import { Box, Drawer, List, ListItem, ListItemText } from '@mui/material';
import IconButton from '@mui/material/IconButton';
import ClearIcon from '@mui/icons-material/Clear';
import MenuIcon from '@mui/icons-material/Menu';
import LogoImg from '../fonts/logo.png'
import './Header.css';

const Header = () => {
  const isLGScreen = window.innerWidth >= 1280;
  const [open, setOpen] = useState(false);

  const handleDrawerOpen = () => {
    setOpen(true);
  };

  const handleDrawerClose = () => {
    setOpen(false);
  };
  return (
    <>
      <AppBar className='headerRoot' position="static" open={open}>
        <Toolbar className='hdr' style={{ paddingTop: '5px' }} >
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            <img className='logohdr' src={LogoImg} alt="Logo" width="248" height="60" style={{ marginLeft: '2rem' }} />
          </Typography>
          <Link className='navLink' to="/tiktok">TikTok</Link>
          <IconButton className='btnopen' onClick={handleDrawerOpen}>
            <MenuIcon />
          </IconButton>
        </Toolbar>
      </AppBar>

      <Drawer className='drawer1' anchor="right" open={open} onClose={handleDrawerClose}>
        <Box className='drawer-header'>
          <IconButton onClick={handleDrawerClose}>
            <ClearIcon />
          </IconButton>
        </Box>
        <Divider />
        <Box className='navLinks'>
          <List>
            <ListItem>
              <ListItemText />
              <Link style={{ display: { lg: 'block' } }} className='navLink' to="/tiktok">TikTok</Link>
            </ListItem>
          </List>
        </Box>
      </Drawer>
    </>
  );
};

export default Header;
