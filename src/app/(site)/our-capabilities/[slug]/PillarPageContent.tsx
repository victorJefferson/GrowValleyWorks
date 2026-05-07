import React from 'react';
import Link from 'next/link';
import { Hero } from '@/components/ui/Hero';
import { ServiceCard } from "@/components/ui/ServiceCard";
import { Button } from "@/components/ui/Button";
import { ArrowRight } from "lucide-react";
import styles from "../Capabilities.module.scss";
import { PortableText } from '@portabletext/react';
import { urlFor } from "@/lib/sanity";

export function PillarPageContent({ pillarData, heroData }: { pillarData: any, heroData?: any }) {
  if (!pillarData) return null;

  const defaultHero = {
    eyebrow: `SERVICES / ${pillarData.title?.toUpperCase()}`,
    headline: pillarData.heroHeadline || pillarData.title,
    subheadline: pillarData.heroSubheadline,
    image: "https://images.unsplash.com/photo-1450101499163-c8848c66ca85?auto=format&fit=crop&q=80&w=1400",
  };

  const displayHero = heroData || defaultHero;
  
  // Priority: 
  // 1. Image specifically uploaded to the Pillar document (pillarData.heroImage)
  // 2. Image from a generic Hero document (heroData.image)
  // 3. Static fallback image
  const heroImage = pillarData.heroImage 
    ? urlFor(pillarData.heroImage).url() 
    : (heroData?.image ? urlFor(heroData.image).url() : displayHero.image);

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
      {(pillarData.approachHeadline || pillarData.approachBody) && (
        <section className={`${styles.introSection} ${styles.bgLight}`}>
          <div className="container">
            <div className={styles.introContent}>
              <span className={styles.sectionEyebrow}>OUR APPROACH</span>
              {pillarData.approachHeadline && (
                <h2 className={styles.introHeading}>{pillarData.approachHeadline}</h2>
              )}
              {pillarData.approachBody && (
                <div className={styles.introBody}>
                  <div className={styles.introParagraph}>
                    <PortableText value={pillarData.approachBody} />
                  </div>
                </div>
              )}
            </div>
          </div>
        </section>
      )}

      {/* SECTION 2.5: CARD GRID (Formerly Who We Work With) */}
      {(pillarData.cardGridEyebrow || pillarData.cardGridHeadline || pillarData.cardGridBody || pillarData.whoWeWorkWith?.length > 0) && (
        <section className={styles.cardGridSection}>
          <div className="container">
            <div className={styles.cardGridHeader}>
              {pillarData.cardGridEyebrow && <span className={styles.eyebrow}>{pillarData.cardGridEyebrow}</span>}
              {pillarData.cardGridHeadline && <h2>{pillarData.cardGridHeadline}</h2>}
              {pillarData.cardGridBody && <p>{pillarData.cardGridBody}</p>}
            </div>
            
            {pillarData.whoWeWorkWith && pillarData.whoWeWorkWith.length > 0 && (
              <div className={styles.cardGrid}>
                {pillarData.whoWeWorkWith.map((item: string, i: number) => (
                  <div key={i} className={styles.cardGridItem}>
                    <p>{item}</p>
                  </div>
                ))}
              </div>
            )}
          </div>
        </section>
      )}

      {/* SECTION 4: SERVICE CARDS (Dynamic from CMS) */}
      {pillarData.services && pillarData.services.length > 0 && (
        <section className={`${styles.section} ${styles.bgLight}`}>
          <div className="container">
            {(pillarData.servicesEyebrow || pillarData.servicesHeadline) && (
              <div className={styles.servicesHeader}>
                {pillarData.servicesEyebrow && <span className={styles.servicesEyebrow}>{pillarData.servicesEyebrow}</span>}
                {pillarData.servicesHeadline && <h2 className={styles.servicesHeadline}>{pillarData.servicesHeadline}</h2>}
              </div>
            )}
            
            <div className={`${styles.serviceGrid} ${pillarData.services.length > 4 ? styles.gridLarge : ""}`}>
              {pillarData.services.map((service: any, i: number) => (
                <ServiceCard
                  key={service.slug}
                  title={service.title}
                  description={service.description}
                  slug={service.slug}
                  iconName={service.iconName || "Building2"}
                  ctaText="Read More"
                />
              ))}
            </div>
          </div>
        </section>
      )}

      {/* SECTION 5: HOW IT WORKS */}
      {pillarData.howItWorks && pillarData.howItWorks.length > 0 && (
        <section className={styles.section}>
          <div className="container">
            <div className={styles.sectionHeader}>
              <span className={styles.sectionEyebrow}>HOW IT WORKS</span>
            </div>
            <div className={styles.howItWorksGrid}>
              {pillarData.howItWorks.map((step: any, i: number) => (
                <div key={i} className={styles.step}>
                  <div className={styles.stepHeader}>
                    <span className={styles.stepNumber}>{String(i + 1).padStart(2, '0')}</span>
                    <h3>{step.title}</h3>
                  </div>
                  <p>{step.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* SECTION 6: POSITIONING STRIP */}
      {pillarData.positioningText && (
        <section className={styles.positioningStrip}>
          <div className="container">
            <div className={styles.stripContent}>
              <p className={styles.stripText}>{pillarData.positioningText}</p>
              <span className={styles.stripBrand}>GrowValley</span>
            </div>
          </div>
        </section>
      )}

      {/* SECTION 7: BY THE NUMBERS */}
      {pillarData.stats && pillarData.stats.length > 0 && (
        <section className={styles.section}>
          <div className="container">
            <div className={styles.statsGridPillar}>
              {pillarData.stats.map((s: any, i: number) => (
                <div key={i} className={styles.statItem}>
                  <span className={styles.statNumber}>{s.number}</span>
                  <p className={styles.statLabel}>{s.label}</p>
                </div>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* SECTION 8: WHAT COMES NEXT */}
      {(pillarData.nextSectionTitle || pillarData.nextSectionBody) && (
        <section className={`${styles.section} ${styles.bgLight}`}>
          <div className="container">
            <div className={styles.nextSection}>
              <div className={styles.nextContent}>
                <span className={styles.sectionEyebrow}>AFTER {pillarData.title?.toUpperCase()}</span>
                {pillarData.nextSectionTitle && <h2 className={styles.nextHeading}>{pillarData.nextSectionTitle}</h2>}
                {pillarData.nextSectionBody && <p className={styles.nextBody}>{pillarData.nextSectionBody}</p>}
                <Link href="/our-capabilities" className={styles.nextLink}>
                  See all service pillars <ArrowRight size={16} />
                </Link>
              </div>
            </div>
          </div>
        </section>
      )}

      {/* SECTION 9: CTA BANNER */}
      {(pillarData.ctaHeadline || pillarData.ctaBody) && (
        <section className={styles.ctaBannerSection}>
          <div className="container">
            <div className={styles.ctaBannerBox}>
              <div className={styles.ctaBannerText}>
                {pillarData.ctaHeadline && <h2>{pillarData.ctaHeadline}</h2>}
                {pillarData.ctaBody && <p>{pillarData.ctaBody}</p>}
              </div>
              <Link href="/contact">
                <Button size="lg" variant="secondary">{pillarData.ctaButtonLabel || "Talk to an Advisor"}</Button>
              </Link>
            </div>
          </div>
        </section>
      )}
    </main>
  );
}
