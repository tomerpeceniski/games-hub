import type ParentPlatform from "../models/fetch-platform-types";
import useFetchData from "./useFetchData";

export default function usePlatform() : {data: ParentPlatform[], errorMessage:string, isLoading: boolean} {
    return useFetchData<ParentPlatform>("/platforms/lists/parents" );
}