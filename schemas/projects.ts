import { Rule } from "@sanity/types";

const metaData = [
  {
    name: "Title",
    title: "Title",
    type: "string",
    validation: (Rule: Rule) => {
      return Rule.required().min(5).max(25);
    },
  },
  {
    title: "Tags",
    name: "tags",
    type: "string",
    options: {
      list: [
        { title: "Glowy", value: "glowy" },
        { title: "LEDs", value: "LEDs" },
      ],
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
    name: "coverImage",
    title: "Cover Image",
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
    name: "slug",
    title: "Slug",
    type: "slug",
    validation: (Rule: Rule) => {
      return Rule.required().error("You done goofed");
    },
  },
];

const content = [
  {
    name: "content",
    title: "Content",
    type: "array",
    of: [
      {
        type: "block",
      },
      {
        type: "image",
        fields: [
          {
            name: "caption",
            title: "Caption",
            type: "string",
            options: {
              isHighlighted: true, // <-- make this field easily accessible
            },
          },
          {
            title: "Image Position",
            type: "string",
            name: "position",
            options: {
              list: [
                { title: "Centre", value: "center" },
                { title: "Left", value: "left" },
                { title: "Right", value: "right" },
              ],
              layout: "radio",
              isHighlited: true,
            },
          },
          {
            type: "text",
            name: "alt",
            title: "Description",
            options: {
              isHighlighted: true,
            },
          },
        ],
        options: {
          hotspot: true,
        },
      },
    ],
  },
];

export const projects = {
  name: "projects",
  type: "document",
  title: "Projects",
  fields: [...metaData, ...content],
};
