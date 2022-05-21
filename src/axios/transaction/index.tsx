import { useState } from "react";
import { useAxiosAsync } from "../async";
import Transaction from "./Transaction";
import { FunctionCallback, FunctionChild } from "../base";

type T = {
  onRun: (transaction: Transaction) => Promise<void>;
  onError?: (error: any) => void;
};

export const useAxiosTransaction: FunctionCallback<T> = () => {
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false);

  const { axios, queryAsyncThrowError, mutationAsyncThrowError } =
    useAxiosAsync();

  const query = queryAsyncThrowError;
  const mutation = mutationAsyncThrowError;

  const transactionFunc: FunctionChild<T> = async ({ onRun, onError }) => {
    setLoading(true);
    try {
      await onRun(new Transaction(axios, query, mutation));
      setLoading(false);
    } catch (error: any) {
      setLoading(false);
      setError(error);
      if (onError) {
        onError(error);
      }
    }
  };

  return [transactionFunc, { loading, error }];
};
