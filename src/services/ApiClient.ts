import type DataResponse from "../models/data-response";
import api from "./api-client";

interface ApiConfig {
  headers?: any;
  params?: any;
}
export default class ApiClient<T> {
  constructor(public readonly endpoint: string) {}

  async getAll(config: ApiConfig = {}): Promise<T[]>{
    const res = await api.get<DataResponse<T>>(this.endpoint, config);
    return res.data.results;
  }
}