import React from 'react';
import { NavbarContainer, Logo, LinkContainer } from './NavbarStyled';
import LinkItem from '../linkItem/LinkItem';
import { useNavigate } from 'react-router-dom';
import { BsCart2 } from 'react-icons/bs';
const Navbar = () => {
  const navigate = useNavigate();
  return (
    <NavbarContainer>
              <Logo onClick={() => navigate('/')}>Clear View Co.</Logo>
      <LinkContainer>
        <LinkItem to="productos"> PRODUCTOS</LinkItem>
        <LinkItem to="contacto"> CONTACTO</LinkItem>


        <LinkItem to="carrito">
          {' '}
          <BsCart2 style={{ fontSize: '20px' }} />{' '}
        </LinkItem>
      </LinkContainer>
    </NavbarContainer>
  );
};

export default Navbar;
