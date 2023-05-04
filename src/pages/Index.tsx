import AppBarHeader from '../components/Appbar';
import { Stack } from '@mui/material';
import { Outlet } from 'react-router-dom';
import Footer from './Footer';
function Index() {
  return (
    <Stack
      sx={{ position: 'relative', bgcolor: 'background.default', minHeight: '100vh' }}>
      {/* <ToggleMode sx={{ position: 'absolute' }} /> */}
      <AppBarHeader />
      <Outlet />
      <Footer />
    </Stack>
  );
}

export default Index;
