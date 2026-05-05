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
      // Filter out the generic 'hero' template so only our specific presets show up
      ...prev.filter((template) => template.id !== 'hero'),
      {
        id: 'hero-home',
        title: 'Hero (Home)',
        schemaType: 'hero',
        value: {
          pageSlug: 'home',
          hasCTA: true,
          eyebrow: 'GROWVALLEY',
          headline: "Wealth managed by people who've actually built it.",
          subheadline: 'Operated. Invested. Built. Now managing your capital the same way.',
          ctaText: 'Talk to an Advisor',
          ctaHref: '/contact',
        },
      },
      {
        id: 'hero-about',
        title: 'Hero (About Us)',
        schemaType: 'hero',
        value: {
          pageSlug: 'about',
          eyebrow: 'ABOUT GROWVALLEY',
          headline: 'Who is GrowValley',
          subheadline: 'Built on independence. Measured by outcomes.',
        },
      },
      {
        id: 'hero-expertise',
        title: 'Hero (Expertise)',
        schemaType: 'hero',
        value: {
          pageSlug: 'expertise',
          eyebrow: 'GROWVALLEY',
          headline: 'Our Expertise',
          subheadline: 'Four disciplines. One strategy. Total accountability',
        },
      },
      {
        id: 'hero-team',
        title: 'Hero (Team)',
        schemaType: 'hero',
        value: {
          pageSlug: 'team',
          eyebrow: 'GROWVALLEY',
          headline: 'Our Team',
          subheadline: 'Wealth Management, delivered by people who know it.',
        },
      },
      {
        id: 'hero-careers',
        title: 'Hero (Careers)',
        schemaType: 'hero',
        value: {
          pageSlug: 'careers',
          eyebrow: 'CAREERS',
          headline: 'Join GrowValley.',
          subheadline: 'We are always looking for wealth management professionals who bring rigour, discretion, and a client-first approach to their work.',
        },
      },
    ],
  },

  basePath: '/studio',
});
