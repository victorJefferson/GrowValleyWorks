import React from 'react';
import Link from 'next/link';
import { Metadata } from 'next';
import { Hero } from '@/components/ui/Hero';
import { ServiceCard } from "@/components/ui/ServiceCard";
import { CapabilitiesLeader } from "@/components/ui/CapabilitiesLeader";
import { Button } from "@/components/ui/Button";
import styles from "../Capabilities.module.scss";

export const metadata: Metadata = {
  title: "Expand | GrowValley Works",
  description: "International expansion, multi-entity structuring, cross-border compliance, and market entry support. Moving into new markets without losing operational control.",
};

export default function ExpandPage() {
  return (
    <main>
      <Hero
        isShort
        eyebrow="Our Services — Expand"
        headline={<>Expand</>}
        subheadline="Opening in a new market involves a sequence of structural, legal, and compliance decisions that have to happen in the right order. We coordinate the execution so your expansion does not stall before it starts."
        image="https://images.unsplash.com/photo-1436491865332-7a61a109cc05?auto=format&fit=crop&q=80&w=1400"
        hasCTA={false}
      />

      <section className={`${styles.introSection} ${styles.bgLight}`}>
        <div className="container">
          <div className={styles.introContent}>
            <span className={styles.sectionEyebrow}>Our Approach</span>
            <h2 className={styles.introHeading}>
              Expansion fails when the infrastructure does not keep up with the ambition.
            </h2>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem', textAlign: 'center' }}>
              <p className={styles.introParagraph}>
                Most businesses enter new markets before the entity structure, compliance obligations, and operational backbone are ready. The result is delays, cost overruns, and regulatory exposure that could have been avoided.
              </p>
              <p className={styles.introParagraph}>
                We sequence the expansion correctly — entity first, compliance framework second, operational infrastructure third — so the business can operate from day one in the new market.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className={styles.section} style={{ paddingTop: '5rem', paddingBottom: '3rem' }}>
        <div className="container">
          <div className={styles.sectionHeaderSimple} style={{ textAlign: 'center' }}>
            <h2 className="section-title">Four services within Expand.</h2>
          </div>
          <div className={styles.serviceGrid}>
            <ServiceCard key="international-expansion" title="International Expansion" description="Entity setup, regulatory registration, and operational infrastructure across target markets. We coordinate the full sequence so the expansion lands ready to operate." slug="international-expansion" iconName="Globe" />
            <ServiceCard key="multi-entity-structuring" title="Multi-Entity Structuring" description="Holding company design, subsidiary networks, and intercompany frameworks for groups operating across multiple jurisdictions. Clean structure, clear governance." slug="multi-entity-structuring" iconName="Layers" />
            <ServiceCard key="cross-border-compliance" title="Cross-Border Compliance" description="Transfer pricing documentation, substance requirements, permanent establishment analysis, and multi-jurisdiction tax compliance. Managed by specialists in each regime." slug="cross-border-compliance" iconName="ShieldCheck" />
            <ServiceCard key="market-entry-support" title="Market Entry Support" description="Market-specific regulatory guidance, local partner introductions, banking and account opening support, and operational setup coordination for new market entry." slug="market-entry-support" iconName="Target" />
          </div>
        </div>
      </section>

      <section className={`${styles.bgLight}`} style={{ padding: '8rem 0' }}>
        <div className="container">
          <div style={{ maxWidth: '900px', margin: '0 auto', textAlign: 'center' }}>
            <span style={{ fontSize: '5rem', color: 'var(--color-accent-blue)', opacity: 0.2, lineHeight: 0, display: 'block', marginBottom: '2rem', fontFamily: 'serif' }}>&ldquo;</span>
            <blockquote style={{ fontSize: 'clamp(1.5rem, 3vw, 2.25rem)', color: 'var(--color-primary-navy)', lineHeight: 1.4, fontWeight: 500, fontStyle: 'italic', margin: 0 }}>
              The businesses that expand successfully are not the ones that move fastest. They are the ones that move with the structure already in place.
            </blockquote>
            <cite style={{ display: 'block', marginTop: '2.5rem', fontSize: '1.1rem', fontWeight: 600, color: 'var(--color-accent-blue)', textTransform: 'uppercase', letterSpacing: '0.1em', fontStyle: 'normal' }}>
              GrowValley Works
            </cite>
          </div>
        </div>
      </section>

      <CapabilitiesLeader
        eyebrow="The Team"
        title={<>International expansion advisors<br />with in-market experience.</>}
        description="Our expansion team has supported businesses entering markets across the GCC, Europe, and Southeast Asia. Every engagement is led by a specialist with direct experience in the target jurisdiction."
        image="/images/placeholderPerson.jpg"
        name="Viktor Novak"
        designation="International Expansion Advisor"
      />

      <section className={styles.ctaBanner} style={{ paddingBottom: 'var(--section-gap)' }}>
        <div className="container">
          <div className={styles.ctaBannerPanel} style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'space-between', alignItems: 'center', gap: '3rem', textAlign: 'left' }}>
            <div style={{ flex: '1 1 500px' }}>
              <h2 style={{ color: 'var(--color-white)', marginBottom: '1rem', fontSize: 'clamp(2rem, 4vw, 3rem)', fontWeight: 500, lineHeight: 1.15 }}>
                Let&apos;s talk about your expansion.
              </h2>
              <p style={{ color: 'rgba(255, 255, 255, 0.9)', fontSize: '1.25rem', margin: 0, lineHeight: 1.6 }}>
                Tell us where you are expanding and what the timeline looks like. We will map the structural and compliance requirements before you move.
              </p>
            </div>
            <div style={{ flex: '0 0 auto', display: 'flex', justifyContent: 'flex-start' }}>
              <Link href="/contact" style={{ display: 'inline-block' }}>
                <Button size="lg" variant="secondary" style={{ padding: '1.25rem 3rem', fontSize: '1.1rem', borderRadius: '3rem' }}>
                  Let&apos;s Work
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
