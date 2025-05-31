import type { Game } from "../models/fetch-game-types";
import useFetchData from "./useFetchData";
import useGameQuery from "../state-management/store";

export default function useGame(): {
    data: Game[],
    errorMessage: string,
    isLoading: boolean
} {
    const gameQuery = useGameQuery(s => s.gameQuery)

    return useFetchData<Game>(
        "/games",
        {
            params: {
                genres: gameQuery.genreName,
                parent_platforms: gameQuery.platform?.id,
                search: gameQuery.search,
                ordering: gameQuery.ordering?.value,
            }
        },
        [gameQuery]
    );
}