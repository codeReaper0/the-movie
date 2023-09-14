import Link from "next/link";
import {
  FacebookIcon,
  InstagramIcon,
  TwitterIcon,
  YoutubeIcon,
} from "public/assets/svg/icons";
import React from "react";

export default function Footer() {
  return (
    <footer className="gap-6 py-6 flex flex-col items-center">
      <div className="flex gap-6 md:gap-12">
        <Link href="#">
          <FacebookIcon />
        </Link>
        <Link href="#">
          <InstagramIcon />
        </Link>
        <Link href="#">
          <TwitterIcon />
        </Link>
        <Link href="#">
          <YoutubeIcon />
        </Link>
      </div>
      <div className="flex gap-6 md:gap-12 px-4 lg:px-0">
        <Link className="text-[#111827] font-bold" href="#">
          Conditions of Use
        </Link>
        <Link className="text-[#111827] font-bold" href="#">
          Privacy & Policy
        </Link>
        <Link className="text-[#111827] font-bold" href="#">
          Press Room
        </Link>
      </div>
      <p className="text-[#6B7280] font-bold">
        © 2023 MovieBox by Tella Boluwatife
      </p>
    </footer>
  );
}
