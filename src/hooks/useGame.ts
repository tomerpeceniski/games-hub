import type { Game } from "../models/fetch-game-types";
import useGameQuery from "../state-management/store";
import { useQuery } from "@tanstack/react-query";
import api from '../services/api-client';
import type DataResponse from "../models/data-response";

export default function useGame() {
    const gameQuery = useGameQuery(s => s.gameQuery)

    return useQuery<Game[], Error>({
        queryKey: ['games', gameQuery],
        queryFn: () => api.get<DataResponse<Game>>('/xgames', {
            params: {
                genres: gameQuery.genreName,
                ordering: gameQuery.ordering,
                search: gameQuery.search,
                parent_platforms: gameQuery.platform?.id
            }
        }).then(res => res.data.results),
        staleTime: 3600_000
    })
}