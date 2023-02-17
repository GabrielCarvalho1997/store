import axios from 'axios';
import { useEffect, useState, useCallback } from 'react';

import { Button } from '@mui/material';
import { Produto } from 'types/produtos';
import { useAppThemeContext } from 'context/themeContext';

const Home = () => {
  const [produtos, setProdutos] = useState<Produto[]>();

  const { toggleTheme } = useAppThemeContext();

  useEffect(() => {
    console.log(produtos);
  }, [produtos]);

  const getProdutos = useCallback(() => {
    axios
      .get('https://fakestoreapi.com/products')
      .then((res) => setProdutos(res.data))
      .catch((err) => console.log(err));
  }, []);

  useEffect(() => {
    getProdutos();
  }, [getProdutos]);

  return (
    <>
      <Button variant="contained" color="primary" onClick={toggleTheme}>
        Toggle theme
      </Button>
    </>
  );
};

export default Home;
