import React from 'react'
import { deleteUser } from '../../redux/userSlice/UserSlice'
import { useNavigate } from 'react-router-dom'
import { useDispatch } from 'react-redux'
import {MdOutlineLogout} from 'react-icons/md'

const Logout = () => {

    const navigate = useNavigate()
    const dispatch = useDispatch()

    const handleLogout = () => {
        dispatch(deleteUser())
        navigate('/')
    }

  return (
    <div onClick={handleLogout}>
        <p><MdOutlineLogout style={{ fontSize: '20px' }}/> </p>
    </div>
  )
}

export default Logout