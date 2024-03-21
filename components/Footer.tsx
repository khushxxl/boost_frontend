import { Send } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import React from "react";

function Footer() {
  return (
    <section className="w-full flex justify-center items-center h-[200px] bg-[#06062A] mt-10 ">
      <div className="flex items-center flex-col">
        <h1 className="text-4xl text-gray-400 tracking-wider font-mono ">
          Our Socials
        </h1>
        <div className="mt-5 flex items-center space-x-10">
          <Link href={"https://x.com/boostitup_w?s=21"} target="_">
            <Image
              alt="twitter"
              height={50}
              width={50}
              src={require("../assets/twitter.jpg")}
              className="rounded-lg transition-all transform duration-150 hover:scale-110 cursor-pointer border-2"
            />
          </Link>
          <Link href={"https://x.com/boostitup_w?s=21"}>
            <div className="bg-white p-2 rounded transition-all transform duration-150 hover:scale-110">
              <Send name="send" size={30} color="black" />
            </div>
          </Link>
        </div>
      </div>
    </section>
  );
}

export default Footer;
