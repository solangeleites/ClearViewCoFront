import { ErrorMessage, Field } from 'formik';
import React from 'react';
import {
  Error,
  InputContainer,
  Label,
  InputStyle,
} from './InputStyled';

const Input = ({ name, label, type, isError, ...field }) => {
  return (
    <InputContainer>
      <Label htmlFor={label}>{label}</Label>
      <Field
        name={name}
        type={type}
        as={InputStyle}
        id={label}
        error={isError}
      />
      <ErrorMessage name={name} component={Error} />
    </InputContainer>
  );
};

export default Input;