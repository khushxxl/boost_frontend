"use client";
import { AppContext } from "@/context/AppContext";
import Image from "next/image";
import React, { useContext, useState } from "react";
import Marquee from "react-fast-marquee";

function Hero() {
  const options = [2, 5, 10, 15, 20];
  const [quantity, setquantity] = useState<number>(5);

  const { chainSelected } = useContext(AppContext);

  const handleRangeChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setquantity(parseInt(event.target.value, 10));
  };

  const handleNumberInputChange = (
    event: React.ChangeEvent<HTMLInputElement>
  ) => {
    setquantity(parseInt(event.target.value, 10));
  };

  const MarqueeComponent = () => {
    return (
      <div className="white-glassmorphism rounded-xl mr-20 flex items-center justify-center ">
        <div>
          <Image
            src={
              "https://i.seadn.io/gae/yIWUh-VKgOUlHYQNxdGCwiGQ-Bl0u58FfzEpEEAfTmbPNw1-uZGlbnkBGUuCaFdbIDKzRpryQhUWWIvBbZrB7TDCVMmtkib_GWnvNQ?auto=format&dpr=1&w=640"
            }
            width={200}
            height={200}
            alt="vdf"
            className="rounded"
          />
        </div>
      </div>
    );
  };

  //   https://hypercolor.dev/
  return (
    <div className="flex flex-col   h-screen bg-gradient-to-t from-slate-900 via-purple-900 to-slate-900">
      <div className="flex flex-col items-center mt-20">
        <div>
          <h1 className="text-5xl text-center font-mono font-extrabold text-transparent bg-clip-text tracking-wide bg-gradient-to-r from-yellow-200 via-green-200 to-green-300">
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
              max={20}
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
              min={1}
              onChange={handleNumberInputChange}
            />
            {options.map((data, i) => {
              return (
                <div
                  key={i}
                  onClick={() => setquantity(data)}
                  className="p-[5px] bg-gray-600 cursor-pointer rounded-sm"
                >
                  <p className="text-white">{data}</p>
                </div>
              );
            })}
          </div>
        </div>
      </div>

      <div className="mt-32">
        <Marquee className="">
          <MarqueeComponent />
          <MarqueeComponent />
          <MarqueeComponent />
          <MarqueeComponent />
          <MarqueeComponent />
        </Marquee>
      </div>
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
