import React from 'react'
import { CardGift, ImageGift, TitleGift, Price, ContainerButtons, Button } from './GiftStyled'
import { BsCart2, BsHeart } from 'react-icons/bs'


const GiftCard = ({id, title, img, price}) => {
  return (
    <CardGift>
    <ImageGift src={img} alt={title} />
    <TitleGift>{title}</TitleGift>
    <Price> $ {price}</Price>
    <ContainerButtons>
    <Button>
      <BsCart2 style={{ fontSize: '18px' }}  />
    </Button>
    <Button>
      <BsHeart style={{ fontSize: '18px' }}  />
    </Button>
    </ContainerButtons>
  </CardGift>
  )
}

export default GiftCard