import React from 'react';
import Link from 'next/link';
import { Metadata } from 'next';
import { Hero } from '@/components/ui/Hero';
import { ServiceCard } from "@/components/ui/ServiceCard";
import { CapabilitiesLeader } from "@/components/ui/CapabilitiesLeader";
import { Button } from "@/components/ui/Button";
import styles from "../Capabilities.module.scss";

export const metadata: Metadata = {
  title: "Operate | GrowValley Works",
  description: "PRO and government services, entity management, regulatory filings, and corporate administration. Staying compliant without the overhead.",
};

export default function OperatePage() {
  return (
    <main>
      <Hero
        isShort
        eyebrow="Our Services — Operate"
        headline={<>Operate</>}
        subheadline="Staying registered and compliant is not a passive task. It requires consistent attention across government touchpoints, filings, renewals, and entity obligations. We handle it."
        image="https://images.unsplash.com/photo-1568992687947-868a62a9f521?auto=format&fit=crop&q=80&w=1400"
        hasCTA={false}
      />

      {/* SECTION 2 — PHILOSOPHY */}
      <section className={`${styles.introSection} ${styles.bgLight}`}>
        <div className="container">
          <div className={styles.introContent}>
            <span className={styles.sectionEyebrow}>Our Approach</span>
            <h2 className={styles.introHeading}>
              Most businesses do not realise how much is slipping until a deadline is missed.
            </h2>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem', textAlign: 'center' }}>
              <p className={styles.introParagraph}>
                Licences expire. Visas lapse. Government portals require submissions that no one has calendared. Entity records fall out of date. These are not exceptional events — they are the normal operating rhythm of running a legal entity in the UAE.
              </p>
              <p className={styles.introParagraph}>
                We absorb that rhythm. Every renewal, every filing, every government submission runs on schedule without your team having to manage it.
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
              Four services within Operate.
            </h2>
          </div>

          <div className={styles.serviceGrid}>
            <ServiceCard
              key="pro-and-government-services"
              title="PRO & Government Services"
              description="Visa applications, Emirates ID, medical fitness, labour card, MOL and MOHRE filings. Every government touchpoint managed end to end, with no missed deadlines."
              slug="pro-and-government-services"
              iconName="Briefcase"
            />
            <ServiceCard
              key="entity-management"
              title="Entity Management"
              description="Trade licence renewals, Memorandum of Association amendments, shareholder changes, and registered address maintenance. Your entity records kept accurate and current."
              slug="entity-management"
              iconName="Building2"
            />
            <ServiceCard
              key="regulatory-filings"
              title="Regulatory Filings"
              description="UBO registration, ESR notifications and reports, AML compliance submissions, and DIFC or ADGM reporting requirements handled by specialists in each framework."
              slug="regulatory-filings"
              iconName="ScrollText"
            />
            <ServiceCard
              key="corporate-administration"
              title="Corporate Administration"
              description="Board resolutions, minutes, statutory registers, and corporate secretarial compliance. The documentation layer that keeps your governance clean and your records defensible."
              slug="corporate-administration"
              iconName="Layers"
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
              Compliance is not something you check once. It is a continuous operating requirement. The businesses that treat it that way are the ones that do not get caught out.
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
        title={<>Government liaison specialists<br />who know the system.</>}
        description="Our PRO and compliance team manages relationships with over a dozen government entities across the UAE. Every submission is tracked, every deadline is owned, every escalation is handled before it becomes your problem."
        image="/images/placeholderPerson.jpg"
        name="Matthias Keller"
        designation="Head of Government & Compliance Operations"
      />

      {/* SECTION 6 — CTA */}
      <section className={styles.ctaBanner} style={{ paddingBottom: 'var(--section-gap)' }}>
        <div className="container">
          <div className={styles.ctaBannerPanel} style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'space-between', alignItems: 'center', gap: '3rem', textAlign: 'left' }}>
            <div style={{ flex: '1 1 500px' }}>
              <h2 style={{ color: 'var(--color-white)', marginBottom: '1rem', fontSize: 'clamp(2rem, 4vw, 3rem)', fontWeight: 500, lineHeight: 1.15 }}>
                Let&apos;s talk about your compliance position.
              </h2>
              <p style={{ color: 'rgba(255, 255, 255, 0.9)', fontSize: '1.25rem', margin: 0, lineHeight: 1.6 }}>
                Tell us how your entity is currently managed. We will tell you where the exposure is and how we fix it.
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
