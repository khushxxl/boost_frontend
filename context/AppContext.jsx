"use client";
import React, { createContext, useEffect, useState } from "react";
import { BrowserProvider, ethers } from "ethers";
import {
  lineaAddresses,
  lineaNFTS,
  nftData,
  zksyncNFTS,
} from "../utils/constants";
import { useWeb3ModalProvider } from "@web3modal/ethers/react";

export const AppContext = createContext();

function AppProvider({ children }) {
  const [walletAddress, setwalletAddress] = useState("");

  const [baseNfts, setbaseNfts] = useState([]);

  const [nftsToUse, setnftsToUse] = useState(lineaNFTS);

  const mainnet = {
    chainId: 1,
    name: "ETHEREUM",
    currency: "ETH",
    explorerUrl: "https://etherscan.io",
    rpcUrl: "https://eth.llamarpc.com",
  };

  const [chainID, setchainID] = useState(mainnet);

  const options = [
    { img: require("../assets/zora.svg"), chain: "Zora", chainID: "0x76adf1" },
    { img: require("../assets/base.svg"), chain: "Base", chainID: "0x2105" },
    { img: require("../assets/linea.svg"), chain: "Linea", chainID: "0xe708" },
  ];

  const [chainSelected, setchainSelected] = useState(null);
  const [myBoostsChain, setmyBoostsChain] = useState(
    options[options.length - 1]
  );

  const [contractAddresses, setcontractAddresses] = useState(lineaAddresses);

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

  const [userBaseNFTs, setuserBaseNFTs] = useState([]);
  const { walletProvider } = useWeb3ModalProvider();

  const getBaseUserNfts = async () => {
    const provider = new BrowserProvider(walletProvider);
    const signer = await provider.getSigner();
    const baseMints = [];

    // Gather all the promises for fetching NFT balances
    const promises = nftData.map(async (nft) => {
      const contractAddress = nft.address;
      const contract = new ethers.Contract(contractAddress, abi, provider);

      try {
        const balance = await contract.connect(signer).balanceOf(address);
        console.log(nft.name + "'s balance is " + balance);
        if (balance != 0) {
          baseMints.push(nft);
        }
      } catch (error) {
        alert(error);
        console.error(error.message);
      }
    });

    // Wait for all promises to resolve
    await Promise.all(promises);

    setuserBaseNFTs(baseMints);
    console.log(userBaseNFTs);
  };

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
        contractAddresses,
        setcontractAddresses,
        getBaseUserNfts,
      }}
    >
      {children}
    </AppContext.Provider>
  );
}

export default AppProvider;
