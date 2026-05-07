import { defineType, defineField } from "sanity";

export default defineType({
  name: "aboutUsPage-works",
  title: "About Us Page (Works)",
  type: "document",
  fields: [
    defineField({
      name: "title",
      title: "Document Title",
      type: "string",
      initialValue: "About Us Page Content",
      hidden: true,
    }),
    defineField({
      name: "introEyebrow",
      title: "Intro Section Eyebrow",
      type: "string",
    }),
    defineField({
      name: "introHeading",
      title: "Intro Section Heading",
      type: "string",
    }),
    defineField({
      name: "introBody",
      title: "Intro Section Body",
      type: "text",
      rows: 4,
    }),
    defineField({
      name: "introImage",
      title: "Intro Section Image",
      type: "image",
      options: { hotspot: true },
    }),
    defineField({
      name: "solutionsImage",
      title: "Solutions Section Image",
      type: "image",
      options: { hotspot: true },
    }),
    defineField({
      name: "ctaHeadline",
      title: "Bottom CTA Banner Headline",
      type: "string",
    }),
    defineField({
      name: "ctaButtonLabel",
      title: "CTA Button Label",
      type: "string",
    }),
    defineField({
      name: "ctaButtonLink",
      title: "CTA Button Link",
      type: "string",
    }),
  ],
});
