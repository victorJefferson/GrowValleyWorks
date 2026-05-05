import { defineField, defineType } from "sanity";

export default defineType({
    name: "hero",
    title: "Page Heroes",
    type: "document",
    initialValue: {
        pageSlug: "home",
        hasCTA: true,
        eyebrow: "GROWVALLEY",
        headline: "The only call you need to make.",
        subheadline: "We bring every dimension of your wealth under one team, one strategy, and one point of accountability.",
        ctaText: "See How We Work",
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
                    { title: "Our Expertise", value: "expertise" },
                    { title: "Our Team", value: "team" },
                    { title: "Careers", value: "careers" },
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
