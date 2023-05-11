import React from 'react';
import {
  Button,
  ContainerUser,
  Forget,
  FormikContainer,
  Formulario,
  Input,
  Label,
} from './UsuarioStyled';

const Usuario = () => {
  return (
    <ContainerUser>
      <h2 style={{ fontSize: '22px', fontWeight: '600' }}>
        Te damos la bienvenida a CLEAR VIEW CO{' '}
      </h2>
      <FormikContainer>
        <Formulario>
          <Label name="email">Email</Label>
          <Input placeholder="Ingresa tu email" type="email" name="email" />

          <Label name="password">Contraseña</Label>
          <Input
            placeholder="Ingresa tu contraseña"
            type="password"
            name="password"
          />

          <Forget>¿Olvidaste tu contraseña?</Forget>

          <Button type="submit">Ingresar</Button>
          <Button>¿No tienes una cuenta? Regístrate</Button>
        </Formulario>
{/* 
        <Formulario>
          <Label name="user">Nombre de usuario</Label>
          <Input
            placeholder="Ingresa tu nombre de usuario"
            type="text"
            name="user"
          />

          <Label name="email">Email</Label>
          <Input placeholder="Ingresa tu email" type="email" name="email" />

          <Label name="password">Contraseña</Label>
          <Input
            placeholder="Ingresa tu contraseña"
            type="password"
            name="password"
          />

          <Button type="submit">Registrarse</Button>
          <Button>¿Ya tienes una cuenta? Inicia sesión</Button>
        </Formulario> */}
      </FormikContainer>
    </ContainerUser>
  );
};

// import React from 'react';
// import {
//   Button,
//   ContainerUser,
//   Forget,
//   FormikContainer,
//   Formulario,
//   Input,
//   Label,
// } from './UsuarioStyled';

// const Usuario = () => {
//   return (
//     <ContainerUser>
//       <h2 style={{ fontSize: '22px', fontWeight: '600' }}>
//         Te damos la bienvenida a CLEAR VIEW CO{' '}
//       </h2>
//       <FormikContainer>
//         <Formulario>
//           <Label>Email</Label>
//           <Input placeholder="Ingresa tu email" type="email" />

//           <Label>Contraseña</Label>
//           <Input placeholder="Ingresa tu contraseña" type='password' />

//           <Forget>¿Olvidaste tu contraseña?</Forget>

//           <Button type='submit'>Ingresar</Button>
//           <p style={{marginTop:'10px', fontSize:'14px'}}>No tenes una cuenta?</p>
//           <Button type='submit'> Regístrate</Button>

//         </Formulario>
//       </FormikContainer>
//     </ContainerUser>
//   );
// };
export default Usuario;
