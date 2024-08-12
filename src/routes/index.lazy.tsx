import { createLazyFileRoute } from "@tanstack/react-router";
import { useQuery } from "@tanstack/react-query";
import { $$sanityClient } from "../lib/sanity-client";
import sanityImageBuilder from "../lib/sanity-image-builder";
export const Route = createLazyFileRoute("/")({
  component: Index,
});

function Index() {
  // const { data, isLoading } = useQuery({
  //   queryKey: ["test", "videos"],
  //   queryFn: async () => {
  //     type MediaContent = {
  //       videoFile: string;
  //       id: string;
  //     };
  //     const photo = (await $$sanityClient.fetch(`
  //       *[_type == "imageAssets"] {
  //             "imageAsset": imageAsset.asset -> url,
  //              _id
  //         }
  //       `)) as MediaContent[];

  //     const images = (await $$sanityClient.fetch(`
  //         *[_type == "videoAssets"] {
  //             "videoFile": videoFile.asset -> url,
  //              _id
  //         }
  //       `)) as MediaContent[];

  //     return photo;
  //   },
  // });

  return (
    <div className="p-2 w-full h-[200vh]">
      {/* {isLoading && <p>Loading Images...</p>}
      <div className="w-96 h-96 relative">
        {data?.map((video) => (
          <video autoPlay loop muted>
            <source src={video.videoFile} />
          </video>
        ))}
        {data?.map((photo) => <img src={photo.imageAssets} alt="" />)}
      </div> */}
    </div>
  );
}
