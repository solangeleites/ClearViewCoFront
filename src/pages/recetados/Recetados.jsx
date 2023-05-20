import React from 'react';
import { Card,Image, Description, Price,  } from './RecetadosStyled';


const Recetados = () => {
  return (
    <>
    <div  style={{display: 'flex', flexWrap: 'wrap', justifyContent:'center', gap: '20px'}}>

      <Card>
        <Image src="https://res.cloudinary.com/dgyubvlec/image/upload/v1684501073/img1_dmtcdi.webp" />
        <Description>gafas de vista - Violet</Description>
        <Price>$2500</Price>
      </Card>

      <Card>
        <Image src="https://res.cloudinary.com/dgyubvlec/image/upload/v1684501075/img28_clt0tr.webp" />
        <Description>gafas de vista orange</Description>
        <Price>$3500</Price>
      </Card>

      <Card>
        <Image src="https://res.cloudinary.com/dgyubvlec/image/upload/v1684501074/img21_s89hys.webp" />
        <Description>gafas de vista delicated</Description>
        <Price>$6780</Price>
      </Card>

      <Card>
        <Image src="https://res.cloudinary.com/dgyubvlec/image/upload/v1684501075/img27_dd1cqo.webp" />
        <Description>gafas de vista - shane</Description>
        <Price>$3200</Price>
      </Card>

      <Card>
        <Image src="https://res.cloudinary.com/dgyubvlec/image/upload/v1684501074/img24_hfwydg.webp" />
        <Description>gafas de vista - circle</Description>
        <Price>$5300</Price>
      </Card>

      <Card>
        <Image src="https://res.cloudinary.com/dgyubvlec/image/upload/v1684501075/img26_uy26ak.webp" />
        <Description>gafas de vista - clasicas</Description>
        <Price>$4900</Price>
      </Card>

      </div>
    </>
  );
};

export default Recetados;
