import { defineField, defineType } from "sanity";

export default defineType({
    name: "pillar-works",
    title: "Service Pillars (Works)",
    type: "document",
    fields: [
        defineField({
            name: "title",
            title: "Pillar Title",
            type: "string",
            validation: Rule => Rule.required(),
        }),
        defineField({
            name: "slug",
            title: "Slug",
            type: "slug",
            options: {
                source: "title",
                maxLength: 96,
            },
            validation: Rule => Rule.required(),
        }),
        defineField({
            name: "heroHeadline",
            title: "Hero Headline",
            type: "string",
        }),
        defineField({
            name: "heroSubheadline",
            title: "Hero Subheadline",
            type: "text",
        }),
        defineField({
            name: "heroImage",
            title: "Hero Image",
            type: "image",
            options: { hotspot: true },
        }),
        defineField({
            name: "approachHeadline",
            title: "Approach Headline (Large Statement)",
            type: "string",
        }),
        defineField({
            name: "approachBody",
            title: "Approach Body",
            type: "array",
            of: [{ type: "block" }],
        }),
        defineField({
            name: "whoWeWorkWith",
            title: "Who We Work With (Bullets)",
            type: "array",
            of: [{ type: "string" }],
        }),
        defineField({
            name: "howItWorks",
            title: "How It Works (Steps)",
            type: "array",
            of: [
                {
                    type: "object",
                    fields: [
                        { name: "title", title: "Step Title", type: "string" },
                        { name: "description", title: "Step Description", type: "text" },
                    ]
                }
            ]
        }),
        defineField({
            name: "positioningText",
            title: "Positioning Strip Text",
            type: "text",
        }),
        defineField({
            name: "stats",
            title: "Statistics",
            type: "array",
            of: [
                {
                    type: "object",
                    fields: [
                        { name: "number", title: "Number", type: "string" },
                        { name: "label", title: "Label", type: "string" },
                    ]
                }
            ]
        }),
        defineField({
            name: "nextSectionTitle",
            title: "Next Section Heading",
            type: "string",
        }),
        defineField({
            name: "nextSectionBody",
            title: "Next Section Body",
            type: "text",
        }),
        defineField({
            name: "ctaHeadline",
            title: "CTA Banner Headline",
            type: "string",
        }),
        defineField({
            name: "ctaBody",
            title: "CTA Banner Body",
            type: "text",
        }),
        defineField({
            name: "ctaButtonLabel",
            title: "CTA Button Label",
            type: "string",
        }),
    ],
});
