import { useState } from "react";
import { AxiosReqConfig, MutationMethod } from "../base";
import returnAxios from "../returnAxios";

function MutationCallback(
  url: string,
  config?: AxiosReqConfig
): [
  mutationFunc: (input: {
    method?: MutationMethod;
    body?: any;
    onComplete?: (data: any) => void;
    onError?: (err: any) => void;
  }) => void,
  process: { loading: boolean; error: any; data: any }
] {
  const axios = returnAxios();
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<any>(null);
  const [data, setData] = useState(null);

  function mutationFunc(input: {
    method?: MutationMethod;
    body?: any;
    onComplete?: (data: any) => void;
    onError?: (err: Array<any>) => void;
  }) {
    const { body, onComplete, onError, method } = input;
    setLoading(true);
    axios[method ?? "post"](url, body ?? {}, config)
      .then(({ data }) => {
        setLoading(false);
        setData(data);
        if (onComplete) {
          onComplete(data);
        }
      })
      .catch((err) => {
        setLoading(false);
        setError(err.response?.data);
        if (onError) {
          onError(err.response?.data);
        }
      });
  }

  return [mutationFunc, { loading, data, error }];
}

export default MutationCallback;
