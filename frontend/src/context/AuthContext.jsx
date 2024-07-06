import React, { createContext, useState, useContext } from "react";
import PropTypes from "prop-types";

const AuthContext = createContext();

export const useAuth = () => {
  return useContext(AuthContext);
};

export const AuthProvider = ({ children }) => {
  const [authState, setAuthState] = useState(null);

  const login = (user) => {
    setAuthState(user);
  };

  const logout = () => {
    setAuthState(null);
  };

  return (
    <AuthContext.Provider value={{ authState, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
};

AuthProvider.propTypes = {
  children: PropTypes.node.isRequired,
};
