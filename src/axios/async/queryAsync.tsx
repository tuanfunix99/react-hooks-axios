import { AxiosRequestConfig } from "axios";
import { AxiosReqConfig, QueryMethod } from "../base";
import ReturnAxios from "../returnAxios";
import {
  FunctionAsyncReturnError,
  FunctionAsyncThrowError,
} from "../utils/functionAsync";

type QueryAsyncFunc = (
  url: string,
  method?: QueryMethod,
  config?: AxiosReqConfig
) => Promise<any>;

export type QueryAsyncReturn = {
  queryAsyncReturnError: QueryAsyncFunc;
  queryAsyncThrowError: QueryAsyncFunc;
};

function queryAsync(): QueryAsyncReturn {
  const axios = ReturnAxios();
  const queryAsyncReturnError = (
    url: string,
    method?: QueryMethod,
    config?: AxiosReqConfig
  ) =>
    FunctionAsyncReturnError<any>(async () => {
      const { data } = await axios[method ?? "get"](url, config);
      return data;
    });

  const queryAsyncThrowError = (
    url: string,
    type?: QueryMethod,
    config?: AxiosRequestConfig
  ) =>
    FunctionAsyncThrowError<any>(async () => {
      const { data } = await axios[type ?? "get"](url, config);
      return data;
    });

  return { queryAsyncReturnError, queryAsyncThrowError };
}

export default queryAsync;
