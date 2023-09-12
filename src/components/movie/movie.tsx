import Image from "next/image";
import {PlayIcon} from "public/assets/svg/icons";
import React from "react";

export default function Movie() {
  return (
    <main className="flex-grow p-6 h-screen overflow-y-auto">
      {/* Trailer */}
      <div className="relative rounded-[20px] mb-4">
        <Image
          src="/assets/images/movie.png"
          width={1920}
          height={700}
          alt="logo"
          className="w-auto"
        />
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="rounded-full w-[110px] h-[110px] bg-[#E8E8E833] backdrop-blur-[2px] shadow-[0px_2px_4px_rgba(0,0,0,0.25)] flex items-center justify-center stroke-[2] stroke-[rgb(232,232,232/0.20)] cursor-pointer">
            <Image
              src="/assets/icons/play.png"
              width={50}
              height={50}
              alt="logo"
              className="w-auto"
            />
          </div>
          <p></p>
        </div>
      </div>

      {/* Movie Info */}
      <div className="grid grid-cols-12 gap-6">
        <div className="col-span-8">
          <div className="flex items-center gap-4 mb-5">
            <p className="font-medium text-[#404040] text-lg">
              Top Gun: Maverick • 2022 • PG-13 • 2h 10m
            </p>
            <div className="flex gap-2">
              <p className="text-xs text-[#b91c1c] font-medium border border-[#fbe7eb] rounded-[15px] py-1 px-2">
                Action
              </p>
            </div>
          </div>

          {/* Details */}
          <p className="text-[#333]">
            After thirty years, Maverick is still pushing the envelope as a top
            naval aviator, but must confront ghosts of his past when he leads
            TOP GUN&apos;s elite graduates on a mission that demands the
            ultimate sacrifice from those chosen to fly it.
          </p>

          {/* Director */}
          <p className="my-6">
            <span className="text-[#333]">Director: </span>
            <span className="text-[#be123c]">Joseph Kosinski</span>
          </p>

          {/* Writers */}
          <p className="">
            <span className="text-[#333]">Writers: </span>
            <span className="text-[#be123c]">Joseph Kosinski</span>
          </p>

          {/* Stars */}
          <p className="my-6">
            <span className="text-[#333]">Stars: </span>
            <span className="text-[#be123c]">Tom Cruise</span>
          </p>

          {/* top ranking */}
          <div className="flex rounded-[10px] border w-max">
            <p className="bg-[#be123c] rounded-[10px] py-2 px-4 text-white">
              Top rated movie #65
            </p>
            <select
              name=""
              id=""
              className="py-2 pl-4 w-[300px] rounded-[10px] focus:outline-none"
            >
              <option value="">Award 9 nominations</option>
            </select>
          </div>
        </div>

        <div className="col-span-4">
          <div className="flex gap-2 items-center justify-end mb-4">
            <Image
              src="/assets/icons/star.png"
              width={20}
              height={20}
              alt="logo"
              className="w-5 h-5"
            />
            <p className="font-medium">
              <span className="text-[#e8e8e8]">8.5 </span>
              <span className="text-[#666]">| 350k</span>
            </p>
          </div>

          {/* Showtimes */}
          <button className="bg-[#be123c] rounded-[10px] py-3 text-white flex items-center justify-center gap-2 w-full mb-3">
            <Image
              src="/assets/icons/tickets.png"
              width={20}
              height={20}
              alt="logo"
              className="w-5 h-5"
            />
            <span>See Showtimes</span>
          </button>

          <button className="border border-[#be123c] rounded-[10px] py-3 bg-[#BE123C1A] text-[#333] flex items-center justify-center gap-2 w-full mb-4">
            <Image
              src="/assets/icons/list.png"
              width={20}
              height={20}
              alt="logo"
              className="w-5 h-5"
            />
            <span>More watch options</span>
          </button>

          {/* Best Movies */}
          <div className="h-max relative rounded-[10px] overflow-hidden">
            <div className="grid grid-cols-3 gap-2">
              <Image
                src="/assets/images/wd.jpg"
                width={300}
                height={700}
                alt="image"
                className="w-auto"
              />
              <Image
                src="/assets/images/wd.jpg"
                width={300}
                height={700}
                alt="image"
                className="w-auto"
              />{" "}
              <Image
                src="/assets/images/wd.jpg"
                width={300}
                height={700}
                alt="image"
                className="w-auto"
              />
            </div>

            <div className="bg-[#12121280] backdrop-blur-[2px] absolute bottom-0 inset-x-0 py-2 rounded-[10px] flex items-center justify-center gap-2 text-white text-sm">
              <Image
                src="/assets/icons/list_white.png"
                width={20}
                height={20}
                alt="logo"
                className="w-5 h-5"
              />
              <span>The Best Movies and Shows in September</span>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
