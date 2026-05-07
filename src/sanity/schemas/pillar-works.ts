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
            name: "cardGridEyebrow",
            title: "Card Grid: Eyebrow (Optional)",
            description: "Example: 'THE PROBLEM'",
            type: "string",
        }),
        defineField({
            name: "cardGridHeadline",
            title: "Card Grid: Headline (Optional)",
            type: "string",
        }),
        defineField({
            name: "cardGridBody",
            title: "Card Grid: Body (Optional)",
            type: "text",
        }),
        defineField({
            name: "whoWeWorkWith",
            title: "Card Grid: Items",
            description: "These will appear as cards in a 2-column grid.",
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
                        { name: "number", title: "Number", type: "string" },
                        { name: "label", title: "Label", type: "string" },
                    ]
                }
            ]
        }),
        defineField({
            name: "servicesEyebrow",
            title: "Services Grid: Eyebrow (Optional)",
            description: "Example: 'WHAT GROWVALLEY DOES IN EXPAND'",
            type: "string",
        }),
        defineField({
            name: "servicesHeadline",
            title: "Services Grid: Headline (Optional)",
            type: "string",
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
        defineField({
            name: "aboutUsSubtitle",
            title: "About Us: Grid Subtitle",
            description: "The subtitle that appears under the Pillar Title in the 'Our Solutions' grid on the About Us page.",
            type: "string",
            initialValue: "Integrated advisory and alignment.",
        }),
        defineField({
            name: "aboutUsServices",
            title: "About Us: Grid Services (4 Cards)",
            description: "Provide exactly 4 services to be displayed in the grid on the About Us page. These are short summaries specifically for that layout.",
            type: "array",
            of: [
                {
                    type: "object",
                    fields: [
                        { name: "title", title: "Service Title", type: "string" },
                        { name: "description", title: "Service Description", type: "text" },
                    ]
                }
            ],
            validation: Rule => Rule.max(4),
        }),
    ],
});
