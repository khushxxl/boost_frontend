"use client";
import React, { createContext, useState } from "react";
import { ethers } from "ethers";

export const AppContext = createContext();

function AppProvider({ children }) {
  const [walletAddress, setwalletAddress] = useState("");

  const options = ["ZkSync", "Base", "Scroll", "Starknet"];
  const [chainSelected, setchainSelected] = useState(null);

  return (
    <AppContext.Provider
      value={{
        walletAddress,
        setwalletAddress,
        options,
        chainSelected,
        setchainSelected,
      }}
    >
      {children}
    </AppContext.Provider>
  );
}

export default AppProvider;
