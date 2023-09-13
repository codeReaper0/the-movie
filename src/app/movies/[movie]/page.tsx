"use client";
import Movie from "@/components/movie/movie";
import SideBar from "@/components/movie/sideBar";
import {usePathname} from "next/navigation";
import get from "@/lib/topRated";
import {useEffect, useState} from "react";
import {MovieLoader} from "@/components/loaders/movieLoader";
import {MovieWithIMDB} from "@/types/data-types";

export default function Movies() {
  const pathname = usePathname();
  const pathnameParts = pathname.split("/");
  const movie_id = pathnameParts.length > 0 ? pathnameParts.pop() : undefined;
  const [movie, setMovie] = useState<MovieWithIMDB | undefined>(undefined);
  const [loading, setLoading] = useState(true);

  const CheckMovie = async () => {
    if (movie_id) {
      const res = await get.getMovieWithIMDB(movie_id);
      if (res) {
        setMovie(res);
        setLoading(false);
      }
    } else {
      setLoading(false);
    }
  };

  useEffect(() => {
    CheckMovie();
  }, []);
  return (
    <div className="flex font-poppins">
      <SideBar />
      {loading ? (
        <MovieLoader />
      ) : movie !== undefined ? (
        <Movie movieData={movie} />
      ) : (
        <h2 className="text-3xl p-4 font-bold">
          Please provide a valid movie ID
        </h2>
      )}
    </div>
  );
}
