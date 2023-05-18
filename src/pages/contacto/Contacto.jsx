import React from 'react';
import {
  Section,
  Container,
  Image,
  Title,
  ContainerForm,
  Formulario,
} from './ContactoStyled';
import Input from '../../components/UI/Input/Input';
import TextArea from '../../components/UI/TextArea/TextArea';
import Button from '../../components/UI/Button/Button';
import {FormInitialValues} from '../../formik/initialValues';
import {FormValidationSchema} from '../../formik/validationSchema';

const Contacto = () => {

  return (
    <Section>
      <Title>Contactanos!</Title>
      <Container>
        <Image
          style={{ height: '600px', width: '400px' }}
          src="../../../public/img/img-form.jpg"
        />

        <ContainerForm
          initialValues={FormInitialValues}
          validationSchema={FormValidationSchema}
          onSubmit={(values, { resetForm }) => {
            console.log({ values });
            resetForm();
          }}
        >
          {({ touched, errors }) => (
            <Formulario>
              <Input
                name="name"
                label="Nombre"
                type="text"
                isError={touched.name && errors.name}
              ></Input>
              <Input
                name="email"
                label="Correo Electronico"
                type="email"
                isError={touched.email && errors.email}
              ></Input>
              <Input
                name="phone"
                label="Telefono"
                type="tel"
                isError={touched.phone && errors.phone}
              ></Input>
              <TextArea
                name="msg"
                label="Mensaje"
                isError={touched.msg && errors.msg}
              />
              <Button />
            </Formulario>
          )}
        </ContainerForm>
      </Container>
    </Section>
  );
};

export default Contacto;
