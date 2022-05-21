import { AxiosRequestConfig } from "axios";
import { AxiosReqConfig, MutationMethod } from "../base";
import returnAxios from "../returnAxios";
import {
  FunctionAsyncReturnError,
  FunctionAsyncThrowError,
  Return,
} from "../utils/functionAsync";

type MutationAsyncReturnError = (
  url: string,
  body?: any,
  method?: MutationMethod,
  config?: AxiosReqConfig
) => Promise<Partial<Return<any>>>;

type MutationAsyncThrowError = (
  url: string,
  body?: any,
  method?: MutationMethod,
  config?: AxiosReqConfig
) => Promise<any>;


export type MutationAsyncReturn = {
  mutationAsyncReturnError: MutationAsyncReturnError;
  mutationAsyncThrowError: MutationAsyncThrowError;
};

function mutationAsync(): MutationAsyncReturn {
  const axios = returnAxios();

  const mutationAsyncReturnError = (
    url: string,
    body?: any,
    method?: MutationMethod,
    config?: AxiosReqConfig
  ) =>
    FunctionAsyncReturnError<any>(async () => {
      const { data } = await axios[method ?? "post"](url, body ?? {}, config);
      return data;
    });

  const mutationAsyncThrowError = (
    url: string,
    body?: any,
    type?: MutationMethod,
    config?: AxiosRequestConfig
  ) =>
    FunctionAsyncThrowError<any>(async () => {
      const { data } = await axios[type ?? "post"](url, body ?? {}, config);
      return data;
    });

  return { mutationAsyncThrowError, mutationAsyncReturnError };
}

export default mutationAsync;
