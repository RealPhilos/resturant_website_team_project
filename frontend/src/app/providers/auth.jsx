"use client";

import { createContext, useState } from "react";

export const AuthContext = createContext({
  isLoggedIn: false,
  user: null,
});

export default function AuthProvider({ children }) {
  const [user, setUser] = useState(null);
  const [isLoggedIn, setIsLoggedIn] = useState(false);


  return (
    <AuthContext.Provider value={{ isLoggedIn, setIsLoggedIn, user, setUser }}>
      {children}
    </AuthContext.Provider>
  );
}
