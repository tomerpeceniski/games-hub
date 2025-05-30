import { AxiosError } from 'axios';
import { useState, useEffect } from 'react'
import api from '../services/api-client'
import type { Genre, GenresResponse } from '../models/fetch-genre-types';
import { Text } from '@chakra-ui/react';

const GenreList = () => {
    const [genres, setGenres] = useState<Genre[]>([]);
    const [errorMessage, setErrorMessage] = useState<string>("")

    useEffect(() => {
        api.get<GenresResponse>("/genres").then(res => setGenres(res.data.results))
            .catch((error: AxiosError) => setErrorMessage(error.message))
    }, [])
    
    return (
        <>
            {errorMessage ? <Text color="red" fontSize={"2.5rem"}>{errorMessage}</Text> :
                <ul>
                    {genres.map(g => <li key={g.id}>{g.name}</li>)}
                </ul>}
        </>
    )
}

export default GenreList