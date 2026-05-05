import { defineConfig } from 'sanity';
import { structureTool } from 'sanity/structure';
import { schemaTypes } from './src/sanity/schemas';

const projectId = process.env.NEXT_PUBLIC_SANITY_PROJECT_ID || 'placeholder';
const dataset = process.env.NEXT_PUBLIC_SANITY_DATASET || 'production';

export default defineConfig({
  name: 'default',
  title: 'GrowValley Studio',

  projectId,
  dataset,

  plugins: [structureTool()],

  schema: {
    types: schemaTypes,
    templates: (prev) => [
      // Filter out the generic 'hero-works' template so only our specific presets show up
      ...prev.filter((template) => template.id !== 'hero-works'),
      {
        id: 'hero-home-works',
        title: 'Hero (Home - Works)',
        schemaType: 'hero-works',
        value: {
          pageSlug: 'home',
          hasCTA: true,
          eyebrow: 'GROWVALLEY WORKS',
          headline: 'The Firm Behind the Firm',
          subheadline: 'Company formation, government compliance, accounting, payroll, and international expansion. Handled by one firm.',
          ctaText: "Let's Work",
          ctaHref: '/our-capabilities',
        },
      },
      {
        id: 'hero-establish-works',
        title: 'Hero (Establish - Works)',
        schemaType: 'hero-works',
        value: {
          pageSlug: 'establish',
          eyebrow: 'SERVICES / ESTABLISH',
          headline: 'Establish',
          subheadline: 'The structure you set up today will either support your next ten decisions or complicate them. We make sure it is the former.',
        },
      },
      {
        id: 'hero-operate-works',
        title: 'Hero (Operate - Works)',
        schemaType: 'hero-works',
        value: {
          pageSlug: 'operate',
          eyebrow: 'SERVICES / OPERATE',
          headline: 'Operate',
          subheadline: 'Running a business in the UAE requires continuous interaction with government authorities, regulators, and licensing bodies.',
        },
      },
      {
        id: 'hero-manage-works',
        title: 'Hero (Manage - Works)',
        schemaType: 'hero-works',
        value: {
          pageSlug: 'manage',
          eyebrow: 'SERVICES / MANAGE',
          headline: 'Manage',
          subheadline: 'GrowValley manages accounting, payroll, HR administration, tax compliance, and employer-of-record across your entities.',
        },
      },
      {
        id: 'hero-expand-works',
        title: 'Hero (Expand - Works)',
        schemaType: 'hero-works',
        value: {
          pageSlug: 'expand',
          eyebrow: 'SERVICES / EXPAND',
          headline: 'Expand',
          subheadline: 'GrowValley handles the legal, structural, and compliance work behind international expansion.',
        },
      },
      {
        id: 'hero-about-works',
        title: 'Hero (About Us - Works)',
        schemaType: 'hero-works',
        value: {
          pageSlug: 'about',
          eyebrow: 'ABOUT GROWVALLEY WORKS',
          headline: 'Who is GrowValley Works',
          subheadline: 'The execution layer of the GrowValley ecosystem.',
        },
      },
      {
        id: 'hero-careers-works',
        title: 'Hero (Careers - Works)',
        schemaType: 'hero-works',
        value: {
          pageSlug: 'careers',
          eyebrow: 'JOBS',
          headline: "We don't hire for roles. We hire for impact.",
          subheadline: "GrowValley sits at a rare intersection: wealth management, venture building, and active capital deployment.",
        },
      },
    ],
  },

  basePath: '/studio',
});
