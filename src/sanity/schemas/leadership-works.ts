import { defineField, defineType } from "sanity";

export default defineType({
    name: "leadership-works",
    title: "Leadership (Works)",
    type: "document",
    initialValue: {
        eyebrow: "OUR LEADERSHIP",
        name: "GrowValley Works Leadership",
        title: "Operational Excellence",
        bio: "Our leadership team brings decades of experience in corporate structuring, government relations, and financial operations across the Middle East and international markets.",
    },
    fields: [
        defineField({
            name: "eyebrow",
            title: "Eyebrow",
            type: "string",
        }),
        defineField({
            name: "name",
            title: "Name",
            type: "string",
            validation: Rule => Rule.required(),
        }),
        defineField({
            name: "title",
            title: "Job Title",
            type: "string",
        }),
        defineField({
            name: "bio",
            title: "Biography",
            type: "text",
        }),
        defineField({
            name: "image",
            title: "Profile Image",
            type: "image",
            options: { hotspot: true },
        }),
        defineField({
            name: "stats",
            title: "Key Stats",
            type: "array",
            of: [
                {
                    type: "object",
                    fields: [
                        { name: "value", title: "Value", type: "string" },
                        { name: "label", title: "Label", type: "string" },
                    ]
                }
            ]
        }),
    ],
});
