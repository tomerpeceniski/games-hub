import type { Game } from "../models/fetch-game-types";
import useGameQuery from "../state-management/store";
import { useQuery } from "@tanstack/react-query";
import ApiClient from "../services/ApiClient";

const apiClient = new ApiClient<Game>('/games');

export default function useGame() {
    const gameQuery = useGameQuery(s => s.gameQuery)

    return useQuery<Game[], Error>({
        queryKey: ['games', gameQuery],
        queryFn: () => apiClient.getAll({
            params: { genres: gameQuery.genreName, ordering: gameQuery.ordering?.value, search: gameQuery.search, parent_platforms: gameQuery.platform?.id }
        }),
        staleTime: 3600_000
    })
}