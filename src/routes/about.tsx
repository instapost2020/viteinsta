import { useSanityVideos } from "../lib/hooks";
import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/about")({
  component: () => <About />,
});

const About = () => {
  const sanityVideos = useSanityVideos();
  return (
    <div>
      {sanityVideos.data?.map((video) => (
        <video autoPlay loop muted>
          <source src={video.videoAssets} />
        </video>
      ))}
    </div>
  );
};
