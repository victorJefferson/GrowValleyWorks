import React from 'react';
import Link from 'next/link';
import { Metadata } from 'next';
import { Hero } from '@/components/ui/Hero';
import { ServiceCard } from "@/components/ui/ServiceCard";
import { CapabilitiesLeader } from "@/components/ui/CapabilitiesLeader";
import { Button } from "@/components/ui/Button";
import styles from "../Capabilities.module.scss";

export const metadata: Metadata = {
  title: "Manage | GrowValley Works",
  description: "Accounting, payroll, HR administration, tax compliance, and Employer of Record. The financial and people infrastructure handled end to end.",
};

export default function ManagePage() {
  return (
    <main>
      <Hero
        isShort
        eyebrow="Our Services — Manage"
        headline={<>Manage</>}
        subheadline="Payroll that runs late, books that are three months behind, tax filings done at the last minute — these are not administrative problems. They are business risks."
        image="https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&q=80&w=1400"
        hasCTA={false}
      />

      <section className={`${styles.introSection} ${styles.bgLight}`}>
        <div className="container">
          <div className={styles.introContent}>
            <span className={styles.sectionEyebrow}>Our Approach</span>
            <h2 className={styles.introHeading}>
              The back-office does not need to be your problem.
            </h2>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem', textAlign: 'center' }}>
              <p className={styles.introParagraph}>
                Most operators are carrying more back-office risk than they realise. Payroll processed manually. Accounts reconciled quarterly instead of monthly. VAT returns filed close to deadline.
              </p>
              <p className={styles.introParagraph}>
                We take the entire function off your plate and run it with the rigour it requires. Accurate, on time, documented — every time.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className={styles.section} style={{ paddingTop: '5rem', paddingBottom: '3rem' }}>
        <div className="container">
          <div className={styles.sectionHeaderSimple} style={{ textAlign: 'center' }}>
            <h2 className="section-title">Five services within Manage.</h2>
          </div>
          <div className={styles.serviceGrid}>
            <ServiceCard key="accounting-and-bookkeeping" title="Accounting & Bookkeeping" description="Monthly bookkeeping, reconciliations, management accounts, and financial statements. Accurate records maintained on a consistent cadence — not as an afterthought at year end." slug="accounting-and-bookkeeping" iconName="BarChart3" />
            <ServiceCard key="payroll" title="Payroll" description="End-to-end payroll processing compliant with UAE Labour Law and WPS requirements. Every employee paid accurately and on time." slug="payroll" iconName="Users" />
            <ServiceCard key="hr-administration" title="HR Administration" description="Employment contracts, HR policy documentation, leave management, and personnel file maintenance. The administrative layer that keeps your workforce management defensible." slug="hr-administration" iconName="Briefcase" />
            <ServiceCard key="tax-compliance" title="Tax Compliance" description="VAT registration, quarterly VAT return preparation and filing, Corporate Tax registration and compliance. Every obligation met on schedule." slug="tax-compliance" iconName="ShieldCheck" />
            <ServiceCard key="employer-of-record" title="Employer of Record" description="Employ staff in the UAE without setting up a local entity. We act as the legal employer, handling payroll, HR administration, visa sponsorship, and full compliance." slug="employer-of-record" iconName="Network" />
          </div>
        </div>
      </section>

      <section className={`${styles.bgLight}`} style={{ padding: '8rem 0' }}>
        <div className="container">
          <div style={{ maxWidth: '900px', margin: '0 auto', textAlign: 'center' }}>
            <span style={{ fontSize: '5rem', color: 'var(--color-accent-blue)', opacity: 0.2, lineHeight: 0, display: 'block', marginBottom: '2rem', fontFamily: 'serif' }}>&ldquo;</span>
            <blockquote style={{ fontSize: 'clamp(1.5rem, 3vw, 2.25rem)', color: 'var(--color-primary-navy)', lineHeight: 1.4, fontWeight: 500, fontStyle: 'italic', margin: 0 }}>
              Finance and HR administration done properly is invisible. Done badly, it is all you talk about.
            </blockquote>
            <cite style={{ display: 'block', marginTop: '2.5rem', fontSize: '1.1rem', fontWeight: 600, color: 'var(--color-accent-blue)', textTransform: 'uppercase', letterSpacing: '0.1em', fontStyle: 'normal' }}>
              GrowValley Works
            </cite>
          </div>
        </div>
      </section>

      <CapabilitiesLeader
        eyebrow="The Team"
        title={<>Finance and HR specialists<br />who run the function.</>}
        description="Our accounting, payroll, and HR team handles the back-office for businesses across multiple sectors and entity types."
        image="/images/placeholderPerson.jpg"
        name="Nur Aisyah Rahman"
        designation="Head of Finance & Back-Office Operations"
      />

      <section className={styles.ctaBanner} style={{ paddingBottom: 'var(--section-gap)' }}>
        <div className="container">
          <div className={styles.ctaBannerPanel} style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'space-between', alignItems: 'center', gap: '3rem', textAlign: 'left' }}>
            <div style={{ flex: '1 1 500px' }}>
              <h2 style={{ color: 'var(--color-white)', marginBottom: '1rem', fontSize: 'clamp(2rem, 4vw, 3rem)', fontWeight: 500, lineHeight: 1.15 }}>
                Let&apos;s talk about your back-office.
              </h2>
              <p style={{ color: 'rgba(255, 255, 255, 0.9)', fontSize: '1.25rem', margin: 0, lineHeight: 1.6 }}>
                Tell us how your accounting, payroll, and HR are currently handled. We will tell you what needs to change.
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
