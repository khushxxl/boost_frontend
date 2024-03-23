"use client";
import { AppContext } from "@/context/AppContext";
import React, { useContext, useEffect } from "react";
import Web3Modal from "web3modal";
import { ethers } from "ethers";
import { useWeb3Modal } from "@web3modal/ethers/react";
import { useWeb3ModalAccount } from "@web3modal/ethers/react";
import Dropdown from "./Dropdown";
import Link from "next/link";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { ChevronDown, MenuIcon } from "lucide-react";

function Navbar() {
  const { walletAddress, setwalletAddress, setnftsToUse } =
    useContext(AppContext);
  const { open, close } = useWeb3Modal();
  const { address, chainId, isConnected } = useWeb3ModalAccount();

  const scrollToNFTs = () => {
    const nftsSection = document.getElementById("nfts");
    if (nftsSection) {
      const windowHeight = window.innerHeight;
      const nftsSectionTop = nftsSection.getBoundingClientRect().top;
      const nftsSectionHeight = nftsSection.clientHeight;
      const scrollToMiddle =
        nftsSectionTop - (windowHeight - nftsSectionHeight) / 2;
      window.scrollTo({ top: scrollToMiddle, behavior: "smooth" });
    }
  };

  function truncateWalletAddress(
    walletAddress: any,
    startLength = 6,
    endLength = 4
  ) {
    // Validate input
    if (
      typeof walletAddress !== "string" ||
      walletAddress.length < startLength + endLength
    ) {
      console.error("Invalid wallet address or length parameters");
      return walletAddress;
    }

    // Truncate and add ellipsis
    const truncatedStart = walletAddress.slice(0, startLength);
    const truncatedEnd = walletAddress.slice(-endLength);

    return `${truncatedStart}...${truncatedEnd}`;
  }

  const connectWallet = async () => {
    open();
  };

  useEffect(() => {
    // connectWallet();
  }, []);

  function NavDrop() {
    return (
      <DropdownMenu>
        <DropdownMenuTrigger>
          <MenuIcon color="white" />
        </DropdownMenuTrigger>
        <DropdownMenuContent className="bg-slate-900 font-mono border-2 border-gray-400 text-white">
          <DropdownMenuItem>
            <Link onClick={scrollToNFTs} href="/#nfts">
              <h2 className="cursor-pointer">Home</h2>
            </Link>
          </DropdownMenuItem>
          <DropdownMenuItem>
            <Link href={"/mints"}>
              <h2 className="cursor-pointer">Minted</h2>
            </Link>
          </DropdownMenuItem>

          <DropdownMenuItem>
            <Link href={"/my-boosts"}>
              <h2 className="cursor-pointer">My Boosts</h2>
            </Link>
          </DropdownMenuItem>
          <DropdownMenuItem>
            <div
              onClick={connectWallet}
              className="bg-gradient-to-r from-purple-500 to-pink-500  p-2 w-36 rounded-md text-white text-center cursor-pointer"
            >
              <p className="text-center">
                {isConnected
                  ? truncateWalletAddress(address)
                  : "Connect Wallet"}
              </p>
            </div>
          </DropdownMenuItem>
        </DropdownMenuContent>
      </DropdownMenu>
    );
  }
  return (
    <div className="p-5 flex w-full bg-[#06062A] sticky top-0 z-50  mx-auto px-10 rounded-b-3xl">
      <div className="flex w-full justify-between">
        <div className=" flex items-center">
          <Link href={"/"}>
            <div>
              <h2 className="text-white text-2xl font-bold">Boost</h2>
            </div>
          </Link>
        </div>

        <div className=" flex items-center">
          <div className="mr-10 flex">
            <Dropdown />
          </div>

          <div>
            <div className="md:hidden">
              <NavDrop />
            </div>
            <div
              onClick={connectWallet}
              className="bg-gradient-to-r from-purple-500 to-pink-500  p-2 w-36 rounded-md text-white text-center cursor-pointer hidden md:flex"
            >
              <p className="text-center">
                {isConnected
                  ? truncateWalletAddress(address)
                  : "Connect Wallet"}
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Navbar;
