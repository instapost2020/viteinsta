import { createFileRoute } from "@tanstack/react-router";
import {
  useSanityImages,
  useSanitySocial,
  useSanityVideos,
} from "../lib/hooks";

export const Route = createFileRoute("/about")({
  component: () => <About />,
});

const About = () => {
  const sanityVideos = useSanityVideos();
  const sanitySocial = useSanitySocial();
  const sanityImage = useSanityImages();
  return (
    <div className="w-full h-auto">
      {sanitySocial.data?.map((post) => (
        <img src={post.imageAsset} className="w-32 h-32" />
      ))}
    </div>
  );
};
