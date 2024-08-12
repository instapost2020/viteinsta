import {
  SchemaTypeDefinition,
  defineField,
} from "instapostph/node_modules/@sanity/types";

export default {
  name: "mediaContent",
  title: "Media Content",
  type: "document",
  fields: [
    defineField({
      name: "imageAsset",
      title: "Image Asset",
      type: "image",
      options: {
        hotspot: true,
      },
    }),
    defineField({
      name: "altText",
      title: "Alternative Text",
      type: "string",
    }),
  ],
} as SchemaTypeDefinition;
