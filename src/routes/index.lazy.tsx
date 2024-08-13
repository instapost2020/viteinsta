import { createLazyFileRoute } from "@tanstack/react-router";
import Hero from "../../src/components/Hero";
import SecondLanding from "../../src/components/SecondLanding";
import TeaserPhotography from "../../src/components/TeaserPhotography";
import { useSanityImages } from "../lib/hooks";

export const Route = createLazyFileRoute("/")({
  component: Index,
});

function Index() {
  const sanityImages = useSanityImages();
  return (
    <div className="w-full h-auto">
      <Hero />
      <SecondLanding />
      <TeaserPhotography />
    </div>
  );
}
