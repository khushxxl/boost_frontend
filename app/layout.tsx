import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import AppProvider from "../context/AppContext.jsx";
import { Web3ModalProvider } from "../context/Web3Modal";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Boost",
  description: "Safe Mint NFTs with unique contracts and boost your rank ⚡",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <AppProvider>
        <Web3ModalProvider>
          <body className={inter.className}>
            <Navbar />

            {children}
            <Footer />
          </body>
        </Web3ModalProvider>
      </AppProvider>
    </html>
  );
}
