import { HStack, Image } from '@chakra-ui/react'
import logo from '../assets/games-hub-logo.png'
import React from 'react'
import { ColorModeButton } from './ui/color-mode'

const Nav = () => {
  return (
    <HStack justifyContent={"space-between"}>
        <Image src={logo} boxSize={"30px"} ></Image>
        <ColorModeButton></ColorModeButton>
    </HStack>
  )
}

export default Nav