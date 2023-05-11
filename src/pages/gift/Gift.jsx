import React from 'react';
import { SectionGift, Title, Description, Container } from './/GiftStyled';
import { GiftCards } from '../../data/GiftCards.js';
import CardGift from './GiftCard';

const Gift = () => {
  return (
    <SectionGift>

      <Title>Gift cards</Title>

      <Description style={{ width: '700px' }}>
        El regalo perfecto para cualquier ocasión: ¿Cumpleaños, aniversario,
        graduación? No importa la ocasión, nuestras gift cards son una excelente
        manera de mostrar tu amor y aprecio por los que más te importan.
      </Description>

      <Container style={{ padding: '50px 0px', gap: '20px' }}>

{GiftCards.map(gift => (
  <CardGift  key={gift.id} {...gift}/>
  ))}


      </Container>

    </SectionGift>
  );
};

export default Gift;
