import { defineField, defineType } from "sanity";

export default defineType({
    name: "dataSection",
    title: "Data Section",
    type: "document",
    initialValue: {
        headline: "Wealth managed. Clients served.",
        description: "GrowValley is a fully integrated wealth management powerhouse. We globally serve our wealth management and institutional client base.",
        stats: [
            { prefix: "$", number: 2, suffix: "B+", label: "Assets under Advice" },
            { number: 50, suffix: "+", label: "Wealth Management Specialists" },
            { prefix: "$", number: 150, suffix: "M", label: "AUM Across Portfolio" },
            { number: 60, suffix: "+", label: "Connected Professionals" },
        ]
    },
    fields: [
        defineField({
            name: "headline",
            title: "Headline",
            type: "string",
            validation: Rule => Rule.required(),
        }),
        defineField({
            name: "description",
            title: "Description",
            type: "text",
            validation: Rule => Rule.required(),
        }),
        defineField({
            name: "stats",
            title: "Statistics",
            type: "array",
            of: [
                {
                    type: "object",
                    fields: [
                        { name: "prefix", title: "Prefix (Optional)", type: "string" },
                        { 
                            name: "number", 
                            title: "Number (Mandatory)", 
                            type: "number",
                            validation: Rule => Rule.required()
                        },
                        { name: "suffix", title: "Suffix (Optional)", type: "string" },
                        { 
                            name: "label", 
                            title: "Label (Mandatory)", 
                            type: "string",
                            validation: Rule => Rule.required()
                        },
                    ],
                    preview: {
                        select: {
                            prefix: "prefix",
                            number: "number",
                            suffix: "suffix",
                            label: "label",
                        },
                        prepare({ prefix, number, suffix, label }) {
                            return {
                                title: `${prefix || ''}${number}${suffix || ''}`,
                                subtitle: label,
                            };
                        },
                    },
                },
            ],
            validation: Rule => Rule.required().min(1).max(4),
        }),
    ],
});
