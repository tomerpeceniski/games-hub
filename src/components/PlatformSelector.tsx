import { Menu, Button, Portal, Spinner } from '@chakra-ui/react'
import { FaChevronDown } from 'react-icons/fa'
import usePlatform from '../hooks/usePlatform';

const PlatformSelector = () => {
    const { errorMessage, isLoading, data: platforms } = usePlatform();
    return (
        <>
            {isLoading ? <Spinner></Spinner> :
                !errorMessage &&
                <Menu.Root>
                    <Menu.Trigger asChild>
                        <Button variant="outline" size="sm" borderWidth={0}>
                            Platforms
                            <FaChevronDown />
                        </Button>
                    </Menu.Trigger>
                    <Portal>
                        <Menu.Positioner>
                            <Menu.Content>
                                {platforms.map(p => <Menu.Item key={p.id} value={p.id}>{p.name}</Menu.Item>)}

                            </Menu.Content>
                        </Menu.Positioner>
                    </Portal>
                </Menu.Root>
            }
        </>

    )
}

export default PlatformSelector