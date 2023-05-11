import React from 'react'
import { CardFavoritos, ContainerDetalles, Delete, FavoritosContainer, ListContainer, Title } from './FavoritosStyled'

const Favoritos = () => {
  return (
   <FavoritosContainer>
    <Title>Tus favoritos</Title>
<ListContainer>
  <CardFavoritos>
    <img src="https://i.ibb.co/0j3QY0K/1.png" alt="1" border="0" />
    <ContainerDetalles>
      <Title>Gafas de sol</Title>
      <Title>$1520</Title>
      <Delete>Eliminar</Delete>
    </ContainerDetalles>
  </CardFavoritos>
  <CardFavoritos>
    <img src="https://i.ibb.co/0j3QY0K/1.png" alt="1" border="0" />
    <ContainerDetalles>
      <Title>Gafas de sol</Title>
      <Title>$1520</Title>
      <Delete>Eliminar</Delete>
    </ContainerDetalles>
  </CardFavoritos>
  <CardFavoritos>
    <img src="https://i.ibb.co/0j3QY0K/1.png" alt="1" border="0" />
    <ContainerDetalles>
      <Title>Gafas de sol</Title>
      <Title>$1520</Title>
      <Delete>Eliminar</Delete>
    </ContainerDetalles>
  </CardFavoritos>
  <CardFavoritos>
    <img src="https://i.ibb.co/0j3QY0K/1.png" alt="1" border="0" />
    <ContainerDetalles>
      <Title>Gafas de sol</Title>
      <Title>$1520</Title>
      <Delete>Eliminar</Delete>
    </ContainerDetalles>
  </CardFavoritos>

  <CardFavoritos>
    <img src="https://i.ibb.co/0j3QY0K/1.png" alt="1" border="0" />
    <ContainerDetalles>
      <Title>Gafas de sol</Title>
      <Title>$1520</Title>
      <Delete>Eliminar</Delete>
    </ContainerDetalles>
  </CardFavoritos>

  <CardFavoritos>
    <img src="https://i.ibb.co/0j3QY0K/1.png" alt="1" border="0" />
    <ContainerDetalles>
      <Title>Gafas de sol</Title>
      <Title>$1520</Title>
      <Delete>Eliminar</Delete>
    </ContainerDetalles>
  </CardFavoritos>
</ListContainer>

   </FavoritosContainer>
  )
}

export default Favoritos