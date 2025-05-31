import { Menu, Button, Portal, Spinner } from "@chakra-ui/react";
import { FaChevronDown, FaChevronUp } from "react-icons/fa";
import usePlatform from "../hooks/usePlatform";
import { type FC, useState } from "react";
import type ParentPlatform from "../models/fetch-platform-types";
import { easeOut } from 'framer-motion'
import ComponentMotion from "./ComponentMotion";

const duration = 0.5;

interface Props {
  selectedPlatform: ParentPlatform | null;
  onSelectPlatform: (platform: ParentPlatform | null) => void;
}

const PlatformSelector: FC<Props> = ({
  selectedPlatform,
  onSelectPlatform,
}) => {
  const { errorMessage, isLoading, data: platforms } = usePlatform();
  const [isOpen, setIsOpen] = useState<boolean>(false);

  return (
    <>
      {isLoading ? (
        <Spinner></Spinner>
      ) : (
        !errorMessage && (
          <Menu.Root>
            <Menu.Trigger asChild>
              <Button
                variant="outline"
                size="sm"
                borderWidth={0}
                onClick={() => setIsOpen(!isOpen)}
              >
                {selectedPlatform?.name || "Platforms"}
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
                      key={"p.id"}
                      onClick={() => {
                        onSelectPlatform(null);
                        setIsOpen(false);
                      }}
                      value={""}
                    >
                      Platforms
                    </Menu.Item>
                    {platforms.map((p) => (
                      <Menu.Item
                        key={p.id}
                        onClick={() => {
                          onSelectPlatform(p);
                          setIsOpen(false);
                        }}
                        value={p.id}
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