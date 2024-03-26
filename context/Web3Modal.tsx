"use client";

import { createWeb3Modal, defaultConfig } from "@web3modal/ethers/react";
import { useContext } from "react";
import { AppContext } from "./AppContext";

// 1. Get projectId at https://cloud.walletconnect.com
const projectId = "6914ae5e338e56b3df3e9d955c010528";

// const { chainID, setchainID } = useContext(AppContext);

// 2. Set chains
const mainnet = {
  chainId: 1,
  name: "Ethereum",
  currency: "ETH",
  explorerUrl: "https://etherscan.io",
  rpcUrl: "https://cloudflare-eth.com",
};

const zkSyncMainnet = {
  chainId: 324,
  name: "zkSync Mainnet",
  currency: "ETH",
  explorerUrl: "https://explorer.zksync.io",
  rpcUrl: "https://zksync-era.blockpi.network/v1/rpc/public",
};
const lineaMainnet = {
  chainId: 59144,
  name: "Linea",
  currency: "ETH",
  explorerUrl: "https://lineascan.build",
  rpcUrl: "https://linea.blockpi.network/v1/rpc/public",
};
const baseMainnet = {
  chainId: 8453,
  name: "Base LlamaNodes",
  currency: "ETH",
  explorerUrl: "https://basescan.org",
  rpcUrl: "https://base.llamarpc.com",
};

// 3. Create modal
const metadata = {
  name: "My Website",
  description: "My Website description",
  url: "https://mywebsite.com", // origin must match your domain & subdomain
  icons: ["https://avatars.mywebsite.com/"],
};

createWeb3Modal({
  ethersConfig: defaultConfig({ metadata }),
  chains: [mainnet, zkSyncMainnet, lineaMainnet, baseMainnet],
  projectId,
  enableAnalytics: true, // Optional - defaults to your Cloud configuration
});

export function Web3ModalProvider({ children }) {
  return children;
}
