import React from 'react';
import { ButtonStyle } from './ButtonStyled';

const Button = ({ onClick, children, type}) => {

  return <ButtonStyle 
  type={type}
  onClick={onClick}
  
  >{children}</ButtonStyle>;
};

export default Button;