import React from 'react'
import { Section } from './NewsletterStyled'

const Newsletter = () => {
  return (
    <Section style={{ backgroundColor: 'lightblue', gap: '25px' }}>
    <h3>Suscribite a nuestro newsletter</h3>
    <input
      type="email"
      placeholder="Email"
      style={{
        border: 'none',
        outline: 'none',
        padding: '10px 20px',
        width: '300px',
        fontFamily: 'Manrope',
        letterSpacing: '1px',
        borderRadius: '3px',
        textTransform: 'uppercase',
      }}
    />
    <button
      style={{
        border: 'none',
        outline: 'none',
        padding: '10px 50px',
        textAlign: 'center',
        fontFamily: 'Manrope',
        letterSpacing: '1px',
        borderRadius: '3px',
        backgroundColor: 'black',
        color: 'white',
        cursor: 'pointer',
        textTransform: 'uppercase',
      }}
    >
      Suscribirse
    </button>
    <p style={{ textTransform: 'none' }}>
      Recibí en tu mail todas nuestras promos y novedades.
    </p>
  </Section>
  )
}

export default Newsletter