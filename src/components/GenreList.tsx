import { type FC } from 'react'
import { Avatar, Button, HStack, List, Text, Spinner } from '@chakra-ui/react';
import useGameQuery from "../state-management/store";
import useGenre from '../hooks/useGenre';

const GenreList: FC = () => {
    const selectedGenre = useGameQuery(s => s.gameQuery.genreName);
    const setGenre = useGameQuery(s => s.setGenre);
    const { data: genres, error, isLoading } = useGenre();

    return isLoading ? (
        <Spinner></Spinner>
    ) : (
        <>
            {error?.message ? (
                <Text color="red" fontSize={"2.5rem"}>
                    {error?.message}
                </Text>
            ) : (
                <List.Root listStyle="none" maxHeight="85vh" overflow="auto">
                    <List.Item key={"g.id"}>
                        <HStack marginStart={"4vw"}>
                            <Button
                                fontWeight={!selectedGenre ? "bold" : "normal"}
                                variant={"outline"}
                                borderWidth="0"
                                onClick={() => setGenre(null)}
                            >
                                All Genres
                            </Button>
                        </HStack>
                    </List.Item>
                    {genres?.map((g) => (
                        <List.Item key={g.id}>
                            <HStack padding={2}>
                                <Avatar.Root shape="rounded" size="lg" me="-1">
                                    <Avatar.Fallback name={g.name} />
                                    <Avatar.Image src={g.image_background} />
                                </Avatar.Root>
                                <Button
                                    fontWeight={selectedGenre === g.slug ? "bold" : "normal"}
                                    variant={"outline"}
                                    borderWidth="0"
                                    onClick={() => setGenre(g.slug)}
                                >
                                    {g.name}
                                </Button>
                            </HStack>
                        </List.Item>
                    ))}
                </List.Root>
            )}
        </>
    );
};

export default GenreList;