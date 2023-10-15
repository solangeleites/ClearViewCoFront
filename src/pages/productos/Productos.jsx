import React from 'react';
import { Container, ContainerProductos, Title } from './ProductosStyled';
import CardProductos from './CardProductos';
import { Products } from '../../data/Products';

// import axios from 'axios';
// import { useQuery } from 'react-query';


// const fetchProductos = async () => {
//   try {
//     const response = await axios.get('https://clearviewcoapi.vercel.app/');
//     return response.data;
//   } catch (error) {
//     console.error('Error al obtener los datos:', error);
//     throw new Error('No se pudieron cargar los productos');
//   }
// };


const Productos = () => {
  // const {data} = useQuery('productos', fetchProductos);

const data = Products;
  return (
    <Container>
      <Title>Productos</Title>

      <ContainerProductos>
      {data && data.map((Products) => (
          <CardProductos key={Products.id} {...Products} />
        ))}
      </ContainerProductos>
    </Container>
  );
};

export default Productos;
