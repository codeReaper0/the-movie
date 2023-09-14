"use client";
import React, {useRef} from "react";
import Image from "next/image";
import {PlayIcon} from "public/assets/svg/icons";
import {
  Autoplay,
  Navigation,
  Pagination,
  Scrollbar,
  A11y,
} from "swiper/modules";
import {Swiper, SwiperSlide} from "swiper/react";
import SwiperCore from "swiper";

SwiperCore.use([Autoplay, Navigation, Pagination, Scrollbar, A11y]);

import "swiper/swiper-bundle.css";

const heroMovies = [
  {
    bg: "/assets/images/dark_night.jpg",
    popularity: 86.234,
    overview:
      "Batman raises the stakes in his war on crime. With the help of Lt. Jim Gordon and District Attorney Harvey Dent, Batman sets out to dismantle the remaining criminal organizations that plague the streets. The partnership proves to be effective, but they soon find themselves prey to a reign of chaos unleashed by a rising criminal mastermind known to the terrified citizens of Gotham as the Joker.",
    title: "The Dark Knight",
  },
  {
    bg: "/assets/images/meg.jpg",
    popularity: 2943.17,
    overview:
      "An exploratory dive into the deepest depths of the ocean of a daring research team spirals into chaos when a malevolent mining operation threatens their mission and forces them into a high-stakes battle for survival.",
    title: "Meg 2: The Trench",
  },
  {
    bg: "/assets/images/poster.png",
    popularity: 8642.241,
    overview:
      "John Wick is on the run after killing a member of the international assassins' guild, and with a $14 million price tag on his head, he is the target of hit men and women everywhere.",
    title: "John Wick 3 : Parabellum",
  },
  {
    bg: "/assets/images/barbie.jpg",
    popularity: 3792.387,
    overview:
      "Barbie and Ken are having the time of their lives in the colorful and seemingly perfect world of Barbie Land. However, when they get a chance to go to the real world, they soon discover the joys and perils of living among humans.",
    title: "Barbie",
  },
  {
    bg: "/assets/images/oppen.jpg",
    popularity: 504.482,
    overview:
      "The story of J. Robert Oppenheimer’s role in the development of the atomic bomb during World War II.",
    title: "Oppenheimer",
  },
];
export default function Hero() {
  return (
    <div className="relative">
      <Swiper
        spaceBetween={0}
        loop={true}
        autoplay={{delay: 3000}}
        slidesPerView={1}
        pagination={{clickable: true}}
      >
        {heroMovies.map((hero, index) => {
          return (
            <SwiperSlide key={index}>
              <section
                className="h-[90vh] bg-cover bg-center relative"
                style={{backgroundImage: `url(${hero.bg})`}}
              >
                <div className="bg-black/40 absolute inset-0 z-0"></div>
                <div className="max-w-7xl mx-auto text-white flex items-center h-full z-10 absolute inset-0 p-4 lg:px-12 xl:p-0">
                  <div className="max-w-md space-y-4">
                    {/* Movie detail */}
                    <h2 className="text-5xl leading-[56px] font-bold">
                      {hero.title}
                    </h2>

                    <div className="flex gap-8 items-center">
                      <div className="flex gap-2 items-center">
                        <Image
                          src="/assets/images/imdb.png"
                          width={35}
                          height={17}
                          alt="logo"
                        />

                        <p className="text-xs">
                          {`${hero.popularity.toFixed(1)}/100`}
                        </p>
                      </div>
                      <div className="flex gap-2 items-center">
                        <Image
                          src="/assets/images/tomato.png"
                          width={16}
                          height={17}
                          alt="logo"
                        />

                        <p className="text-xs ">
                          {hero.popularity.toFixed(0)}%
                        </p>
                      </div>
                    </div>

                    <p className="text-sm font-medium">{hero.overview}</p>

                    <button className="px-4 py-[6px] bg-rose-700 hover:bg-rose-800 flex items-center gap-2 rounded-md transition-colors duration-300 ease-in-out">
                      <PlayIcon />
                      <p className="text-sm font-bold">WATCH TRAILER</p>
                    </button>
                  </div>
                </div>
              </section>
            </SwiperSlide>
          );
        })}
      </Swiper>
    </div>
  );
}
