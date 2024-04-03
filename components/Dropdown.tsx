import React, { useContext, useState } from "react";
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
import {
  baseAddresses,
  lineaAddresses,
  lineaNFTS,
  nftData,
  zoraNFTS,
} from "@/utils/constants";
import { useWeb3Modal, useWeb3ModalAccount } from "@web3modal/ethers/react";
import toast from "react-hot-toast";

function Dropdown() {
  const [chainID, setchainID] = useState(1);
  const {
    options,
    chainSelected,
    setchainSelected,
    setnftsToUse,
    baseNft,
    contractAddresses,
    setcontractAddresses,
  } = useContext(AppContext);
  //   const options = ["ZkSync", "Base", "Scroll", "Starknet"];

  const [optionSelected, setoptionSelected] = useState(options[0]);
  const { open, close } = useWeb3Modal();
  const { address, chainId, isConnected } = useWeb3ModalAccount();
  return (
    <DropdownMenu>
      <DropdownMenuTrigger className="white-glassmorphism flex font-mono text-sm items-center w-fit text-white rounded-lg p-2 px-4 outline-none">
        {chainSelected ? chainSelected.chain : "Select chain"}
        <ChevronDown className="ml-4" />
      </DropdownMenuTrigger>
      <DropdownMenuContent className="border-0 text-white font-mono bg-[#323262]">
        {options.map((data: any, i: number) => {
          return (
            <DropdownMenuItem
              className="hover:bg-slate-800"
              onClick={async () => {
                if (!isConnected) {
                  await open();
                }

                if (chainSelected?.chain != data.chain) {
                  await window.ethereum.request({
                    method: "wallet_switchEthereumChain",
                    params: [
                      {
                        chainId: data.chainID,
                      },
                    ],
                  });
                }
                setchainSelected(data);
                toast(`Network Changed to  ${data.chain}`, { icon: "✅" });

                if (data.chain == "Base") {
                  setnftsToUse(nftData);
                  setcontractAddresses(baseAddresses);
                }
                if (data.chain == "Linea") {
                  setnftsToUse(lineaNFTS);
                  setcontractAddresses(lineaAddresses);
                }
                if (data.chain == "Zora") {
                  setnftsToUse(zoraNFTS);
                }
              }}
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
}

export default Dropdown;
