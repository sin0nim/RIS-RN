import { createContext, useContext } from 'react';
import ElemApiClient from '../ElemApiClient';

const ApiContext = createContext();

export default function ApiProvider({ children }) {
  const api = new ElemApiClient();

  return (
    <ApiContext.Provider value={api}>
      {children}
    </ApiContext.Provider>
  );
}

export function useApi() {
  return useContext(ApiContext);
}
