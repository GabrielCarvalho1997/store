import axios from 'axios';
import { useEffect, useState, useCallback } from 'react';
import { useDrawerContext } from 'context/drawerContext/DrawerContext';
import { Produto } from 'types/produtos';
import { Dashboard } from 'pages/dashboard/Dashboard';

const Home = () => {
  const [produtos, setProdutos] = useState<Produto[]>();
  const [loading, setLoading] = useState<boolean>(false);

  const { setDrawerOptions } = useDrawerContext();

  useEffect(() => {
    console.log(produtos);
  }, [produtos]);

  const getProdutos = useCallback(() => {
    setLoading(true);
    axios
      .get('https://fakestoreapi.com/products')
      .then((res) => setProdutos(res.data))
      .catch((err) => console.log(err))
      .finally(() => setLoading(false));
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
      <Dashboard loading={loading} />
    </>
  );
};

export default Home;
