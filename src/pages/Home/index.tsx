import axios from 'axios';
import { useEffect, useState } from 'react';

import { Box } from '@mui/material';

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

  return (
    <Box
      sx={{
        pt: 1,
        pb: 6,
        width: 300,
        height: 300,
        backgroundColor: 'primary.dark',
      }}
    />
  );
};

export default Home;
