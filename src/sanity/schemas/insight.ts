import { defineField, defineType } from "sanity";

export default defineType({
    name: "insight",
    title: "Insight",
    type: "document",
    fields: [
        defineField({
            name: "title",
            title: "Title",
            type: "string",
        }),
        defineField({
            name: "slug",
            title: "Slug",
            type: "slug",
            options: {
                source: "title",
                maxLength: 96,
            },
        }),
        defineField({
            name: "tag",
            title: "Tag",
            type: "string",
            description: "e.g., CAPITAL, ADVISORY, INVESTMENT",
        }),
        defineField({
            name: "excerpt",
            title: "Excerpt",
            type: "text",
            rows: 3,
        }),
        defineField({
            name: "mainImage",
            title: "Main Image",
            type: "image",
            options: {
                hotspot: true,
            },
        }),
        defineField({
            name: "publishedAt",
            title: "Published At",
            type: "datetime",
        }),
        defineField({
            name: "content",
            title: "Content",
            type: "array",
            of: [{ type: "block" }],
        }),
        defineField({
            name: "featured",
            title: "Featured Article",
            type: "boolean",
            description: "⚠️ Only ONE article should be featured at a time. Setting this will replace the previous featured article on the Insights page hero.",
            initialValue: false,
            validation: (Rule) =>
                Rule.custom(async (value, context) => {
                    if (!value) return true; // Not featured, no conflict
                    const { document, getClient } = context as any;
                    const client = getClient({ apiVersion: "2024-03-01" });
                    const existing = await client.fetch(
                        `*[_type == "insight" && featured == true && _id != $id][0]._id`,
                        { id: document._id }
                    );
                    if (existing) {
                        return "⚠️ Another article is already marked as Featured. Publishing this will make it the new Featured article and the previous one will no longer appear in the hero.";
                    }
                    return true;
                }),
        }),
        defineField({
            name: "editorsPick",
            title: "Editor's Pick",
            type: "boolean",
            description: "Mark this article as an Editor's Pick. Up to 3 are shown on the Insights page.",
            initialValue: false,
        }),
    ],
});
