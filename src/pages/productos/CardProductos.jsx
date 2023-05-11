import React from 'react'
import { Card, Image, Name, Price, Button, ContainerDesc, ContainerButtons } from './ProductosStyled'
import { BsCart2, BsHeart } from 'react-icons/bs'


const CardProductos = ({id, title, img, price}) => {
  return (
    <Card>
    <Image src={img} alt={title}/>
    <ContainerDesc>
      <Name>{title}</Name>
      <Price>$ {price}</Price>
    </ContainerDesc>
    <ContainerButtons>
    <Button>
      {' '}
      <BsCart2 style={{ fontSize: '18px' }} />{' '}
    </Button>

    <Button>
      {' '}
      <BsHeart style={{ fontSize: '18px' }} />{' '}
    </Button>
    </ContainerButtons>
  </Card>
  )
}

export default CardProductos