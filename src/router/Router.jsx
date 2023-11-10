import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Layout from '../components/layout/Layout';
import Home from '../pages/home/Home';
import Sol from '../pages/sol/Sol';
import Recetados from '../pages/recetados/Recetados';
import Productos from '../pages/productos/Productos';
import Contacto from '../pages/contacto/Contacto';
import Carrito from '../pages/carrito/Carrito';
import Successful from '../pages/successful/Successful';
import Usuario from '../pages/usuario/Usuario';
import Login from '../pages/usuario/login/Login';
import Validate from '../pages/validate/Validate';

const Router = () => {
  return (
    <BrowserRouter>
      <Layout>
        <Routes>
          <Route path="/" element={<Home />}>
            <Route path="/" element={<Sol />} />
            <Route path="recetados" element={<Recetados />} />
          </Route>
          <Route path="/productos" element={<Productos />} />
          <Route path="/contacto" element={<Contacto />} />
          <Route path="/carrito" element={<Carrito />} />
          <Route path="/successful" element={<Successful />} />

          <Route path="/usuario" element={<Usuario />} />
          <Route path="login" element={<Login />} />
          <Route path="validate" element={<Validate />} />
        </Routes>
      </Layout>
    </BrowserRouter>
  );
};

export default Router;
