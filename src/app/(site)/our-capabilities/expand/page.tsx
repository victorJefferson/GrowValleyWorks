import React from 'react';
import Link from 'next/link';
import { Metadata } from 'next';
import { Hero } from '@/components/ui/Hero';
import { ServiceCard } from "@/components/ui/ServiceCard";
import { Button } from "@/components/ui/Button";
import { ArrowRight } from "lucide-react";
import styles from "../Capabilities.module.scss";

export const metadata: Metadata = {
  title: "Expand | GrowValley Works",
  description: "International expansion, multi-entity structuring, and cross-border compliance. The operational work that turns a new market into a running business.",
};

export default function ExpandPage() {
  return (
    <main>
      {/* SECTION 1: HERO */}
      <Hero
        isShort
        eyebrow="SERVICES / EXPAND"
        headline="Expand"
        subheadline="GrowValley handles the legal, structural, and compliance work behind international expansion. From entity setup to cross-border filings, we run the infrastructure so you can run the business."
        image="https://images.unsplash.com/photo-1526304640581-d334cdbbf45e?auto=format&fit=crop&q=80&w=1400"
        hasCTA={false}
      />

      {/* SECTION 2: POSITIONING */}
      <section className={`${styles.introSection} ${styles.bgLight}`}>
        <div className="container">
          <div className={styles.introContent}>
            <span className={styles.sectionEyebrow}>OUR APPROACH</span>
            <h2 className={styles.introHeading}>
              Most businesses can enter a new market. Few are built to operate in one.
            </h2>
            <div className={styles.introBody}>
              <p className={styles.introParagraph}>
                International expansion creates a new layer of legal and regulatory obligation, often across multiple jurisdictions at once. Entity structure, compliance calendars, local licensing, multi-entity governance: these are not administrative details.
              </p>
              <p className={styles.introParagraph}>
                They are the foundations the business runs on. GrowValley builds those foundations and maintains them as your footprint grows.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 3: PROBLEM */}
      <section className={styles.section}>
        <div className="container">
          <div className={styles.sectionHeader}>
            <span className={styles.sectionEyebrow}>THE PROBLEM</span>
          </div>
          <div className={styles.introContent} style={{ textAlign: 'left', margin: '0 0 3rem 0' }}>
            <h2 className={styles.introHeading} style={{ fontSize: '2.5rem' }}>
              Expansion moves fast. The operational complexity behind it usually does not.
            </h2>
            <p className={styles.introParagraph}>
              The decision to enter a new market is often made in weeks. The legal, structural, and compliance work required to support that move takes months, and gets harder when it is handled in pieces by vendors who do not share context.
            </p>
          </div>
          <div className={styles.whoGrid}>
            <div className={styles.whoBlock}>
              <p>Entities incorporated in the wrong structure create tax and liability exposure that is difficult to unwind later.</p>
            </div>
            <div className={styles.whoBlock}>
              <p>Fragmented vendors across jurisdictions mean no single party holds the full picture of your compliance position.</p>
            </div>
            <div className={styles.whoBlock}>
              <p>A gap in one market can block banking, operations, or regulatory standing in another.</p>
            </div>
            <div className={styles.whoBlock}>
              <p>Internal teams absorb the administrative burden of expansion, pulling focus from the business itself.</p>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 4: HOW WE HELP */}
      <section className={`${styles.section} ${styles.bgLight}`}>
        <div className="container">
          <div className={styles.sectionHeader} style={{ textAlign: 'center', marginBottom: '4rem' }}>
            <span className={styles.sectionEyebrow}>What GrowValley Does in Expand</span>
            <p className={styles.introParagraph}>We design the right structure for your growth footprint and manage the ongoing compliance.</p>
          </div>
          <div className={styles.serviceGrid}>
            <ServiceCard
              title="International Expansion"
              description="We manage the process of entering a new market from start to finish: jurisdiction selection, entity formation, licensing, and regulatory setup."
              slug="international-expansion"
              iconName="Globe"
              ctaText="Read More"
            />
            <ServiceCard
              title="Multi-Entity Structuring"
              description="We design holding and subsidiary structures across jurisdictions that protect assets, simplify governance, and reduce cross-border tax exposure."
              slug="multi-entity-structuring"
              iconName="Layers"
              ctaText="Read More"
            />
            <ServiceCard
              title="Cross-Border Compliance"
              description="We manage the ongoing regulatory filings, reporting obligations, and compliance requirements across every market you operate in."
              slug="cross-border-compliance"
              iconName="ShieldCheck"
              ctaText="Read More"
            />
            <ServiceCard
              title="Market Entry Support"
              description="Getting into a new market requires more than an entity. It requires a business that is ready to operate: local approvals, commercial registration, and banking."
              slug="market-entry-support"
              iconName="Target"
              ctaText="Read More"
              className={styles.centerBottomCard}
            />
          </div>
        </div>
      </section>

      {/* SECTION 6: CONVICTION */}
      <section className={styles.positioningStrip}>
        <div className="container">
          <div className={styles.stripContent}>
            <span className={styles.stripBrand}>BUILT FOR SCALE</span>
            <h2 className={styles.stripText} style={{ fontStyle: 'normal', fontWeight: 600 }}>
              Expansion is not a milestone. It is an ongoing operation.
            </h2>
            <p style={{ opacity: 0.8, fontSize: '1.2rem', maxWidth: '800px' }}>
              Most firms will help you incorporate in a new country. Few stay with you through the regulatory cycle, the entity changes, the banking relationships, and the compliance calendar that follows.
            </p>
          </div>
        </div>
      </section>

      {/* SECTION 7: STATS STRIP */}
      <section className={styles.section}>
        <div className="container">
          <div className={styles.statsGridPillar}>
            <div className={styles.statItem}>
              <span className={styles.statNumber}>30+</span>
              <p className={styles.statLabel}>Jurisdictions Covered</p>
            </div>
            <div className={styles.statItem}>
              <span className={styles.statNumber}>6</span>
              <p className={styles.statLabel}>Expansion Specialists On Roster</p>
            </div>
            <div className={styles.statItem}>
              <span className={styles.statNumber}>4</span>
              <p className={styles.statLabel}>Integrated Service Areas</p>
            </div>
            <div className={styles.statItem}>
              <span className={styles.statNumber}>1</span>
              <p className={styles.statLabel}>Point of Contact Across All Workstreams</p>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 9: CTA BANNER */}
      <section className={styles.ctaBannerSection}>
        <div className="container">
          <div className={styles.ctaBannerBox}>
            <div className={styles.ctaBannerText}>
              <h2>Entering a new market? Get the structure right before you move.</h2>
              <p>GrowValley manages the legal, structural, and compliance work behind international expansion. One team, every jurisdiction, no gaps.</p>
            </div>
            <Link href="/contact">
              <Button size="lg" variant="secondary">Talk to Our Expansion Team</Button>
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}
