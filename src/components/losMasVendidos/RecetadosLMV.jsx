import React from 'react'
import { sampleSize } from 'lodash'
import { Products } from '../../data/Products'
import { Card, Image, Description, Price } from '../../pages/recetados/RecetadosStyled'

const RecetadosLMV = () => {
 const lentesRecetadosAleatorios = sampleSize(
    Products.filter((producto) => producto.category === 'GafasDeVista'), 6);

  return (
    <>
    {lentesRecetadosAleatorios.map((producto) => (
      <Card key={producto.id}>
        <Image src={producto.img} />
        <Description>{producto.title}</Description>
        <Price> $ {producto.price}</Price>
      </Card>
    ))}
    </>
  )
}

export default RecetadosLMV