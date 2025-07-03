import { assets } from "../assets/assets";
import Image from "next/image";
import React from "react";

const Footer = () => {
  return (
    <div>
      <div class="bg-white p-8 rounded-2xl shadow-xl text-center border-2 border-gray-300">
        <h2 class="text-2xl font-semibold text-gray-800 mb-4">Session Fees</h2>
        <ul class="space-y-2 text-lg text-gray-600">
          <li>
            💵 $200 /{" "}
            <span class="font-medium text-gray-800">Individual Session</span>
          </li>
          <li>
            💑 $240 /{" "}
            <span class="font-medium text-gray-800">Couples Session</span>
          </li>
        </ul>
      </div>
      <div className="mt-20">
        <Image src={assets.preview} alt="" className="w-26 mx-auto mb-2" />
        <div className="w-max flex item-center gap-2 mx-auto">
          <Image src={assets.mail_icon} alt="" className="w-7 h-5 mt-2" />
          serena@blakepsychology.com
        </div>
      </div>
      <div className="tex-center sm:flex items-center justify-between border-t border-gray-400 mx[10%] mt-12 py-6  text-xl bg-gray-400">
        <p>2025 Sarena Blacke . All rights reserved</p>
        <ul className="flex-items-center gap-10 justify-center mt-4 sm:mt-0">
          <li className="text-xl ">
            <a>linkdn</a>
          </li>
          <li className="text-xl ">
            <a href=""></a>Twitter
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Footer;
