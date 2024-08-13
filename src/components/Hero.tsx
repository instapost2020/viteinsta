import React from "react";
import { motion } from "framer-motion";
import { Button } from "../../src/components/ui/button";

const Hero = () => {
  return (
    <div className="w-full h-auto  px-8 py-24 relative ">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 w-full items-center ">
        <div className="bg-[url('/instaAssets/landscape.png')] bg-no-repeat bg-cover w-full h-full absolute top-0 left-0 opacity-35 -z-0 bg-red-400"></div>
        <div className="lg:p-20 z-10">
          <img src="/instaAssets/intern.png" alt="" className=" rounded-2xl" />
        </div>
        <div className="flex flex-col gap-4 z-10">
          <h1
            className="text-gray-700 text-xl md:text-2xl lg:text-5xl font-semibold text-center "
            style={{ fontFamily: "RalewayMedium" }}
          >
            We are an <span className="text-red-600">All-In-One</span> Creative
            Team and Content Marketing & Social Media Marketing Agency.
          </h1>
          <Button className="w-fit px-9 py-2 mx-auto bg-green-400 hover:bg-green-200">
            HIRE US!
          </Button>
        </div>
      </div>
    </div>
  );
};

export default Hero;
