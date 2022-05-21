import { AxiosProxyConfig, AxiosRequestHeaders } from "axios";

export type QueryMethod = "get" | "delete";

export type MutationMethod = "post" | "put" | "patch";

export interface AxiosReqConfig {
  baseURL?: string;
  headers?: AxiosRequestHeaders;
  params?: any;
  proxy?: AxiosProxyConfig | false;
}

export type FunctionChild<T> = (args: T) => Promise<void>;

export type FunctionCallback<T> = () => [
  func: FunctionChild<T>,
  process: { loading?: boolean; error?: any; data?: any }
];
