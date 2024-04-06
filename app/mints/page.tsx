"use client";
import { CheckCircle, LoaderIcon } from "lucide-react";
import Image from "next/image";
import React, { useEffect, useState } from "react";
import { abi, baseAddresses, baseNFTData } from "../../utils/constants.js";
import { BrowserProvider, ethers } from "ethers";
import ReactLoading from "react-loading";

import {
  useWeb3ModalAccount,
  useWeb3ModalProvider,
} from "@web3modal/ethers/react";

function MyMints() {
  const getAllMintedNfts = () => {};
  const getLineaMintedNfts = () => {};
  const { walletProvider } = useWeb3ModalProvider();
  const { address, chainId, isConnected } = useWeb3ModalAccount();

  const [mintedBaseNFTs, setmintedBaseNFTs] = useState<any[]>([]);
  const [loading, setloading] = useState(false);

  const getBaseNfts = async (provider) => {
    const signer = await provider.getSigner();
    setloading(true);
    const baseMints: any = [];

    // Gather all the promises for fetching NFT balances
    const promises = baseNFTData.map(async (nft) => {
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

    setloading(false);

    setmintedBaseNFTs(baseMints);
  };

  useEffect(() => {
    const provider = new BrowserProvider(walletProvider);

    getBaseNfts(provider);
  }, []);

  const MintedComponent = ({ data, i }: { data: any; i: number }) => {
    return (
      <div
        className="mt-10 bg-[#17173C] p-5 rounded-2xl transition-all transform hover:scale-105 duration-150"
        key={i}
        onClick={() => {}}
      >
        <div onClick={() => {}}>
          <Image
            height={300}
            width={220}
            alt=""
            className={`rounded-2xl cursor-pointer grayscale-[100%]`}
            src={data.img}
          />
        </div>
        <h1 className="text-white font-bold text-sm mt-2 ml-2">{data?.name}</h1>
        <div className="bg-[#292956] mt-5 p-2 flex-col rounded-md flex justify-center items-center ">
          <div className="bg-red-400 text-center  cursor-pointer flex justify-center items-center  py-[7px] p-[5px] w-full rounded-lg">
            <h1 className="font-semibold text-white tracking-wide">
              Mint More
            </h1>
          </div>
        </div>
      </div>
    );
  };

  return (
    <div className="">
      <div className="mt-20">
        <h1 className="text-5xl text-center font-mono font-extrabold text-transparent bg-clip-text tracking-wider bg-gradient-to-r from-yellow-200 via-green-200 to-green-300">
          My Mints {mintedBaseNFTs?.length}
        </h1>
      </div>

      <section
        id="#nfts"
        className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4  max-w-7xl min-w-max gap-x-10 mx-auto place-items-center mt-20"
      >
        {loading ? (
          <ReactLoading type={"spin"} color={"white"} height={75} width={75} />
        ) : (
          mintedBaseNFTs.map((data, i) => {
            return <MintedComponent data={data} i={i} key={i} />;
          })
        )}
      </section>
    </div>
  );
}

export default MyMints;
