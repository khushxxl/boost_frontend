import Hero from "@/components/Hero";
import Navbar from "@/components/Navbar";
import Image from "next/image";
import { ToastContainer, toast } from "react-toastify";

export default function Home() {
  // bg - [url("../assets/bgGradient.png")];

  return (
    <main className="flex flex-col">
      <ToastContainer />
      <Hero />
    </main>
  );
}

// require("../assets/bgGradient.png");
