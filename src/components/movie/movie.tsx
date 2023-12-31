"use client";
import React, {useEffect, useState} from "react";
import Image from "next/image";
import {MovieWithIMDB, TrendingMovies} from "@/types/data-types";
import {formatNumber, minutesConverter} from "@/lib/globalFunctions";
import get from "@/lib/getTrendingMovies";
import {toast} from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

export default function Movie({movieData}: {movieData: MovieWithIMDB}) {
  const [trending, setTrending] = useState<TrendingMovies[]>();

  const getTrendingMovies = async () => {
    try {
      const res = await get.getTrendingMovies();
      if (res) {
        const result = res.results;
        const filteredResult = result.slice(0, 3);
        setTrending(filteredResult);
      }
    } catch (error: any) {
      toast.error(error.message, {
        position: "top-right",
        autoClose: 3000,
      });
    }
  };

  useEffect(() => {
    getTrendingMovies();
  }, []);

  return (
    <main className="flex-grow p-5 lg:p-6 h-screen overflow-y-auto">
      {/* Trailer */}
      <div className="relative rounded-[20px] overflow-hidden mb-4">
        <Image
          src={`https://image.tmdb.org/t/p/w1280${movieData.backdrop_path}`}
          width={1920}
          height={700}
          alt="logo"
          className="w-full max-h-[405px] object-cover"
        />
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="rounded-full w-16 lg:w-[110px] h-16 lg:h-[110px] bg-[#E8E8E833] backdrop-blur-[2px] shadow-[0px_2px_4px_rgba(0,0,0,0.25)] flex items-center justify-center stroke-[2] stroke-[rgb(232,232,232/0.20)] cursor-pointer">
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
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
        <div className="lg:col-span-8">
          <div className="flex items-center gap-4 mb-5">
            <p className="font-medium text-[#404040] lg:text-lg">
              <span data-testid="movie-title">{movieData.title}</span>
              <span> • </span>
              <span data-testid="movie-release-date">
                {`${movieData.release_date} (UTC)`}
              </span>
              <span> • </span>
              <span>{movieData.adult === false ? "PG-13" : "18+"}</span>
              <span> • </span>
              <span data-testid="movie-runtime">
                {minutesConverter(movieData.runtime)}
              </span>
            </p>
            <div className="flex flex-wrap gap-2">
              {movieData.genres.map((genre) => {
                return (
                  <p
                    key={genre.id}
                    className="text-xs text-[#b91c1c] font-medium border border-[#fbe7eb] rounded-[15px] py-1 px-2"
                  >
                    {genre.name}
                  </p>
                );
              })}
            </div>
          </div>

          {/* Details */}
          <p className="text-[#333] text-sm lg:text-lg">{movieData.overview}</p>

          {/* Director */}
          <p className="my-3 lg:my-6 text-sm lg:text-base">
            <span className="text-[#333]">Director: </span>
            <span className="text-[#be123c]">
              {movieData.production_companies[0].name}
            </span>
          </p>

          {/* Writers */}
          <p className="text-sm lg:text-base">
            <span className="text-[#333]">Writers: </span>
            <span className="text-[#be123c]">
              {movieData.production_companies[0].name}
            </span>
          </p>

          {/* Stars */}
          <p className="my-3 lg:my-6 text-sm lg:text-base">
            <span className="text-[#333]">Stars: </span>
            <span className="text-[#be123c]">Tom Cruise</span>
          </p>

          {/* top ranking */}
          <div className="flex rounded-[10px] border w-max">
            <p className="bg-[#be123c] rounded-[10px] py-2 px-2 lg:px-4 text-white text-xs lg:text-base">
              Top rated movie #65
            </p>
            <select
              name=""
              id=""
              className="py-2 px-2 lg:pl-4 lg:w-[300px] rounded-[10px] focus:outline-none text-xs lg:text-base"
            >
              <option value="">Award 9 nominations</option>
            </select>
          </div>
        </div>

        <div className="lg:col-span-4">
          <div className="flex gap-2 items-center justify-end mb-4">
            <Image
              src="/assets/icons/star.png"
              width={20}
              height={20}
              alt="logo"
              className="w-5 h-5"
            />
            <p className="font-medium">
              <span className="text-[#e8e8e8]">{`${movieData.vote_average.toFixed(
                1
              )} `}</span>
              <span className="text-[#666]">{`| ${formatNumber(
                movieData.vote_count
              )}`}</span>
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
              {trending?.map((movie) => {
                return (
                  <Image
                    key={movie.id}
                    src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
                    width={300}
                    height={700}
                    alt="image"
                    className="w-auto"
                  />
                );
              })}
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
