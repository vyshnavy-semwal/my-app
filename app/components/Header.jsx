import { assets } from "../assets/assets";
import Image from "next/image";

import React from "react";

const Header = () => {
  return (
    <div className="w-11/12 mx-w-3xl text center mx-auto h-screen flex flex-col items-center gap-4 ">
      <div>
        <Image
          src={assets.women}
          alt=""
          className="relative rounded-full w-32  mt-30"
        />
      </div>
      <h3 className="flex items-end gap-2 text-xl md:text-5xl mb-3">
        Hello! I'm Sarena Blake <Image src={assets.hand_icon} alt="w-6" />
      </h3>
      <h1 className="font-black text-4xl sm:text-6xl lg:text-[66px]"></h1>
      <div alt="" className="text-center max-w-xl mx-auto leading-snug text-xl">
        Dr. Serena Blake, PsyD (Clinical Psychologist)
        <div alt="" className="text-shadow-neutral-700 text-m">
          With over a decade of experience in clinical psychology, Dr. Serena
          Blake is dedicated to helping individuals navigate life challenges
          with compassion and evidence-based care. She specializes in anxiety,
          trauma recovery, and emotional well-being.
        </div>
      </div>
      <div className="flex flex-col sm:flex-row items-center gap-4 mt-4 ">
        <a
          href="#contact"
          className="px-10 py-3 border rounded-full bg-gray-500 flex items-center gap-2"
        >
          contact me <Image src={assets.right_arrow_white} alt="w-4" />
        </a>

        <a
          href="#contact"
          className="px-10 py-3 border rounded-full border-gray-500 flex items-center gap-2"
        >
          Book appointment <Image src={assets.right_arrow_white} alt="w-4" />
        </a>
      </div>
    </div>
  );
};

export default Header;
