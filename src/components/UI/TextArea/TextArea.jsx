import React from 'react';
import { InputContainer, Label } from '../Input/InputStyled';
import { Error, TextAreaStyle } from './TextAreaStyled';

const TextArea = ({ label, isError, ...field }) => {
  return (
    <InputContainer>
      <Label htmlFor={label}>{label}</Label>
      <TextAreaStyle id={label} {...field} error={isError} />
      {isError && <Error>{isError}</Error>}
    </InputContainer>
  );
};

export default TextArea;