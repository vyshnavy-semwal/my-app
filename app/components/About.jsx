import { assets } from "../assets/assets";
import Image from "next/image";
import React from "react";

const About = () => {
  return (
    <div id="about" className="w-full px-[12%] py-10 scroll-mt-32">
      <h4 className="text-center mb-2 text-lg ">Introduction</h4>
      <h3 className="text-center text-5xl ">About Me</h3>
      <div className="flex w-full flex-col lg:flex-row items-center gap-20 my-20">
        <div className="w-64 sm:w-80 rounded=3xl max-w-none">
          <Image src={assets.women} alt="user" className="w-full " />
        </div>
        <div className="flex-1">
          <p className="mb-10 max-w-2xl ">
            Dr. Serena Blake is a licensed clinical psychologist (PsyD) based in
            Los Angeles, CA, with eight years of experience and over 500 client
            sessions. She blends evidence-based approaches—like
            cognitive-behavioral therapy and mindfulness—with compassionate,
            personalized care to help you overcome anxiety, strengthen
            relationships, and heal from trauma. Whether you meet in her
            Maplewood Drive office or connect virtually via Zoom, Dr. Blake is
            committed to creating a safe, supportive space for you to thrive.
          </p>

          <ul></ul>
        </div>
      </div>
    </div>
  );
};

export default About;
