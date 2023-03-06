import { Adicao } from "pages/adicao/Adicao";
import { Edicao } from "pages/edicao/Edicao";
import { Login } from "pages/auth/login/Login";
import { Routes, Route, Navigate } from "react-router-dom";
import Home from "../pages/home/Home";

const AppRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<Navigate to={"/login"} />} />
      <Route path="/home" element={<Home />} />
      <Route path="/produtos/:id" element={<Edicao />} />
      <Route path="/adicao" element={<Adicao />} />
      <Route path='/categoria'>
        <Route index  element={ <Navigate to={"/home"}/>} />
        <Route path=':categoria' element={<Home />} />
      </Route>
      <Route path="/login" element= {<Login />} />
    </Routes>
  );
};

export default AppRoutes;
