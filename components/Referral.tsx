"use client";
import { useWeb3Modal, useWeb3ModalAccount } from "@web3modal/ethers/react";
import { Clipboard, ClipboardItem } from "lucide-react";
import React from "react";
import toast from "react-hot-toast";

function Referral() {
  const { address, isConnected } = useWeb3ModalAccount();
  const { open } = useWeb3Modal();

  const localHostRef = `http://localhost:3000/referrals?userId=${address}`;
  const refLink = `https://boost-frontend-gules.vercel.app/referrals?userId=${address}`;
  function copyToClipboard() {
    const el = document.createElement("textarea");
    el.value = refLink;
    document.body.appendChild(el);
    el.select();
    document.execCommand("copy");
    document.body.removeChild(el);
    toast("Link Copied");
  }

  const connectWallet = async () => {
    open();
  };

  return (
    <div
      id="#referral"
      className={`bg-slate-800 rounded-xl justify-center flex max-w-7xl mx-5  md:mx-auto mt-20 p-4 text-white ${
        address ? "flex-col" : "flex-row"
      }`}
    >
      {address ? (
        <div className=" w-full ">
          <h1 className="text-2xl  font-mono font-bold text-white">
            Your Personalised Referral Link
          </h1>
          <h1 className="text-md font-mono font-semibold text-gray-300 mt-3">
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
      )}
    </div>
  );
}

export default Referral;
