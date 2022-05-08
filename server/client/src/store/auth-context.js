import React from "react";

//Creating context and give default value
export const AuthContext = React.createContext({
  user: {},
  setUser: (user) => {},
});
//Provide context value
const AuthContextProvider = ({ children }) => {
  const [user, setUser] = React.useState({});
  const JWT = localStorage.getItem("JWT");
  return (
    <AuthContext.Provider value={{ user, JWT, setUser }}>
      {children}
    </AuthContext.Provider>
  );
};

export default AuthContextProvider;
