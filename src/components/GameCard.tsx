import { Card, Image, Text } from '@chakra-ui/react'
import React from 'react'
import type { Game } from '../models/fetch-game-types'

interface Props {
  game: Game
}

const GameCard: React.FC<Props> = ({game}) => {
  return  (<Card.Root maxW="sm" overflow="hidden">
      <Image
        src={game.background_image}
        alt={`image of game ${game.name}`}
        objectFit={"cover"}
        height="100%"
      />
      <Card.Body gap="2">
        <Card.Title>{game.name}</Card.Title>
        
      </Card.Body>
      
    </Card.Root>
  )
}

export default GameCard