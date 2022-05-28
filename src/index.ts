import axiosRoot from 'axios';
export { AxiosProvider } from "./axios";
export { useMutation } from "./axios/mutation";
export { useQuery } from "./axios/query";
export { useTransaction } from "./axios/transaction";
export { AxiosReqConfig } from './axios/base'
export const axios = axiosRoot;