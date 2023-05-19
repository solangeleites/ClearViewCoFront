import styled from 'styled-components';
import { NavLink } from 'react-router-dom';
import { mobile, tablet } from '../../queries/mediaQueries';

export const LinkItemStyled = styled(NavLink)`
  color: #203040;
  display: flex;
  align-items: center;
  justify-content: center;
  text-decoration: none;
  font-size: 12px;
  font-weight: 600;

  &.active {
    font-weight: 700;
    color: #131415;
  }

  position: relative;

  &::after {
    content: '';
    height: 1px;
    width: 100%;
    background-color: #131415;
    position: absolute;
    bottom: -32px;
    left: 0;
    transform: scaleX(0);
    transition: transform 0.3s ease;
  }
  &:focus::after,
  &:active::after {
    transform-origin: bottom right;
    transform: scaleX(1);
  }

  ${tablet}{
    font-size: 18px;
    font-weight: 600;
  }
`;
