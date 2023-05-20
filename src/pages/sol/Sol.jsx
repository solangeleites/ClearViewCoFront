import React from 'react'
import { Outlet } from 'react-router-dom'
import { Card, Image, Description, Price } from './SolStyled'

const Sol = () => {
  return (
<>
<div  style={{display: 'flex', flexWrap: 'wrap', justifyContent:'center', width:'1000px', gap:'50px'}}>
    <Outlet />
    <Card>
      <Image src="https://res.cloudinary.com/dgyubvlec/image/upload/v1684501076/lmv2_esyvrk.webp" />
      <Description>Gafas de sol - Sunset</Description>
      <Price>$3000</Price>
    </Card>

    <Card>
      <Image src="https://res.cloudinary.com/dgyubvlec/image/upload/v1684501073/img3_xnnuqp.webp" />
      <Description>Gafas de sol - Tropicales</Description>
      <Price>$4000</Price>
    </Card>

    <Card>
      <Image src="https://res.cloudinary.com/dgyubvlec/image/upload/v1684501074/img11_bnumoo.webp" />
      <Description>Gafas de Sol - Sierra</Description>
      <Price>2600</Price>
    </Card>

    <Card>
      <Image src="https://res.cloudinary.com/dgyubvlec/image/upload/v1684501074/img13_hohq3g.webp" />
      <Description>Gafas de sol - Clásicas</Description>
      <Price>$2800</Price>
    </Card>
    <Card>
      <Image src="https://res.cloudinary.com/dgyubvlec/image/upload/v1684501074/img12_zoqmky.webp" />
      <Description>gafas de sol - wayfarer</Description>
      <Price>$2500</Price>
    </Card>
    <Card>
      <Image src="https://res.cloudinary.com/dgyubvlec/image/upload/v1684501074/img7_ngn3yu.webp" />
      <Description>gafas de sol - eclipse II</Description>
      <Price>$2200</Price>
    </Card>
    </div>
    </>
  )
}

export default Sol