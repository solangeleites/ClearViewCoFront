import React from 'react';
import { BsFacebook, BsInstagram, BsTwitter, BsYoutube } from 'react-icons/bs';
import { Container, Section, Title, Card } from './FooterStyled';
import { Logo } from '../navbar/NavbarStyled';
import {FiMapPin} from 'react-icons/fi'
import {BsTelephone} from 'react-icons/bs'
import {MdAlternateEmail} from 'react-icons/md'


const Footer = () => {
  return (
    <Section>
      <Container>
        <Card>
          <Logo
            style={{
              fontSize: '22px',
              fontWeight: '600',
              paddingBottom: '20px',
            }}
          >
            Clear View Co.
          </Logo>
          <p
            style={{
              fontSize: '12px',
              width: '250px',
              textAlign: 'justify',
              paddingLeft: '10px',
            }}
          >
            es una empresa argentina que se dedica a la venta de lentes de sol y
            de vista. Nuestro objetivo es brindar a nuestros clientes,
            seguridad, predispoción y productos de calidad a precios accesibles.
          </p>
        </Card>

        <Card>
          <Title
            style={{
              fontSize: '22px',
              paddingBottom: '20px',
              textAlign: 'justify',
            }}
          >
            Información
          </Title>
          <p style={{display:'flex', alignItems:'center'}}><FiMapPin  style={{marginRight:'10px'}}/>Rosedal 9925 - Belgrano, CABA</p>
          <p style={{display:'flex', alignItems:'center'}}><FiMapPin  style={{marginRight:'10px'}}/>Alemania 420 - Palermo, CABA</p>
          <p  style={{display:'flex', alignItems:'center'}}><BsTelephone  style={{marginRight:'10px'}}/>
            <a href="tel:+5411-1234-5678" style={{ textDecoration: 'none' }}>
              +54 11 1234 5678 / 1234 5678
            </a>
          </p>
          <p  style={{display:'flex', alignItems:'center'}}><BsTelephone  style={{marginRight:'10px'}}/>
            <a href="tel:+5411-1234-5678" style={{ textDecoration: 'none' }}>
              +54 11 8765 4321 / 1234 5678
            </a>
          </p>
          <p  style={{display:'flex', alignItems:'center'}}><MdAlternateEmail  style={{marginRight:'10px'}}/>
            hola@clearviewco.com</p>
        </Card>
        

        <Card style={{border:'none', paddingBottom:'0'}}> 
          <Title style={{ paddingBottom: '20px' }}>Redes Sociales</Title>
          <Container style={{ flexDirection:'column', gap:'10px'}}>
          <span style={{display:'flex', justifyContent:'center', alignItems:'center'}}> <BsFacebook style={{ fontSize: '30px', cursor:'pointer' }} />      /ClearViewCo</span>
          <span style={{display:'flex', justifyContent:'center', alignItems:'center'}}> <BsInstagram style={{ fontSize: '30px', cursor:'pointer' }} />     /ClearViewCo</span>
          <span style={{display:'flex', justifyContent:'center', alignItems:'center'}}> <BsYoutube style={{ fontSize: '30px', cursor:'pointer' }} />   /ClearViewCo</span>
          </Container>
        </Card>
      </Container>
    </Section>
  );
};

export default Footer;
