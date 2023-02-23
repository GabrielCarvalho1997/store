import axios from 'axios';
import { useEffect, useState, useCallback } from 'react';

import { Button, IconButton, useTheme } from '@mui/material';
import { Produto } from 'types/produtos';
import { useAppThemeContext } from 'context/themeContext/ThemeContext';
import { useDrawerContext } from 'context/drawerContext/DrawerContext';
import DehazeIcon from '@mui/icons-material/Dehaze';
import useMediaQuery from '@mui/material/useMediaQuery';
import { Dashboard } from 'pages/dashboard/Dashboard';

const Home = () => {
  const [produtos, setProdutos] = useState<Produto[]>();

  const { toggleDrawerOpen, setDrawerOptions } = useDrawerContext();
  const { toggleTheme } = useAppThemeContext();

  const theme = useTheme();

  const md = useMediaQuery(theme.breakpoints.down('sm'));

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

  // Usado para criar opções de menu nova
  useEffect(() => {
    setDrawerOptions([
      {
        label: 'Página inicial',
        icon: 'home',
        path: '/home',
      },
      {
        label: 'Categorias',
        icon: 'menu',
        path: '/categorias',
      },
    ]);
  }, []);

  return (
    <>
      {md && (
        <IconButton
          // color="primary"
          onClick={toggleDrawerOpen}
          sx={{}}
        >
          <DehazeIcon sx={{ fontSize: 20 }} />
        </IconButton>
      )}

      <Button variant="contained" color="primary" onClick={toggleTheme}>
        Toggle theme
      </Button>
      <Dashboard />
    </>
  );
};

export default Home;
