"use client";
import Movie from "@/components/movie/movie";
import SideBar from "@/components/movie/sideBar";
import {usePathname} from "next/navigation";
import get from "@/lib/topRated";
import {useEffect, useState} from "react";
import {MovieLoader} from "@/components/loaders/movieLoader";
import {MovieWithIMDB} from "@/types/data-types";
import MobileHeader from "@/components/mobileHeader";
import {toast} from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

export default function Movies() {
  const pathname = usePathname();
  const pathnameParts = pathname.split("/");
  const movie_id = pathnameParts.length > 0 ? pathnameParts.pop() : undefined;
  const [movie, setMovie] = useState<MovieWithIMDB | undefined>(undefined);
  const [loading, setLoading] = useState(true);

  const CheckMovie = async () => {
    try {
      if (movie_id) {
        try {
          const res = await get.getMovieWithIMDB(movie_id);
          if (res && res.status_code === 34 && !res.success) {
            toast.error(res.status_message, {
              position: "top-right",
              autoClose: 3000,
            });
          } else if (res) {
            setMovie(res);
          }
        } catch (error: any) {
          toast.error(error.message, {
            position: "top-right",
            autoClose: 3000,
          });
        }
      }
    } catch (error: any) {
      toast.error(error.message, {
        position: "top-right",
        autoClose: 3000,
      });
    } finally {
      setLoading(false);
    }
  };
  useEffect(() => {
    CheckMovie();
  }, []);
  return (
    <div className="flex font-poppins">
      <SideBar />
      <div className="flex-grow">
        <MobileHeader />
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
    </div>
  );
}
