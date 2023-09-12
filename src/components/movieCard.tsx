import Image from "next/image";
import Link from "next/link";
import {LikeIcon, LikedIcon} from "public/assets/svg/icons";
import React from "react";

export default function MovieCard() {
  return (
    <div className="relative space-y-3">
      {/* like section */}
      <div className="absolute top-5 inset-x-0 px-4 flex items-center justify-between z-20">
        <p className="py-1 px-2 text-xs text-gray-900 font-bold rounded-2xl bg-[#F3F4F680] backdrop-blur-[1px]">
          TV SERIES
        </p>
        <button>
          <LikeIcon />
          <LikedIcon />
        </button>
      </div>
      <Link href="/movies" className="absolute inset-0 z-10 opacity-0" />
      <Image
        src="/assets/images/stranger.png"
        width={500}
        height={1000}
        className="w-full h-auto"
        alt="logo"
      />

      <p className="text-xs text-gray-400 font-bold">USA, 2016 - Current</p>

      <p className="text-lg text-gray-900 font-bold">Stranger Things</p>

      <div className="flex justify-between items-center">
        <div className="flex gap-2 items-center">
          <Image
            src="/assets/images/imdb.png"
            width={35}
            height={17}
            alt="logo"
          />

          <p className="text-xs">860/100</p>
        </div>
        <div className="flex gap-2 items-center">
          <Image
            src="/assets/images/tomato.png"
            width={16}
            height={17}
            alt="logo"
          />

          <p className="text-xs ">97%</p>
        </div>
      </div>

      <p className="text-xs text-gray-400 font-bold">
        Action, Adventure, Horror
      </p>
    </div>
  );
}
