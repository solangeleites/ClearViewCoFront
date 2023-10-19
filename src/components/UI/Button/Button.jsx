import React from 'react';
import { ButtonStyle } from './ButtonStyled';

const Button = ({children}) => {
  return (
    <ButtonStyle type="submit">
      {children}
      
    </ButtonStyle>
  );
};

export default Button;
