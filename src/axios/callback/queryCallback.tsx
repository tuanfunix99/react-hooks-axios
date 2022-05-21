import { useState } from "react";
import { AxiosReqConfig, QueryMethod } from "../base";
import returnAxios from "../returnAxios";

function QueryCallback(
  url: string,
  config?: AxiosReqConfig
): [
  queryFunc: (input: {
    method?: QueryMethod;
    onComplete?: (data: any) => void;
    onError?: (err: any) => void;
  }) => void,
  process: { loading: boolean; errors: any; data: any }
] {
  const axios = returnAxios();
  const [loading, setLoading] = useState(false);
  const [errors, setErrors] = useState<any>([]);
  const [data, setData] = useState(null);

  function queryFunc(input: {
    method?: QueryMethod;
    body?: any;
    onComplete?: (data: any) => void;
    onError?: (err: any) => void;
  }) {
    const { onComplete, onError, method } = input;
    setLoading(true);
    axios[method ?? "get"](axios.defaults.baseURL + url, config)
      .then(({ data }) => {
        setLoading(false);
        setData(data);
        if (onComplete) {
          onComplete(data);
        }
      })
      .catch((err) => {
        setLoading(false);
        setErrors(err.response?.data);
        if (onError) {
          onError(err.response?.data);
        }
      });
  }

  return [queryFunc, { loading, data, errors }];
}

export default QueryCallback;
