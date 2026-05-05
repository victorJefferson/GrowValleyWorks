import React from 'react';
import Link from 'next/link';
import { Metadata } from 'next';
import { Hero } from '@/components/ui/Hero';
import { ServiceCard } from "@/components/ui/ServiceCard";
import { Button } from "@/components/ui/Button";
import { ArrowRight, CheckCircle2 } from "lucide-react";
import styles from "../Capabilities.module.scss";
import { client } from "@/lib/sanity";
import { heroQuery, pillarQuery } from "@/lib/queries";
import { urlFor } from "@/lib/sanity";
import { PortableText } from '@portabletext/react';

export const metadata: Metadata = {
  title: "Establish | GrowValley Works",
  description: "Company formation, free zone setup, corporate structuring, and trust arrangements. Getting the entity right from the start.",
};

export default async function EstablishPage() {
  let heroData = null;
  let pillarData = null;

  try {
    [heroData, pillarData] = await Promise.all([
      client.fetch(heroQuery, { pageSlug: "establish" }),
      client.fetch(pillarQuery, { slug: "establish" })
    ]);
  } catch (err) {
    console.error("Establish Page Fetch Error:", err);
  }

  const defaultHero = {
    eyebrow: "SERVICES / ESTABLISH",
    headline: "Establish",
    subheadline: "The structure you set up today will either support your next ten decisions or complicate them. We make sure it is the former.",
    image: "https://images.unsplash.com/photo-1450101499163-c8848c66ca85?auto=format&fit=crop&q=80&w=1400",
  };

  const displayHero = heroData || defaultHero;
  const heroImage = heroData?.image ? urlFor(heroData.image).url() : displayHero.image;

  return (
    <main>
      {/* SECTION 1: HERO */}
      <Hero
        isShort
        eyebrow={displayHero.eyebrow}
        headline={displayHero.headline}
        subheadline={displayHero.subheadline}
        image={heroImage}
        hasCTA={displayHero.hasCTA}
        ctaText={displayHero.ctaText}
        ctaHref={displayHero.ctaHref}
      />

      {/* SECTION 2: OUR APPROACH */}
      <section className={`${styles.introSection} ${styles.bgLight}`}>
        <div className="container">
          <div className={styles.introContent}>
            <span className={styles.sectionEyebrow}>OUR APPROACH</span>
            <h2 className={styles.introHeading}>
              {pillarData?.approachHeadline || "Formation is an hour of paperwork. Structure is a decision you live with for years."}
            </h2>
            <div className={styles.introBody}>
              {pillarData?.approachBody ? (
                <div className={styles.introParagraph}>
                  <PortableText value={pillarData.approachBody} />
                </div>
              ) : (
                <>
                  <p className={styles.introParagraph}>
                    Most businesses are incorporated quickly and correctly. The problems come later: when a shareholder wants out, when a foreign investor needs a clean cap table, when a tax authority examines a holding arrangement that was never properly designed.
                  </p>
                  <p className={styles.introParagraph}>
                    We work on the front end of that problem. We handle company formation, free zone selection, corporate structuring, and trust arrangements with the rigour those decisions require, because revisiting structure mid-growth is significantly more expensive than getting it right at the start.
                  </p>
                </>
              )}
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 3: WHO THIS IS FOR */}
      <section className={styles.section}>
        <div className="container">
          <div className={styles.sectionHeader}>
            <span className={styles.sectionEyebrow}>WHO WE WORK WITH</span>
          </div>
          <div className={styles.whoGrid}>
            {pillarData?.whoWeWorkWith ? pillarData.whoWeWorkWith.map((item: string, i: number) => (
              <div key={i} className={styles.whoBlock}>
                <p>{item}</p>
              </div>
            )) : (
              <>
                <div className={styles.whoBlock}>
                  <p>Founders entering the UAE for the first time, choosing between mainland, free zone, and offshore options and needing clear guidance on which structure fits their operating model and ownership goals.</p>
                </div>
                <div className={styles.whoBlock}>
                  <p>Growth-stage companies restructuring an existing entity, adding subsidiaries, or preparing for capital raises that require a cleaner, more defensible corporate architecture.</p>
                </div>
                <div className={styles.whoBlock}>
                  <p>International businesses setting up a UAE presence and needing a structure that connects correctly to their existing global entities, tax positions, and compliance obligations.</p>
                </div>
                <div className={styles.whoBlock}>
                  <p>Founders and families separating personal assets from operating businesses, requiring trust arrangements and fiduciary structures that work across jurisdictions and hold up under scrutiny from tax and legal authorities.</p>
                </div>
              </>
            )}
          </div>
        </div>
      </section>

      {/* SECTION 4: SERVICE CARDS */}
      <section className={`${styles.section} ${styles.bgLight}`}>
        <div className="container">
          <div className={styles.serviceGrid}>
            <ServiceCard
              title="Company Formation (UAE + Global)"
              description="We handle the full formation process: entity type selection, jurisdiction assessment, licensing, ownership structure, and documentation. Our advisors cover UAE mainland, all major free zones, offshore jurisdictions, and international markets."
              slug="company-formation"
              iconName="Building2"
              ctaText="Read More"
            />
            <ServiceCard
              title="Free Zone Setup"
              description="Choosing the wrong free zone costs money and time to correct. We assess your business model, ownership requirements, sector, and cost parameters, then recommend the free zone that fits."
              slug="free-zone-setup"
              iconName="Globe"
              ctaText="Read More"
            />
            <ServiceCard
              title="Corporate Structuring"
              description="An incorporated company and a well-structured company are not the same thing. We design holding arrangements, subsidiary frameworks, and ownership structures built for your actual goals."
              slug="corporate-structuring"
              iconName="Layers"
              ctaText="Read More"
            />
            <ServiceCard
              title="Trust & Fiduciary"
              description="For founders and families who need to separate personal wealth from operating entities, we establish trust structures that work across jurisdictions and withstand examination by tax authorities."
              slug="trust-and-fiduciary"
              iconName="ShieldCheck"
              ctaText="Read More"
              className={styles.centerBottomCard}
            />
          </div>
        </div>
      </section>

      {/* SECTION 5: HOW IT WORKS */}
      <section className={styles.section}>
        <div className="container">
          <div className={styles.sectionHeader}>
            <span className={styles.sectionEyebrow}>HOW IT WORKS</span>
          </div>
          <div className={styles.howItWorksGrid}>
            {pillarData?.howItWorks ? pillarData.howItWorks.map((step: any, i: number) => (
              <div key={i} className={styles.step}>
                <div className={styles.stepHeader}>
                  <span className={styles.stepNumber}>{String(i + 1).padStart(2, '0')}</span>
                  <h3>{step.title}</h3>
                </div>
                <p>{step.description}</p>
              </div>
            )) : (
              <>
                <div className={styles.step}>
                  <div className={styles.stepHeader}>
                    <span className={styles.stepNumber}>01</span>
                    <h3>Briefing</h3>
                  </div>
                  <p>We start with a structured conversation about your business model, ownership, operating geography, and forward plans. We do not recommend a structure until we understand what you are building.</p>
                </div>
                <div className={styles.step}>
                  <div className={styles.stepHeader}>
                    <span className={styles.stepNumber}>02</span>
                    <h3>Structural Assessment</h3>
                  </div>
                  <p>We present the jurisdictional and structural options relevant to your situation, with a clear recommendation and the reasoning behind it. No shortlists without guidance.</p>
                </div>
                <div className={styles.step}>
                  <div className={styles.stepHeader}>
                    <span className={styles.stepNumber}>03</span>
                    <h3>Formation and Setup</h3>
                  </div>
                  <p>We manage every step of the formation process: applications, documentation, regulatory submissions, and government approvals. We handle the back-and-forth directly.</p>
                </div>
                <div className={styles.step}>
                  <div className={styles.stepHeader}>
                    <span className={styles.stepNumber}>04</span>
                    <h3>Completion and Handover</h3>
                  </div>
                  <p>You receive a complete corporate file. If you need ongoing entity management or back-office operations, our Operate and Manage teams take it from here.</p>
                </div>
              </>
            )}
          </div>
        </div>
      </section>

      {/* SECTION 6: POSITIONING STRIP */ }
  <section className={styles.positioningStrip}>
    <div className="container">
      <div className={styles.stripContent}>
        <p className={styles.stripText}>
          {pillarData?.positioningText || "Most firms will incorporate you. Few will tell you why the structure matters three years from now. That distinction is what we are here for."}
        </p>
        <span className={styles.stripBrand}>GrowValley</span>
      </div>
    </div>
  </section>

  {/* SECTION 7: BY THE NUMBERS */ }
  <section className={styles.section}>
    <div className="container">
      <div className={styles.statsGridPillar}>
        {pillarData?.stats ? pillarData.stats.map((s: any, i: number) => (
          <div key={i} className={styles.statItem}>
            <span className={styles.statNumber}>{s.number}</span>
            <p className={styles.statLabel}>{s.label}</p>
          </div>
        )) : (
          <>
            <div className={styles.statItem}>
              <span className={styles.statNumber}>40+</span>
              <p className={styles.statLabel}>UAE free zones assessed and working across</p>
            </div>
            <div className={styles.statItem}>
              <span className={styles.statNumber}>15+</span>
              <p className={styles.statLabel}>jurisdictions covered for international formation</p>
            </div>
            <div className={styles.statItem}>
              <span className={styles.statNumber}>6</span>
              <p className={styles.statLabel}>specialist advisors across formation, structuring, and fiduciary</p>
            </div>
          </>
        )}
      </div>
    </div>
  </section>

  {/* SECTION 9: WHAT COMES NEXT */ }
  <section className={`${styles.section} ${styles.bgLight}`}>
    <div className="container">
      <div className={styles.nextSection}>
        <div className={styles.nextContent}>
          <span className={styles.sectionEyebrow}>AFTER {pillarData?.title?.toUpperCase() || "ESTABLISH"}</span>
          <h2 className={styles.nextHeading}>{pillarData?.nextSectionTitle || "Formation is the start, not the finish."}</h2>
          <p className={styles.nextBody}>
            {pillarData?.nextSectionBody || "Once your entity is correctly structured, it needs to run. Our Operate team handles PRO services, entity management, regulatory filings, and corporate administration. Our Manage team covers accounting, payroll, HR admin, and tax compliance. When you are ready to grow beyond your current market, our Expand team manages international expansion."}
          </p>
          <Link href="/our-capabilities" className={styles.nextLink}>
            See all service pillars <ArrowRight size={16} />
          </Link>
        </div>
      </div>
    </div>
  </section>

  {/* SECTION 10: CTA BANNER */ }
  <section className={styles.ctaBannerSection}>
    <div className="container">
      <div className={styles.ctaBannerBox}>
        <div className={styles.ctaBannerText}>
          <h2>{pillarData?.ctaHeadline || "Starting a conversation costs nothing. Getting the structure wrong does."}</h2>
          <p>{pillarData?.ctaBody || "Tell us about your business, where you are operating, and what you are building. We will advise on the right structure before you commit to one."}</p>
        </div>
        <Link href="/contact">
          <Button size="lg" variant="secondary">{pillarData?.ctaButtonLabel || "Talk to an Establish Advisor"}</Button>
        </Link>
      </div>
    </div>
  </section>
    </main>
  );
}
