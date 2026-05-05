"use client";

import React, { useState } from "react";
import { Hero } from "@/components/ui/Hero";
import { DataSection } from "@/components/ui/DataSection";
import { ArrowRight, Layers, ShieldCheck, Globe, Target } from "lucide-react";
import Link from "next/link";
import { urlFor } from "@/lib/sanity";
import {
  InsightsCarousel,
  InsightItem,
} from "@/components/ui/InsightsCarousel";
import { Solutions } from "@/components/sections/Solutions/Solutions";
import { WhoWeWorkWith } from "@/components/sections/WhoWeWorkWith/WhoWeWorkWith";
import styles from "./page.module.scss";
import { Button } from "@/components/ui/Button";
import { features } from "@/config/features";

interface HomeContentProps {
  heroData: any;
  insights: any[];
  dataSectionData: any;
  whoWeWorkWithData?: any;
  solutionsData?: any;
}

export default function HomeContent({
  heroData,
  insights,
  dataSectionData,
  whoWeWorkWithData,
  solutionsData,
}: HomeContentProps) {
  const defaultHero = {
    eyebrow: "GROWVALLEY WORKS",
    headline: "The Firm Behind the Firm",
    subheadline:
      "Company formation, government compliance, accounting, payroll, and international expansion. Handled by one firm.",
    ctaText: "Let's Work",
    ctaHref: "/contact",
    image: "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&q=80&w=1400",
  };

  const defaultDataSection = {
    headline: "Operations under management.",
    description:
      "GrowValley Works is the operational backbone of serious businesses. UAE-headquartered with active capability across international markets.",
    stats: [
      { prefix: "", number: 400, suffix: "+", label: "Entities Under Management" },
      { number: 25, suffix: "+", label: "Jurisdictions Active" },
      { number: 12, suffix: "", label: "Functions Handled In-House" },
      { number: 1, suffix: "", label: "Point of Accountability" },
    ],
  };

  const displayHero = heroData || defaultHero;
  const displayDataSection = dataSectionData || defaultDataSection;

  const getHeroImage = () => {
    if (heroData?.image) {
      try {
        return urlFor(heroData.image).url();
      } catch (e) {
        return "/images/home_image.png";
      }
    }
    return "/images/home_image.png";
  };

  const dynamicInsights: InsightItem[] = insights.map((item: any) => ({
    id: item._id,
    title: item.title,
    date: item.publishedAt
      ? new Date(item.publishedAt).toLocaleDateString("en-GB", {
        day: "2-digit",
        month: "short",
        year: "numeric",
      })
      : "",
    tag: item.tag || "Insight",
    image: item.mainImage ? urlFor(item.mainImage).url() : "",
    slug: item.slug,
  }));

  return (
    <main>
      <Hero
        eyebrow={displayHero.eyebrow}
        headline={displayHero.headline}
        subheadline={displayHero.subheadline}
        ctaText={displayHero.ctaText}
        ctaHref={displayHero.ctaHref}
        hasCTA={displayHero.hasCTA}
        image={getHeroImage()}
      />

      <section className="section-padding">
        <div className={`container ${styles.noPaddingMobile}`}>
          <div className={styles.whySplitLayout}>
            <div className={styles.whySplitLeft}>
              <div className={styles.introCardDark}>
                <h3>
                  GrowValley is not a business setup company. We run the infrastructure that keeps entities compliant, solvent, and operational after the license is signed.
                </h3>
              </div>
            </div>

            <div className={styles.whySplitRight}>

              <div className={styles.whyCard}>
                <div className={styles.whyCardInner}>
                  <div className={styles.whyCardFront}>
                    <div className={styles.whyCardIcon}>
                      <ShieldCheck size={48} strokeWidth={1} />
                    </div>
                    <div className={styles.whyCardLabel}>
                      Integrated Across Functions
                    </div>
                  </div>
                  <div className={styles.whyCardBack}>
                    <p>
                      Legal, compliance, finance, and administration sit inside one firm. No vendor gaps. No coordination overhead.
                    </p>
                  </div>
                </div>
              </div>

              <div className={styles.whyCard}>
                <div className={styles.whyCardInner}>
                  <div className={styles.whyCardFront}>
                    <div className={styles.whyCardIcon}>
                      <Layers size={48} strokeWidth={1} />
                    </div>
                    <div className={styles.whyCardLabel}>
                      Structured for Scale
                    </div>
                  </div>
                  <div className={styles.whyCardBack}>
                    <p>
                      Our model works whether you manage one entity or twelve. We do not need to rebuild when you grow.
                    </p>
                  </div>
                </div>
              </div>

              <div className={styles.whyCard}>
                <div className={styles.whyCardInner}>
                  <div className={styles.whyCardFront}>
                    <div className={styles.whyCardIcon}>
                      <Globe size={48} strokeWidth={1} />
                    </div>
                    <div className={styles.whyCardLabel}>
                      Operational in Multiple Jurisdictions
                    </div>
                  </div>
                  <div className={styles.whyCardBack}>
                    <p>
                      UAE-headquartered with active capability across international markets. Ready when you expand, not after.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className={styles.positioningSplit}>
            <div className={styles.positioningLeft}>
              <h2>Many firms help you start. We handle what comes after.</h2>
            </div>
            <div className={styles.positioningRight}>
              <p className={styles.subheadline}>
                GrowValley is the execution arm of the GrowValley ecosystem.
              </p>
              <p className={styles.body}>
                GrowValley Ventures deploys capital. GrowValley Capital advises on strategy. We run the operations.<br /><br />
                That means company formation, PRO and government liaison, accounting, payroll, tax compliance, and international structuring. The work that is not your core business but stops everything if it fails.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className={styles.miniCta}>
        <div className={styles.miniCtaInner}>
          <div className={styles.miniCtaText}>
            <h3>Infrastructure. Compliance. Operations.</h3>
          </div>
          <Link href="/contact">
            <Button variant="secondary" size="lg">
              Let&apos;s Work
            </Button>
          </Link>
        </div>
      </section>
      <Solutions cmsData={solutionsData} />
      <WhoWeWorkWith cmsData={whoWeWorkWithData} />
      {features.insights && (
        <InsightsCarousel
          title="Latest from GrowValley"
          description="Perspectives on capital, investment and business performance."
          insights={dynamicInsights}
        />
      )}

      <DataSection
        headline={displayDataSection.headline}
        description={displayDataSection.description}
        stats={displayDataSection.stats}
      />
      <section className={styles.ctaBanner}>
        <div className="container">
          <h2 className={styles.speakToAnExpertBannerHeading}>
            Your operations are only as strong as the infrastructure running underneath them.
          </h2>
          <Link href="/contact">
            <Button size="lg" variant="secondary">
              Let&apos;s Work
            </Button>
          </Link>
        </div>
      </section>

    </main>
  );
}
