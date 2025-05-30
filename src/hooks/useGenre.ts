import type { Genre } from "../models/fetch-genre-types";
import useFetchData from "./useFetchData";

export default function useGenre() {
    return useFetchData<Genre>("/genres");
}