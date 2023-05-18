import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Layout from '../components/layout/Layout';
import Home from '../pages/home/Home';
import Sol from '../pages/sol/Sol';
import Recetados from '../pages/recetados/Recetados';
import Productos from '../pages/productos/Productos';
import Contacto from '../pages/contacto/Contacto';
import Carrito from '../pages/carrito/Carrito';


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
        </Routes>
      </Layout>
    </BrowserRouter>
  );
};

export default Router;
