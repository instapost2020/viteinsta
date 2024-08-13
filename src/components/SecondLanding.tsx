import { motion } from "framer-motion";

const SecondLanding = () => {
  return (
    <div
      className="w-full h-auto px-4 py-20"
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
        <div className="flex items-center justify-center">
          <motion.h1
            initial={{
              clipPath: "inset(0 100% 0 0)",
            }}
            whileInView={{
              clipPath: "inset(0 0 0 0)",
              transition: {
                duration: 0.6,
              },
            }}
            className="max-w-lg py-2 text-4xl font-semibold md:text-5xl lg:text-6xl md:max-w-2xl"
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
