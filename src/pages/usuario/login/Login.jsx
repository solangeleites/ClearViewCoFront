import React from 'react'
import { Container, Title, P } from '../UsuarioStyled'
import { ContainerForm, Formulario } from '../../contacto/ContactoStyled';
import Input from '../../../components/UI/Input/Input';
import Button from '../../../components/UI/Button/Button';
import {FormInitialValues} from '../../../formik/initialValues';   
import {FormValidationSchema} from '../../../formik/validationSchema';


import  useRedirect from '../../../hooks/useRedirect';
import {loginUser} from '../../../axios/axiosUser';
import {setCurrentUser} from'../../../redux/userSlice/UserSlice';
import { useDispatch } from 'react-redux';

const handleSUbmit= () =>{
  console.log('enviando formulario')
}

const  Login = () => {
    const dispatch = useDispatch();
    useRedirect('/');

  return (
    <Container>
        <Title>Inicia sesión</Title>

        <ContainerForm
          initialValues={FormInitialValues}
          validationSchema={FormValidationSchema}
          

          onSubmit={async values => {
            const user = await loginUser(values.email, values.password);
            if (user) {
              dispatch(
                setCurrentUser({
                  ...user.usuario,
                  token: user.token,
                })
              );
            }
          }}



        >
          {({ touched, errors }) => (
            <Formulario>

              <Input
                name="email"
                label="Correo Electronico"
                type="email"
                isError={touched.email && errors.email}
              ></Input>
              <Input
                name="password"
                label="Contraseña"
                type="password"
                isError={touched.password && errors.password}
              ></Input>
              <Button onSubmit={handleSUbmit}  >Enviarrrrrrrrr</Button>
            </Formulario>
          )}
        </ContainerForm>

    </Container>
  )
}

export default Login