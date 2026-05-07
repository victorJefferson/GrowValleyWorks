import { defineField, defineType } from "sanity";
import { iconList } from "../lib/iconList";

export default defineType({
    name: "who-we-work-with-works",
    title: "Who We Work With (Works)",
    type: "document",
    initialValue: {
        headline: "Built for founders, operators, and family offices.",
        description: "We don't work with everyone. We work with businesses where operational excellence is a requirement, not an option.",
        categories: [
            {
                title: "Founders & Startups",
                description: "Scaling fast requires an operational foundation that doesn't break. We build it while you build the product.",
                iconName: "Zap"
            },
            {
                title: "Growth Companies",
                description: "Moving into new markets or restructuring for a raise. We manage the complexity so you can manage the growth.",
                iconName: "TrendingUp"
            },
            {
                title: "Family Offices",
                description: "Separating personal wealth from operating entities. We establish and manage the fiduciary structures that last.",
                iconName: "ShieldCheck"
            },
            {
                title: "International Firms",
                description: "Entering the UAE or regional markets. We handle the local compliance, payroll, and government liaison.",
                iconName: "Globe"
            }
        ]
    },
    fields: [
        defineField({
            name: "headline",
            title: "Headline",
            type: "string",
        }),
        defineField({
            name: "description",
            title: "Description",
            type: "text",
        }),
        defineField({
            name: "categories",
            title: "Categories",
            type: "array",
            of: [
                {
                    type: "object",
                    fields: [
                        { name: "title", title: "Title", type: "string" },
                        { name: "description", title: "Description", type: "text" },
                        { name: "iconName", title: "Icon Name", type: "string", options: { list: iconList } },
                    ]
                }
            ]
        })
    ]
});
