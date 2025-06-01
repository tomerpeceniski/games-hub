import { Menu, Button, Portal } from "@chakra-ui/react";
import { FaChevronDown, FaChevronUp } from "react-icons/fa";
import { type FC, useState } from "react";
import { AnimatePresence, easeOut } from 'framer-motion';
import ComponentMotion from "./ComponentMotion";
import sortOptions from "../../config/sort-config.json"
import useGameQuery from "../state-management/store";

export type SortOption = typeof sortOptions[0];

const duration = 0.5;

const Sorter: FC = () => {
    const [isOpen, setIsOpen] = useState<boolean>(false);
    const selectedOrdering = useGameQuery(s => s.gameQuery.ordering);
    const setOrdering = useGameQuery(s => s.setOrdering);

    return (
        <>
            <Menu.Root onExitComplete={() => setIsOpen(false)}>
                <Menu.Trigger asChild>
                    <Button
                        variant="outline"
                        size="sm"
                        borderWidth={0}
                        onClick={() => setIsOpen(!isOpen)}
                    >
                        {` Order by ${selectedOrdering?.displayName || "Relevance"}`}
                        <AnimatePresence mode="wait">
                            {isOpen ?
                                <ComponentMotion key="up" duration={duration} timing={easeOut}>
                                    <FaChevronUp />
                                </ComponentMotion>
                                :
                                <ComponentMotion key="down" duration={duration} timing={easeOut}>
                                    <FaChevronDown />
                                </ComponentMotion>
                            }
                        </AnimatePresence>
                    </Button>
                </Menu.Trigger>
                <Portal>
                    <Menu.Positioner>
                        <ComponentMotion duration={duration} timing={easeOut}>
                            <Menu.Content>

                                {sortOptions.map((option) => (
                                    <Menu.Item
                                        key={option.value}
                                        onClick={() => {
                                            setOrdering(option);
                                            setIsOpen(false);
                                        }}
                                        value={option.value}
                                        cursor="pointer"
                                    >
                                        {option.displayName}
                                    </Menu.Item>
                                ))}
                            </Menu.Content>
                        </ComponentMotion>
                    </Menu.Positioner>
                </Portal>
            </Menu.Root>

        </>
    );
};

export default Sorter;