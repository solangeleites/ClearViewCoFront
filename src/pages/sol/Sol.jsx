import React from 'react'
import { Outlet } from 'react-router-dom'
import { Card, Image, Description, Price } from './SolStyled'

const Sol = () => {
  return (
<>
    <Outlet />
    <Card>
      <Image src="../../../public/img/lmv2.jpeg" />
      <Description>Radiant Shades</Description>
      <Price>$100</Price>
    </Card>

    <Card>
      <Image src="../../../public/img/lmv2.jpeg" />
      <Description>Radiant Shades</Description>
      <Price>$100</Price>
    </Card>

    <Card>
      <Image src="../../../public/img/lmv2.jpeg" />
      <Description>Radiant Shades</Description>
      <Price>$100</Price>
    </Card>

    <Card>
      <Image src="../../../public/img/lmv2.jpeg" />
      <Description>Radiant Shades</Description>
      <Price>$100</Price>
    </Card>
    <Card>
      <Image src="../../../public/img/lmv2.jpeg" />
      <Description>Radiant Shades</Description>
      <Price>$100</Price>
    </Card>
    <Card>
      <Image src="../../../public/img/lmv2.jpeg" />
      <Description>Radiant Shades</Description>
      <Price>$100</Price>
    </Card>
    <Card>
      <Image src="../../../public/img/lmv2.jpeg" />
      <Description>Radiant Shades</Description>
      <Price>$100</Price>
    </Card>
    <Card>
      <Image src="../../../public/img/lmv2.jpeg" />
      <Description>Radiant Shades</Description>
      <Price>$100</Price>
    </Card>
    
    </>
  )
}

export default Sol