"use client";

import { createContext, useState } from "react";

export const AuthContext = createContext({
  isLoggedIn: false,
  username: null,
});

export default function AuthProvider({ children }) {
  const [username, setUsername] = useState(null);
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  return (
    <AuthContext.Provider
      value={{ isLoggedIn, setIsLoggedIn, username, setUsername }}
    >
      {children}
    </AuthContext.Provider>
  );
}
