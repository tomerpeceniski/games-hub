import { InputGroup, Input, Box } from '@chakra-ui/react'
import { type FormEvent, useRef, type FC } from 'react'
import { FaSearch } from 'react-icons/fa'

interface Props {
    searchSubmitter: (text: string) => void
}

const SearchBar: FC<Props> = ({ searchSubmitter }) => {
    const inputElem = useRef<HTMLInputElement>(null);
    const onSubmit = (event: FormEvent) => {
        event.preventDefault();
        inputElem.current?.blur();
        searchSubmitter(inputElem.current?.value || "")
    }

    return (

        <Box as="form" onSubmit={onSubmit} boxSize="100%">
            <InputGroup startElement={<FaSearch></FaSearch>}>
                <Input onFocus={() => inputElem.current?.value && (inputElem.current.value = "")} ref={inputElem} borderRadius={"30px"} placeholder='Search games...' />
            </InputGroup>
        </Box>

    )
}

export default SearchBar;