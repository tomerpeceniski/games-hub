import type { Genre } from "../models/fetch-genre-types";
import { useQuery } from "@tanstack/react-query";
import api from '../services/api-client'
import type DataResponse from "../models/data-response";

export default function useGenre() {
    return useQuery<Genre[], Error>({
        queryKey: ['genres'],
        queryFn: () => api.get<DataResponse<Genre>>('/genres').then(res => res.data.results),
        staleTime: 3600000 * 24
    });
}