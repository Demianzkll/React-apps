import { createContext, useState } from "react";

export const AppContext = createContext();

export function AppProvider({ children }) {
  const [message, setMessage] = useState("Введіть код");
  const [isAuthorized, setIsAuthorized] = useState(false);

  return (
    <AppContext.Provider value={{ message, setMessage, isAuthorized, setIsAuthorized }}>
      {children}
    </AppContext.Provider>
  );
}
