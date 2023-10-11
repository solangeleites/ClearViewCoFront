import React from 'react'
import { useNavigate } from 'react-router-dom'
import Button from '../../components/UI/Button/Button'

const Validation = () => {
    const navigate = useNavigate()

    return (
        <div className='validation-container'>

            <>
                <h1>!BIENVENIDO/A! Te llegará un mail con un código de verificación</h1>
                <Button onClick={() => {
                    navigate('/validate')
                }}>Validar tu cuenta</Button>
                <Button onClick={() => {
                    navigate('/')
                }}>Validar más tarde</Button>
            </>
        </div>
    )




}

export default Validation