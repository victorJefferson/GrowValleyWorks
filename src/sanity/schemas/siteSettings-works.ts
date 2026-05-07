import { defineType, defineField } from "sanity";

export default defineType({
  name: "siteSettings-works",
  title: "Site Settings (Works)",
  type: "document",
  fields: [
    defineField({
      name: "title",
      title: "Site Title",
      type: "string",
      initialValue: "GrowValley Works Settings",
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: "mainNavigation",
      title: "Main Navigation",
      description: "Controls the top mega menu and links.",
      type: "array",
      of: [
        {
          type: "object",
          name: "navGroup",
          title: "Navigation Group or Link",
          fields: [
            defineField({
              name: "name",
              title: "Link Name",
              type: "string",
              validation: (Rule) => Rule.required(),
            }),
            defineField({
              name: "href",
              title: "Link URL",
              type: "string",
              validation: (Rule) => Rule.required(),
            }),
            defineField({
              name: "description",
              title: "Description",
              description: "Optional description text for mega menu items.",
              type: "text",
              rows: 2,
            }),
            defineField({
              name: "featuredTitle",
              title: "Featured Card Title",
              description: "Optional: Title for the featured card on the right.",
              type: "string",
            }),
            defineField({
              name: "featuredImage",
              title: "Featured Card Image",
              type: "image",
              options: { hotspot: true },
            }),
            defineField({
              name: "featuredLink",
              title: "Featured Card Link",
              type: "string",
            }),
            defineField({
              name: "children",
              title: "Dropdown Links (Sub-menu)",
              type: "array",
              of: [
                {
                  type: "object",
                  name: "subLink",
                  fields: [
                    defineField({
                      name: "name",
                      title: "Link Name",
                      type: "string",
                      validation: (Rule) => Rule.required(),
                    }),
                    defineField({
                      name: "href",
                      title: "Link URL",
                      type: "string",
                      validation: (Rule) => Rule.required(),
                    }),
                    defineField({
                      name: "description",
                      title: "Description",
                      description: "Description shown under the link in the mega menu.",
                      type: "text",
                      rows: 2,
                    }),
                    defineField({
                      name: "isFeatured",
                      title: "Highlight this link?",
                      description: "If checked, this link will use the brand accent color.",
                      type: "boolean",
                      initialValue: false,
                    }),
                  ],
                },
              ],
            }),
          ],
        },
      ],
    }),
    defineField({
      name: "footerNavigation",
      title: "Footer Navigation",
      description: "Controls the columns of links in the footer.",
      type: "array",
      of: [
        {
          type: "object",
          name: "footerColumn",
          title: "Footer Column",
          fields: [
            defineField({
              name: "columnTitle",
              title: "Column Title",
              type: "string",
              validation: (Rule) => Rule.required(),
            }),
            defineField({
              name: "links",
              title: "Column Links",
              type: "array",
              of: [
                {
                  type: "object",
                  name: "footerLink",
                  fields: [
                    defineField({
                      name: "name",
                      title: "Link Name",
                      type: "string",
                      validation: (Rule) => Rule.required(),
                    }),
                    defineField({
                      name: "href",
                      title: "Link URL",
                      type: "string",
                      validation: (Rule) => Rule.required(),
                    }),
                  ],
                },
              ],
            }),
          ],
        },
      ],
    }),
  ],
});
