"use client";
import React, { createContext, useEffect, useState } from "react";
import { ethers } from "ethers";
import { lineaNFTS, nftData, zksyncNFTS } from "../utils/constants";

export const AppContext = createContext();

function AppProvider({ children }) {
  const [walletAddress, setwalletAddress] = useState("");

  const [baseNfts, setbaseNfts] = useState([]);

  const [nftsToUse, setnftsToUse] = useState([]);

  // const getBaseNFTData = async () => {
  //   const arr = [];

  //   for (let index = 1; index < 31; index++) {
  //     const res = await fetch(
  //       `https://bafybeidqzwqewp6tx2qlhpteoupxcot6ct3psdtqzrr7ahffaf2rf5es2e.ipfs.dweb.link/${index}.json`
  //     );
  //     await res.json().then((nft) => arr.push(nft));
  //   }
  //   setbaseNfts(arr);
  // };

  // useEffect(() => {
  //   getBaseNFTData();
  // }, [baseNfts]);

  const mainnet = {
    chainId: 1,
    name: "ETHEREUM",
    currency: "ETH",
    explorerUrl: "https://etherscan.io",
    rpcUrl: "https://eth.llamarpc.com",
  };

  const zkSyncMainnet = {
    chainId: 100,
    name: "zkSync",
    currency: "ETH",
    explorerUrl: "https://zkscan.io",
    rpcUrl: "https://rpc.zksync.io",
  };
  const [chainID, setchainID] = useState(mainnet);

  const options = [
    { img: require("../assets/zk.svg"), chain: "ZkSync", chainID: "0x144" },
    { img: require("../assets/base.svg"), chain: "Base", chainID: "0x2105" },
    { img: require("../assets/linea.svg"), chain: "Linea", chainID: "0xe708" },
  ];

  const [chainSelected, setchainSelected] = useState(null);
  const [myBoostsChain, setmyBoostsChain] = useState(
    options[options.length - 1]
  );

  const getBaseNFTData = async () => {
    const arr = [];

    for (let index = 1; index < 31; index++) {
      const res = await fetch(
        `https://bafybeidqzwqewp6tx2qlhpteoupxcot6ct3psdtqzrr7ahffaf2rf5es2e.ipfs.dweb.link/${index}.json`
      );
      await res.json().then((nft) => arr.push(nft));
    }
    setbaseNfts(arr);
    // setnftsToUse(baseNfts);
  };

  // useEffect(() => {
  //   getBaseNFTData();
  // }, []);
  // useEffect(() => {
  //   if (chainSelected == "Base") {
  //     setnftsToUse(baseNfts);
  //   }
  //   if (chainSelected == "Linea") {
  //     setnftsToUse(lineaNFTS);
  //   }
  //   if (chainSelected == "ZkSync") {
  //     setnftsToUse(zksyncNFTS);
  //   } else {
  //     setnftsToUse([]);
  //   }
  // }, [chainSelected]);

  const changeChainId = async () => {};
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
        getBaseNFTData,
        baseNfts,
        setbaseNfts,
        chainID,
        setchainID,
        changeChainId,
      }}
    >
      {children}
    </AppContext.Provider>
  );
}

export default AppProvider;
