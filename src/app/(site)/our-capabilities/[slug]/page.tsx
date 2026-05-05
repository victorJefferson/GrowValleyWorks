import { services } from "@/config/services";
import ServicePageContent from "./ServicePageContent";
import { notFound } from "next/navigation";
import { Metadata } from "next";
import { client } from "@/lib/sanity";
import { serviceQuery } from "@/lib/queries";

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params;
  const service = services.find((s) => s.slug === slug);
  if (!service) return { title: "Service Not Found" };

  return {
    title: `${service.title} | Capabilities | GrowValley Works`,
    description: service.description,
  };
}

export async function generateStaticParams() {
  return services.map((service) => ({
    slug: service.slug,
  }));
}

export default async function ServicePage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  
  let cmsData = null;
  try {
    cmsData = await client.fetch(serviceQuery, { slug });
  } catch (error) {
    console.error("Error fetching service from Sanity:", error);
  }

  const service = services.find((s) => s.slug === slug);

  if (!service && !cmsData) {
    notFound();
  }

  return <ServicePageContent service={service} cmsData={cmsData} />;
}
