import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

import { useDispatch, useSelector } from 'react-redux';
import { verifyUser } from '../../axios/axiosUser';
import { validateInitialValues, validateValidationSchema } from '../../formik';
import { setCurrentUser, setVerified } from '../../redux/userSlice';
import { ContainerForm, Formulario, Container } from '../contacto/ContactoStyled';
import Input from '../../components/UI/Input/Input';
import Button from '../../components/UI/Button/Button';

const Validate = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const currentUser = useSelector(state => state.user.currentUser);

  useEffect(() => {
    if (!currentUser) {
      navigate('/login');
    } else if (currentUser.verified) {
      navigate('/');
    }
  }, [currentUser, navigate]);

  return (
    <Container>
      <h1>Validar cuenta</h1>
      <ContainerForm
        initialValues={validateInitialValues}
        validationSchema={validateValidationSchema}
        onSubmit={async values => {
          await verifyUser(currentUser.email, values.code);
          dispatch(setVerified());
          navigate('/');
        }}
      >
        <Formulario>
          <Input name='code' type='code' placeholder='code' />
          <Button>Enviar</Button>
        </Formulario>
      </ContainerForm>
    </Container>
  );
};

export default Validate;