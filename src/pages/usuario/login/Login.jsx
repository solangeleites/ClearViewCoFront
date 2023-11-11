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

import {MdOutlineLogout} from 'react-icons/md'



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
          <Form  style={{display:'flex', flexDirection:'column', alignItems:'center', justifyContent:'center'}}>
            <Field
              name="email"
              label="Correo Electronico"
              type="email"
              iserror={touched.email && errors.email}
              placeholder="Correo Electronico"
              style={{paddingLeft:'50px', paddingRight:'10px', paddingTop:'5px', paddingBottom:'5px', borderRadius:'5px', border:'1px solid #ccc', marginTop:'10px', marginBottom:'10px'}}
            />

            {touched.email && errors.email && <div>{errors.email}</div>}
            <Field
              name="password"
              label="Contraseña"
              type="password"
              placeholder="Contraseña"
              iserror={touched.password && errors.password}

              style={{paddingLeft:'50px',  paddingRight:'10px', paddingTop:'5px', paddingBottom:'5px', borderRadius:'5px', border:'1px solid #ccc'}}
            />
            {touched.password && errors.password && (
              <div>{errors.password}</div>
            )}
            <button type="submit"
            style={{paddingLeft:'50px', paddingRight:'50px', paddingTop:'5px', paddingBottom:'5px', borderRadius:'5px', background:' #94a94fd4', marginTop:'10px', marginBottom:'10px', color: 'white'}}
            >Enviar</button>
          </Form>
        )}
      </Formik>
    </Container>
  );
};

export default Login;
