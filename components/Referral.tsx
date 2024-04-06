"use client";
import { useWeb3Modal, useWeb3ModalAccount } from "@web3modal/ethers/react";
import { Clipboard, ClipboardItem } from "lucide-react";
import React from "react";
import toast from "react-hot-toast";

function Referral() {
  const { address, isConnected } = useWeb3ModalAccount();
  const { open } = useWeb3Modal();

  const localHostRef = `http://localhost:3000/referrals?userId=${address}`;
  const refLink = `https://www.goboost.me/referrals?userId=${address}`;
  function copyToClipboard() {
    const el = document.createElement("textarea");
    el.value = refLink;
    document.body.appendChild(el);
    el.select();
    document.execCommand("copy");
    document.body.removeChild(el);
    toast.success("Link Copied");
  }

  const connectWallet = async () => {
    open();
  };

  return (
    <div
      id="referral"
      className={`bg-[#06062A] rounded-xl justify-center flex max-w-7xl mx-5  md:mx-auto mt-20 p-4 text-white ${
        address ? "flex-col" : "flex-row"
      }`}
    >
      <div className=" w-full flex  flex-col items-center md:items-start justify-between ">
        <h1 className="text-3xl text-center font-mono md:text-start font-extrabold text-transparent bg-clip-text tracking-wide bg-gradient-to-r from-yellow-200 via-green-200 to-green-300">
          Referral Reward
        </h1>
        <h1 className="text-md font-mono text-center text-md text-gray-300 mt-3 flex">
          Refer your friends, and receive 20% of their mints, directly to your
          wallet.
        </h1>

        {address ? (
          <div
            className="bg-[#06062A] rounded-lg w-full truncate flex flex-col md:flex-row items-center  justify-between  md:items-start p-4
            mt-5 mx-auto"
          >
            <h1 className="text-gray-400">{refLink}</h1>
            <Clipboard
              onClick={copyToClipboard}
              className=" cursor-pointer mt-4 md:mt-0 "
            />
          </div>
        ) : (
          <div
            onClick={connectWallet}
            className="bg-gradient-to-r from-purple-500 to-pink-500  p-2 w-36 rounded-md text-white mt-4 text-center cursor-pointer md:flex items-center justify-center"
          >
            <p className="text-center">Connect Wallet</p>
          </div>
        )}
      </div>
      {/* {address ? (
        <div className=" w-full ">
          <h1 className="text-3xl text-center font-mono md:text-start font-extrabold text-transparent bg-clip-text tracking-wide bg-gradient-to-r from-yellow-200 via-green-200 to-green-300">
            Referral Reward
          </h1>
          <h1 className="text-md font-mono text-center text-md text-gray-300 mt-3 flex">
            Refer your friends, and receive 20% of their mints, directly to your
            wallet.
          </h1>
          <div
            className="bg-[#06062A] rounded-lg truncate flex flex-col md:flex-row  justify-between  items-start p-4
            mt-5 mx-auto"
          >
            <h1 className="text-gray-400">{refLink}</h1>
            <Clipboard
              onClick={copyToClipboard}
              className=" cursor-pointer mt-4 md:mt-0 "
            />
          </div>
        </div>
      ) : (
        <div
          onClick={connectWallet}
          className="bg-gradient-to-r from-purple-500 to-pink-500  p-2 w-36 rounded-md text-white text-center cursor-pointer hidden md:flex items-center justify-center"
        >
          <p className="text-center">Connect Wallet</p>
        </div>
      )} */}
    </div>
  );
}

export default Referral;
