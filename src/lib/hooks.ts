import { useQuery } from "@tanstack/react-query";
import { $$sanityClient } from "./sanity-client";

export const useSanityImages = () => {
  const { data, isLoading } = useQuery({
    queryKey: ["test", "images"],
    queryFn: async () => {
      type MediaContent = {
        imageAsset: string;
        id: string;
      };
      const photo = (await $$sanityClient.fetch(`
            *[_type == "mediaContent"] {
                  "imageAsset": imageAsset.asset -> url,
                  _id
              }
            `)) as MediaContent[];

      return photo;
    },
  });

  return { isLoading, data };
};
export const useSanityVideos = () => {
  const { data, isLoading } = useQuery({
    queryKey: ["test", "videos"],
    queryFn: async () => {
      type MediaContent = {
        videoAssets: string;
        id: string;
      };
      const video = (await $$sanityClient.fetch(`
            *[_type == "videoAssets"] {
                  "videoAssets": videoFile.asset -> url,
                  _id
              }
            `)) as MediaContent[];

      return video;
    },
  });

  return { isLoading, data };
};
export const useSanitySocial = () => {
  const { data, isLoading } = useQuery({
    queryKey: ["test", "socials"],
    queryFn: async () => {
      type MediaContent = {
        imageAsset: string;
        id: string;
      };
      const social = (await $$sanityClient.fetch(`
            *[_type == "socialContent"] {
                  "imageAsset": imageAsset.asset -> url,
                  _id
              }
            `)) as MediaContent[];

      return social;
    },
  });

  return { isLoading, data };
};
