import React from 'react';
import { BsFillCreditCard2BackFill } from 'react-icons/bs';
import { FaLock, FaUser } from 'react-icons/fa';
import {
  Container,
  Section,
  Title,
  Card,
  Desc,
  Circle,
} from './GarantiasStyled';

const Garantias = () => {
  return (
    <Section>
      <Container>
        <Card>
        <Circle>
            <FaLock 
              style={{fontSize: '40px', color: 'white' }}
            />
          </Circle>
          <Title>Pago Seguro</Title>
          <Desc>
            Protegemos tu información personal con los más altos estándares de
            seguridad.
          </Desc>
        </Card>

        <Card>
        <Circle>
            <BsFillCreditCard2BackFill
              style={{fontSize: '40px', color: 'white' }}
            />
          </Circle>
          <Title>metodo de pagos</Title>
          <Desc>
          Aceptamos todos los métodos de pago disponibles.
          </Desc>
        </Card>


        <Card>
        <Circle>
            <FaUser
              style={{fontSize: '40px', color: 'white' }}
            />
          </Circle>
          <Title>Atención personalizada</Title>
          <Desc>
          Cuidado individualizado que se ajusta a tus preferencias y requerimientos específicos.          </Desc>
        </Card>

      </Container>
    </Section>
  );
};

export default Garantias;
