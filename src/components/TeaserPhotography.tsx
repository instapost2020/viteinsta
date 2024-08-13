import Autoplay from "embla-carousel-autoplay";
import { AnimatePresence, motion } from "framer-motion";
import React, { useState } from "react";
import { Button } from "../../src/components/ui/button";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "../../src/components/ui/carousel";
import { useSanityTeaserPhoto } from "../../src/lib/hooks";

const TeaserPhotography = () => {
  const plugin = React.useRef();
  const [clicked, setClicked] = useState<string>("");
  const teaser = useSanityTeaserPhoto();
  return (
    <div
      className="w-full h-auto py-20 bg-yellow-400 rounded-t-3xl"
      style={{ fontFamily: "RalewayMedium" }}
    >
      <h1 className="max-w-xs pb-8 pl-4 text-2xl font-semibold text-gray-800 uppercase md:max-w-none md:text-center md:text-4xl">
        Check out some of our <span className="text-red-600 ">Photography</span>
      </h1>
      <div className="w-full px-2 mx-auto space-y-4 bg-yellow-400 ">
        <Carousel
          className="w-full max-w-6xl mx-auto bg-yellow-300 h-fit backdrop-blur-sm"
          opts={{
            loop: true,
          }}
          plugins={[
            Autoplay({
              delay: 2000,
            }),
          ]}
        >
          <CarouselPrevious className="absolute z-20 left-5" />
          <CarouselContent className="">
            {teaser.data?.map((teaser, index) => (
              <CarouselItem
                className="flex items-center justify-center w-full py-2 h-96 basis-2/3 md:basis-1/3"
                key={index}
              >
                <img
                  onClick={() => setClicked(teaser.imageAsset)}
                  src={teaser.imageAsset}
                  className="object-contain w-full h-full md:object-contain"
                />
              </CarouselItem>
            ))}
          </CarouselContent>
          <CarouselNext className="absolute right-5" />
        </Carousel>
      </div>
      <AnimatePresence mode="wait">
        {clicked && (
          <motion.div
            initial={{
              opacity: 0,
            }}
            animate={{
              opacity: 1,
            }}
            exit={{
              opacity: 0,
            }}
            onClick={() => setClicked("")}
            className="fixed inset-0 z-50 flex items-center justify-center bg-background/80"
          >
            <Button
              size="icon"
              onClick={() => setClicked("")}
              variant={"default"}
              className="absolute rounded-full top-5 right-5"
            >
              <h1>X</h1>
            </Button>
            <motion.div
              onClick={() => setClicked("")}
              initial={{
                scale: 0.7,
              }}
              animate={{
                scale: 1,
              }}
              exit={{
                scale: 0.7,
              }}
              className="w-full h-full max-w-5xl p-5"
            >
              <img
                onClick={() => setClicked("")}
                src={clicked}
                alt=""
                className="object-contain w-full h-full overflow-hidden rounded-xl"
              />
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default TeaserPhotography;
