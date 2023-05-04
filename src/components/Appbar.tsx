import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import { Menu, Stack } from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import Container from '@mui/material/Container';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';

import MenuItem from '@mui/material/MenuItem';

import { ToggleMode } from '../context/toogle.provider';
import { useNavigate } from 'react-router-dom';

const pages = ['About', 'Project', 'Contact', null] as const;

function AppBarHeader() {
  const [anchorElNav, setAnchorElNav] = React.useState<null | HTMLElement>(null);
  const navigate = useNavigate();

  const handleOpenNavMenu = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorElNav(event.currentTarget);
  };
  const handleCloseNavMenu = (value: (typeof pages)[number]) => {
    if (value === null) setAnchorElNav(null);
    if (value) {
      setAnchorElNav(null);
      navigate(`/${value.toLowerCase()}`);
    }
  };

  return (
    <AppBar position='static'>
      <Container maxWidth='xl'>
        <Toolbar disableGutters>
          <Box sx={{ flexGrow: 1, display: { xs: 'flex', md: 'none' } }}>
            <IconButton
              size='large'
              aria-label='account of current user'
              aria-controls='menu-appbar'
              aria-haspopup='true'
              onClick={handleOpenNavMenu}
              color='inherit'>
              <MenuIcon />
            </IconButton>
            <Menu
              id='menu-appbar'
              anchorEl={anchorElNav}
              anchorOrigin={{
                vertical: 'bottom',
                horizontal: 'left',
              }}
              keepMounted
              transformOrigin={{
                vertical: 'top',
                horizontal: 'left',
              }}
              open={Boolean(anchorElNav)}
              onClose={() => handleCloseNavMenu(null)}
              sx={{
                display: { xs: 'block', md: 'none' },
              }}>
              {pages.map((page) => (
                <MenuItem key={page} onClick={() => handleCloseNavMenu(page)}>
                  <Typography textAlign='center'>{page}</Typography>
                </MenuItem>
              ))}
            </Menu>
          </Box>
          <Stack
            flexDirection='row'
            columnGap={2}
            sx={{
              alignItems: 'center',
              justifyContent: 'center',
              flexGrow: 1,
              display: { xs: 'flex', md: 'none' },
            }}>
            <IconButton sx={{ p: 0 }}>
              <Avatar sx={{ height: 50, width: 50 }} alt='Tuan' src='/avatar.jpg' />
            </IconButton>
            <ToggleMode sx={{ height: 50, width: 50 }} />
          </Stack>

          <Box sx={{ flexGrow: 0, display: { xs: 'none', md: 'flex' } }}>
            {pages.map((page) => (
              <Button
                key={page}
                onClick={() => handleCloseNavMenu(page)}
                sx={{ my: 2, color: 'white', display: 'block' }}>
                {page}
              </Button>
            ))}
          </Box>
          <Stack
            flexDirection='row'
            columnGap={2}
            sx={{
              alignItems: 'center',
              justifyContent: 'flex-end',
              flexGrow: 1,
              display: { xs: 'none', md: 'flex' },
            }}>
            <ToggleMode sx={{ height: 50, width: 50 }} />
            <IconButton sx={{ p: 0 }} onClick={() => navigate('/')}>
              <Avatar sx={{ height: 50, width: 50 }} alt='Tuan' src='/avatar.jpg' />
            </IconButton>
          </Stack>
        </Toolbar>
      </Container>
    </AppBar>
  );
}
export default AppBarHeader;
