import React from 'react';
import { Container, Title, P } from './UsuarioStyled';
import { ContainerForm, Formulario } from '../contacto/ContactoStyled';
import Input from '../../components/UI/Input/Input';
import Button from '../../components/UI/Button/Button';
import { FormInitialValues } from '../../formik/initialValues';
import { FormValidationSchema } from '../../formik/validationSchema';

import { createUser } from '../../axios/axiosUser';
import { useDispatch } from 'react-redux';
import { setCurrentUser } from '../../redux/userSlice/UserSlice';
import useRedirect from '../../hooks/useRedirect';
import { Link } from 'react-router-dom';



// const handleSubmit = async (e) =>{

//   e.preventDefault( 
//     console.log('evento canecelado')  
//   )

//   try {
//     const formData = new FormData(event.target);
//     const name = formData.get('name');
//     const email = formData.get('email');
//     const password = formData.get('password');

    
//   } catch (error) {
    
//   }
// }


const Usuario = () => {
  const dispatch = useDispatch();
  useRedirect('/validate');

  return (
    <Container>
      <Title>Registrate</Title>
      <P>
        <Link to="/login">¿ó YA tienes una cuenta?</Link>
      </P>

      <ContainerForm
        initialValues={FormInitialValues}
        validationSchema={FormValidationSchema}


        onSubmit={async (values, actions) => {
          console.log()
          try {
              const user = await createUser(values.username, values.email, values.password);
              actions.resetForm();
              if (user) {
                  dispatch(setCurrentUser({
                      ...user.usuario,
                  }));
                  console.log('Usuario registrado con éxito:', user);
              }
          } catch (error) {
            console.log('Error al registrar usuario:', error);
          }
      }}


      >
        
          <Formulario>
            <Input
              name="name"
              label="Nombre"
              type="text"
              autoComplete="name"
              // isError={touched.name && errors.name}
            ></Input>
            <Input
              name="email"
              label="Correo Electronico"
              type="email"
              autoComplete="email"
              // isError={touched.email && errors.email}
            ></Input>
            <Input
              name="password"
              label="Contraseña"
              type="password"
              // isError={touched.password && errors.password}
            ></Input>


            <Button type="submit">Enviar</Button>
          </Formulario>
        
      </ContainerForm>
        
    </Container>
  );
};

export default Usuario;
