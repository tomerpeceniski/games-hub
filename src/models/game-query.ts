import type ParentPlatform from "./fetch-platform-types";

export default interface GameQuery {
    genreName: string | null;
    platform: ParentPlatform | null
}