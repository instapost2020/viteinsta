import { useQuery } from "@tanstack/react-query";
import { $$sanityClient } from "./sanity-client";

export const useSanityAlternative = () => {
  const { data, isLoading } = useQuery({
    queryKey: ["test", "images"],
    queryFn: async () => {
      type stringContent = {
        altText: string;
        id: string;
      };
      const altText = (await $$sanityClient.fetch(`
                *[_type == "teaserPhotography"] {
                      altText,
                      _id
                  }
                `)) as stringContent[];

      return altText;
    },
  });

  return { isLoading, data };
};
