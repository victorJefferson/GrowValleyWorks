import ServicePageContent from "./ServicePageContent";
import { PillarPageContent } from "./PillarPageContent";
import { notFound } from "next/navigation";
import { Metadata } from "next";
import { client } from "@/lib/sanity";
import { serviceQuery, pillarQuery, heroQuery, allServicesQuery, serviceCategoriesQuery } from "@/lib/queries";

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params;
  
  const [pillarData, serviceData] = await Promise.all([
    client.fetch(pillarQuery, { slug }).catch(() => null),
    client.fetch(serviceQuery, { slug }).catch(() => null)
  ]);

  if (pillarData) {
    return {
      title: `${pillarData.title} | GrowValley Works`,
      description: pillarData.positioningText || `Learn more about our ${pillarData.title} expertise.`,
    };
  }

  if (serviceData) {
    return {
      title: `${serviceData.title} | Capabilities | GrowValley Works`,
      description: serviceData.description || serviceData.heroSubheadline,
    };
  }

  return { title: "Page Not Found" };
}

export async function generateStaticParams() {
  const [pillars, cmsServices] = await Promise.all([
    client.fetch(serviceCategoriesQuery).catch(() => []),
    client.fetch(allServicesQuery).catch(() => [])
  ]);

  const pillarSlugs = (pillars || []).map((p: any) => ({ slug: p.slug }));
  const cmsServiceSlugs = (cmsServices || []).map((s: any) => ({ slug: s.slug }));
  
  const allSlugs = [...pillarSlugs, ...cmsServiceSlugs];
  
  // Filter unique slugs
  const uniqueSlugs = Array.from(new Set(allSlugs.map(s => s.slug))).map(slug => ({ slug }));

  return uniqueSlugs;
}

export default async function DynamicCapabilitiesPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  
  let pillarData = null;
  let serviceData = null;
  let heroData = null;

  try {
    [pillarData, serviceData, heroData] = await Promise.all([
      client.fetch(pillarQuery, { slug }).catch(() => null),
      client.fetch(serviceQuery, { slug }).catch(() => null),
      client.fetch(heroQuery, { pageSlug: slug }).catch(() => null)
    ]);
  } catch (error) {
    console.error("Error fetching data from Sanity:", error);
  }

  // 1. If it's a Pillar, render Pillar Layout
  if (pillarData) {
    return <PillarPageContent pillarData={pillarData} heroData={heroData} />;
  }

  // 2. If it's a Service, render Service Layout
  if (serviceData) {
    return <ServicePageContent cmsData={serviceData} />;
  }

  // 3. Otherwise 404
  notFound();
}

