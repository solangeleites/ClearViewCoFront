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
import Logout from '../pages/logout/Logout';
import { useSelector } from 'react-redux';

const Router = () => {
  const currentUser = useSelector((state) => state.user);


  return (
    <BrowserRouter>
      <Layout>
        <Routes>
          <Route path="/" element={<Home />}>
            <Route path="/" element={<Sol />} />
            <Route path="/recetados" element={<Recetados />} />
          </Route>
          <Route path="/productos" element={<Productos />} />
          <Route path="/contacto" element={<Contacto />} />
          <Route path="/carrito" element={<Carrito />} />
          <Route path="/successful" element={<Successful />} />
      
          {/* <Route path="/usuario" element={<Usuario />}  /> */}

          {/* <Route path={ currentUser.currentUser ? "/" : "/login"} element={currentUser.currentUser ? <Home /> : <Login /> }/>
          <Route path={ currentUser.currentUser ? "/" : "/usuario"} element={currentUser.currentUser ? <Home /> : <Usuario /> }/> */}

{!currentUser.currentUser && <Route path="/usuario" element={ <Usuario/>} />}
{!currentUser.currentUser && <Route path="/login" element={ <Login/>} />}

          <Route path="/logout" element={<Logout />} />

          <Route path="/validate" element={<Validate />} />

          <Route path="*" element={<Home />} />
        </Routes>
      </Layout>
    </BrowserRouter>
  );
};

export default Router;
