import {
  SchemaTypeDefinition,
  defineField,
} from "instapostph/node_modules/@sanity/types";

export default {
  name: "videoAssets",
  title: "Video Assets",
  type: "document",
  fields: [
    defineField({
      name: "altText",
      title: "Alternative Text",
      type: "string",
    }),
    defineField({
      name: "videoFile",
      title: "Video File",
      type: "file",
      options: {
        accept: "video/*",
      },
    }),
  ],
} as SchemaTypeDefinition;
