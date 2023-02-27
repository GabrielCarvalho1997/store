import { useEffect } from 'react';
import { useDrawerContext } from 'context/drawerContext/DrawerContext';

import { Dashboard } from 'pages/dashboard/Dashboard';

const Home = () => {
  const { setDrawerOptions } = useDrawerContext();

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
      <Dashboard />
    </>
  );
};

export default Home;
