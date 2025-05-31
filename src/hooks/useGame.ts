import type { Game } from "../models/fetch-game-types";
import useFetchData from "./useFetchData";
import type GameQuery from '../models/game-query'

export default function useGame(gameQuery: GameQuery): { data: Game[], errorMessage: string, isLoading: boolean } {
    return useFetchData<Game>(
        "/games",
        {
            params: {
                genres: gameQuery.genreName,
                parent_platforms: gameQuery.platform?.id,
                search: gameQuery.search,
            }
        },
        [gameQuery]
    );
}