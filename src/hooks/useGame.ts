import type { Game } from "../models/fetch-game-types";
import useFetchData from "./useFetchData";
import type ParentPlatform from "../models/fetch-platform-types";

export default function useGame(genreName: string | null, platform: ParentPlatform | null): { data: Game[], errorMessage: string, isLoading: boolean } {
    return useFetchData<Game>("/games", { params: { genres: genreName, parent_platforms: platform?.id } }, [genreName, platform]);
}