"use client";

import { Combobox, Transition } from "@headlessui/react";
import Image from "next/image";

import { SearchManufacturerProps } from "@/types";

function SearchManufacturer({
  manufacturer,
  setManufacturer,
}: SearchManufacturerProps) {
  return (
    <div className="search-manufacturer">
      <Combobox>
        <div className="realative w-full">
          <Combobox.Button className="absolute top-[140px]">
            <Image
              src="/car-logo.svg"
              width={20}
              height={20}
              className="ml-14"
              alt="Car Logo"
            />
          </Combobox.Button>
        </div>
      </Combobox>
    </div>
  );
}

export default SearchManufacturer;