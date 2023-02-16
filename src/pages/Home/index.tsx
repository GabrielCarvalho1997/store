import axios from 'axios';
import { useEffect, useState } from 'react';

import { Box, Grid, Paper, styled, Button } from '@mui/material';
import { MenuItem } from '@mui/material';

const Home = () => {
  const [produtos, setProdutos] = useState({});

  useEffect(() => {
    getProdutos();
  }, []);

  useEffect(() => {
    console.log(produtos);
  }, [produtos]);

  const getProdutos = () => {
    axios
      .get('https://fakestoreapi.com/products')
      .then((res) => setProdutos(res.data))
      .catch((err) => console.log(err));
  };

  // Componente Item do Grid
  const Item = styled(Paper)(({ theme }) => ({
    backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
    ...theme.typography.body2,
    padding: theme.spacing(1),
    textAlign: 'center',
    color: theme.palette.text.secondary,
  }));

  return (
    <Box sx={{ flexGrow: 1 }}>
      <Button variant="contained" color="primary" />
      <Grid container spacing={2}>
        <Grid item xs={6} md={3}>
          <Item>xs=8</Item>
        </Grid>
        <Grid item xs={6} md={3}>
          <Item>xs=6</Item>
        </Grid>
        <Grid item xs={6} md={3}>
          <Item>xs=6</Item>
        </Grid>
        <Grid item xs={6} md={3}>
          <Item>xs=6</Item>
        </Grid>
      </Grid>
    </Box>
  );
};

export default Home;
