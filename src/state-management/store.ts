import { create } from "zustand";
import type GameQuery from "../models/game-query";
import type ParentPlatform from "../models/fetch-platform-types";
import { type SortOption } from "../components/Sorter";

interface GameQueryStore {
    gameQuery: GameQuery;
    setText: (text: string | null) => void;
    setGenre: (genre: string | null) => void;
    setPlatform: (platform: ParentPlatform | null) => void;
    setOrdering: (ordering: SortOption | null) => void
}

const useGameQuery = create<GameQueryStore>(set => ({
    gameQuery: {} as GameQuery,
    setText: (text: string | null) => set(() => ({
        gameQuery: { search: text } as GameQuery,
    })),
    setGenre: (genreName: string | null) => set((state) => ({
        gameQuery: { ...state.gameQuery, genreName }
    })),
    setOrdering: (ordering: SortOption | null) => set((state) => ({
        gameQuery: { ...state.gameQuery, ordering }
    })),
    setPlatform: (platform: ParentPlatform | null) => set(state => ({
        gameQuery: { ...state.gameQuery, platform }
    }))
}))

export default useGameQuery;