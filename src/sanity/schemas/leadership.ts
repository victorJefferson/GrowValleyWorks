import { defineField, defineType } from "sanity";

export default defineType({
    name: "leadership",
    title: "Founder & Leadership",
    type: "document",
    initialValue: {
        eyebrow: "LEADERSHIP",
        name: "Jazeer Jamal",
        title: "FOUNDER & CEO, GROWVALLEY GROUP",
        bio: [
            "Jazeer Jamal founded GrowValley Group to manage what most firms only advise on: the structural, operational, and financial foundations that allow businesses to form, function, and grow across jurisdictions.",
            "Over two decades, his work has spanned transactions exceeding $2 billion, assets under management of $350 million, and over $100 million in capital raised. His mandates have covered growth capital, restructuring, and direct investment across private families, institutional allocators, and government entities in the Middle East, South Asia, and beyond.",
            "He has built and scaled more than fifty ventures, worked directly with over five hundred startups, and operates today with active companies across the GrowValley portfolio. He is based in Sharjah, UAE."
        ],
        stats: [
            { value: "$2B+", label: "Transactions across mandates" },
            { value: "$350M", label: "Assets under management" },
            { value: "$100M+", label: "Capital raised" },
            { value: "50+", label: "Ventures built and scaled" },
            { value: "500+", label: "Startups engaged directly" },
        ]
    },
    fields: [
        defineField({
            name: "eyebrow",
            title: "Eyebrow",
            type: "string",
            validation: Rule => Rule.required(),
        }),
        defineField({
            name: "name",
            title: "Founder Name",
            type: "string",
            validation: Rule => Rule.required(),
        }),
        defineField({
            name: "title",
            title: "Founder Title",
            type: "string",
            validation: Rule => Rule.required(),
        }),
        defineField({
            name: "bio",
            title: "Biography Paragraphs",
            type: "array",
            of: [{ type: "text" }],
            validation: Rule => Rule.required().min(1),
        }),
        defineField({
            name: "stats",
            title: "Leadership Statistics",
            type: "array",
            of: [
                {
                    type: "object",
                    fields: [
                        { name: "value", title: "Value (e.g. $2B+)", type: "string", validation: Rule => Rule.required() },
                        { name: "label", title: "Label", type: "string", validation: Rule => Rule.required() },
                    ],
                },
            ],
            validation: Rule => Rule.required().min(1),
        }),
    ],
});
