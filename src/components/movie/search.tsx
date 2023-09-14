"use client";
import React, {useEffect, useState} from "react";
import Image from "next/image";
import Link from "next/link";
import lib from "@/lib/searchMovies";
import get from "@/lib/topRated";
import {MovieWithID} from "@/types/data-types";
import {SearchCardLoader} from "../loaders/cardLoaders";

export default function Search({query}: {query: string}) {
  const [movies, setMovies] = useState<MovieWithID[]>([]);
  const [loading, setLoading] = useState(true);

  const fetchData = async () => {
    setLoading(true);
    const res = await lib.searchMovies(query);
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
  };

  useEffect(() => {
    fetchData();
  }, [query]);

  return loading ? (
    <div className="w-full">
      <SearchCardLoader itemCount={12} />
    </div>
  ) : movies.length > 0 ? (
    <div className="h-full overflow-y-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
      {movies.map((movie) => {
        return (
          <div key={movie.id} className="relative space-y-3">
            <Link
              href={`/movies/${movie.imdb_id}`}
              className="absolute inset-0 z-10 opacity-0"
            />
            <div className="flex gap-4">
              <Image
                src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
                width={200}
                height={600}
                className="max-w-[160px] h-auto"
                alt="logo"
              />

              <div className="flex flex-col justify-between">
                <div className="space-y-4">
                  <p className="text-lg text-gray-900 font-bold">
                    {movie.title}
                  </p>
                  <p className="text-base text-gray-900">
                    {movie.overview.slice(0, 130) + "..."}
                  </p>
                </div>
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
              </div>
            </div>
          </div>
        );
      })}
    </div>
  ) : (
    <p className="p-4 text-lg font-semibold">
      Nothing to display here, search your favorite movie...
    </p>
  );
}
