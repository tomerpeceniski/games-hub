import { Menu, Button, Portal, Spinner } from "@chakra-ui/react";
import { FaChevronDown, FaChevronUp } from "react-icons/fa";
import useGener from "../hooks/useGenre";
import { type FC, useState } from "react";
import { easeOut } from 'framer-motion'
import ComponentMotion from "./ComponentMotion";
import useGameQuery from "../state-management/store";

const duration = 0.5;

const GenreSelector: FC = () => {
    const { errorMessage, isLoading, data: genres } = useGener();
    const [isOpen, setIsOpen] = useState<boolean>(false);
    const selectedGenre = useGameQuery(s => s.gameQuery.genreName);
    const setGenre = useGameQuery(s => s.setGenre)

    return (
        <>
            {isLoading ? (
                <Spinner></Spinner>
            ) : (
                !errorMessage && (
                    <Menu.Root onExitComplete={() => setIsOpen(false)}>
                        <Menu.Trigger asChild>
                            <Button
                                variant="outline"
                                size="sm"
                                borderWidth={0}
                                onClick={() => setIsOpen(!isOpen)}
                            >
                                {selectedGenre || "Genres"}
                                {isOpen ? <ComponentMotion duration={duration} timing={easeOut}>
                                    <FaChevronUp />
                                </ComponentMotion> : <FaChevronDown></FaChevronDown>}
                            </Button>
                        </Menu.Trigger>
                        <Portal>
                            <Menu.Positioner>
                                <ComponentMotion duration={duration} timing={easeOut}>
                                    <Menu.Content>
                                        <Menu.Item
                                            key={"genre"}
                                            onClick={() => {
                                                setGenre(null);
                                                setIsOpen(false);
                                            }}
                                            value={""}
                                        >
                                            Platforms
                                        </Menu.Item>
                                        {genres.map((g) => (
                                            <Menu.Item
                                                key={g.id}
                                                onClick={() => {
                                                    setGenre(g.slug);
                                                    setIsOpen(false);
                                                }}
                                                value={g.slug}
                                            >
                                                {g.name}
                                            </Menu.Item>
                                        ))}
                                    </Menu.Content>
                                </ComponentMotion>
                            </Menu.Positioner>
                        </Portal>
                    </Menu.Root>
                )
            )}
        </>
    );
};

export default GenreSelector;