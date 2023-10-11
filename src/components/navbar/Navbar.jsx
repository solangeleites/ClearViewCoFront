import React from 'react';
import { NavbarContainer, Logo, LinkContainer } from './NavbarStyled';
import LinkItem from '../linkItem/LinkItem';
import { useNavigate } from 'react-router-dom';
import { BsCart2 } from 'react-icons/bs';
import BarsMenu from '../barsMenu/BarsMenu';
import { useContext } from 'react';
import { MenuContext } from '../../context/Context';
import { AiOutlineUser } from 'react-icons/ai';

import { ADMIN } from '../utils/constantes';
import { useDispatch, useSelector } from 'react-redux';

const Navbar = () => {
  const currentUser = useSelector((state) => state.user);

  const dispatch = useDispatch();
  const navigate = useNavigate();

  const ctx = useContext(MenuContext);

  console.log({ currentUser });

  const handleLogOut = () => {
    dispatch(SetCurrentUser(null));
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
        <LinkItem to="usuario">
          {' '}
          <AiOutlineUser style={{ fontSize: '20px' }} />{' '}
        </LinkItem>
      </LinkContainer>
      <BarsMenu />
    </NavbarContainer>
  );
};

export default Navbar;
