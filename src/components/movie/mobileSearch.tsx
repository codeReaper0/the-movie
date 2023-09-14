"use client";
import Image from "next/image";
import Link from "next/link";
import React, {useEffect, useState, Fragment} from "react";
import {SearchIcon} from "public/assets/svg/icons";
import Search from "@/components/movie/search";
import {Dialog, Transition} from "@headlessui/react";

export default function MobileSearch() {
  const [isOpen, setIsOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");

  const handleSearch = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSearchQuery(event.target.value);
  };

  function closeModal() {
    setIsOpen(false);
  }

  function openModal() {
    setIsOpen(true);
  }

  return (
    <>
      <button
        onClick={openModal}
        className="w-9 h-9 rounded-full bg-rose-700 hover:bg-rose-800 flex md:hidden items-center justify-center transition-colors duration-300 ease-in-out"
      >
        <SearchIcon />
      </button>
      <Transition appear show={isOpen} as={Fragment}>
        <Dialog as="div" className="relative z-40" onClose={() => {}}>
          <Transition.Child
            as={Fragment}
            enter="ease-out duration-300"
            enterFrom="opacity-0"
            enterTo="opacity-100"
            leave="ease-in duration-200"
            leaveFrom="opacity-100"
            leaveTo="opacity-0"
          >
            <div
              className="fixed inset-0 bg-black bg-opacity-25"
              aria-hidden="true"
            />
          </Transition.Child>

          <div className="fixed inset-0 overflow-y-auto z-40">
            <div className="flex min-h-full items-center justify-center p-2 text-center">
              <Transition.Child
                as={Fragment}
                enter="ease-out duration-300"
                enterFrom="opacity-0 scale-95"
                enterTo="opacity-100 scale-100"
                leave="ease-in duration-200"
                leaveFrom="opacity-100 scale-100"
                leaveTo="opacity-0 scale-95"
              >
                <Dialog.Panel className="w-full transform overflow-auto h-[95vh] rounded bg-white p-4 text-left align-middle shadow-xl transition-all">
                  <div className="w-full bg-white h-full flex- flex-col overflow-hidden">
                    <div className="flex justify-between">
                      <h3 className="text-lg font-semibold">
                        Check out a movie of your choice
                      </h3>
                      <button
                        onClick={closeModal}
                        className="bg-red-600 hover:bg-red-700 text-white py-1 px-2 rounded-md text-sm"
                      >
                        Close
                      </button>
                    </div>
                    <div className="relative my-4">
                      <input
                        type="search"
                        name="searchMovie"
                        id="searchMovie"
                        placeholder="What do you want to watch?"
                        onChange={handleSearch}
                        className="px-[10px] py-2 border-2 border-gray-300 rounded-md text-white placeholder:text-white w-full  focus:outline-none bg-black/80"
                      />
                      <div className="absolute right-[10px] inset-y-0 flex items-center">
                        <SearchIcon />
                      </div>
                    </div>
                    <Search query={searchQuery} />
                  </div>
                </Dialog.Panel>
              </Transition.Child>
            </div>
          </div>
        </Dialog>
      </Transition>
    </>
  );
}
