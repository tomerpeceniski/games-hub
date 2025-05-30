import { type FC } from 'react'
import { Avatar, Button, HStack, List, Text, Spinner } from '@chakra-ui/react';
import useGenre from '../hooks/useGenre';

interface Props {
    onSelectGenre: (genre: string) => void
}

const GenreList: FC<Props> = ({ onSelectGenre }) => {
    const { data: genres, errorMessage, isLoading } = useGenre();

    return isLoading ? <Spinner></Spinner> : (
        <>
            {
                errorMessage ? (
                    <Text color="red" fontSize={"2.5rem"}>
                        {errorMessage}
                    </Text>
                ) : (
                    <List.Root listStyle="none" maxHeight="85vh" overflow="auto">
                        {genres.map((g) => (
                            <List.Item key={g.id}>
                                <HStack padding={2}>
                                    <Avatar.Root shape="rounded" size="lg" me="-1">
                                        <Avatar.Fallback name={g.name} />
                                        <Avatar.Image src={g.image_background} />
                                    </Avatar.Root>
                                    <Button variant={"outline"} borderWidth="0" onClick={onSelectGenre.bind(undefined, g.name)}>{g.name}</Button>
                                </HStack>
                            </List.Item>
                        ))}
                    </List.Root>
                )
            }
        </>
    );
}

export default GenreList