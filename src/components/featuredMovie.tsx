"use client";
import React, {useEffect, useState} from "react";
import Image from "next/image";
import Link from "next/link";
import {LikeIcon, LikedIcon} from "public/assets/svg/icons";
import get from "@/lib/topRated";
import {Movies} from "@/types/data-types";

export default function FeaturedMovie() {
  const [movies, setMovies] = useState<Movies>();

  const fetchData = async () => {
    const res = await get.getMovies();
    if (res) {
      const result = res.results;
      const filteredResult = result.slice(0, 10);
      setMovies(filteredResult);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);
  return (
    <div className="max-w-7xl mx-auto py-16">
      <div className="flex items-center justify-between mb-11">
        <h3 className="text-4xl font-bold">Featured Movie</h3>

        <button className="text-rose-700 text-lg">See more &gt;</button>
      </div>

      {/* Movie grid */}
      <div className="grid grid-cols-4 gap-20">
        {movies?.map((movie) => {
          let favorite = false;
          return (
            <div key={movie.id} className="relative space-y-3">
              {/* like section */}
              <div className="absolute top-5 inset-x-0 px-4 flex items-center justify-end z-20">
                {/* <p className="py-1 px-2 text-xs text-gray-900 font-bold rounded-2xl bg-[#F3F4F680] backdrop-blur-[1px]">
                  TV SERIES
                </p> */}
                <button>{favorite ? <LikedIcon /> : <LikeIcon />}</button>
              </div>
              <Link
                href={`/movies/${movie.id}`}
                className="absolute inset-0 z-10 opacity-0"
              />
              <Image
                src={`https://image.tmdb.org/t/p/w500/3bhkrj58Vtu7enYsRolD1fZdja1.jpg`}
                width={500}
                height={1000}
                className="w-full h-auto"
                alt="logo"
              />

              <p className="text-xs text-gray-400 font-bold">
                USA, 2016 - Current
              </p>

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
        })}
      </div>
    </div>
  );
}
