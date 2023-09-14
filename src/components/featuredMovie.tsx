"use client";
import React, {useEffect, useState} from "react";
import Image from "next/image";
import Link from "next/link";
import {LikeIcon, LikedIcon} from "public/assets/svg/icons";
import get from "@/lib/topRated";
import {MovieWithID} from "@/types/data-types";
import {CardLoader} from "./loaders/cardLoaders";
import {toast} from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

export default function FeaturedMovie() {
  const [movies, setMovies] = useState<MovieWithID[]>([]);
  const [loading, setLoading] = useState(true);

  const fetchData = async () => {
    try {
      const res = await get.getMovies();
      if (res) {
        const result = res.results;
        const filteredResult = result.slice(0, 12);
        const movieDetailsPromises = filteredResult.map(
          async (movie: MovieWithID) => {
            const movieDetails = await get.getMovieWithID(movie.id);
            return {...movieDetails, favorite: false};
          }
        );

        const movieDetails = await Promise.all(movieDetailsPromises);
        setMovies(movieDetails);
        setLoading(false);
      }
    } catch (error: any) {
      toast.error(error.message, {
        position: "top-right",
        autoClose: 3000,
      });
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <div className="max-w-7xl mx-auto p-4 md:px-10 xl:p-0 xl:py-16 ">
      <div className="flex items-center justify-between mb-8">
        <h3 className="text-2xl xl:text-4xl font-bold">Top Rated Movie</h3>

        <button className="text-rose-700 text-lg">See more &gt;</button>
      </div>
      {loading ? (
        <CardLoader itemCount={10} />
      ) : (
        // Movie grid
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 xl:gap-16">
          {movies.map((movie) => {
            const allGenres: string[] = [];
            movie.genres.forEach((genre) => {
              allGenres.push(genre.name);
            });
            return (
              <div
                key={movie.id}
                data-testid="movie-card"
                className="relative space-y-3"
              >
                {/* like section */}
                <div className="absolute top-5 inset-x-0 px-4 flex items-center justify-end z-20">
                  {/* <p className="py-1 px-2 text-xs text-gray-900 font-bold rounded-2xl bg-[#F3F4F680] backdrop-blur-[1px]">
                  TV SERIES
                </p> */}
                  <button
                    className="transition-all duration-500 ease-in-out"
                    onClick={() => {
                      setMovies((prevMovies) =>
                        prevMovies.map((prevMovie) =>
                          prevMovie.id === movie.id
                            ? {...prevMovie, favorite: !prevMovie.favorite}
                            : prevMovie
                        )
                      );
                    }}
                  >
                    {movie.favorite ? <LikedIcon /> : <LikeIcon />}
                  </button>
                </div>
                <Link
                  href={`/movies/${movie.imdb_id}`}
                  className="absolute inset-0 z-10 opacity-0"
                />
                <Image
                  src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
                  width={500}
                  height={1000}
                  className="w-full h-auto"
                  data-testid="movie-poster"
                  alt="logo"
                />

                <p
                  data-testid="movie-release-date"
                  className="text-xs text-gray-400 font-bold"
                >
                  {`${
                    movie.production_countries[0].name ===
                    "United States of America"
                      ? "USA"
                      : movie.production_countries[0].name
                  }, ${movie.release_date.slice(0, 4)}`}
                </p>

                <p
                  data-testid="movie-title"
                  className="text-lg text-gray-900 font-bold"
                >
                  {movie.title}
                </p>

                <div className="flex justify-between items-center">
                  <div className="flex gap-2 items-center">
                    <Image
                      src="/assets/images/imdb.png"
                      width={35}
                      height={17}
                      alt="logo"
                    />

                    <p className="text-sm">{`${movie.popularity.toFixed(
                      1
                    )}/100`}</p>
                  </div>
                  <div className="flex gap-2 items-center">
                    <Image
                      src="/assets/images/tomato.png"
                      width={16}
                      height={17}
                      alt="logo"
                    />

                    <p className="text-sm">{movie.popularity.toFixed(0)}%</p>
                  </div>
                </div>

                <p className="text-xs text-gray-400 font-bold">
                  {allGenres.join(", ")}
                </p>
              </div>
            );
          })}
        </div>
      )}
    </div>
  );
}
