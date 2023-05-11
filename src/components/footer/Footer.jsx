import React from 'react'
import { BsFacebook, BsInstagram, BsTwitter, BsYoutube } from 'react-icons/bs'
import { Container, Section, Title, Card } from './FooterStyled'
import { Logo } from '../navbar/NavbarStyled'
const Footer = () => {
  return (
        <Section>
        <Container>
          <Card
          >
            <Logo>Clear View Co.</Logo>
            <p
              style={{ fontSize: '12px', width: '200px', textAlign: 'center' }}
            >
              es una empresa argentina que se dedica a la venta de lentes de sol
              y de vista. Nuestro objetivo es brindar a nuestros clientes,
              seguridad, predispoción y productos de calidad a precios
              accesibles.
            </p>
          </Card>

          <Card
          >
            <Title>Información</Title>
            <p style={{ textTransform: 'none' }}>
              Rosedal 9925 - Belgrano, CABA
            </p>
            <p>
              <a href="tel:+5411-1234-5678" style={{ textDecoration: 'none' }}>
                +54 11 1234 5678 / 1234 5678
              </a>
            </p>
            <p style={{ textTransform: 'none' }}>hola@clearviewco.com</p>
          </Card>

          <Card>
            <Title>Redes Sociales</Title>
            <Container>
              <BsFacebook style={{ fontSize: '30px' }} />

              <BsInstagram style={{ fontSize: '30px' }} />

              <BsTwitter style={{ fontSize: '30px' }} />

              <BsYoutube style={{ fontSize: '30px' }} />
            </Container>
          </Card>
        </Container>
      </Section>
  )
}

export default Footer