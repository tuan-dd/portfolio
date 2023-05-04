import { Stack, Typography } from '@mui/material';

function NotFoundPage() {
  return (
    <Stack
      alignItems='center'
      justifyContent='center'
      sx={{ position: 'relative', bgcolor: 'background.default', minHeight: '100vh' }}>
      <Typography color='primary.main' variant='h3'>
        NotFoundPage
      </Typography>
    </Stack>
  );
}

export default NotFoundPage;
