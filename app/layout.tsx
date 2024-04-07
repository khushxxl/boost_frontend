import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import AppProvider from "../context/AppContext.jsx";
import { Web3ModalProvider } from "../context/Web3Modal";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import toast, { Toaster } from "react-hot-toast";
import Referral from "@/components/Referral";
import { FAQAccordion } from "@/components/FAQAccordion";
import Head from "next/head";

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
      <Head>
        <link rel="icon" href="/favicon.ico" sizes="any" />
      </Head>
      <AppProvider>
        <Web3ModalProvider>
          <body className={inter.className}>
            <Toaster />
            <Navbar />

            {children}
            <Referral />
            <FAQAccordion />
            <Footer />
          </body>
        </Web3ModalProvider>
      </AppProvider>
    </html>
  );
}
