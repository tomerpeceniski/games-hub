import { InputGroup, Input, Box, HStack } from '@chakra-ui/react'
import { type FormEvent, useRef, type FC } from 'react'
import { FaSearch} from 'react-icons/fa'
import useGameQuery from '../state-management/store'
import { BiSolidSend, BiEraser } from 'react-icons/bi'

const SearchBar: FC = () => {
    const setSearchText = useGameQuery(s => s.setText)
    const inputElem = useRef<HTMLInputElement>(null);

    const onSubmit = (event: FormEvent) => {
        event.preventDefault();
        inputElem.current?.blur();
        setSearchText(inputElem.current?.value || "");
    }

    const cleanInput = () => {
        setSearchText(null);
        inputElem.current!.value = ""
    }

    return (
        <Box as="form" onSubmit={onSubmit} width={{md:"50%", base:"100%"} }>
            <InputGroup
                startElement={<FaSearch></FaSearch>}
                endElement={
                    <HStack gap={3} width={"100%"}>
                        <BiSolidSend
                            onClick={onSubmit}
                            cursor={"pointer"}
                        />
                        <BiEraser
                            onClick={cleanInput}
                            cursor={"pointer"}
                        />
                    </HStack>
                }>
                <Input ref={inputElem} borderRadius={"30px"} placeholder='Search games...'
                />
            </InputGroup>
        </Box>

    )
}

export default SearchBar;