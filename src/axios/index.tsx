import { createContext } from "react";
import axios, { AxiosStatic } from "axios";

type AxiosInitial = {
  axios: AxiosStatic;
};

type PropsType = {
  children: React.ReactNode;
  axios: AxiosStatic;
};

const axiosContext = createContext<AxiosInitial>({
  axios: axios,
});

export const AxiosProvider = ({ children, axios }: PropsType) => {
  return (
    <axiosContext.Provider value={{ axios: axios }}>
      {children}
    </axiosContext.Provider>
  );
};

export default axiosContext;
