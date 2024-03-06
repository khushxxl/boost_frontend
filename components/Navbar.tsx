"use client";
import { AppContext } from "@/context/AppContext";
import React, { useContext, useEffect } from "react";
import Web3Modal from "web3modal";
import { ethers } from "ethers";
import { useWeb3Modal } from "@web3modal/ethers/react";

function Navbar() {
  const { walletAddress, setwalletAddress } = useContext(AppContext);
  const { open, close } = useWeb3Modal();
  const connectWallet = async () => {
    open();
  };

  useEffect(() => {
    connectWallet();
  }, []);

  return (
    <div className="p-2 flex w-full">
      <div className="flex w-full justify-between">
        <div>
          <h2>Boost</h2>
        </div>
        <div
          onClick={connectWallet}
          className="bg-gradient-to-r from-purple-500 to-pink-500  p-2 w-36 rounded-md text-white text-center cursor-pointer"
        >
          <p className="text-center">Connect Wallet</p>
        </div>
      </div>
    </div>
  );
}

export default Navbar;
