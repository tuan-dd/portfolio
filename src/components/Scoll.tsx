import React from 'react';
import { IconButton } from '@mui/material';
import ArrowUpwardIcon from '@mui/icons-material/ArrowUpward';
function ScrollHeader() {
  const handelChange = React.useCallback(
    () =>
      window.scrollTo({
        top: 0,
        behavior: 'smooth',
      }),
    []
  );

  return (
    <IconButton onClick={handelChange}>
      <ArrowUpwardIcon
        sx={{ fontSize: 40, bgcolor: 'black', borderRadius: '50%' }}
        color='error'
      />
    </IconButton>
  );
}

export default ScrollHeader;
