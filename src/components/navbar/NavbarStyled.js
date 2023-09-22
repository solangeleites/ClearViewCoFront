import styled from 'styled-components';
import {tablet} from '../../queries/mediaQueries'

export const NavbarContainer = styled.nav`
  height: 80px;
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  box-shadow: 0 0 10px 1px rgba(0, 0, 0, 0.1);

`;
export const Logo = styled.h1`
  color: #131415;
  padding-left: 20px;
  cursor: pointer;
  font-size: 30px;


`;
export const LinkContainer = styled.div`
  display: flex;
  justify-content: space-around;
  align-items: center;
  width: 500px;

  ${tablet}{
    position: absolute;
    background-color: white;
    flex-direction: column;
    width: 100%;
    top: 80px;
    height: calc(100vh - 70px);
    z-index: 2;
    transition: all 0.5s ease-in-out;
    transform: ${props => props.isOpen ? 'translateX(0)' : 'translateX(-100%)'};
    justify-content: center;
    gap: 50px;
  }

`;
