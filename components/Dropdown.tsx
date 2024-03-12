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

function Dropdown() {
  const { options, chainSelected, setchainSelected } = useContext(AppContext);
  //   const options = ["ZkSync", "Base", "Scroll", "Starknet"];

  const [optionSelected, setoptionSelected] = useState(options[0]);

  return (
    <DropdownMenu>
      <DropdownMenuTrigger className="white-glassmorphism flex font-mono text-sm items-center w-fit text-white rounded-lg p-2 px-4 outline-none">
        {chainSelected ? chainSelected : "Select an option"}
        <ChevronDown className="ml-4" />{" "}
      </DropdownMenuTrigger>
      <DropdownMenuContent className="w-[200px] border-0 text-white font-mono bg-[#323262]">
        {options.map((data: any, i: number) => {
          return (
            <>
              <DropdownMenuItem onClick={() => setchainSelected(data)} key={i}>
                {data}
              </DropdownMenuItem>
            </>
          );
        })}
      </DropdownMenuContent>
    </DropdownMenu>
  );
}

export default Dropdown;
