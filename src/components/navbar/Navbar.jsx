import React from 'react';
import { NavbarContainer, Logo, LinkContainer } from './NavbarStyled';
import LinkItem from '../linkItem/LinkItem';
import { useNavigate } from 'react-router-dom';
import { BsCart2 } from 'react-icons/bs';
import BarsMenu from '../barsMenu/BarsMenu';
import { useContext } from 'react';
import { MenuContext } from '../../context/Context';
import { AiOutlineUser } from 'react-icons/ai';

import { useDispatch, useSelector } from 'react-redux';
import { setCurrentUser } from '../../redux/userSlice/UserSlice';

import { FaCheckCircle, FaUserAlt } from 'react-icons/fa';
const Navbar = () => {
  const currentUser = useSelector((state) => state.user);
  const navigate = useNavigate();
  const ctx = useContext(MenuContext);
  const dispatch = useDispatch();

  const handleLoginClick = () => {
    if (currentUser) {
      // Si el usuario ya ha iniciado sesión, cierra el menú
    } else {
      // Si el usuario no ha iniciado sesión, navega a la página de inicio de sesión
      navigate('/login');
    }
  };

  return (
    <NavbarContainer>
      <Logo onClick={() => navigate('/')}>Clear View Co.</Logo>
      <LinkContainer isOpen={ctx.isMenuOpen}>
        <LinkItem to="productos"> PRODUCTOS</LinkItem>
        <LinkItem to="contacto"> CONTACTO</LinkItem>
        <LinkItem to="carrito">
          {' '}
          <BsCart2 style={{ fontSize: '20px' }} />{' '}
        </LinkItem>

        <div className="user-nav">
          <div
            onClick={() => {
              currentUser
                ? navigate("/usuario")
                : navigate("/login");
            }}
          >
            <span>
              <AiOutlineUser />
              {currentUser
                ? <>
                    {currentUser.isVerified ? <h1>logueado</h1> : null}
                    {currentUser.nombre}
                  </>  /* Cierre de corchete para el bloque true */
                : "Iniciar Sesión"
              }
            </span>
            {currentUser ? null : <h1> no LOGUEADO</h1>}
          </div>
        </div>
      </LinkContainer>
      <BarsMenu />
    </NavbarContainer>
  );
};

export default Navbar;


