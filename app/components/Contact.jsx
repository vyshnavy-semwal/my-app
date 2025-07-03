import { assets } from "../assets/assets";
import Image from "next/image";
import React, { useState } from "react";

const Contact = () => {
  const [result, setResult] = useState("");

  const onSubmit = async (event) => {
    event.preventDefault();
    setResult("Sending....");
    const formData = new FormData(event.target);

    formData.append("access_key", "4eb96f50-bd2f-4c61-9aa0-5b7ece003313");

    const response = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      body: formData,
    });

    const data = await response.json();

    if (data.success) {
      setResult("Form Submitted Successfully");
      event.target.reset();
    } else {
      console.log("Error", data);
      setResult(data.message);
    }
  };
  return (
    <div className="outline-gray-400">
      <div
        id="contact"
        className='w-full px-[12%] py-10 scroll-mt-20 bg-[url("/footer-bg-color.png")] bg-no-repeat bg-center bg-[length:90%_auto]'
      >
        <h4 className="text-center mb-2 text-lg ">Connect with me</h4>
        <h2 className="text-center text-5xl ">Get in touch</h2>
        <p className="tect-center max-w-2xl mx-auto mt-5 mb-12 ">
          simply fill outthe breif feilds below and DR.Sarena will be in touch
          with you soon,usually within one buisness day. This form is safe,
          private and compeltely free.
        </p>
        <form onSubmit={onSubmit} className="max-w-2xl mx-auto">
          <div className="grid grid-cols-auto gap-6 mt-10 mb-8">
            <input
              type="Name"
              placeholder="Enter your Name"
              required
              className="flex-1 p-3 outline-teal-300 border-[0.5px] border-gray-400 rounded-md bg-white "
              name="name"
            />
            <input
              type="Email"
              placeholder="Enter your Email"
              required
              className="flex-1 p-3 outline-teal-300 border-[0.5px] border-gray-400 rounded-md bg-white"
              name="email"
            />
          </div>
          <textarea
            row="6"
            placeholder="Enter your message"
            required
            className="w-full p-4 outline-none border-[0.5px] border-gray-400 rounded-md bg-white mb-6"
            name="message"
          ></textarea>
          <button
            type="submit"
            className="py-3 px-8 w-max flex text-center items-center justify-between gap-2 bg-black/80 text-white rounded-full mx-auto hover:bg-black duration-500"
          >
            Submit Now{" "}
            <Image src={assets.right_arrow_white} alt="" className="w-4" />
          </button>
          <p className="mt-4">{result}</p>
        </form>
      </div>
    </div>
  );
};

export default Contact;
