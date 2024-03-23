"use client";
import { AppContext } from "@/context/AppContext";
import { CheckCircle, Send } from "lucide-react";
import Image from "next/image";
import React, { useContext, useEffect, useRef, useState } from "react";
import Marquee from "react-fast-marquee";

import Link from "next/link";
import { lineaNFTS } from "@/utils/constants";

function Hero() {
  const options = [2, 5, 10, 15, 20, 25, 30];
  const [quantity, setquantity] = useState<any>(0);

  const nftsSectionRef = useRef<HTMLDivElement>(null); // Ref for the NFTs section

  const [selectedNFTs, setselectedNFTs] = useState<any[]>([]);

  const { chainSelected, nftsToUse, setnftsToUse } = useContext(AppContext);

  const handleRangeChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const value = parseInt(event.target.value, 10);
    setquantity(value);
    setselectedNFTs(nftsToUse.slice(0, value)); // Automatically select NFTs based on the slider value
    console.log(selectedNFTs);
  };

  const handleNumberInputChange = (
    event: React.ChangeEvent<HTMLInputElement>
  ) => {
    const value = parseInt(event.target.value, 10);
    setquantity(value);
    setselectedNFTs(nftsToUse.slice(0, parseInt(event.target.value, 10))); // Update selected NFTs based on the new quantity
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

  // const checkNFTToUse = () => {
  //   if (chainSelected == "Linea") {
  //     console.log(chainSelected);
  //   }
  // };

  // useEffect(() => {
  //   checkNFTToUse();
  // }, [nftsToUse, setnftsToUse]);

  const MarqueeComponent: any = ({ data }: { data: any }) => {
    return (
      <div className="white-glassmorphism rounded-md mr-20 p-2 flex items-center justify-center ">
        <div>
          <Image
            src={data?.img}
            width={280}
            height={400}
            alt={data?.name}
            className="rounded cursor-pointer"
          />
        </div>
      </div>
    );
  };

  //   https://hypercolor.dev/
  return (
    <div className="flex flex-col ">
      <div className="flex flex-col items-center mt-20">
        <div className="mt-10 max-w-sm md:max-w-full">
          <Marquee className="">
            {nftsToUse.map((data, i) => {
              return <MarqueeComponent data={data} key={i} />;
            })}
          </Marquee>
        </div>
        <div className="mt-20">
          <h1 className="text-5xl text-center font-mono font-extrabold text-transparent bg-clip-text tracking-wider bg-gradient-to-r from-yellow-200 via-green-200 to-green-300">
            Boost on {chainSelected ? chainSelected : "Linea"}
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
              max={nftsToUse.length}
              min={1}
            />
          </div>
          <div className="blue-glassmorphism flex justify-evenly p-2 self-center items-center">
            <div>
              <input
                type="number"
                max={nftsToUse.length}
                color="red"
                className="bg-white w-10 mr-4 focus:outline-none rounded-sm text-center"
                value={quantity}
                min={0}
                onChange={handleNumberInputChange}
              />
            </div>

            <div className="flex space-x-3">
              {options.map((data, i) => {
                return (
                  <div
                    key={i}
                    onClick={() => {
                      setquantity(data);
                      setselectedNFTs(nftsToUse.slice(0, data));
                    }}
                    className="p-[10px] bg-gray-600 h-7 w-7 rounded-full cursor-pointer flex items-center justify-center"
                  >
                    <p className="text-white">{data}</p>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>

      <section className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4  max-w-7xl min-w-max gap-x-10 mx-auto place-items-center">
        {nftsToUse.map((data: any, i: number) => {
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
                  src={data?.img}
                />
                {checkIfSelected(data) && (
                  <div className="bg-black p-2 rounded-full top-6 ml-2  w-fit absolute">
                    <CheckCircle color="white" size={15} />
                  </div>
                )}
              </div>
              <h1 className="text-white font-bold text-sm mt-2 ml-2">
                {data?.name}
              </h1>
              <div className="bg-[#292956] mt-5 p-2 rounded-md flex justify-between">
                <div className="">
                  <h1 className="text-xs font-semibold text-gray-400">Price</h1>
                  <h1 className=" font-sans font-bold text-white text-sm">
                    {data?.price} ETH
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
