import React from 'react';
import { ButtonStyle } from './ButtonStyled';

const Button = ({ onClick, children}) => {

  return <ButtonStyle 
  type="submit"
  onClick={onClick}
  
  >{children}</ButtonStyle>;
};

export default Button;