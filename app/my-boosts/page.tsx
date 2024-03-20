"use client";
import React, { useContext } from "react";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { AppContext } from "@/context/AppContext";
import { ChevronDown } from "lucide-react";
import Image from "next/image";
import { nftData } from "../../utils/constants.js";

function MyBoosts() {
  const {
    options,
    chainSelected,
    setchainSelected,
    myBoostsChain,
    setmyBoostsChain,
  } = useContext(AppContext);

  const Selector = () => {
    return (
      <DropdownMenu>
        <DropdownMenuTrigger className=" mt-5 md:mt-0 text-4xl flex items-center font-mono bg-gradient-to-r px-4 from-purple-500 to-pink-500   p-2 rounded-md text-white text-center cursor-pointer">
          {myBoostsChain.chain} <ChevronDown className="ml-5" />
        </DropdownMenuTrigger>
        <DropdownMenuContent className="border-0 text-white font-mono bg-[#323262]">
          {options.map((data: any, i: number) => {
            return (
              <DropdownMenuItem
                className="hover:bg-slate-800"
                onClick={() => setmyBoostsChain(data)}
                key={i}
              >
                <div className="flex items-center cursor-pointer">
                  <Image
                    alt=""
                    height={20}
                    width={20}
                    src={data?.img}
                    className="mr-2"
                  />
                  {data?.chain}
                </div>
              </DropdownMenuItem>
            );
          })}
        </DropdownMenuContent>
      </DropdownMenu>
    );
  };

  return (
    <div className="h-screen">
      <div className="mt-20 flex flex-col md:flex-row justify-center items-center">
        <h1 className="text-5xl md:mr-5  text-center font-mono font-extrabold text-transparent bg-clip-text tracking-wider bg-gradient-to-r from-yellow-200 via-green-200 to-green-300">
          My Boosts on
        </h1>
        <Selector />
      </div>

      <div className="mt-10">
        <h1 className="text-5xl  text-center font-mono font-extrabold text-transparent bg-clip-text tracking-wider bg-gradient-to-r from-yellow-200 via-green-200 to-green-300">
          x 15
        </h1>
      </div>

      <section
        id="#nfts"
        className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4  max-w-7xl min-w-max gap-x-10 mx-auto place-items-center mt-20"
      >
        {nftData.map((data, i) => {
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
              <h1 className="text-white font-bold text-sm mt-2 ml-2">
                Boost #000{i + 1}
              </h1>
              <div className="bg-[#292956] mt-5 p-2 flex-col rounded-md flex justify-center items-center ">
                <div className="bg-red-400 text-center  cursor-pointer flex justify-center items-center  py-[7px] p-[5px] w-full rounded-lg">
                  <h1 className="font-semibold text-white tracking-wide">
                    Mint More
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

export default MyBoosts;
