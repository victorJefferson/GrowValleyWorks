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
  title: "Operate | GrowValley Works",
  description: "PRO services, entity management, regulatory filings, and corporate administration. Running the infrastructure of your business.",
};

export default async function OperatePage() {
  let heroData = null;
  let pillarData = null;

  try {
    [heroData, pillarData] = await Promise.all([
      client.fetch(heroQuery, { pageSlug: "operate" }),
      client.fetch(pillarQuery, { slug: "operate" })
    ]);
  } catch (err) {
    console.error("Operate Page Fetch Error:", err);
  }

  const defaultHero = {
    eyebrow: "SERVICES / OPERATE",
    headline: "Operate",
    subheadline: "Running a business in the UAE requires continuous interaction with government authorities, regulators, and licensing bodies. We handle that interaction so your operations do not stop when it gets complicated.",
    image: "https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&q=80&w=1400",
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
              {pillarData?.approachHeadline || "Formation is a moment. Operating compliance is a calendar that never stops."}
            </h2>
            <div className={styles.introBody}>
              {pillarData?.approachBody ? (
                <div className={styles.introParagraph}>
                  <PortableText value={pillarData.approachBody} />
                </div>
              ) : (
                <>
                  <p className={styles.introParagraph}>
                    These obligations repeat, overlap, and carry penalties when missed. Most businesses manage them reactively. 
                  </p>
                  <p className={styles.introParagraph}>
                    GrowValley tracks every deadline, prepares every submission in advance, and handles every government interaction through advisors who do this as their primary work.
                  </p>
                </>
              )}
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 3: WHO WE WORK WITH */}
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
                  <p>Founders and operators running UAE-registered entities who need PRO services, visa and permit processing, and government authority liaison managed without building a dedicated internal team for it.</p>
                </div>
                <div className={styles.whoBlock}>
                  <p>Multi-entity businesses operating across mainland and free zone jurisdictions, where compliance deadlines, renewal cycles, and regulatory filing calendars require coordinated tracking across multiple legal structures simultaneously.</p>
                </div>
                <div className={styles.whoBlock}>
                  <p>Companies whose compliance is currently managed by whoever is available, where deadlines are tracked in inboxes rather than systems, and where one missed renewal or late filing would create a problem they could not easily undo.</p>
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
              title="PRO & Government Services"
              description="New visa processing, residency renewals, golden visa applications, family sponsorship, and corporate cancellations. We manage the Ministry of Labour, Immigration, and relevant authorities directly."
              slug="pro-and-government-services"
              iconName="Briefcase"
              ctaText="Read More"
            />
            <ServiceCard
              title="Entity Management"
              description="Trade license renewals, Memorandum of Association amendments, registered address management, trade name maintenance, and full entity lifecycle administration."
              slug="entity-management"
              iconName="Building2"
              ctaText="Read More"
            />
            <ServiceCard
              title="Regulatory Filings"
              description="Mandatory submissions to the UAE Ministry of Economy, relevant free zone authorities, and sector-specific regulators. UBO, ESR, and AML filings prepared and submitted correctly."
              slug="regulatory-filings"
              iconName="ScrollText"
              ctaText="Read More"
            />
            <ServiceCard
              title="Corporate Administration"
              description="Board resolutions, signatory updates, power of attorney documentation, corporate secretary functions, and the full range of administrative requirements."
              slug="corporate-administration"
              iconName="Layers"
              ctaText="Read More"
              className={styles.centerBottomCard}
            />
          </div>
        </div>
      </section>

      {/* SECTION 5: POSITIONING STRIP */}
      <section className={styles.positioningStrip}>
        <div className="container">
          <div className={styles.stripContent}>
            <p className={styles.stripText}>
              {pillarData?.positioningText || "A missed renewal is not an oversight. In the UAE, it is a fine, a freeze, or a forced cancellation. We track the deadlines, manage the authorities, and make sure none of that reaches you."}
            </p>
            <span className={styles.stripBrand}>GrowValley</span>
          </div>
        </div>
      </section>

      {/* SECTION 6: CTA BANNER */}
      <section className={styles.ctaBannerSection}>
        <div className="container">
          <div className={styles.ctaBannerBox}>
            <div className={styles.ctaBannerText}>
              <h2>{pillarData?.ctaHeadline || "Your compliance calendar should not live in someone's inbox."}</h2>
              <p>{pillarData?.ctaBody || "GrowValley manages PRO services, entity maintenance, regulatory filings, and corporate administration as a structured, tracked operation. Tell us what your entity needs and we will take it from there."}</p>
            </div>
            <Link href="/contact">
              <Button size="lg" variant="secondary">{pillarData?.ctaButtonLabel || "Speak to Our Team"}</Button>
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}
