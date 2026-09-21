import { createContext, useState } from "react";

export const MyStore = createContext();

export const ContextProvider = ({ children }) => {
  const [toggle, setToggle] = useState(false);
  const [cart, setCart] = useState([]);

  return <MyStore.Provider value={{ toggle, setToggle, cart, setCart}}>{children}</MyStore.Provider>;
};
