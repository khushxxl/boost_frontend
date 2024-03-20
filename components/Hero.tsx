"use client";
import { AppContext } from "@/context/AppContext";
import { CheckCircle } from "lucide-react";
import Image from "next/image";
import React, { useContext, useState } from "react";
import Marquee from "react-fast-marquee";
import { nftData } from "../utils/constants.js";

function Hero() {
  const options = [2, 5, 10, 15, 20];
  const [quantity, setquantity] = useState<any>(0);

  const [selectedNFTs, setselectedNFTs] = useState<any[]>([]);

  const { chainSelected } = useContext(AppContext);

  const handleRangeChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const value = parseInt(event.target.value, 10);
    setquantity(value);
    setselectedNFTs(nftData.slice(0, value)); // Automatically select NFTs based on the slider value
  };

  const handleNumberInputChange = (
    event: React.ChangeEvent<HTMLInputElement>
  ) => {
    const value = parseInt(event.target.value, 10);
    setquantity(value);
    setselectedNFTs(nftData.slice(0, value));
  };

  const handleNFTClick = (data: any) => {
    if (checkIfSelected(data)) {
      // If already selected, remove it from selectedNFTs
      setselectedNFTs(selectedNFTs.filter((nft) => nft.id !== data.id));
      if (quantity != 0) {
        setquantity(quantity - 1);
      }
    } else {
      // If not selected, add it to selectedNFTs
      setselectedNFTs([...selectedNFTs, data]);
      setquantity(quantity + 1);
    }
  };
  const checkIfSelected = (data: any) => {
    return selectedNFTs.some((selectedNFT) => selectedNFT.id === data.id);
  };

  const MarqueeComponent: any = () => {
    return (
      <div className="white-glassmorphism rounded-xl mr-20 p-2 flex items-center justify-center ">
        <div>
          <Image
            src={
              "https://i.seadn.io/gae/yIWUh-VKgOUlHYQNxdGCwiGQ-Bl0u58FfzEpEEAfTmbPNw1-uZGlbnkBGUuCaFdbIDKzRpryQhUWWIvBbZrB7TDCVMmtkib_GWnvNQ?auto=format&dpr=1&w=640"
            }
            width={280}
            height={400}
            alt="vdf"
            className="rounded"
          />
        </div>
      </div>
    );
  };

  //   https://hypercolor.dev/
  return (
    <div className="flex flex-col ">
      <div className="flex flex-col items-center mt-20">
        <div className="mt-10 max-w-lg md:max-w-full">
          <Marquee className="">
            <MarqueeComponent />
            <MarqueeComponent />
            <MarqueeComponent />
            <MarqueeComponent />
            <MarqueeComponent />
          </Marquee>
        </div>
        <div className="mt-20">
          <h1 className="text-5xl text-center font-mono font-extrabold text-transparent bg-clip-text tracking-wider bg-gradient-to-r from-yellow-200 via-green-200 to-green-300">
            Boost on {chainSelected ? chainSelected : "ZkSync"}
          </h1>
        </div>
        <div
          className="bg-gradient-to-r from-purple-500 to-pink-500 justify-center
         items-center p-2 mt-10 w-36 rounded-md text-white text-center cursor-pointer transition-all transform hover:scale-110"
        >
          <p className="text-center font-mono font-bold">{"Mint"}</p>
        </div>
        <div className="mt-10 flex flex-col md:flex-row items-center space-y-5 md:space-x-5 md:space-y-0">
          <div className="border-[0.5px] p-4 rounded-md items-center flex white-glassmorphism">
            <input
              type="range"
              step={1}
              color="red"
              className="w-[350px] bg-white"
              value={quantity}
              onChange={handleRangeChange}
              max={nftData.length}
              min={1}
            />
          </div>
          <div className="blue-glassmorphism w-[300px] flex justify-evenly p-2 self-center items-center">
            <input
              type="number"
              max={20}
              color="red"
              className="bg-white w-10 focus:outline-none rounded-sm text-center"
              value={quantity}
              min={0}
              onChange={handleNumberInputChange}
            />
            {options.map((data, i) => {
              return (
                <div
                  key={i}
                  onClick={() => setquantity(data)}
                  className="p-[10px] bg-gray-600 h-7 w-7 rounded-full cursor-pointer flex items-center justify-center"
                >
                  <p className="text-white">{data}</p>
                </div>
              );
            })}
          </div>
        </div>
      </div>

      <section
        id="#nfts"
        className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4  max-w-7xl min-w-max gap-x-10 mx-auto place-items-center"
      >
        {nftData.map((data, i) => {
          return (
            <div
              className="mt-10 bg-[#17173C] p-5 rounded-2xl transition-all transform hover:scale-105 duration-150"
              key={i}
              onClick={() => {}}
            >
              <div onClick={() => handleNFTClick(data)}>
                <Image
                  height={300}
                  width={220}
                  alt=""
                  className={`rounded-2xl cursor-pointer ${
                    checkIfSelected(data) ? `grayscale-[100%]` : `grayscale-0`
                  }      `}
                  src={require("../assets/zkStars.png")}
                />
                {checkIfSelected(data) && (
                  <div className="bg-black p-2 rounded-full top-6 ml-2  w-fit absolute">
                    <CheckCircle color="white" size={15} />
                  </div>
                )}
              </div>
              <h1 className="text-white font-bold text-sm mt-2 ml-2">
                Boost #000{i + 1}
              </h1>
              <div className="bg-[#292956] mt-5 p-2 rounded-md flex justify-between">
                <div className="">
                  <h1 className="text-xs font-semibold text-gray-400">Price</h1>
                  <h1 className=" font-sans font-bold text-white text-sm">
                    0.0001 ETH
                  </h1>
                </div>
                <div className="bg-[#5A5A90] mr-4 text-center  cursor-pointer flex justify-center items-center px-5 rounded-lg">
                  <h1 className="font-semibold text-white tracking-wide">
                    Mint
                  </h1>
                </div>
              </div>
            </div>
          );
        })}
      </section>
    </div>
  );
}

export default Hero;

//  <div className="mt-20 flex align-middle items-center space-x-5">
//    <div className="border-[0.5px] p-4 rounded-md items-center flex white-glassmorphism">
//      <input type="range" step={1} color="red" className="w-[350px] bg-white" />
//    </div>

//  <div className="bg-gradient-to-r from-purple-500 to-pink-500 self-center justify-center items-center p-2 w-36 rounded-md text-white text-center cursor-pointer">
//    <p className="text-center">{"Mint"}</p>
//  </div>;
