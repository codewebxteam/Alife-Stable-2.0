"use client";

import React, { createContext, useContext, useState } from "react";

const AuthContext = createContext({
  currentUser: null,
  login: async () => {},
  logout: async () => {},
  signup: async () => {},
});

export const AuthProvider = ({ children }) => {
  const [currentUser, setCurrentUser] = useState(null);

  const login = async () => {};
  const logout = async () => {};
  const signup = async () => {};

  return (
    <AuthContext.Provider
      value={{
        currentUser,
        login,
        logout,
        signup,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => {
  return useContext(AuthContext);
};

export default AuthContext;
