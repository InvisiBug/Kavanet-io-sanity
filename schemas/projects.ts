import { Rule } from "@sanity/types";

export const projects = {
  name: "projects",
  type: "document",
  title: "Projects",
  fields: [
    {
      name: "Title",
      title: "Title",
      type: "string",
      validation: (Rule: Rule) => {
        return Rule.required().min(5).max(25);
      },
    },
    {
      name: "subTitle",
      title: "Subtitle",
      type: "string",
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
      name: "slug",
      title: "Slug",
      type: "slug",
      validation: (Rule: Rule) => {
        return Rule.required().error("You done goofed");
      },
    },
  ],
};
