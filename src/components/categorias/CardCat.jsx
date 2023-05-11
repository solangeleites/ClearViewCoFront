import React from 'react';
import { Image, Card, Description, Button } from './CategoriasStyled';

const CardCat = ({ img, title, category }) => {
  return (
    <Card>
      <Image src={img} alt={category} />
      <Description>{title}</Description>
      <Button>Ver todos</Button>
    </Card>
  );
};

export default CardCat;
