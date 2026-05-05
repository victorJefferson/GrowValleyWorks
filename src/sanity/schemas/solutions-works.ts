import { defineField, defineType } from "sanity";

export default defineType({
    name: "solutions-works",
    title: "Solutions (Works)",
    type: "document",
    initialValue: {
        headline: "We don't set up companies. We run them.",
        description: "Most operators deal with four vendors to do what one firm should handle. GrowValley covers the full operational stack across jurisdictions, at scale. One relationship. One point of accountability. No gaps between providers.",
        items: [
            {
                id: "establish",
                title: "Establish",
                subtitle: "A badly structured entity creates problems that compound over years. We get the formation right from the start: the right jurisdiction, the right structure, the right vehicle for what you are actually building.",
                href: "/our-capabilities/establish"
            },
            {
                id: "operate",
                title: "Operate",
                subtitle: "Staying registered is not passive. Government touchpoints, renewals, filings, and entity maintenance require consistent attention. Most businesses do not realise how much is slipping until a deadline is missed. We make sure it is not.",
                href: "/our-capabilities/operate"
            },
            {
                id: "manage",
                title: "Manage",
                subtitle: "Payroll that runs late, books that are three months behind, tax filings done at the last minute. These are not administrative problems. They are business risks. We run the financial and HR back-office so your team's attention stays where it belongs.",
                href: "/our-capabilities/manage"
            },
            {
                id: "expand",
                title: "Expand",
                subtitle: "Opening in a new market involves a sequence of structural, legal, and compliance decisions that have to happen in the right order. We have done this across jurisdictions. We coordinate the execution so your expansion does not stall before it starts.",
                href: "/our-capabilities/expand"
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
            name: "items",
            title: "Solution Items",
            type: "array",
            of: [
                {
                    type: "object",
                    fields: [
                        { name: "id", title: "ID", type: "string" },
                        { name: "title", title: "Title", type: "string" },
                        { name: "subtitle", title: "Subtitle", type: "text" },
                        { name: "href", title: "Link", type: "string" },
                    ]
                }
            ]
        })
    ]
});
