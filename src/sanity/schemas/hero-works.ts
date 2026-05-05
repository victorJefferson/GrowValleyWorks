import { defineField, defineType } from "sanity";

export default defineType({
    name: "hero-works",
    title: "Page Heroes (Works)",
    type: "document",
    initialValue: {
        pageSlug: "home",
        hasCTA: true,
        eyebrow: "GROWVALLEY WORKS",
        headline: "The operational infrastructure behind serious businesses.",
        subheadline: "Formation, compliance, finance, and international expansion — one firm handling all of it.",
        ctaText: "See Our Capabilities",
        ctaHref: "/our-capabilities"
    },
    fields: [
        defineField({
            name: "pageSlug",
            title: "Page Identifier (Slug)",
            type: "string",
            description: "Select the page this hero belongs to.",
            options: {
                list: [
                    { title: "Home Page", value: "home" },
                    { title: "About Us", value: "about" },
                    { title: "Establish Pillar", value: "establish" },
                    { title: "Operate Pillar", value: "operate" },
                    { title: "Manage Pillar", value: "manage" },
                    { title: "Expand Pillar", value: "expand" },
                    { title: "Careers", value: "careers" },
                    { title: "Experts", value: "experts" },
                    { title: "Contact", value: "contact" },
                ],
            },
            validation: Rule => Rule.required(),
        }),
        defineField({
            name: "eyebrow",
            title: "Eyebrow",
            type: "string",
        }),
        defineField({
            name: "headline",
            title: "Headline",
            type: "string",
        }),
        defineField({
            name: "subheadline",
            title: "Subheadline",
            type: "text",
        }),
        defineField({
            name: "hasCTA",
            title: "Include CTA Button?",
            type: "boolean",
            initialValue: false,
        }),
        defineField({
            name: "ctaText",
            title: "CTA Button Text",
            type: "string",
            hidden: ({ document }) => !document?.hasCTA,
        }),
        defineField({
            name: "ctaHref",
            title: "CTA Button Link",
            type: "string",
            hidden: ({ document }) => !document?.hasCTA,
        }),
        defineField({
            name: "image",
            title: "Hero Image",
            type: "image",
            options: {
                hotspot: true,
            },
        }),
    ],
});
