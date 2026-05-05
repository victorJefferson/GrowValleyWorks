"use client";

import { Hero } from "@/components/ui/Hero";
import { Button } from "@/components/ui/Button";
import Link from "next/link";
import { urlFor } from "@/lib/sanity";
import { Solutions } from "@/components/sections/Solutions/Solutions";
import { WhoWeWorkWith } from "@/components/sections/WhoWeWorkWith/WhoWeWorkWith";
import styles from "./Capabilities.module.scss";

export default function CapabilitiesContent({ heroData }: { heroData?: any }) {
  const defaultHero = {
    eyebrow: "GROWVALLEY WORKS",
    headline: "Our Services",
    subheadline: "Legal, regulatory, financial, and administrative. Across jurisdictions. One firm handling all of it.",
    image: "https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&q=80&w=1400",
  };

  const displayHero = heroData || defaultHero;
  const heroImage = heroData?.image
    ? urlFor(heroData.image).url()
    : displayHero.image;

  return (
    <main>
      <Hero
        eyebrow={displayHero.eyebrow}
        headline={displayHero.headline}
        subheadline={displayHero.subheadline}
        ctaText={displayHero.ctaText}
        ctaHref={displayHero.ctaHref}
        hasCTA={displayHero.hasCTA}
        image={heroImage}
      />

      {/* SECTION 2: PAGE INTRO */}
      <section className={styles.introSection}>
        <div className="container">
          <div className={styles.introContent}>
            <h2 className={styles.introHeading}>Infrastructure that serious businesses cannot afford to get wrong.</h2>
            <p className={styles.introParagraph}>
              Every service we offer exists to protect your operations, your compliance position, and your ability to move when you need to. We cover the functions that cause the most damage when they are handled badly — and we run them so you do not have to think about them.
            </p>
          </div>
        </div>
      </section>

      {/* SECTION 3: Solutions Section (dark green) */}
      <Solutions />

      {/* SECTION 4: WHO WE WORK WITH */}
      <WhoWeWorkWith />

      {/* SECTION 5: BOTTOM CTA */}
      <section className={styles.ctaBanner}>
        <div className="container">
          <div className={styles.ctaBannerPanel}>
            <h2 className={styles.speakToAnExpertBannerHeading}>
              Most engagements start with a conversation about one problem. They grow from there.
            </h2>
            <Link href="/contact">
              <Button size="lg" variant="secondary">
                Let&apos;s Talk
              </Button>
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}
