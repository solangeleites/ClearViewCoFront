import React from 'react';
import { Container, Title, P } from './UsuarioStyled';
import { ContainerForm, Formulario } from '../contacto/ContactoStyled';
import { FormInitialValues } from '../../formik/initialValues';
import { FormValidationSchema } from '../../formik/validationSchema';
import { createUser } from '../../axios/axiosUser';
import { useDispatch } from 'react-redux';
import { setCurrentUser } from '../../redux/userSlice/UserSlice';
import { Link } from 'react-router-dom';
import { useState } from 'react';
import useRedirect from '../../hooks/useRedirect';
import { redirect, useNavigate } from 'react-router-dom';

const Usuario = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const [fields, setfields] = useState({});

  // const[userRegistered, setUserRegistered] = useState(false)
  // useRedirect(userRegistered ? '/validate' : null)

  // const handleUserRegistered = () => {
  //   setUserRegistered(true)
  // }

  // const [purchaseCompleted, setPurchaseCompleted] = useState(false);
  // useRedirect(purchaseCompleted ? '/successful' : null);

  // const handlePurchaseComplete = () => {
  //   setPurchaseCompleted(true);
  // };

  const onSubmit = async (e) => {
    e.preventDefault();
    console.log(fields);
    try {
      const user = await createUser(fields.name, fields.email, fields.pass);
      console.log(user);
      if (user) {
        dispatch(
          setCurrentUser({
            ...user.usuario,
          })
        );
         navigate('/validate');

        console.log('Usuario registrado con éxito:', user);
      }
    } catch (error) {
      console.log('Error al registrar usuario:', error);
    }
  };

  const onChange = async (e) => {
    setfields({
      ...fields,
      [e.target.name]: e.target.value,
    });
    console.log(e.target.value);
  };
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
        <form
          style={{ display: 'flex', flexDirection: 'column' }}
          onSubmit={onSubmit}
        >
          <label htmlFor="name">Nombre</label>
          <input type="text" name="name" id="name" onChange={onChange}  style={{paddingLeft:'50px',  paddingRight:'10px', paddingTop:'5px', paddingBottom:'5px', borderRadius:'5px', border:'1px solid #ccc'}}
 />

          <label htmlFor="email">email</label>
          <input type="text" name="email" id="email" onChange={onChange} style={{paddingLeft:'50px', paddingRight:'10px', paddingTop:'5px', paddingBottom:'5px', borderRadius:'5px', border:'1px solid #ccc'}} />

          <label htmlFor="pass">password</label>
          <input type="password" name="pass" id="pass" onChange={onChange} style={{paddingLeft:'50px',  paddingRight:'10px', paddingTop:'5px', paddingBottom:'5px', borderRadius:'5px', border:'1px solid #ccc'}}/>

          <button type="submit" style={{paddingLeft:'50px', paddingRight:'10px', paddingTop:'5px', paddingBottom:'5px', borderRadius:'5px', background:' #94a94fd4', marginTop:'10px', marginBottom:'10px', color: 'white'}}>Enviar</button>
        </form>
      </ContainerForm>
    </Container>
  );
};

export default Usuario;

{
  /* {({ touched, errors }) => (
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
        )} */
}
