"use client";
import React, { createContext, useState } from "react";
import { ethers } from "ethers";

export const AppContext = createContext();

function AppProvider({ children }) {
  const [walletAddress, setwalletAddress] = useState("");

  const options = [
    { img: require("../assets/zk.svg"), chain: "ZkSync" },
    { img: require("../assets/base.svg"), chain: "Base" },
    { img: require("../assets/scroll.svg"), chain: "Scroll" },
    { img: require("../assets/starknet.svg"), chain: "Starknet" },
  ];
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
