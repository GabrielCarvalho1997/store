import { Backdrop, Box, Typography } from '@mui/material';

import CircularProgress from '@mui/material/CircularProgress';

const Loader = () => {
  return (
    <Backdrop
      sx={{
        color: 'primary.main',
        zIndex: (theme) => theme.zIndex.drawer + 10000,
        backgroundColor: 'background.paper',
      }}
      open={true}
    >
      <Box
        sx={{
          alignItems: 'center',
          alignContent: 'center',
          textAlign: 'center',
          justifyContent: 'center',
        }}
      >
        <CircularProgress color="inherit" size={125} />
        <Typography fontSize={20}>Carregando...</Typography>
      </Box>
    </Backdrop>
  );
};

export default Loader;
