import Hero from "@/components/Hero";
import Navbar from "@/components/Navbar";
import Image from "next/image";

export default function Home() {
  // bg - [url("../assets/bgGradient.png")];
  return (
    <main className="">
      <Navbar />
      <Hero />
    </main>
  );
}

// require("../assets/bgGradient.png");
