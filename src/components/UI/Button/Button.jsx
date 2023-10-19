import React from 'react';
import { ButtonStyle } from './ButtonStyled';

const Button = ({children, onClick = e => e.preventDefault() }) => {
  return (
    <ButtonStyle type="submit" onClick={onClick}>
      {children}
    </ButtonStyle>
  );
};

export default Button;
