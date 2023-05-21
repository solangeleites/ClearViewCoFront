import React from 'react';
import { sampleSize } from 'lodash';
import { Products } from '../../data/Products';
import { Card, Image, Description, Price } from '../../pages/sol/SolStyled';

const SolLMV = () => {
  const lentesSolAleatorios = sampleSize(
    Products.filter((producto) => producto.category === 'GafasDeSol'),
    6
  );

  return (
    <>
      {lentesSolAleatorios.map((producto) => (
        <Card key={producto.id}>
          <Image src={producto.img} />
          <Description>{producto.title}</Description>
          <Price> $ {producto.price}</Price>
        </Card>
      ))}
    </>
  );
};

export default SolLMV;
