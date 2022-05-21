import queryCallback from "./queryCallback";
import mutationCallback from "./mutationCallback";
import returnAxios from "../returnAxios";

export function useAxiosCallback() {
  const axios = returnAxios();
  return { axios, queryCallback, mutationCallback };
}
