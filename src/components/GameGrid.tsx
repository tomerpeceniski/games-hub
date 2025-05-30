import useGame from "../hooks/useGame";
import GameCard from "./GameCard";
import { Text, SimpleGrid, Spinner } from '@chakra-ui/react'
import type { FC } from 'react'
import type ParentPlatform from "../models/fetch-platform-types";

interface Props {
    selectedGenre: string | null;
    selectedPlatform: ParentPlatform | null;
}


const GameGrid: FC<Props> = ({selectedGenre, selectedPlatform}) => {
    const {data: games, errorMessage, isLoading} = useGame(selectedGenre, selectedPlatform);

    return isLoading ? <Spinner /> : (<>
        {errorMessage ? <Text color="red" fontSize={"2.5rem"}>{errorMessage}</Text> :
            <SimpleGrid paddingEnd={2} maxHeight="85vh" overflow="auto" marginTop="2vh" columns={
                {
                    base: 1,
                    sm: 2,
                    md: 3
                }
            } gap={5}>
                {games.map(g => <GameCard key={g.id} game={g} />)}
            </SimpleGrid>}
    </>
    )

}

export default GameGrid