"use client";
import Image from "next/image";
import Link from "next/link";
import React, {useEffect, useState} from "react";
import MenuModal from "./movie/menuModal";

export default function MobileHeader() {
  const [small, setSmall] = useState(false);

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
      className={`w-full px-4 lg:hidden sticky top-0 z-30 bg-black/80 backdrop-blur-[2px] shadow-[0px_2px_4px_rgba(0,0,0,0.25)] stroke-[2] stroke-[rgb(232,232,232/0.20)]`}
    >
      <div className="max-w-7xl mx-auto flex justify-between items-center py-4">
        <Link href="" className="flex gap-4 items-center">
          <Image
            src="/assets/images/logo.png"
            width={40}
            height={40}
            alt="logo"
          />
          <p className="text-white text-xl font-bold">MovieBox</p>
        </Link>
        {/* menu */}
        <MenuModal />
      </div>
    </header>
  );
}
