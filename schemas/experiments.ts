import { Rule } from "@sanity/types";

const metaData = [
  {
    name: "Title",
    title: "Title",
    type: "string",
    validation: (Rule: Rule) => {
      return Rule.required().min(0).max(25);
    },
  },
  {
    name: "thumnail",
    title: "Thumnail",
    type: "image",
    fields: [
      {
        type: "text",
        name: "alt",
        title: "Description",
      },
    ],
    options: {
      hotspot: true,
    },
  },
  {
    name: "subTitle",
    title: "Subtitle",
    type: "string",
  },
  {
    name: "path",
    title: "Path",
    type: "string",
  },
  {
    name: "slug",
    title: "Slug",
    type: "slug",
    validation: (Rule: Rule) => {
      return Rule.required().error("You done goofed");
    },
  },
];

export const experiments = {
  name: "experiments",
  type: "document",
  title: "Experiments",
  fields: [...metaData],
};
