import React from 'react'
import { HambugerContainer, Icon } from './BarsMenuStyle'
import { useContext } from 'react'
import { MenuContext } from '../../context/Context'

const BarsMenu = () => {
const ctx = useContext(MenuContext)

  return (
  <HambugerContainer onClick={ctx.toggleMenu}>
    <Icon clicked= {ctx.isMenuOpen}/>
  </HambugerContainer>
  )
}

export default BarsMenu