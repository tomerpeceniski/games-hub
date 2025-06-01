import { Menu, Button, Portal, Spinner } from "@chakra-ui/react";
import { FaChevronDown, FaChevronUp } from "react-icons/fa";
import usePlatform from "../hooks/usePlatform";
import { type FC, useState } from "react";
import { easeOut, AnimatePresence } from 'framer-motion'
import ComponentMotion from "./ComponentMotion";
import useGameQuery from "../state-management/store";

const duration = 0.5;

const PlatformSelector: FC = () => {
  const selectedPlatform = useGameQuery(s => s.gameQuery.platform);
  const setPlatform = useGameQuery(s => s.setPlatform);
  const { error, isLoading, data: platforms } = usePlatform();
  const [isOpen, setIsOpen] = useState<boolean>(false);

  return (
    <>
      {isLoading ? (
        <Spinner></Spinner>
      ) : (
        !error && (
          <Menu.Root onExitComplete={() => setIsOpen(false)}>
            <Menu.Trigger asChild>
              <Button
                variant="outline"
                size="sm"
                borderWidth={0}
                minWidth="160px"
                onClick={() => setIsOpen(!isOpen)}
                justifyContent={"space-between"}
              >
                {selectedPlatform?.name || "All Platforms"}
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
                    <Menu.Item
                      key={"p.id"}
                      onClick={() => {
                        setPlatform(null);
                        setIsOpen(false);
                      }}
                      value={""}
                      cursor="pointer"
                    >
                      All Platforms
                    </Menu.Item>
                    {platforms?.map((p) => (
                      <Menu.Item
                        key={p.id}
                        onClick={() => {
                          setPlatform(p);
                          setIsOpen(false);
                        }}
                        value={p.id}
                        cursor="pointer"
                      >
                        {p.name}
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

export default PlatformSelector;