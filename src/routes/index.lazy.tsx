import { createLazyFileRoute } from "@tanstack/react-router";
import Hero from "../../src/components/Hero";
import SecondLanding from "../../src/components/SecondLanding";
import TeaserPhotography from "../../src/components/TeaserPhotography";
import { useSanityImages } from "../lib/hooks";
import { useSanityAlternative } from "../../src/lib/altHooks";

export const Route = createLazyFileRoute("/")({
  component: Index,
});

function Index() {
  const { data, isLoading } = useSanityAlternative();
  return (
    <div className="w-full h-auto">
      <Hero />
      <SecondLanding />
      <TeaserPhotography />
      {data?.map((item) => <h1>{item.altText}</h1>)}
    </div>
  );
}
