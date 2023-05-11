import React from 'react';
import { NavbarContainer, Logo, LinkContainer } from './NavbarStyled';
import LinkItem from '../linkItem/LinkItem';
import { useNavigate } from 'react-router-dom';
import { BsCart2, BsHeart } from 'react-icons/bs';
import { AiOutlineUser } from 'react-icons/ai';
const Navbar = () => {
  const navigate = useNavigate();
  return (
    <NavbarContainer>
              <Logo onClick={() => navigate('/')}>Clear View Co.</Logo>
      <LinkContainer>
        <LinkItem to="productos"> PRODUCTOS</LinkItem>
        <LinkItem to="gift"> GIFT CARD</LinkItem>
        <LinkItem to="contacto"> CONTACTO</LinkItem>
        <LinkItem to="usuario">
          {' '}
          <AiOutlineUser style={{ fontSize: '20px' }} />{' '}
        </LinkItem>
        <LinkItem to="favoritos">
          {' '}
          <BsHeart style={{ fontSize: '20px' }} />{' '}
        </LinkItem>
        <LinkItem to="carrito">
          {' '}
          <BsCart2 style={{ fontSize: '20px' }} />{' '}
        </LinkItem>
      </LinkContainer>
    </NavbarContainer>
  );
};

export default Navbar;
