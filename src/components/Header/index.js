import React from 'react'
import { GiHamburgerMenu } from 'react-icons/gi'
import { Burger, HeaderWrapper } from './styles'

export const Header = ({ isOpen, setIsOpen }) => {

  return (
    <HeaderWrapper >
      <Burger animate={{ x: isOpen ? 245 : 0 }}
        transition={{ stiffness: 50, type: 'spring' }}>
        <GiHamburgerMenu size={30} onClick={() => setIsOpen(prev => !prev)} />
      </Burger>
    </HeaderWrapper>
  )
}

