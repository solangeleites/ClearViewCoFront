import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import Button from '../../components/UI/Button/Button';
import { Formik, Form } from 'formik';
import Input from '../../components/UI/Input/Input';
import * as Yup from 'yup';

const validationSchema = Yup.object({
  code: Yup.string().required('Este campo es requerido'),
});

const Validate = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const currentUser = useSelector((state) => state.user.currentUser);
  const [error, setError] = useState(null);

  return (
    <>
      {currentUser?.verified ? (
        <>
          <h1>¡Tu cuenta ya fue verificada!</h1>
          <Button
            onClick={() => {
              navigate('/');
            }}
          >
            Volver al Home
          </Button>
        </>
      ) : (
        <div>
          <h1>Valida tu cuenta</h1>
          <Formik
            initialValues={{
              code: '',
            }}
            validationSchema={validationSchema}
            onSubmit={async (values) => {
              try {
                // Verifica el código en la base de datos
                const isCodeValid = await verifyUser(
                  currentUser.email,
                  values.code
                );

                if (isCodeValid) {
                  // Si el código es válido, actualiza el estado y navega a la página principal
                  dispatch(setVerified());
                  navigate('/');
                } else {
                  // Si el código no es válido, muestra un mensaje de error
                  setError('El código ingresado no es válido');
                  console.log(error);
                }
              } catch (error) {
                // Manejo de errores de la solicitud a la base de datos
                console.error('Error al verificar el código:', error);
                setError(
                  'Error al verificar el código. Intente nuevamente más tarde.'
                );
              }
            }}
          >
            <Form>
              <Input name="code" type="code" placeholder="Ingrese su código" />
              <Button>Validar</Button>
            </Form>
          </Formik>
        </div>
      )}
    </>
  );
};

export default Validate;
