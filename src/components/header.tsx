"use client";
import Image from "next/image";
import Link from "next/link";
import React, {useEffect, useState} from "react";
import {SearchIcon} from "public/assets/svg/icons";
import Search from "./movie/search";
import MobileSearch from "./movie/mobileSearch";

export default function Header() {
  const [isInputFocused, setInputFocused] = useState(false);
  const [small, setSmall] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");

  const handleInputFocus = () => {
    setInputFocused(true);
  };
  const handleInputBlur = () => {
    setInputFocused(false);
  };

  const handleSearch = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSearchQuery(event.target.value);
  };

  useEffect(() => {
    const handleScroll = () => {
      setSmall(window.scrollY > 50);
    };

    if (typeof window !== "undefined") {
      window.addEventListener("scroll", handleScroll);
    }

    return () => {
      if (typeof window !== "undefined") {
        window.removeEventListener("scroll", handleScroll);
      }
    };
  }, []);

  return (
    <header
      className={`absolute top-0 z-30 w-full px-4 xl:px-0 ${
        small
          ? "sticky top-0 z-30 bg-black/80 backdrop-blur-[2px] shadow-[0px_2px_4px_rgba(0,0,0,0.25)] stroke-[2] stroke-[rgb(232,232,232/0.20)]"
          : ""
      }`}
    >
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
        <div className="hidden md:block">
          <div className="relative">
            <input
              type="search"
              name="searchMovie"
              id="searchMovie"
              placeholder="What do you want to watch?"
              onFocus={handleInputFocus}
              onChange={handleSearch}
              className="bg-transparent px-[10px] py-2 border-2 border-gray-300 rounded-md text-white placeholder:text-white w-[400px] lg:w-[525px]  focus:outline-none focus:bg-black/80"
            />
            <div className="absolute right-[10px] inset-y-0 flex items-center">
              <SearchIcon />
            </div>
          </div>
          <div
            className={`absolute top-20 left-0 w-full max-h-[90vh] overflow-hidden transition-all duration-300 ease-in-out ${
              isInputFocused ? "" : "hidden"
            }`}
          >
            <div className="w-full bg-white p-4 h-[90vh] flex- flex-col overflow-hidden">
              <div className="flex px-4 justify-between mb-4">
                <h3 className="text-2xl font-semibold">
                  Check out a movie of your choice
                </h3>
                <button
                  onClick={handleInputBlur}
                  className="bg-red-600 hover:bg-red-700 text-white py-2 px-4 rounded-md"
                >
                  Close
                </button>
              </div>
              <Search query={searchQuery} />
            </div>
          </div>
        </div>

        {/* Signin/menu */}
        <div className="flex gap-2 items-center">
          <MobileSearch />
          <button className="hidden xl:block py-2 px-4 rounded-lg text-white hover:text-black hover:bg-white transition-all duration-300 ease-in-out font-bold">
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
