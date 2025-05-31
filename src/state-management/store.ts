import { create } from "zustand";
import type ParentPlatform from "../models/fetch-platform-types";
import { type SortOption } from "../components/Sorter";

interface GameQuery {
    genreName: string | null;
    platform: ParentPlatform | null;
    search: string | null,
    ordering: SortOption | null
}

interface GameQueryStore {
    gameQuery: GameQuery;
    setText: (text: string | null) => void;
    setGenre: (genre: string | null) => void;
    setPlatform: (platform: ParentPlatform | null) => void;
    setOrdering: (ordering: SortOption | null) => void
}

const useGameQuery = create<GameQueryStore>(set => ({
    gameQuery: {} as GameQuery,
    setText: (text: string | null) => set((state) => ({
        gameQuery: state.gameQuery.search === text ? state.gameQuery : { search: text } as GameQuery,
    })),
    setGenre: (genreName: string | null) =>
        set((state) => ({
            gameQuery: state.gameQuery.genreName === genreName ? state.gameQuery : { ...state.gameQuery, genreName }
        })),
    setOrdering: (ordering: SortOption | null) => set((state) => ({
        gameQuery: state.gameQuery.ordering?.value===ordering?.value ? state.gameQuery :{...state.gameQuery, ordering}
    })),
    setPlatform: (platform: ParentPlatform | null) => set(state => ({
        gameQuery: state.gameQuery.platform?.id===platform?.id ? state.gameQuery :{...state.gameQuery, platform}
    }))
}))

export default useGameQuery;