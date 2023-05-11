import React from 'react';
import { Container, ContainerProductos, Title } from './ProductosStyled';
import CardProductos from './CardProductos';
import { Products } from '../../data/Products';

const Productos = () => {
  return (
    <Container>
      <Title>Productos</Title>

      <ContainerProductos>

       {Products.map(product => (
        <CardProductos key={product.id} {...product} />
        ))}

      </ContainerProductos>

    </Container>
  );
};

export default Productos;
