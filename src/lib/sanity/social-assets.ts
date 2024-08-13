import {
  SchemaTypeDefinition,
  defineField,
} from "instapostph/node_modules/@sanity/types";

export default {
  name: "socialAsset",
  title: "Social Media Post",
  type: "document",
  fields: [
    defineField({
      name: "socialAsset",
      title: "Social Asset",
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
