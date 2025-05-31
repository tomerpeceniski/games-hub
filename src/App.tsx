import { Grid, GridItem, Stack, HStack, Box } from "@chakra-ui/react";
import Nav from "./components/Nav";
import GameGrid from "./components/GameGrid";
import GenreList from "./components/GenreList";
import { useState } from "react";
import PlatformSelector from "./components/PlatformSelector";
import type GameQuery from "./models/game-query";
import Sorter from './components/Sorter'
import GenreSelector from "./components/GenreSelector";

function App() {

  const [gameQuery, setGameQuery] = useState<GameQuery>({} as GameQuery);

  return (
    <Grid
      templateAreas={{
        base: `'nav' 'main'`,
        md: `'nav nav' 'aside main'`,
      }}
    >
      <GridItem area="nav">
        <Nav searchSubmitter={(text) => setGameQuery({ ...gameQuery, search: text })}></Nav>
      </GridItem>
      <Stack hideBelow={"md"}>
        <GridItem area="aside" paddingX={5}>
          <GenreList
            selectedGenre={gameQuery.genreName}
            onSelectGenre={(genreName: string | null) =>
              setGameQuery({ ...gameQuery, genreName })
            }
          />
        </GridItem>
      </Stack>

      <GridItem area="main" paddingX="5">
        <HStack justifyContent="space-around">
          <PlatformSelector
            onSelectPlatform={(platform) =>
              setGameQuery({ ...gameQuery, platform })
            }
            selectedPlatform={gameQuery.platform}
          ></PlatformSelector>
          <Sorter onSelectOrdering={(option) => setGameQuery({ ...gameQuery, ordering: option })} selectedOrdering={gameQuery.ordering}></Sorter>
          <Box as="div" display={"inline"} hideBelow={"sm"} hideFrom={"md"}><GenreSelector selectedGenre={gameQuery.genreName} onSelectGenre={(genreName) =>
            setGameQuery({ ...gameQuery, genreName })}
          ></GenreSelector></Box>
        </HStack>
        <GameGrid gameQuery={gameQuery} />
      </GridItem>
    </Grid >
  );
}

export default App;