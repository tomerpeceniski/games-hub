import { useState, useEffect } from "react";
import type DataResponse from "../models/data-response";
import api from '../services/api-client'
import { AxiosError } from "axios";

export default function useFetchData<T>(endpoint: string): {
    data: T[],
    errorMessage: string,
    isLoading: boolean
} {
    const [data, setData] = useState<T[]>([]);
    const [isLoading, setIsLoading] = useState<boolean>(false);
    const [errorMessage, setErrorMessage] = useState<string>("")
    useEffect(() => {
        api.get<DataResponse<T>>(endpoint).then(res => setData(res.data.results))
            .catch((error: AxiosError) => setErrorMessage(error.message))
            .finally(() => setIsLoading(false));
        setIsLoading(true);
    }, []);
    return { data, errorMessage, isLoading }

}