import { createContext, useContext } from "react";

export const MainStoreContext = createContext(null);

export const useMainStore = () => useContext(MainStoreContext);