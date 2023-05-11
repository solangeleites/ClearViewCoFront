import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const Section = styled.section`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 70px 0;
`;

export const Container = styled.div`
  display: flex;
  justify-content: space-around;
  align-items: center;
  width: 90%;
  flex-wrap: wrap;
`;

export const ContainerLinks = styled.div`
  display: flex;
  align-items: center;
  gap: 50px;
`;

export const Title = styled.h2`
font-size: 22px;
color: #203040;
`; 

export const LinkItem = styled(Link)`
  text-decoration: none;
  color: #131415;
  font-weight: 600;
  position: relative;

  &::after {
    content: '';
    height: 1px;
    width: 100%;
    background-color: #131415;
    position: absolute;
    bottom: 0px;
    left: 0;
    transform: scaleX(0);
    transition: transform 0.3s ease;
  }

  &:focus::after,
  &:active::after {
    transform-origin: bottom right;
    transform: scaleX(1);
  }
`;
