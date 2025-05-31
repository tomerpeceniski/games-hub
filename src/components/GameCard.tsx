import { Card, Image, Text, Badge, HStack, VStack } from '@chakra-ui/react'
import React from 'react'
import type { Game } from '../models/fetch-game-types'
import Rater from './Rater'
import no_image from '../assets/no-image.png';

interface Props {
  game: Game
}

function getColors(metacritic: number): { color: string, bg: string } {
  return metacritic > 90 ? { color: "white", bg: "green" } : { color: "black", bg: "lightgray" }
}

const GameCard: React.FC<Props> = ({ game }) => {
  return (<Card.Root maxW="sm" overflow="hidden">
    <Image
      src={game.background_image || no_image}
      alt={`image of game ${game.name}`}
      objectFit={"cover"}
      height="100%"
    />
    <Card.Body>
      <Card.Title>{game.name}</Card.Title>

    </Card.Body>
    <Card.Footer>
      <VStack>Add commentMore actions
        <HStack justifyContent={"space-between"} width="100%">
          <Text >{game.parent_platforms.map(p => p.platform.name).join("; ")}</Text>
          {game.metacritic && <Badge {...getColors(game.metacritic)}>{game.metacritic}</Badge>}
        </HStack>
        <Rater rate={game.rating}></Rater>
      </VStack>
    </Card.Footer>

  </Card.Root>
  )
}

export default GameCard