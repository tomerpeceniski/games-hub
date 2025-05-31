import type ParentPlatform from "../models/fetch-platform-types";
import { useQuery } from "@tanstack/react-query";
import api from '../services/api-client'
import type DataResponse from "../models/data-response";

export default function usePlatforms() {
    return useQuery<ParentPlatform[], Error>({
        queryKey: ["platforms"],
        queryFn: () => api.get<DataResponse<ParentPlatform>>('/platforms/lists/parents').then(res => res.data.results),
        staleTime: 24 * 3600_000
    });
}