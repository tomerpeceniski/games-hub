import { Grid, GridItem, Stack, HStack, Box } from "@chakra-ui/react";
import Nav from "./components/Nav";
import GameGrid from "./components/GameGrid";
import GenreList from "./components/GenreList";
import PlatformSelector from "./components/PlatformSelector";
import Sorter from './components/Sorter'
import GenreSelector from "./components/GenreSelector";

function App() {
  return (
    <Grid
      templateAreas={{
        base: `'nav' 'main'`,
        md: `'nav nav' 'aside main'`,
      }}
    >
      <GridItem area="nav" m={2}>
        <Nav />
      </GridItem>
      <Stack hideBelow={"md"}>
        <GridItem area="aside" paddingX={5}>
          <GenreList />
        </GridItem>
      </Stack>

      <GridItem area="main" paddingX="5">
        <HStack justifyContent={{base:"center", md:"flex-start"}}>
          <PlatformSelector />
          <Sorter />
          <Box as="div" display={"inline"} hideBelow={"sm"} hideFrom={"md"}>
            <GenreSelector />
          </Box>
        </HStack>
        <GameGrid />
      </GridItem>
    </Grid >
  );
}

export default App;