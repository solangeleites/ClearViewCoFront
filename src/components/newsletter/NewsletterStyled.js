import styled from 'styled-components';
import { mobile } from '../../queries/mediaQueries';

export const Section = styled.section`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 70px 0;
  background-color: #0d6c44;
  text-align: center;

`;
export const Title = styled.h2`
  font-size: 22px;
  color: white;
`;

export const Input = styled.input`
  border: none;
  outline: none;
  padding: 10px;
  width: 300px;
  font-family: Manrope;
  letter-spacing: 1px;
  border-radius: 3px;
  text-align: center;
`;
export const Button = styled.button`
  border: none;
  outline: none;
  padding: 10px 50px;
  text-align: center;
  font-family: Manrope;
  letter-spacing: 1px;
  border-radius: 3px;
  background-color: black;
  color: white;
  cursor: pointer;
  text-transform: uppercase;
  transition: all 0.5s ease-in-out;

  &:hover {
    background-color: #000000cb;
    color: white;
  }
`;
