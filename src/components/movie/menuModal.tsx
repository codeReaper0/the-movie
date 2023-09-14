"use client";
import React, {useEffect, useState} from "react";
import Image from "next/image";
import {Dialog, Transition} from "@headlessui/react";
import Link from "next/link";
const navLinks = [
  {
    name: "Home",
    path: "/",
  },
  {
    name: "Movies",
    path: "/movies",
  },
  {
    name: "TV Series",
    path: "#",
  },
  {
    name: "Upcoming",
    path: "#",
  },
];

export default function MenuModal() {
  const [isOpen, setIsOpen] = useState(false);

  function closeModal() {
    setIsOpen(false);
  }

  function openModal() {
    setIsOpen(true);
  }

  return (
    <div className="">
      <button
        onClick={openModal}
        className="transition-all duration-300 ease-in-out"
      >
        {!isOpen ? (
          <Image
            src="/assets/images/menu.png"
            width={36}
            height={36}
            alt="logo"
          />
        ) : (
          <button className="w-9 h-9 rounded-full bg-rose-700 hover:bg-rose-800 flex md:hidden items-center justify-center transition-colors duration-300 ease-in-out text-xl font-medium text-white">
            x
          </button>
        )}
      </button>

      <Transition appear show={isOpen} as={React.Fragment}>
        <Dialog
          as="div"
          className="fixed inset-x-0 top-[72px] z-50 overflow-hidden"
          onClose={closeModal}
        >
          <div className="">
            <Transition.Child
              as={React.Fragment}
              enter="ease-out duration-300"
              enterFrom="opacity-0 scale-95"
              enterTo="opacity-100 scale-100"
              leave="ease-in duration-200"
              leaveFrom="opacity-100 scale-100"
              leaveTo="opacity-0 scale-95"
            >
              <div className="overflow-hidden text-left align-middle transition-all transform w-screen h-screen bg-black/95 font-medium lg:hidden">
                <nav className="p-4 py-8">
                  <ul className="flex flex-col gap-6">
                    {navLinks.map((link) => {
                      return (
                        <li key={link.name}>
                          <Link
                            href={link.path}
                            className="text-[15px] text-white font-medium w-full px-2 py-4 rounded-lg hover:bg-white hover:text-black"
                          >
                            {link.name}
                          </Link>
                        </li>
                      );
                    })}
                  </ul>
                </nav>
              </div>
            </Transition.Child>
          </div>
        </Dialog>
      </Transition>
    </div>
  );
}
