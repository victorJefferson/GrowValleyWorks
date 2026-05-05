"use client";

import React from "react";
import Link from "next/link";
import { ChevronRight } from "lucide-react";
import {
  Building2, BarChart3, Heart, Briefcase, Globe, Palette,
  Zap, Users, ShieldCheck, Layers, ScrollText, Plane,
  LineChart, Network, Target, Route, RefreshCw,
  Search, Key, Book, CheckCircle, Calculator, FileText, Lock, BookOpen, MapPin, Edit, UserCheck, DollarSign, Shield, Map, Folder
} from "lucide-react";

import { ServiceDetail } from "@/config/services";
import { Button } from "@/components/ui/Button";
import styles from "./ServicePage.module.scss";

// Import data from split files
import { establishData } from "./data/establish";
import { operateData } from "./data/operate";
import { manageData } from "./data/manage";
import { expandData } from "./data/expand";

const iconMap: Record<string, any> = {
  Building2, BarChart3, Heart, Briefcase, Globe, Palette,
  Zap, Users, ShieldCheck, Layers, ScrollText, Plane,
  LineChart, Network, Target, Route, RefreshCw,
  Search, Key, Book, CheckCircle, Calculator, FileText, Lock, BookOpen, MapPin, Edit, UserCheck, DollarSign, Shield, Map, Folder
};

const servicePageContent: Record<string, any> = {
  ...establishData,
  ...operateData,
  ...manageData,
  ...expandData
};

const SERVICE_SECTION_IMAGES: Record<string, any> = {
  // We use placeholder unsplash images mapped generally by category, 
  // but they can be customized per slug just like before.
};

export default function ServicePageContent({ service }: { service: ServiceDetail }) {
  if (!service) return null;

  const content = servicePageContent[service.slug];
  if (!content) {
    return (
      <div className="container" style={{ padding: '10rem 0', textAlign: 'center' }}>
        <h2>Service content not found for slug: {service.slug}</h2>
      </div>
    );
  }

  const sectionImgs = SERVICE_SECTION_IMAGES[service.slug] || {};
  const defaultImg = "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?q=80&w=1400&auto=format&fit=crop";

  const heroImg = sectionImgs.hero ?? defaultImg;
  const problemImg = sectionImgs.problem ?? heroImg;
  const featureImg = sectionImgs.feature ?? heroImg;
  const includedImg = sectionImgs.included ?? heroImg;

  return (
    <main>
      {/* ── 1. Hero Section ── */}
      <section className={styles.heroSection}>
        <div className="container">
          <nav className={styles.breadcrumb} aria-label="Breadcrumb">
            <Link href="/">Home</Link>
            <ChevronRight className={styles.separator} size={14} />
            <Link href="/our-capabilities">Our Services</Link>
            <ChevronRight className={styles.separator} size={14} />
            <Link href={`/our-capabilities/${service.category.toLowerCase().replace(/\s+/g, '-')}`}>
              {content.categoryLabel || service.category}
            </Link>
            <ChevronRight className={styles.separator} size={14} />
            <span className={styles.current}>{service.title}</span>
          </nav>

          <div className={styles.heroSplit}>
            <div className={styles.heroLeft}>
              <h1 className={content.heroHeadline && content.heroHeadline.length > 50 ? styles.longHeadline : ""}>
                {content.heroHeadline || service.title}
              </h1>
              <p>{content.heroSubheadline || service.description}</p>
              <Link href="/contact">
                <Button size="lg">{content.heroCtaLabel || content.ctaButtonLabel || "SPEAK TO AN EXPERT"}</Button>
              </Link>
            </div>
            <div className={styles.heroRight}>
              <img src={heroImg} alt={service.title} />
              <div className={styles.heroRightOverlay} />
              <div className={styles.heroCaption}>
                <div className={styles.overlayBreadcrumb}>
                  <span className={styles.categoryPart}>{content.categoryLabel || service.category}</span>
                  <span className={styles.separatorPart}> / </span>
                  <span className={styles.titlePart}>{service.title}</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── 2. Value Prop ── */}
      <section className={styles.valueProp}>
        <div className="container">
          <div className={styles.vpGrid}>
            <div className={styles.vpLeft}>
              <h2>
                {content.valuePropHeadline}{" "}
                <em>{content.valuePropAccent}</em>
              </h2>
            </div>
            <div className={styles.vpRight}>
              <p>{content.valuePropBody}</p>
            </div>
          </div>
        </div>
      </section>

      {/* ── 3. Workflow Section (Optional) ── */}
      {content.workflow && (
        <section className={styles.howWeHelp}>
          <div className="container">
            <div className={styles.hwHead}>
              <h2>What we do</h2>
              <p>{content.howWeHelpSubtitle}</p>
            </div>
            <div className={styles.processGrid}>
              {content.workflow.map((step: any, i: number) => (
                <div key={i} className={styles.processStep}>
                  <div className={styles.stepNumber}>{i + 1}</div>
                  <div className={styles.stepContent}>
                    <h4>{step.title}</h4>
                    <p>{step.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* ── 4. Problem Section ── */}
      <section className={styles.problemSection}>
        <div className="container">
          <div className={styles.problemCard}>
            <div className={styles.problemImageCol}>
              <img src={problemImg} alt={service.title} />
              <div className={styles.problemHighlight}>
                <strong>{content.problemImageText || content.problemHighlight}</strong>
                <span className={styles.underlineAccent} />
              </div>
            </div>
            <div className={styles.problemContent}>
              <h3>{content.problemHeadline}</h3>
              <p>{content.problemBody}</p>
              <ul>
                {content.problemBullets?.map((b: string, i: number) => <li key={i}>{b}</li>)}
              </ul>
              <Link href="/contact">
                <Button variant="outline">{content.problemCtaLabel || content.ctaButtonLabel || "LET'S TALK"}</Button>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* ── 5. How We Help ── */}
      {!content.workflow && (
        <section className={styles.howWeHelp}>
          <div className="container">
            <div className={styles.hwHead}>
              <h2>How we help</h2>
              <p>{content.howWeHelpSubtitle}</p>
            </div>
            <div className={styles.hwGrid}>
              {content.helpCards?.map((card: any, i: number) => {
                const Icon = iconMap[card.iconName] || Briefcase;
                return (
                  <div key={i} className={styles.hwCard}>
                    <div className={styles.hwIcon}>
                      <Icon size={28} strokeWidth={1.5} />
                    </div>
                    <h4>{card.title}</h4>
                    <p>{card.desc}</p>
                  </div>
                );
              })}
            </div>
          </div>
        </section>
      )}

      {/* ── 6. Feature Showcase ── */}
      {content.featureHeadline && (
        <section className={styles.featureShowcase}>
          <div className="container">
            <div className={styles.fsGrid}>
              <div className={styles.fsVisual}>
                <img src={featureImg} alt={service.title} />
                <div className={styles.fsVisualPattern} />
              </div>
              <div className={styles.fsContent}>
                <span className={styles.fsEyebrow}>{content.featureEyebrow}</span>
                <h2>{content.featureHeadline}</h2>
                <p>{content.featureBody}</p>
                <ul>
                  {content.featureBullets?.map((b: string, i: number) => <li key={i}>{b}</li>)}
                </ul>
                <Link href="/contact">
                  <Button variant="outline">{content.featureCtaLabel || content.ctaButtonLabel || "Enquire about this service"}</Button>
                </Link>
              </div>
            </div>
          </div>
        </section>
      )}

      {/* ── 7. Stats ── */}
      {content.stats && content.stats.length > 0 && (
        <section className={styles.statsSection}>
          <div className="container">
            <div className={styles.statsHead}>
              <h2>You&apos;re in good hands</h2>
            </div>
            <div className={styles.statsGrid}>
              {content.stats.map((s: any, i: number) => (
                <div key={i} className={styles.statCard}>
                  <span className={styles.statNum}>{s.num}</span>
                  <p className={styles.statDesc}>{s.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* ── 8. What's Included ── */}
      {content.whatsIncluded && (
        <section className={styles.whatsIncluded}>
          <div className="container">
            <div className={styles.wiCard}>
              <div className={styles.wiContent}>
                <h3>What&apos;s included with GrowValley&apos;s {service.title}</h3>
                <p className={styles.wiSubtext}>Everything required to manage your business properly, from day one.</p>
                <div className={styles.wiGrid}>
                  <ul>
                    {content.whatsIncluded.column1?.map((item: string, i: number) => (
                      <li key={i}>{item}</li>
                    ))}
                  </ul>
                  <ul>
                    {content.whatsIncluded.column2?.map((item: string, i: number) => (
                      <li key={i}>{item}</li>
                    ))}
                  </ul>
                </div>
              </div>
              <div className={styles.wiImage}>
                <img src={includedImg} alt={service.title} />
                <div className={styles.wiImageOverlay} />
              </div>
            </div>
          </div>
        </section>
      )}

      {/* ── 9. CTA Banner ── */}
      <section className={styles.ctaBanner}>
        <div className="container">
          <div className={styles.ctaInner}>
            <h2>{content.ctaHeadline || "Ready to start a conversation?"}</h2>
            <p>
              {content.ctaBody || "Our advisors are ready to discuss your specific requirements with discretion and depth."}
            </p>
            <Link href="/contact">
              <Button size="lg" variant="secondary">{content.bottomCtaLabel || content.ctaButtonLabel || "CONTACT US"}</Button>
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}
