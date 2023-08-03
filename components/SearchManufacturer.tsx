"use client";

import { useState, Fragment } from "react";
import Image from "next/image";

import { Combobox, Transition } from "@headlessui/react";

import { SearchManufacturerProps } from "@/types";

function SearchManufacturer({
  manufacturer,
  setManufacturer,
}: SearchManufacturerProps) {
  const [query, setQuery] = useState("");

  return (
    <div className="search-manufacturer">
      <Combobox value={manufacturer}>
        <div className="relative w-full">
          <Combobox.Button className="absolute top-[14px]">
            <Image
              src="/car-logo.svg"
              width={20}
              height={20}
              className="ml-4"
              alt="car logo"
            />
          </Combobox.Button>

          <Combobox.Input
            className="search-manufacturer__input"
            displayValue={(item: string) => item}
            onChange={(event) => setQuery(event.target.value)}
            placeholder="Volkswagen..."
          />

          <Transition
            as={Fragment}
            leave="transition ease-in duration-100"
            leaveFrom="opacity-100"
            leaveTo="opacity-0"
            afterLeave={() => setQuery("")}
          >
            <Combobox.Options></Combobox.Options>
          </Transition>

          <Transition
            as={Fragment}
            leave="transition ease-in deration-100"
            leaveFrom="opacity-100"
            leaveTo="opacity-0"
            afterLeave={() => setQuery("")}
          ></Transition>
        </div>
      </Combobox>
    </div>
  );
}

export default SearchManufacturer;
