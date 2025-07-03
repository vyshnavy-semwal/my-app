import React from "react";
import { assets } from "../assets/assets";
import Image from "next/image";

const Services = () => {
  return (
    <div
      id="services"
      className="w-full px-[12%] py-10 scroll-mt-20 bg-gray-300"
    >
      <h4 className="text-center mb-2 text-lg">What I offer</h4>
      <h2 className="text-center text-5xl">My Services</h2>
      <p className=" relative text-center items-center max-w-2xl auto mt-5 mb-12 text-lg  ">
        Experience: 8 years of practice, 500+ sessions
      </p>
      <div className="flex flex-col sm:flex-row justify-center items-center gap-30 mt-6">
        {/* Card 1 */}
        <div className="flex flex-col items-center w-48">
          <Image
            src={assets.card1}
            alt="user"
            className="w-80 h-60 object-cover rounded-full hover:scale-105 hover:shadow-5xl transition duration-300"
          />
          <h3 className="text-xl mt-3 text-center">Relationship counselling</h3>
        </div>

        {/* Card 2 */}
        <div className="flex flex-col items-center w-48">
          <Image
            src={assets.card2}
            alt="rel"
            className="w-80 h-60 object-cover rounded-full hover:scale-105 hover:shadow-xl transition duration-300"
          />
          <h3 className="text-xl mt-3 text-center">
            Anxiet & Stress Management
          </h3>
        </div>

        {/* Card 3 */}
        <div className="flex flex-col items-center w-48 mb-5">
          <Image
            src={assets.card3}
            alt="u"
            className="w-80 h-60 object-cover rounded-full hover:scale-105 hover:shadow-xl transition duration-300"
          />
          <h3 className="text-xl mt-3 text-center">Trauma Recovery</h3>
        </div>
      </div>
    </div>
  );
};

export default Services;
