import React from 'react';
import Link from 'next/link';
import { Metadata } from 'next';
import { Hero } from '@/components/ui/Hero';
import { ServiceCard } from "@/components/ui/ServiceCard";
import { Button } from "@/components/ui/Button";
import { ArrowRight } from "lucide-react";
import styles from "../Capabilities.module.scss";
import { client } from "@/lib/sanity";
import { heroQuery, pillarQuery } from "@/lib/queries";
import { urlFor } from "@/lib/sanity";
import { PortableText } from '@portabletext/react';

export const metadata: Metadata = {
  title: "Manage | GrowValley Works",
  description: "Accounting, payroll, HR administration, tax compliance, and employer-of-record. The financial and people operations behind your business.",
};

export default async function ManagePage() {
  let heroData = null;
  let pillarData = null;

  try {
    [heroData, pillarData] = await Promise.all([
      client.fetch(heroQuery, { pageSlug: "manage" }),
      client.fetch(pillarQuery, { slug: "manage" })
    ]);
  } catch (err) {
    console.error("Manage Page Fetch Error:", err);
  }

  const defaultHero = {
    eyebrow: "SERVICES / MANAGE",
    headline: "Manage",
    subheadline: "GrowValley manages accounting, payroll, HR administration, tax compliance, and employer-of-record across your entities so your team is not doing it. Built for businesses operating at scale, not just starting out.",
    image: "https://images.unsplash.com/photo-1554224155-6726b3ff858f?auto=format&fit=crop&q=80&w=1400",
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

      {/* SECTION 2: POSITIONING STATEMENT */}
      <section className={`${styles.introSection} ${styles.bgLight}`}>
        <div className="container">
          <div className={styles.introContent}>
            <span className={styles.sectionEyebrow}>OUR APPROACH</span>
            <h2 className={styles.introHeading}>
              {pillarData?.approachHeadline || "At a certain size, back-office complexity stops being an inconvenience and starts being a liability."}
            </h2>
            <div className={styles.introBody}>
              {pillarData?.approachBody ? (
                <div className={styles.introParagraph}>
                  <PortableText value={pillarData.approachBody} />
                </div>
              ) : (
                <>
                  <p className={styles.introParagraph}>
                    Managing payroll across entities, staying current on tax obligations in multiple jurisdictions, and keeping HR records clean under local labour law is not simple work. It is not work your finance team should be doing manually either.
                  </p>
                  <p className={styles.introParagraph}>
                    GrowValley takes on these functions directly. We run them on a defined schedule, with the right oversight built in, and we report to you as a partner, not a vendor chasing approvals.
                  </p>
                </>
              )}
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 3: PROBLEM SECTION */}
      <section className={styles.section}>
        <div className="container">
          <div className={styles.sectionHeader}>
            <span className={styles.sectionEyebrow}>THE PROBLEM</span>
          </div>
          <div className={styles.introContent} style={{ textAlign: 'left', margin: '0 0 3rem 0' }}>
            <h2 className={styles.introHeading} style={{ fontSize: '2.5rem' }}>
              Most back-office failures are not one-off mistakes. They are systems that were never built.
            </h2>
            <p className={styles.introParagraph}>
              Companies that grow faster than their internal infrastructure tend to absorb errors quietly until they cannot. Payroll runs on spreadsheets. Tax filings are tracked in someone's calendar. HR records are incomplete. These are not signs of a bad team. They are signs of a business that has outgrown its setup.
            </p>
          </div>
          <div className={styles.whoGrid}>
            <div className={styles.whoBlock}>
              <p>Payroll errors in the UAE and across borders create legal exposure that compounds quickly.</p>
            </div>
            <div className={styles.whoBlock}>
              <p>Missed tax filing deadlines accumulate penalties across multiple registrations simultaneously.</p>
            </div>
            <div className={styles.whoBlock}>
              <p>HR records maintained without proper process create inconsistency and litigation risk.</p>
            </div>
            <div className={styles.whoBlock}>
              <p>Fragmented vendors mean no single party is accountable when something is missed.</p>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 4: SERVICE CARDS */}
      <section className={`${styles.section} ${styles.bgLight}`}>
        <div className="container">
          <div className={styles.sectionHeader} style={{ textAlign: 'center', marginBottom: '4rem' }}>
            <span className={styles.sectionEyebrow}>Five Functions. One Team.</span>
            <p className={styles.introParagraph}>GrowValley manages the financial and people operations that have to run correctly every month.</p>
          </div>
          <div className={styles.serviceGrid}>
            <ServiceCard
              title="Accounting and Bookkeeping"
              description="Monthly ledger management, reconciliations, management accounts, and financial reporting, prepared on schedule and ready for audit."
              slug="accounting-and-bookkeeping"
              iconName="BarChart3"
              ctaText="Read More"
            />
            <ServiceCard
              title="Payroll"
              description="We process payroll across UAE and international entities, manage WPS compliance, and handle disbursements on time. Accurate payroll is a legal obligation."
              slug="payroll"
              iconName="Users"
              ctaText="Read More"
            />
            <ServiceCard
              title="HR Administration"
              description="Employment contracts, onboarding, offboarding, HR records, and end-of-service gratuity calculations in line with local labour law."
              slug="hr-administration"
              iconName="Briefcase"
              ctaText="Read More"
            />
            <ServiceCard
              title="Tax Compliance"
              description="VAT registration and return filing, corporate tax registration, and your compliance calendar across all active jurisdictions."
              slug="tax-compliance"
              iconName="ShieldCheck"
              ctaText="Read More"
            />
            <ServiceCard
              title="Employer of Record"
              description="Employ staff in markets where you do not yet have a registered entity. Your people are hired legally and paid correctly."
              slug="employer-of-record"
              iconName="Network"
              ctaText="Read More"
              className={styles.centerBottomCard}
            />
          </div>
        </div>
      </section>

      {/* SECTION 5: CONVICTION SECTION */}
      <section className={styles.positioningStrip}>
        <div className="container">
          <div className={styles.stripContent}>
            <span className={styles.stripBrand}>BUILT FOR OPERATORS</span>
            <h2 className={styles.stripText} style={{ fontStyle: 'normal', fontWeight: 600 }}>
              {pillarData?.positioningText || "We do not just record what happened. We keep your business out of trouble."}
            </h2>
            <p style={{ opacity: 0.8, fontSize: '1.2rem', maxWidth: '800px' }}>
              Back-office work looks routine until something goes wrong. GrowValley is structured to prevent them. Our team runs your financial and people operations on a fixed schedule, across every jurisdiction you operate in.
            </p>
          </div>
        </div>
      </section>

      {/* SECTION 6: STATS STRIP */}
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
                  <span className={styles.statNumber}>5</span>
                  <p className={styles.statLabel}>Functions managed under one engagement</p>
                </div>
                <div className={styles.statItem}>
                  <span className={styles.statNumber}>20+</span>
                  <p className={styles.statLabel}>Jurisdictions covered for payroll and tax</p>
                </div>
                <div className={styles.statItem}>
                  <span className={styles.statNumber}>4 pillars</span>
                  <p className={styles.statLabel}>One firm, not four separate vendors</p>
                </div>
                <div className={styles.statItem}>
                  <span className={styles.statNumber}>Monthly</span>
                  <p className={styles.statLabel}>Reporting cycle with no chasing required</p>
                </div>
              </>
            )}
          </div>
        </div>
      </section>

      {/* SECTION 8: CTA BANNER */}
      <section className={styles.ctaBannerSection}>
        <div className="container">
          <div className={styles.ctaBannerBox}>
            <div className={styles.ctaBannerText}>
              <h2>{pillarData?.ctaHeadline || "Stop running the back office. We will run it for you."}</h2>
              <p>{pillarData?.ctaBody || "GrowValley provides the financial and people infrastructure serious businesses need to operate cleanly at scale. One firm, accountable across every function."}</p>
            </div>
            <Link href="/contact">
              <Button size="lg" variant="secondary">{pillarData?.ctaButtonLabel || "Get Started"}</Button>
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}
