import { Form, Formik } from 'formik';
import styled from 'styled-components';

export const ContainerUser = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 100vh;
background-image: url('../../../public/img/bguser.jpg');
background-position: center;
background-repeat: no-repeat;
background-size: cover;
`;
export const ContainerForm = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
`;

export const FormikContainer = styled(Formik)`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background-color: crimson;
  `

  export const Formulario = styled(Form) `
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 500px;
    height: 500px;
    background-color:  #ffffffb7;
`;

  export const Input = styled.input`
    width: 300px;
    height: 30px;
    padding: 5px;
    border: none;
    outline: none;
    font-family: 'Manrope', sans-serif;
    font-size:12px;
    border-radius: 5px;
    `;

    export const Button = styled.button`
    width: 300px;
    height: 30px;
    border: none;
    outline: none;
    background-color: black;
    color: white;
    border-radius: 5px;
    margin-top: 10px;
    `;
    export const Label = styled.label`
    width: 300px;
    height: 30px;
    padding: 5px;
    border: none;
    outline: none;
    font-size:14px;
    font-weight: 500;
    `
    export const Forget = styled.a`
    font-size: 12px;
    font-weight: 100;
    color: grey;
    text-align: left;
    width: 300px;
    margin-top: 10px;
    cursor: pointer;
    `
