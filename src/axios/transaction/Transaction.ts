import { AxiosStatic } from "axios";
import { AxiosReqConfig, MutationMethod, QueryMethod } from "../base";

type Mutation = (
  url: string,
  body: any,
  method?: MutationMethod,
  config?: AxiosReqConfig
) => Promise<any>;

type Query = (
  url: string,
  method?: QueryMethod,
  config?: AxiosReqConfig
) => Promise<any>;

class Transaction {
  constructor(
    public axios: AxiosStatic,
    public query: Query,
    public mutation: Mutation,
  ) {
    this.axios = axios;
    this.mutation = mutation;
    this.query = query;
  }
}

export default Transaction;
