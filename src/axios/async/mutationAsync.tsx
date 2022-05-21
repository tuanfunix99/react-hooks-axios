import { AxiosRequestConfig } from "axios";
import { AxiosReqConfig, MutationMethod } from "../base";
import returnAxios from "../returnAxios";
import {
  FunctionAsyncReturnError,
  FunctionAsyncThrowError,
} from "../utils/functionAsync";

type MutationAsyncFunc = (
  url: string,
  method?: MutationMethod,
  value?: any,
  config?: AxiosReqConfig
) => Promise<any>;

export type MutationAsyncReturn = {
  mutationAsyncReturnError: MutationAsyncFunc;
  mutationAsyncThrowError: MutationAsyncFunc;
};

function mutationAsync(): MutationAsyncReturn {
  const axios = returnAxios();

  const mutationAsyncReturnError = (
    url: string,
    method?: MutationMethod,
    value?: any,
    config?: AxiosReqConfig
  ) =>
    FunctionAsyncReturnError<any>(async () => {
      const { data } = await axios[method ?? "post"](url, value ?? {}, config);
      return data;
    });

  const mutationAsyncThrowError = (
    url: string,
    type?: MutationMethod,
    value?: any,
    config?: AxiosRequestConfig
  ) =>
    FunctionAsyncThrowError<any>(async () => {
      const { data } = await axios[type ?? "post"](url, value ?? {}, config);
      return data;
    });

  return { mutationAsyncThrowError, mutationAsyncReturnError };
}

export default mutationAsync;
