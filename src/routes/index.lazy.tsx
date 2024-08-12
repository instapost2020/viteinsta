import { createLazyFileRoute } from "@tanstack/react-router";
import { useQuery } from "@tanstack/react-query";
import { $$sanityClient } from "../lib/sanity-client";
import sanityImageBuilder from "../lib/sanity-image-builder";
import { useSanityImages } from "../lib/hooks";
export const Route = createLazyFileRoute("/")({
  component: Index,
});

function Index() {
  const sanityImages = useSanityImages();
  return (
    <div className="p-2 w-full h-[200vh]">
      {sanityImages.isLoading && <p>Loading Images...</p>}
      <div className="w-96 h-96 relative">
        {sanityImages.data?.map((image) => (
          <img src={image.imageAsset} alt="" />
        ))}
      </div>
    </div>
  );
}
