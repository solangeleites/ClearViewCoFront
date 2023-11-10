import React from 'react'
import { deleteUser } from '../../redux/userSlice/UserSlice'
import { useNavigate } from 'react-router-dom'
import { useDispatch } from 'react-redux'

const Logout = () => {

    const navigate = useNavigate()
    const dispatch = useDispatch()

    const handleLogout = () => {
        dispatch(deleteUser())
        navigate('/')
    }

  return (
    <div onClick={handleLogout}>
        <p>Logout</p>
    </div>
  )
}

export default Logout