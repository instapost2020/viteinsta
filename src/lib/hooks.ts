import React from "react";
import { $$sanityClient } from "./sanity-client";
import { useQuery } from "@tanstack/react-query";

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
