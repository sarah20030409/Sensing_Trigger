import { createContext, useContext, useState } from "react";

// This script use to record the state of the button (isn't clicked).
// https://medium.com/@Hsu.Yang-Min/day14-%E6%88%91%E7%9A%84-react-%E5%AD%B8%E7%BF%92%E8%A8%98%E9%8C%84-createcontext-usecontext-5db44cf36e9c
const ButtonContext = createContext();

export function ButtonProvider({ children }) {
  const [isAnyButtonAnimating, setIsAnyButtonAnimating] = useState(false);

  return (
    <ButtonContext.Provider
      value={{ isAnyButtonAnimating, setIsAnyButtonAnimating }}
    >
      {children}
    </ButtonContext.Provider>
  );
}

export const useButtonContext = () => useContext(ButtonContext); // Custom Hook
