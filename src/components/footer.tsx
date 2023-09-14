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
        <FacebookIcon />
        <InstagramIcon />
        <TwitterIcon />
        <YoutubeIcon />
      </div>
      <div className="flex gap-6 md:gap-12 px-4 lg:px-0">
        <p className="text-[#111827] font-bold">Conditions of Use</p>
        <p className="text-[#111827] font-bold">Privacy & Policy</p>
        <p className="text-[#111827] font-bold">Press Room</p>
      </div>
      <p className="text-[#6B7280] font-bold">
        © 2023 MovieBox by Tella Boluwatife
      </p>
    </footer>
  );
}
