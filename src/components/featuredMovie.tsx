import React from "react";
import MovieCard from "./movieCard";

export default function FeaturedMovie() {
  return (
    <div className="max-w-7xl mx-auto py-16">
      <div className="flex items-center justify-between mb-11">
        <h3 className="text-4xl font-bold">Featured Movie</h3>

        <button className="text-rose-700 text-lg">See more &gt;</button>
      </div>

      {/* Movie grid */}
      <div className="grid grid-cols-4 gap-20">
        <MovieCard />
      </div>
    </div>
  );
}
