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
  *[_type == "leadership-works"] | order(_createdAt asc) {
    _id,
    name,
    title,
    bio,
    image,
    stats[] {
      value,
      label
    }
  }
`;

export const teamQuery = groq`
  *[_type == "team-works"] | order(_createdAt asc) {
    _id,
    name,
    role,
    image,
    category
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
    howItWorks,
    positioningText,
    cardGridEyebrow,
    cardGridHeadline,
    cardGridBody,
    whoWeWorkWith,
    stats,
    servicesEyebrow,
    servicesHeadline,
    nextSectionTitle,
    nextSectionBody,
    ctaHeadline,
    ctaBody,
    ctaButtonLabel,
    "services": *[_type == "service-works" && references(^._id)] {
      title,
      "slug": slug.current,
      description,
      iconName
    }
  }
`;

export const serviceQuery = groq`
  *[_type == "service-works" && slug.current == $slug][0] {
    title,
    "slug": slug.current,
    "pillarSlug": pillar->slug.current,
    "pillarTitle": pillar->title,
    heroHeadline,
    heroImage,
    heroSubheadline,
    heroCtaLabel,
    heroCtaLink,
    valuePropHeadline,
    valuePropAccent,
    valuePropBody,
    problemHeadline,
    problemImage,
    problemHighlight,
    problemBody,
    problemBullets,
    problemCtaLabel,
    problemCtaLink,
    howWeHelpSubtitle,
    helpCards,
    networkHeadline,
    networkSubheadline,
    network,
    featureEyebrow,
    featureHeadline,
    featureImage,
    featureBody,
    featureBullets,
    featureCtaLabel,
    featureCtaLink,
    stats,
    featureGridEyebrow,
    featureGridHeadline,
    featureGridBody,
    featureGridCards[] {
      title,
      description,
      iconName
    },
    whatsIncludedImage,
    whatsIncluded,
    ctaHeadline,
    ctaBody,
    ctaButtonLabel,
    ctaButtonLink
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

export const caseStudiesQuery = groq`
  *[_type == "case-study-works"] | order(order asc) {
    _id,
    title,
    coverImage,
    "pdfUrl": pdfFile.asset->url
  }
`;

export const serviceCategoriesQuery = groq`
  *[_type == "pillar-works"] | order(title asc) {
    _id,
    title,
    "slug": slug.current,
    description,
    aboutUsSubtitle,
    aboutUsServices
  }
`;

export const allServicesQuery = groq`
  *[_type == "service-works"] | order(title asc) {
    _id,
    title,
    "slug": slug.current,
    "pillarSlug": pillar->slug.current,
    "pillarTitle": pillar->title,
    description
  }
`;

export const siteSettingsQuery = groq`
  *[_type == "siteSettings-works"][0] {
    title,
    mainNavigation[] {
      name,
      href,
      description,
      children[] {
        name,
        href,
        description
      }
    },
    footerNavigation[] {
      columnTitle,
      links[] {
        name,
        href
      }
    }
  }
`;

export const pageQuery = groq`
  *[_type == "page-works" && slug.current == $slug][0] {
    title,
    "slug": slug.current,
    heroEyebrow,
    heroHeadline,
    heroSubheadline,
    heroImage,
    pullQuote,
    splitEyebrow,
    splitHeading,
    splitBody,
    ctaEyebrow,
    ctaHeading,
    ctaBody,
    ctaButtonLabel,
    ctaButtonLink
  }
`;

export const homePageQuery = groq`
  *[_type == "homePage-works"][0] {
    whySplitLeftText,
    whyCards[] {
      iconName,
      label,
      description
    },
    positioningHeadline,
    positioningSubheadline,
    positioningBody,
    miniCtaHeadline,
    miniCtaButtonText,
    miniCtaButtonLink,
    bottomCtaHeadline,
    bottomCtaButtonText,
    bottomCtaButtonLink
  }
`;

export const capabilitiesPageQuery = groq`
  *[_type == "capabilitiesPage-works"][0] {
    introHeading,
    introParagraph,
    bottomCtaHeadline,
    bottomCtaButtonText,
    bottomCtaButtonLink
  }
`;

export const aboutUsPageQuery = groq`
  *[_type == "aboutUsPage-works"][0] {
    introEyebrow,
    introHeading,
    introBody,
    introImage,
    solutionsImage,
    ctaHeadline,
    ctaButtonLabel,
    ctaButtonLink
  }
`;

export const legalPageQuery = groq`
  *[_type == "legalPage-works" && slug.current == $slug][0] {
    title,
    lastUpdated,
    heroImage,
    content
  }
`;
export const joinUsPageQuery = groq`
  *[_type == "joinUsPage-works" && pageKey == $pageKey][0] {
    pageKey,
    heroEyebrow,
    heroHeadline,
    heroSubheadline,
    heroImage,
    heroImagePath,
    pullQuote1,
    pullQuote2,
    whoEyebrow,
    whoHeadline,
    whoBody1,
    whoBody2,
    ctaEyebrow,
    ctaHeadline,
    ctaBody,
    ctaButtonLabel,
    ctaButtonHref
  }
`;
