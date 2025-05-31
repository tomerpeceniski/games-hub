import { HStack, Image } from '@chakra-ui/react'
import logo from '../assets/games-hub-logo.png'
import { ColorModeButton } from './ui/color-mode'
import { type FC } from 'react'
import SearchBar from './SearchBar'

interface Props {
  searchSubmitter: (text: string) => void
}

const Nav: FC<Props> = ({ searchSubmitter }) => {
  return (
    <HStack>
      <Image src={logo} boxSize={"30px"} ></Image>
      <SearchBar searchSubmitter={searchSubmitter}></SearchBar>
      <ColorModeButton></ColorModeButton>
    </HStack>
  )
}

export default Nav