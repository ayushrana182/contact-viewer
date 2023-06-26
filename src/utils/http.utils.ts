import axios, { AxiosResponse, AxiosError } from "axios";
import { IUser, IApiError } from "../types";

export const httpBase = () => {
  const api = axios.create();
  api.interceptors.request.use(
    (config) => {
      config.baseURL = `https://jsonplaceholder.typicode.com/`;

      config.responseType = "json";
      return config;
    },
    function (error: AxiosError<IApiError>) {
      return Promise.reject(error);
    }
  );

  api.interceptors.response.use(
    function (response: AxiosResponse) {
      return response;
    },
    async function (error: AxiosError<IApiError>) {
      const code = error?.code;
      const status = error?.response?.status;
      const data = error?.response?.data;

      return {
        code,
        status,
        data,
      };
    }
  );

  return api;
};

const get = async (endpoint: string): Promise<IUser[]> => {
  const response: AxiosResponse = await httpBase().get(`${endpoint}`);
  if ("error" in response.data) {
    throw new Error(response.data.message);
  }
  return response.data;
};

const httpUtils = {
  get,
};

export default httpUtils;
