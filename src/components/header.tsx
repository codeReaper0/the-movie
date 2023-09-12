import Image from "next/image";
import Link from "next/link";
import React from "react";
import {SearchIcon} from "public/assets/svg/icons";

export default function Header() {
  return (
    <header className="absolute top-0 w-full">
      <div className="max-w-7xl mx-auto flex justify-between items-center py-4">
        <Link href="" className="flex gap-4 items-center">
          <Image
            src="/assets/images/logo.png"
            width={50}
            height={50}
            alt="logo"
          />
          <p className="text-white text-2xl font-bold">MovieBox</p>
        </Link>

        {/* Search */}
        <div className="relative">
          <input
            type="search"
            name="searchMovie"
            id="searchMovie"
            placeholder="What do you want to watch?"
            className="bg-transparent px-[10px] py-2 border-2 border-gray-300 rounded-md text-white placeholder:text-white w-[525px]"
          />
          <div className="absolute right-[10px] inset-y-0 flex items-center">
            <SearchIcon />
          </div>
        </div>

        {/* Signin/menu */}
        <div className="flex gap-2 items-center">
          <button className="py-2 px-4 rounded-lg text-white hover:text-black hover:bg-white transition-all duration-300 ease-in-out font-bold">
            Sign in
          </button>
          <button>
            <Image
              src="/assets/images/menu.png"
              width={36}
              height={36}
              alt="logo"
            />
          </button>
        </div>
      </div>
    </header>
  );
}
