// context.js
"use client"
import React, { createContext, useContext, useState } from 'react';

const AppContext = createContext();

export const useAppContext = () => useContext(AppContext);

export const AppProvider = ({ children }) => {
  const [apiResult, setApiResult] = useState(null);
  const [apiError, setApiError] = useState(null);

  return (
    <AppContext.Provider value={{ apiResult, setApiResult, apiError, setApiError }}>
      {children}
    </AppContext.Provider>
  );
};
