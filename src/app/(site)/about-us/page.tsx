import type { Metadata } from "next";
import { AboutUsSolutions } from "./AboutUsSolutions";
import { Hero } from "@/components/ui/Hero";
import { Card } from "@/components/ui/Card";
import { Button } from "@/components/ui/Button";
import { CaseStudiesCarousel } from "@/components/ui/CaseStudiesCarousel";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import styles from "./AboutUs.module.scss";
import { client } from "@/lib/sanity";
import { heroQuery, leadershipQuery, caseStudiesQuery, serviceCategoriesQuery, allServicesQuery, dataSectionQuery } from "@/lib/queries";
import { urlFor } from "@/lib/sanity";
import { DataSection } from "@/components/ui/DataSection";
import { features } from "@/config/features";

export const metadata: Metadata = {
  title: {
    absolute: "About Us | GrowValley Works",
  },
  description:
    "GrowValley Works runs the operational infrastructure behind serious businesses — company formation, compliance, finance, and international expansion.",
  openGraph: {
    title: "About Us | GrowValley Works",
    description: "The execution arm of the GrowValley ecosystem. Built for what comes after formation.",
    url: "https://gv.works/about-us",
  },
};

export default async function AboutUsPage() {
  let heroData = null;
  let leadershipData = null;
  let caseStudiesData: any[] = [];
  let categories: any[] = [];
  let services: any[] = [];
  let dataSectionData = null;

  try {
    [heroData, leadershipData, caseStudiesData, categories, services, dataSectionData] = await Promise.all([
      client.fetch(heroQuery, { pageSlug: "about" }),
      client.fetch(leadershipQuery),
      client.fetch(caseStudiesQuery),
      client.fetch(serviceCategoriesQuery),
      client.fetch(allServicesQuery),
      client.fetch(dataSectionQuery)
    ]);
  } catch (err) {
    console.error("About Us Data Fetch Error:", err);
  }

  const defaultHero = {
    eyebrow: "ABOUT GROWVALLEY WORKS",
    headline: "We run what your business can't afford to get wrong.",
    subheadline: "GrowValley Works handles the legal, regulatory, and operational infrastructure that keeps businesses running across markets. Company formation, government liaison, accounting, payroll, and international expansion — handled end to end.",
    image: "https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&q=80&w=1400",
  };

  const displayHero = heroData || defaultHero;
  const heroImage = heroData?.image
    ? urlFor(heroData.image).url()
    : displayHero.image;

  return (
    <main>
      <Hero
        eyebrow={displayHero.eyebrow}
        headline={displayHero.headline}
        subheadline={displayHero.subheadline}
        ctaText={displayHero.ctaText}
        ctaHref={displayHero.ctaHref}
        hasCTA={displayHero.hasCTA}
        image={heroImage}
      />
      <section className="section-padding">
        <div className="container">
          <div className={styles.roundedPanel}>
            <div className={styles.splitIntro}>
              <div className={styles.introContent}>
                <span className={styles.eyebrow}>NOT A SETUP COMPANY</span>
                <h2 className={styles.heading}>Most firms help businesses start. GrowValley Works is built for what comes after.</h2>
                <p className={styles.body}>
                  We are the execution layer — the team that handles company formation, government relations, regulatory compliance, accounting, payroll, and cross-border structuring. The work that is invisible when it runs correctly and expensive when it does not.
                </p>
              </div>
              <div className={styles.introImage}>
                <img
                  src="https://images.unsplash.com/photo-1521737711867-e3b97375f902?auto=format&fit=crop&q=80&w=600&h=400"
                  alt="GrowValley Works Team"
                  width="600"
                  height="400"
                  className={styles.borderCard}
                />
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* Vistra Inspired Solutions Section */}
      <AboutUsSolutions initialCategories={categories} initialServices={services} />

      {/* Case Studies Carousel */}
      {features.caseStudies && caseStudiesData && caseStudiesData.length > 0 && (
        <section className="section-padding">
          <div className="container">
            <CaseStudiesCarousel caseStudies={caseStudiesData} />
          </div>
        </section>
      )}
      <DataSection
        headline={dataSectionData.headline}
        description={dataSectionData.description}
        stats={dataSectionData.stats}
      />
      <section className="section-padding">
        <div className="container">
          <div className={styles.groupPanel}>
            <h2 className={styles.headingWhite}>
              Operations done right are invisible. Done wrong, they stop everything.
            </h2>
            <div className={styles.ctaGroup}>
              <Link href="/contact">
                <Button
                  size="lg"
                  variant="secondary"
                  className="uppercase-button"
                >
                  Talk to an Advisor
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
