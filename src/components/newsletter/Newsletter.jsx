import React from 'react';
import { Button, Input, Section, Title } from './NewsletterStyled';

const Newsletter = () => {
  return (
    <Section style={{ gap: '25px' }}>
      <Title>Suscribite a nuestro newsletter 🤍</Title>
      <Input type="email" placeholder="Email" />
      <Button>Suscribirse</Button>
      <p style={{ textTransform: 'none', color: 'white' }}>
        Recibí en tu mail todas nuestras promos y novedades.
      </p>
    </Section>
  );
};

export default Newsletter;
