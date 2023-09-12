import Image from "next/image";
import Link from "next/link";
import React from "react";

const links = [
  {
    title: "Home",
    href: "/",
    icon: "/assets/icons/home.png",
  },
  {
    title: "Movies",
    href: "/movies",
    icon: "/assets/icons/movie.png",
  },
  {
    title: "TV Series",
    href: "#",
    icon: "/assets/icons/tv.png",
  },
  {
    title: "Upcoming",
    href: "#",
    icon: "/assets/icons/calendar.png",
  },
];
export default function SideBar() {
  return (
    <aside className="w-[220px] py-14 border border-black/30 rounded-r-[45px] h-screen flex flex-col justify-between">
      <Link href="" className="flex gap-4 items-center px-5">
        <Image
          src="/assets/images/logo.png"
          width={50}
          height={50}
          alt="logo"
        />
        <p className="text-[#333] text-2xl font-bold">MovieBox</p>
      </Link>

      <nav>
        <ul>
          {links.map((link) => {
            return link.href === "/movies" ? (
              <Link
                key={link.title}
                href={link.href}
                className="flex items-center gap-4 pl-8 py-4 border-r-[6px] border-r-[#BE123C] bg-[#BE123C1A]"
              >
                <Image src={link.icon} width={25} height={25} alt="icon" />
                <p className="text-xl text-[#BE123C] font-semibold">
                  {link.title}
                </p>
              </Link>
            ) : (
              <Link
                key={link.title}
                href={link.href}
                className="flex items-center gap-4 pl-8 py-4"
              >
                <Image src={link.icon} width={25} height={25} alt="icon" />
                <p className="text-xl text-[#666] font-semibold">
                  {link.title}
                </p>
              </Link>
            );
          })}
        </ul>
      </nav>

      {/* playing */}
      <div className="mx-6 p-4 border border-[#BE123CB2] bg-[#F8E7EB66] rounded-[20px] space-y-2">
        <p className="text-[15px] text-[#333333CC] font-semibold">
          Play movie quizes and earn free tickets
        </p>
        <p className="text-[#666] text-xs font-medium">
          50k people are playing now
        </p>
        <button className="text-xs text-[#BE123C] font-medium py-[6px] px-4 bg-[#BE123C33] rounded-[30px] flex justify-self-center">
          Start playing
        </button>
      </div>
    </aside>
  );
}