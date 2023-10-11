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
import { setCurrentUser } from '../../redux/userSlice'

const Navbar = () => {
  const currentUser = useSelector((state) => state.user);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const ctx = useContext(MenuContext);

  const handleLoginClick = () => {
    if (currentUser) {
      // Si el usuario ya ha iniciado sesión, cierra el menú
      dispatch(toggleHiddenMenu());
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
        <LinkItem to="usuario" onClick={handleLoginClick}>
          {' '}
          <AiOutlineUser style={{ fontSize: '20px' }} />{' '}
          {currentUser ? currentUser.nombre : 'Iniciar Sesión'}
        </LinkItem>
      </LinkContainer>
      <BarsMenu />
    </NavbarContainer>
  );
};

export default Navbar;

