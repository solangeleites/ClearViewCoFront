import React from 'react'
import { Card, Image, Name, Price, Button, ContainerDesc, ContainerButtons } from './ProductosStyled'
import { BsCart2, BsHeart } from 'react-icons/bs'
import { useDispatch } from 'react-redux'
import { addToCart } from '../../redux/cart/CartSlice'


const CardProductos = ({id, title, img, price}) => {

const dispatch = useDispatch()


  return (
    <Card>
    <Image src={img} alt={title}/>
    <ContainerDesc>
      <Name>{title}</Name>
      <Price>$ {price}</Price>
    </ContainerDesc>
    <Button 
    onClick={() => dispatch(addToCart({id, img, title, price}))}
    >
      {' '}
      <BsCart2 style={{ fontSize: '18px' }} />{' '}
    </Button>

  </Card>
  )
}

export default CardProductos