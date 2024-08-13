import {
  SchemaTypeDefinition,
  defineField,
} from "../../../instapostph/node_modules/@sanity/types";

export default {
  name: "socialPost",
  title: "Social Media Post",
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
    defineField({
      name: "datePosted",
      title: "Date Posted",
      type: "date",
    }),
  ],
} as SchemaTypeDefinition;
