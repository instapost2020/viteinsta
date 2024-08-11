import { createClient } from "@sanity/client";

export const $$sanityClient = createClient({
  projectId: "ncahy6fl",
  dataset: "production",
  useCdn: true,
  apiVersion: "2024-08-11",
});
