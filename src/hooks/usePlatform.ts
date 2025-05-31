import type ParentPlatform from "../models/fetch-platform-types";
import { useQuery } from "@tanstack/react-query";
import ApiClient from "../services/ApiClient";

const apiClient = new ApiClient<ParentPlatform>("/platforms/lists/parents");

export default function usePlatforms() {
    return useQuery<ParentPlatform[], Error>({
        queryKey: ["platforms"],
        queryFn: () => apiClient.getAll(),
        staleTime: 24 * 3600_000
    });
}