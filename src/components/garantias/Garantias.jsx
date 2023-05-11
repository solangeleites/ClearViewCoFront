import React from 'react'
import { BsFillCreditCard2BackFill } from 'react-icons/bs'
import { Container, Section, Title, Card, Price } from './GarantiasStyled'

const Garantias = () => {
  return (
    <Section style={{ backgroundColor: 'lightgrey' }}>
    <Container>
      <Card
        style={{
          height: '250px',
          width: '300px',
          border: '1px solid black',
          position: 'relative',
        }}
      >
        <BsFillCreditCard2BackFill
          style={{ position: 'absolute', top: '0px', fontSize: '50px' }}
        />
        <Title>Pago Seguro</Title>
        <Price>
          Protegemos tu información personal con los más altos estándares de
          seguridad.
        </Price>
      </Card>

      <Card
        style={{
          height: '250px',
          width: '300px',
          border: '1px solid black',
        }}
      >
        <Title>Pago Seguro</Title>
        <Price>
          Protegemos tu información personal con los más altos estándares de
          seguridad.
        </Price>
      </Card>

      <Card
        style={{
          height: '250px',
          width: '300px',
          border: '1px solid black',
        }}
      >
        <Title>Pago Seguro</Title>
        <Price>
          Protegemos tu información personal con los más altos estándares de
          seguridad.
        </Price>
      </Card>

      <Card
        style={{
          height: '250px',
          width: '300px',
          border: '1px solid black',
        }}
      >
        <Title>Pago Seguro</Title>
        <Price>
          Protegemos tu información personal con los más altos estándares de
          seguridad.
        </Price>
      </Card>
    </Container>
  </Section>

  )
}

export default Garantias