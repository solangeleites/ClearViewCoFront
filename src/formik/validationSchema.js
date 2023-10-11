import * as Yup from 'yup';
const phoneRegex = /\d{10}$/;

export const FormValidationSchema = Yup.object({
  name: Yup.string().required('Campo requerido'),
  email: Yup.string().email('Correo inválido').required('Campo requerido'),
  phone: Yup.string()
    .matches(phoneRegex, 'Telefono inválido')
    .required('Campo requerido'),
  mensaje: Yup.string()
    .max(255, 'Máximo de 255 caracteres').required('Campo requerido'),
    password: Yup.string().min(6, 'Mínimo 6 caracteres').required('Campo requerido'),
});
