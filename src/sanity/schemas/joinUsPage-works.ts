import { defineType, defineField } from "sanity";

export default defineType({
  name: "joinUsPage-works",
  title: "Join Us Pages (Works)",
  type: "document",
  fields: [
    defineField({
      name: "pageKey",
      title: "Page",
      type: "string",
      description: "Which Join Us page this document controls.",
      options: {
        list: [
          { title: "Jobs", value: "jobs" },
          { title: "Experts", value: "experts" },
          { title: "Partners", value: "partners" },
          { title: "Investors", value: "investors" },
        ],
        layout: "radio",
      },
      validation: (Rule) => Rule.required(),
    }),

    // ── Hero ──────────────────────────────────────────────
    defineField({
      name: "heroEyebrow",
      title: "Hero: Eyebrow",
      type: "string",
      initialValue: "JOBS",
    }),
    defineField({
      name: "heroHeadline",
      title: "Hero: Headline",
      type: "string",
      initialValue: "We don't hire for roles. We hire for impact.",
    }),
    defineField({
      name: "heroSubheadline",
      title: "Hero: Subheadline",
      type: "text",
      rows: 3,
      initialValue: "GrowValley sits at a rare intersection: wealth management, venture building, and active capital deployment. That means the people who thrive here aren't looking for a quiet corner of finance. They're looking for a place where their thinking actually changes outcomes.",
    }),
    defineField({
      name: "heroImage",
      title: "Hero: Image (Overwrites static path)",
      type: "image",
      options: { hotspot: true },
    }),
    defineField({
      name: "heroImagePath",
      title: "Hero: Static Image Path",
      type: "string",
      initialValue: "/images/join_us.png",
    }),

    // ── Pull Quote ────────────────────────────────────────
    defineField({
      name: "pullQuote1",
      title: "Intro: Pull Quote",
      type: "text",
      rows: 4,
      initialValue: "We're a small, senior team. There's no hiding behind process here. If you join GrowValley, what you do will be felt by the clients we serve and the businesses we build.",
    }),
    defineField({
      name: "pullQuote2",
      title: "Intro: Secondary Text (Used in Experts/Investors)",
      type: "text",
      rows: 3,
    }),

    // ── Who We Look For ───────────────────────────────────
    defineField({
      name: "whoEyebrow",
      title: "Who Section: Eyebrow",
      type: "string",
      initialValue: "WHO WE LOOK FOR",
    }),
    defineField({
      name: "whoHeadline",
      title: "Who Section: Headline",
      type: "string",
      initialValue: "The people who do well here share one thing: they're serious about the work.",
    }),
    defineField({
      name: "whoBody1",
      title: "Who Section: Body Paragraph 1",
      type: "text",
      rows: 3,
      initialValue: "You have strong opinions you can defend. You don't wait to be told what needs doing, you see it, you own it, you follow through.",
    }),
    defineField({
      name: "whoBody2",
      title: "Who Section: Body Paragraph 2",
      type: "text",
      rows: 3,
      initialValue: "We don't care where you're based. We care what you bring.",
    }),

    // ── CTA Panel ─────────────────────────────────────────
    defineField({
      name: "ctaEyebrow",
      title: "CTA Panel: Eyebrow",
      type: "string",
      initialValue: "OPEN ROLES",
    }),
    defineField({
      name: "ctaHeadline",
      title: "CTA Panel: Headline",
      type: "string",
      initialValue: "No open roles right now but we're always listening.",
    }),
    defineField({
      name: "ctaBody",
      title: "CTA Panel: Body",
      type: "text",
      rows: 4,
      initialValue: "We don't hire on a fixed schedule. When we find the right person, we find a way to bring them in. If you think GrowValley is where you should be, tell us why. The right message gets a response.",
    }),
    defineField({
      name: "ctaButtonLabel",
      title: "CTA Panel: Button Label",
      type: "string",
      initialValue: "Send Us Your CV",
    }),
    defineField({
      name: "ctaButtonHref",
      title: "CTA Panel: Button Link",
      type: "string",
      initialValue: "mailto:careers@gv.ventures",
    }),
  ],
});
