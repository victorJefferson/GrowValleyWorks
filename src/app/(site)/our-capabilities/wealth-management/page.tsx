import React from 'react';
import Link from 'next/link';
import { Metadata } from 'next';
import { Hero } from '@/components/ui/Hero';
import { ServiceCard } from "@/components/ui/ServiceCard";
import { CapabilitiesLeader } from "@/components/ui/CapabilitiesLeader";
import { Button } from "@/components/ui/Button";
import styles from "../Capabilities.module.scss";

export const metadata: Metadata = {
  title: "Establish | GrowValley Works",
  description: "Company formation, free zone setup, corporate structuring, and trust arrangements. Getting the entity right from the start.",
};

export default function EstablishPage() {
  return (
    <main>
      <Hero
        isShort
        eyebrow="Our Services — Establish"
        headline={<>Establish</>}
        subheadline="The right entity. The right structure. The right jurisdiction. Getting this right from the start is what determines how much you spend correcting it later."
        image="https://images.unsplash.com/photo-1450101499163-c8848c66ca85?auto=format&fit=crop&q=80&w=1400"
        hasCTA={false}
      />

      {/* SECTION 2 — PHILOSOPHY */}
      <section className={`${styles.introSection} ${styles.bgLight}`}>
        <div className="container">
          <div className={styles.introContent}>
            <span className={styles.sectionEyebrow}>Our Approach</span>
            <h2 className={styles.introHeading}>
              A badly structured entity creates problems that compound over years.
            </h2>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem', textAlign: 'center' }}>
              <p className={styles.introParagraph}>
                We get the formation right from the start: the right jurisdiction, the right structure, the right vehicle for what you are actually building.
              </p>
              <p className={styles.introParagraph}>
                Whether you are setting up your first UAE entity, restructuring a holding company, or establishing a trust arrangement, we design the structure around your operational and commercial reality — not around what is easiest to file.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 3 — SERVICES */}
      <section className={styles.section} style={{ paddingTop: '5rem', paddingBottom: '3rem' }}>
        <div className="container">
          <div className={styles.sectionHeaderSimple} style={{ textAlign: 'center' }}>
            <h2 className="section-title">
              Four services within Establish.
            </h2>
          </div>

          <div className={styles.serviceGrid}>
            <ServiceCard
              key="company-formation"
              title="Company Formation"
              description="Mainland, free zone, or offshore. We handle the full formation process from document preparation through trade licence issuance. No delays from missing paperwork or wrong submissions."
              slug="company-formation"
              iconName="Building2"
            />
            <ServiceCard
              key="free-zone-setup"
              title="Free Zone Setup"
              description="Over 40 free zones in the UAE, each with different rules on ownership, activity, visas, and tax. We advise on the right zone for your specific business and manage the full application."
              slug="free-zone-setup"
              iconName="Globe"
            />
            <ServiceCard
              key="corporate-structuring"
              title="Corporate Structuring"
              description="Holding companies, subsidiary networks, SPVs, and cross-border structures. We design the legal and ownership architecture that matches your operating model and expansion plans."
              slug="corporate-structuring"
              iconName="Layers"
            />
            <ServiceCard
              key="trust-and-fiduciary"
              title="Trust & Fiduciary Setup"
              description="Trust structures for asset protection, succession planning, and cross-border estate management. We work with qualified fiduciaries to design and establish the right vehicle."
              slug="trust-and-fiduciary"
              iconName="ShieldCheck"
            />
          </div>
        </div>
      </section>

      {/* SECTION 4 — PULL QUOTE */}
      <section className={`${styles.bgLight}`} style={{ padding: '8rem 0' }}>
        <div className="container">
          <div style={{ maxWidth: '900px', margin: '0 auto', textAlign: 'center' }}>
            <span style={{ fontSize: '5rem', color: 'var(--color-accent-blue)', opacity: 0.2, lineHeight: 0, display: 'block', marginBottom: '2rem', fontFamily: 'serif' }}>&ldquo;</span>
            <blockquote style={{ fontSize: 'clamp(1.5rem, 3vw, 2.25rem)', color: 'var(--color-primary-navy)', lineHeight: 1.4, fontWeight: 500, fontStyle: 'italic', margin: 0 }}>
              The entity you set up on day one will still be there when you are dealing with tax audits, investor due diligence, or a business sale. The structure matters.
            </blockquote>
            <cite style={{ display: 'block', marginTop: '2.5rem', fontSize: '1.1rem', fontWeight: 600, color: 'var(--color-accent-blue)', textTransform: 'uppercase', letterSpacing: '0.1em', fontStyle: 'normal' }}>
              GrowValley Works
            </cite>
          </div>
        </div>
      </section>

      {/* SECTION 5 — LEADER */}
      <CapabilitiesLeader
        eyebrow="The Team"
        title={<>Formation expertise<br />backed by operational depth.</>}
        description="Our formation team has established entities across UAE mainland, all major free zones, and international jurisdictions. Every formation is handled by a specialist in that structure type, not assigned to a generalist."
        image="/images/placeholderPerson.jpg"
        name="Faris Al Khaldi"
        designation="Head of Corporate Formation & Structuring"
      />

      {/* SECTION 6 — CTA */}
      <section className={styles.ctaBanner} style={{ paddingBottom: 'var(--section-gap)' }}>
        <div className="container">
          <div className={styles.ctaBannerPanel} style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'space-between', alignItems: 'center', gap: '3rem', textAlign: 'left' }}>
            <div style={{ flex: '1 1 500px' }}>
              <h2 style={{ color: 'var(--color-white)', marginBottom: '1rem', fontSize: 'clamp(2rem, 4vw, 3rem)', fontWeight: 500, lineHeight: 1.15 }}>
                Let&apos;s talk about your structure.
              </h2>
              <p style={{ color: 'rgba(255, 255, 255, 0.9)', fontSize: '1.25rem', margin: 0, lineHeight: 1.6 }}>
                Tell us what you are building and where. We will advise on the right entity structure before you commit to the wrong one.
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
