import { AxiosProxyConfig, AxiosRequestHeaders } from "axios";

export type QueryMethod = "get" | "delete";

export type MutationMethod = "post" | "put" | "patch";

export interface AxiosReqConfig {
  baseURL?: string;
  headers?: AxiosRequestHeaders;
  params?: any;
  proxy?: AxiosProxyConfig | false;
}

export interface ArgsCallback<T> {
  method?: T;
  onCompleted?: (data: any) => void;
  onError?: (error: any) => void;
}

export type FunctionCallbackReturn<T> = (args: T) => void;

export type FunctionCallback<K, T extends ArgsCallback<K>> = (
  ...input: any[]
) => [
  func: FunctionCallbackReturn<T>,
  process: { loading?: boolean; error?: any; data?: any }
];
