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
import { useState } from 'react';



const Usuario = () => {
  const dispatch = useDispatch();
  
  const [fields, setfields] = useState({});



  const onSubmit = async (e) => {
    e.preventDefault();
    console.log(fields)
    try {
      const user = await createUser(fields.name, fields.email, fields.pass);
      console.log(user)
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
  }

  const onChange = async (e) => {
    setfields({
      ...fields,
      [e.target.name]: e.target.value
    })
    console.log(e.target.value)
  }




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
      >
        {/* {({ touched, errors }) => (
          <Formulario>
            <Input
              name="name"
              label="Nombre"
              type="text"
              autoComplete="name"
              isError={touched.name && errors.name}
            ></Input>
            <Input
              name="email"
              label="Correo Electronico"
              type="email"
              autoComplete="email"

              isError={touched.email && errors.email}
            ></Input>
            <Input
              name="password"
              label="Contraseña"
              type="password"
              isError={touched.password && errors.password}
            ></Input>


            <Button>Enviar</Button>
          </Formulario>
        )} */}


        <form style={{display:'flex', flexDirection:'column'}} onSubmit={onSubmit}>
          <label htmlFor="name">Nombre</label>
          <input type="text" name="name" id="name" onChange={onChange} />

          <label htmlFor="email">email</label>
          <input type="text" name="email" id="email"onChange={onChange} />

          <label htmlFor="pass">password</label>
          <input type="password" name="pass" id="pass" onChange={onChange}/>

          <button type='submit'>Enviar</button>
        </form>

      </ContainerForm>
        
    </Container>
  );
};

export default Usuario;
