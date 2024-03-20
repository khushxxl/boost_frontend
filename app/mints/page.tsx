"use client";
import { CheckCircle } from "lucide-react";
import Image from "next/image";
import React from "react";
import { nftData } from "../../utils/constants.js";

function MyMints() {
  return (
    <div className="h-screen">
      <div className="mt-20">
        <h1 className="text-5xl text-center font-mono font-extrabold text-transparent bg-clip-text tracking-wider bg-gradient-to-r from-yellow-200 via-green-200 to-green-300">
          My Mints
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

export default MyMints;
