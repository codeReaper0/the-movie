"use client";
import Movie from "@/components/movie/movie";
import SideBar from "@/components/movie/sideBar";
import {usePathname} from "next/navigation";

export default function Movies() {
  const pathname = usePathname();
  const movie = pathname.split("/").pop();
  return (
    <div className="flex font-poppins">
      <SideBar />
      <Movie />
    </div>
  );
}
