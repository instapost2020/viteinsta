import React from "react";
import { motion } from "framer-motion";

const SecondLanding = () => {
  return (
    <div
      className="w-full h-auto py-20 px-4"
      style={{ fontFamily: "RalewayMedium" }}
    >
      <div className="grid grid-cols-1 md:grid-cols-2">
        <motion.div
          initial={{
            clipPath: "inset(0 100% 0 0)",
          }}
          whileInView={{
            clipPath: "inset(0 0 0 0)",
            transition: {
              duration: 1,
            },
          }}
          className="p-8"
        >
          <img src="/instaAssets/devices.png" alt="" />
        </motion.div>
        <div className="items-center justify-center flex">
          <motion.h1
            initial={{
              clipPath: "inset(100% 0 0 0)",
            }}
            whileInView={{
              clipPath: "inset(0 0 0 0)",
              transition: {
                duration: 0.6,
              },
            }}
            className="text-xl md:text-2xl lg:text-5xl font-semibold text-center max-w-lg md:max-w-2xl"
          >
            Why should you consider us for your{" "}
            <span className="text-red-600">Photography</span> needs?
          </motion.h1>
        </div>
      </div>
    </div>
  );
};

export default SecondLanding;
