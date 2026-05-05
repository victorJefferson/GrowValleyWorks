import { groq } from "next-sanity";

export const heroQuery = groq`
  *[_type == "hero-works" && pageSlug == $pageSlug][0] {
    eyebrow,
    headline,
    subheadline,
    ctaText,
    ctaHref,
    hasCTA,
    image
  }
`;

export const dataSectionQuery = groq`
  *[_type == "data-section-works"] | order(_updatedAt desc)[0] {
    headline,
    description,
    stats[] {
      prefix,
      number,
      suffix,
      label
    }
  }
`;

export const insightsQuery = groq`
  *[_type == "insight-works"] | order(publishedAt desc)[0...3] {
    _id,
    title,
    "slug": slug.current,
    tag,
    excerpt,
    mainImage,
    publishedAt
  }
`;

export const allInsightsQuery = groq`
  *[_type == "insight-works"] | order(publishedAt desc) {
    _id,
    title,
    "slug": slug.current,
    tag,
    excerpt,
    mainImage,
    publishedAt
  }
`;

export const insightBySlugQuery = groq`
  *[_type == "insight-works" && slug.current == $slug][0] {
    _id,
    title,
    "slug": slug.current,
    tag,
    excerpt,
    mainImage,
    publishedAt,
    content
  }
`;

export const featuredInsightQuery = groq`
  *[_type == "insight-works" && featured == true] | order(_updatedAt desc)[0] {
    _id,
    title,
    "slug": slug.current,
    tag,
    excerpt,
    mainImage,
    publishedAt
  }
`;

export const editorsPickQuery = groq`
  *[_type == "insight-works" && editorsPick == true] | order(_updatedAt desc)[0...3] {
    _id,
    title,
    "slug": slug.current,
    tag,
    excerpt,
    mainImage,
    publishedAt
  }
`;

export const leadershipQuery = groq`
  *[_type == "leadership-works"] | order(_updatedAt desc)[0] {
    eyebrow,
    name,
    title,
    bio,
    stats[] {
      value,
      label
    }
  }
`;

export const pillarQuery = groq`
  *[_type == "pillar-works" && slug.current == $slug][0] {
    title,
    "slug": slug.current,
    heroHeadline,
    heroSubheadline,
    heroImage,
    approachHeadline,
    approachBody,
    whoWeWorkWith,
    howItWorks,
    positioningText,
    stats,
    nextSectionTitle,
    nextSectionBody,
    ctaHeadline,
    ctaBody,
    ctaButtonLabel
  }
`;

export const serviceQuery = groq`
  *[_type == "service-works" && slug.current == $slug][0] {
    title,
    "slug": slug.current,
    "pillarSlug": pillar->slug.current,
    heroHeadline,
    heroSubheadline,
    valuePropHeadline,
    valuePropAccent,
    valuePropBody,
    problemHeadline,
    problemBody,
    problemBullets,
    howWeHelpSubtitle,
    helpCards,
    networkHeadline,
    networkSubheadline,
    network,
    featureEyebrow,
    featureHeadline,
    featureBody,
    featureBullets,
    stats,
    whatsIncluded,
    ctaHeadline,
    ctaBody,
    ctaButtonLabel
  }
`;

export const whoWeWorkWithQuery = groq`
  *[_type == "who-we-work-with-works"][0] {
    headline,
    description,
    categories[] {
      title,
      description,
      iconName
    }
  }
`;

export const solutionsQuery = groq`
  *[_type == "solutions-works"][0] {
    headline,
    description,
    items[] {
      id,
      title,
      subtitle,
      href
    }
  }
`;
