import type ParentPlatform from "./fetch-platform-types";
import { type SortOption } from "../components/Sorter";

export default interface GameQuery {
    genreName: string | null;
    platform: ParentPlatform | null;
    search: string | null;
    ordering: SortOption | null;
}