// src/app/AppContext.js
import React, { createContext, useState } from 'react';

export const AppContext = createContext();

export const AppContextProvider = ({ children }) => {
  const [isDarkMode, setIsDarkMode] = useState(false); // Initial state

  return (
    <AppContext.Provider value={{ isDarkMode, setIsDarkMode }}>
      {children}
    </AppContext.Provider>
  );
};
