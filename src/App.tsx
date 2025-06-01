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
        md: `
          'nav nav nav nav nav nav nav'
          'aside main main main main main main'
        `,
      }}
      templateColumns={{
        base: '1fr',
        md: 'repeat(7, 1fr)',
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
        <HStack justifyContent={{base:"center", md:"flex-start"}} width={"100%"}>
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