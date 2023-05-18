import React from 'react'
import { ProductsContainer, Title, ListContainerCart } from './CarritoStyled'
import Table from '../../components/table/Table'
import SpanningTable from '../../components/table/Table'
import { useSelector } from 'react-redux'

const Carrito = () => {
const {cartItems} = useSelector(state => state.cart)

  return (
   <ProductsContainer>
    <Title style={{marginTop:'20px'}}>Tu carrito</Title>
    <ListContainerCart>
        {cartItems.length ? (
          <SpanningTable cartItems={cartItems} />
        ) : (
          <p>No hay productos en el carrito</p>
        )}
      </ListContainerCart>

   </ProductsContainer>
  )
}

export default Carrito