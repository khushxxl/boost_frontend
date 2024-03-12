"use client";

import { createWeb3Modal, defaultConfig } from "@web3modal/ethers/react";

// 1. Get projectId at https://cloud.walletconnect.com
const projectId = "6914ae5e338e56b3df3e9d955c010528";

// 2. Set chains
const mainnet = {
  chainId: 280,
  name: "zkSync alpha testnet",
  currency: "ETH",
  explorerUrl: "https://etherscan.io",
  rpcUrl: " https://zksync2-testnet.zksync.dev",
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
  chains: [mainnet],
  projectId,
  enableAnalytics: true, // Optional - defaults to your Cloud configuration
});

export function Web3ModalProvider({ children }) {
  return children;
}
