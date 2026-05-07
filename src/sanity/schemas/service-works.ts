import { defineField, defineType } from "sanity";
import { iconList } from "../lib/iconList";

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
            name: "description",
            title: "Card Description",
            description: "The short summary that appears on the Service Card (Pillar page).",
            type: "text",
        }),
        defineField({
            name: "iconName",
            title: "Card Icon Name",
            description: "The icon that appears at the top of the Service Card.",
            type: "string",
            options: { list: iconList },
        }),
        defineField({
            name: "heroHeadline",
            title: "Hero Headline",
            type: "string",
        }),
        defineField({
            name: "heroImage",
            title: "Hero Image",
            type: "image",
            options: { hotspot: true },
        }),
        defineField({
            name: "heroSubheadline",
            title: "Hero Subheadline",
            type: "text",
        }),
        defineField({
            name: "heroCtaLabel",
            title: "Hero CTA Label",
            description: "Example: 'START YOUR FORMATION'. Defaults to 'SPEAK TO AN EXPERT'.",
            type: "string",
        }),
        defineField({
            name: "heroCtaLink",
            title: "Hero CTA Link",
            description: "Where the hero button should go. Defaults to /contact.",
            type: "string",
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
            name: "problemImage",
            title: "Problem Image",
            type: "image",
            options: { hotspot: true },
        }),
        defineField({
            name: "problemHighlight",
            title: "Problem Image Overlay Text",
            description: "Example: 'EXIT COSTS'. This appears in white text over the problem image.",
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
            name: "problemCtaLabel",
            title: "Problem CTA Label",
            type: "string",
            initialValue: "LET'S TALK",
        }),
        defineField({
            name: "problemCtaLink",
            title: "Problem CTA Link",
            type: "string",
            initialValue: "/contact",
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
                        { name: "iconName", title: "Icon Name", type: "string", options: { list: iconList } },
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
                        { name: "iconName", title: "Icon Name", type: "string", options: { list: iconList } },
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
            name: "featureImage",
            title: "Feature Image",
            type: "image",
            options: { hotspot: true },
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
            name: "featureCtaLabel",
            title: "Feature CTA Label",
            type: "string",
            initialValue: "Enquire about this service",
        }),
        defineField({
            name: "featureCtaLink",
            title: "Feature CTA Link",
            type: "string",
            initialValue: "/contact",
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
            name: "featureGridEyebrow",
            title: "Feature Grid: Eyebrow (Optional)",
            description: "Example: 'HOW WE HELP'",
            type: "string",
        }),
        defineField({
            name: "featureGridHeadline",
            title: "Feature Grid: Headline (Optional)",
            type: "string",
        }),
        defineField({
            name: "featureGridBody",
            title: "Feature Grid: Intro Body (Optional)",
            description: "This is the small text that appears below the headline.",
            type: "text",
        }),
        defineField({
            name: "featureGridCards",
            title: "Feature Grid: Cards (New)",
            description: "These will appear as rich cards with icons. Use this field for the new centered layout.",
            type: "array",
            of: [
                {
                    type: "object",
                    name: "featureGridCard",
                    fields: [
                        defineField({ name: "title", title: "Card Title", type: "string" }),
                        defineField({ name: "description", title: "Card Description", type: "text" }),
                        defineField({ 
                            name: "iconName", 
                            title: "Icon", 
                            type: "string",
                            options: {
                                list: iconList
                            }
                        }),
                    ]
                }
            ],
        }),
        defineField({
            name: "whatsIncludedImage",
            title: "What's Included Image",
            type: "image",
            options: { hotspot: true },
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
        defineField({
            name: "ctaButtonLink",
            title: "CTA Button Link",
            type: "string",
        }),
    ],
});
