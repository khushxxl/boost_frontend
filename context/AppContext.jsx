"use client";
import React, { createContext, useState } from "react";
import { ethers } from "ethers";

export const AppContext = createContext();

function AppProvider({ children }) {
  const [walletAddress, setwalletAddress] = useState("");

  return (
    <AppContext.Provider value={{ walletAddress, setwalletAddress }}>
      {children}
    </AppContext.Provider>
  );
}

export default AppProvider;
