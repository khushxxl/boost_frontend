"use client";
import React, { createContext, useState } from "react";
import { ethers } from "ethers";
import { lineaNFTS, nftData } from "../utils/constants";

export const AppContext = createContext();

function AppProvider({ children }) {
  const [walletAddress, setwalletAddress] = useState("");
  const [nftsToUse, setnftsToUse] = useState(lineaNFTS);

  const options = [
    { img: require("../assets/zk.svg"), chain: "ZkSync" },
    { img: require("../assets/base.svg"), chain: "Base" },
    // { img: require("../assets/scroll.svg"), chain: "Scroll" },
    // { img: require("../assets/starknet.svg"), chain: "Starknet" },
    { img: require("../assets/linea.svg"), chain: "Linea" },
  ];

  const [chainSelected, setchainSelected] = useState(null);
  const [myBoostsChain, setmyBoostsChain] = useState(
    options[options.length - 1]
  );

  return (
    <AppContext.Provider
      value={{
        walletAddress,
        setwalletAddress,
        options,
        chainSelected,
        setchainSelected,
        myBoostsChain,
        setmyBoostsChain,
        nftsToUse,
        setnftsToUse,
      }}
    >
      {children}
    </AppContext.Provider>
  );
}

export default AppProvider;
