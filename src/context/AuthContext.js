import { createContext, useState } from "react";

const AuthContext = createContext();

const AuthContextProvider = ({ children }) => {
  const [auth, setAuth] = useState(null);
  return (
    <AuthContext.Provider value={{ auth, setAuth }}>
      {children}{" "}
    </AuthContext.Provider>
  );
};
export { AuthContext };
export { AuthContextProvider };
