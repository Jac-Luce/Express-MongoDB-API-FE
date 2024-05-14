import React from 'react';
import { createContext } from 'react';
import { useState, useEffect } from 'react';

export const AuthContext = createContext(null);

export default function AuthContextProvider({children}) {

    const [token, setToken] = useState(localStorage.getItem("token" || ""));
    /*const [authenticated, setAuthenticated] = useState(true);

    useEffect(() => {
        setAuthenticated(token !== "");
    }, [token]); */

    const value = {token, setToken};

  return (
    
    <AuthContext.Provider value={value}> {children} </AuthContext.Provider>
  )
}
