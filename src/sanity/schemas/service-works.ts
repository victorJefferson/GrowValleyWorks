import { defineField, defineType } from "sanity";

export default defineType({
    name: "service-works",
    title: "Services (Works)",
    type: "document",
    fields: [
        defineField({
            name: "title",
            title: "Service Title",
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
            name: "pillar",
            title: "Pillar",
            type: "reference",
            to: [{ type: "pillar-works" }],
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
            name: "valuePropHeadline",
            title: "Value Prop Headline",
            type: "string",
        }),
        defineField({
            name: "valuePropAccent",
            title: "Value Prop Accent (Italic)",
            type: "string",
        }),
        defineField({
            name: "valuePropBody",
            title: "Value Prop Body",
            type: "text",
        }),
        defineField({
            name: "problemHeadline",
            title: "Problem Headline",
            type: "string",
        }),
        defineField({
            name: "problemBody",
            title: "Problem Body",
            type: "text",
        }),
        defineField({
            name: "problemBullets",
            title: "Problem Bullets",
            type: "array",
            of: [{ type: "string" }],
        }),
        defineField({
            name: "howWeHelpSubtitle",
            title: "How We Help Subtitle",
            type: "string",
        }),
        defineField({
            name: "helpCards",
            title: "Help Cards",
            type: "array",
            of: [
                {
                    type: "object",
                    fields: [
                        { name: "iconName", title: "Icon Name", type: "string" },
                        { name: "title", title: "Card Title", type: "string" },
                        { name: "desc", title: "Card Description", type: "text" },
                    ]
                }
            ]
        }),
        defineField({
            name: "networkHeadline",
            title: "Network Headline (Optional)",
            type: "string",
        }),
        defineField({
            name: "networkSubheadline",
            title: "Network Subheadline (Optional)",
            type: "text",
        }),
        defineField({
            name: "network",
            title: "Network Cards (Optional)",
            type: "array",
            of: [
                {
                    type: "object",
                    fields: [
                        { name: "iconName", title: "Icon Name", type: "string" },
                        { name: "title", title: "Card Title", type: "string" },
                        { name: "desc", title: "Card Description", type: "text" },
                    ]
                }
            ]
        }),
        defineField({
            name: "featureEyebrow",
            title: "Feature Eyebrow",
            type: "string",
        }),
        defineField({
            name: "featureHeadline",
            title: "Feature Headline",
            type: "string",
        }),
        defineField({
            name: "featureBody",
            title: "Feature Body",
            type: "text",
        }),
        defineField({
            name: "featureBullets",
            title: "Feature Bullets",
            type: "array",
            of: [{ type: "string" }],
        }),
        defineField({
            name: "stats",
            title: "Statistics",
            type: "array",
            of: [
                {
                    type: "object",
                    fields: [
                        { name: "num", title: "Number", type: "string" },
                        { name: "desc", title: "Description", type: "string" },
                    ]
                }
            ]
        }),
        defineField({
            name: "whatsIncluded",
            title: "What's Included",
            type: "object",
            fields: [
                { name: "column1", title: "Column 1 Bullets", type: "array", of: [{ type: "string" }] },
                { name: "column2", title: "Column 2 Bullets", type: "array", of: [{ type: "string" }] },
            ]
        }),
        defineField({
            name: "ctaHeadline",
            title: "CTA Headline",
            type: "string",
        }),
        defineField({
            name: "ctaBody",
            title: "CTA Body",
            type: "text",
        }),
        defineField({
            name: "ctaButtonLabel",
            title: "CTA Button Label",
            type: "string",
        }),
    ],
});
