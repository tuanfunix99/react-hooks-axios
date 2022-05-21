import { useState } from "react";
import { AxiosReqConfig, QueryMethod } from "../base";
import returnAxios from "../returnAxios";
import {
  FunctionCallback,
  FunctionCallbackReturn,
  ArgsCallback,
} from "../base";

export type QueryFunctionCallback = FunctionCallback<
  QueryMethod,
  ArgsCallback<QueryMethod>
>;

const QueryCallback: QueryFunctionCallback = (
  url: string,
  config?: AxiosReqConfig
) => {
  const axios = returnAxios();
  const [loading, setLoading] = useState(false);
  const [errors, setErrors] = useState<any>([]);
  const [data, setData] = useState(null);

  const queryFunc: FunctionCallbackReturn<ArgsCallback<QueryMethod>> = ({
    method,
    onCompleted,
    onError,
  }) => {
    setLoading(true);
    axios[method ?? "get"](url, config)
      .then(({ data }) => {
        setLoading(false);
        setData(data);
        if (onCompleted) {
          onCompleted(data);
        }
      })
      .catch((error) => {
        setLoading(false);
        setErrors(error.response?.data);
        if (onError) {
          onError(error.response?.data);
        }
      });
  };

  return [queryFunc, { loading, data, errors }];
};

export default QueryCallback;
