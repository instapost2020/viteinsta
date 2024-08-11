import imageUrlBuilder from "@sanity/image-url";
import { $$sanityClient } from "./sanity-client";

const builder = imageUrlBuilder($$sanityClient);

const sanityImageBuilder = (source: any) => {
  return builder.image(source);
};

export default sanityImageBuilder;
