import { createLazyFileRoute } from "@tanstack/react-router";
import { useQuery } from "@tanstack/react-query";
import { $$sanityClient } from "../lib/sanity-client";
import sanityImageBuilder from "../lib/sanity-image-builder";
import { useSanityImages } from "../lib/hooks";
import Hero from "../../src/components/Hero";
import SecondLanding from "../../src/components/SecondLanding";
import { motion } from "framer-motion";

export const Route = createLazyFileRoute("/")({
  component: Index,
});

function Index() {
  const sanityImages = useSanityImages();
  return (
    <div className="w-full h-auto">
      <Hero />
      <SecondLanding />
    </div>
  );
}
