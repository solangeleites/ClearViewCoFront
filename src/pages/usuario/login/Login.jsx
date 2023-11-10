import React from 'react';
import { Container, Title, P } from '../UsuarioStyled';
import { ContainerForm, Formulario } from '../../contacto/ContactoStyled';
import Input from '../../../components/UI/Input/Input';
import Button from '../../../components/UI/Button/Button';
import { FormValidationSchemaLogin } from '../../../formik/validationSchema';
import { Formik, Form, Field } from 'formik';

import useRedirect from '../../../hooks/useRedirect';
import { loginUser } from '../../../axios/axiosUser';
import { setCurrentUser } from '../../../redux/userSlice/UserSlice';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';



const Login = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  return (
    <Container>
      <Title>Inicia sesión</Title>

      <Formik
        initialValues={{ email: '', password: '' }}
        validationSchema={FormValidationSchemaLogin}
        onSubmit={async (values) => {
          const user = await loginUser(values.email, values.password);
          if (user) {
            dispatch(
              setCurrentUser({
                ...user.usuario,
                token: user.token,
              })
            );
            navigate('/');
          }
        }}
      >
        {({ touched, errors }) => (
          <Form>
            <Field
              name="email"
              label="Correo Electronico"
              type="email"
              iserror={touched.email && errors.email}
            />

            {touched.email && errors.email && <div>{errors.email}</div>}
            <Field
              name="password"
              label="Contraseña"
              type="password"
              iserror={touched.password && errors.password}
            />
            {touched.password && errors.password && (
              <div>{errors.password}</div>
            )}
            <button type="submit">Enviar</button>
          </Form>
        )}
      </Formik>
    </Container>
  );
};

export default Login;
