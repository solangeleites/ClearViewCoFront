import React from 'react'
import { Section, Container, Image } from './ContactoStyled'
const Contacto = () => {
  return (
    <Section>
        <Container style={{flexDirection: 'column' }}>
            <h3>Contactanos</h3>
            <Container style={{flexDirection:'row' }}>
              <Image style={{height:'600px', width:'400px'}} src='../../../public/img/img-form.jpg' />

              <Container style={{width:'600px', height:'600px'}}>

                <form style={{display: 'flex', flexDirection: 'column', justifyContent:'space-around', height:'600px', }}>
                <input style={{padding:'10px 20px',  outline:'none', fontFamily:'Manrope', width: '300px', letterSpacing:'1px', border:'1px solid black'}} type="text" placeholder="Nombre" />
                <input style={{padding:'10px 20px',  outline:'none', fontFamily:'Manrope', width: '300px', letterSpacing:'1px', border:'0.5px solid black'}} type="text" placeholder="Apellido" />
                <input style={{padding:'10px 20px', outline:'none', fontFamily:'Manrope', width: '300px', letterSpacing:'1px', border:'1px solid black'}} type="text" placeholder="Email" />
                <input style={{padding:'10px 20px', fpontFamily:'Manrope', letterSpacing:'1px', border:'1px solid black'}} type="text" placeholder="Mensaje" />
                </form>
                </Container>


            </Container>

        </Container>
</Section>
  )
}

export default Contacto