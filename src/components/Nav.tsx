import { HStack, Image } from '@chakra-ui/react'
import logo from '../assets/games-hub-logo.png'
import { ColorModeButton } from './ui/color-mode'
import { type FC } from 'react'
import SearchBar from './SearchBar'

const Nav: FC = () => {
  return (
    <HStack justifyContent={"space-between"}>
      <Image src={logo} boxSize={"30px"} ></Image>
      <SearchBar/>
      <ColorModeButton></ColorModeButton>
    </HStack>
  )
}

export default Nav