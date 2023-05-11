import React from 'react'
import { FavoritosContainer, Title } from '../favoritos/FavoritosStyled'
import {  ListContainerCart } from './CarritoStyled'
import Table from '../../components/table/Table'

const Carrito = () => {
  return (
   <FavoritosContainer>
    <Title style={{marginTop:'20px'}}>Tu carrito</Title>
    <ListContainerCart>

<Table />

    </ListContainerCart>

   </FavoritosContainer>
  )
}

export default Carrito