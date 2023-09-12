import Image from "next/image";
import {PlayIcon} from "public/assets/svg/icons";
import React from "react";

export default function Hero() {
  return (
    <section className="h-[80vh] bg-[url('/assets/images/poster.png')] bg-cover bg-center">
      <div className="max-w-7xl mx-auto text-white flex items-center h-full">
        <div className="max-w-xs space-y-4">
          {/* Movie detail */}
          <h2 className="text-5xl leading-[56px] font-bold">
            John Wick 3 : Parabellum
          </h2>

          <div className="flex gap-8 items-center">
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

          <p className="text-sm font-medium">
            John Wick is on the run after killing a member of the international
            assassins&apos; guild, and with a $14 million price tag on his head,
            he is the target of hit men and women everywhere.
          </p>

          <button className="px-4 py-[6px] bg-rose-700 hover:bg-rose-800 flex items-center gap-2 rounded-md transition-colors duration-300 ease-in-out">
            <PlayIcon />
            <p className="text-sm font-bold">WATCH TRAILER</p>
          </button>
        </div>
      </div>
    </section>
  );
}
