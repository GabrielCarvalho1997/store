import { Adicao } from 'pages/adicao/Adicao';
import { Edicao } from 'pages/edicao/Edicao';
import { Routes, Route, Navigate } from 'react-router-dom';
import Home from '../pages/Home/Home';

const AppRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<Navigate to={'/home'} />} />
      <Route path="/home" element={<Home />} />
      <Route path="/produtos/:id" element={<Edicao />} />
      <Route path="/adicao" element={<Adicao />} />
    </Routes>
  );
};

export default AppRoutes;
