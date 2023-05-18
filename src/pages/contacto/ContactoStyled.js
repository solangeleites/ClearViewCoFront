import styled from 'styled-components';
import { Formik } from 'formik';
import { Form } from 'formik';

export const Section = styled.section`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 70px 0;
`;
export const Container = styled.div`
  display: flex;
  justify-content: space-evenly;
  align-items: center;
  width: 90%;
  flex-wrap: wrap;
`;
export const Image = styled.img`
  height: 600px;
  width: 400px;
`;
export const Formulario = styled(Form)`
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  height: 600px;
`;
export const Title = styled.h2`
  font-weight: 600;
  font-size: 30px;
`;
export const ContainerForm = styled(Formik)`
  display: flex;
  flex-direction: column;
  justify-content: space-around;
`;
