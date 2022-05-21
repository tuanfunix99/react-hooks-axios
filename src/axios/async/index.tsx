import returnAxios from "../returnAxios";
import mutationAsync from "./mutationAsync";
import queryAsync from "./queryAsync";

export function useAxiosAsync(){
  const { mutationAsyncReturnError, mutationAsyncThrowError } = mutationAsync();
  const { queryAsyncReturnError, queryAsyncThrowError } = queryAsync();
  const axios = returnAxios();
  return {
    axios,
    queryAsyncReturnError,
    queryAsyncThrowError,
    mutationAsyncReturnError,
    mutationAsyncThrowError,
  };
}
