import type { Metadata } from "next";
import { Hero } from "@/components/ui/Hero";
import styles from "../JoinUs.module.scss";
import { client } from "@/lib/sanity";
import { heroQuery } from "@/lib/queries";
import { urlFor } from "@/lib/sanity";
import { Button } from "@/components/ui/Button";
import Link from "next/link";
import { Mail } from "lucide-react";

export const metadata: Metadata = {
  title: {
    absolute: "Jobs | GrowValley",
  },
  description:
    "We don't hire for roles. We hire for impact. Join the GrowValley team.",
  openGraph: {
    title: "Jobs | GrowValley",
    description: "Explore career opportunities at GrowValley.",
    url: "https://gv.ventures/join-us/jobs",
  },
};

export default async function JobsPage() {
  let heroData = null;
  try {
    heroData = await client.fetch(heroQuery, { pageSlug: "careers" });
  } catch (err) {
    console.error("Jobs Hero Fetch Error:", err);
  }

  const defaultHero = {
    eyebrow: "JOBS",
    headline: "We don't hire for roles. We hire for impact.",
    subheadline: "GrowValley sits at a rare intersection: wealth management, venture building, and active capital deployment. That means the people who thrive here aren't looking for a quiet corner of finance. They're looking for a place where their thinking actually changes outcomes.",
    image: "/images/careers_hero.png",
  };

  const displayHero = heroData || defaultHero;
  const heroImage = heroData?.image ? urlFor(heroData.image).url() : displayHero.image;

  return (
    <main>
      <Hero
        eyebrow="JOBS"
        headline={displayHero.headline}
        subheadline={displayHero.subheadline}
        ctaText={displayHero.ctaText}
        ctaHref={displayHero.ctaHref}
        hasCTA={displayHero.hasCTA}
        image={heroImage}
      />

      {/* SECTION 2 INTRODUCTION */}
      <section className="section-padding">
        <div className="container">
          <div className={styles.pullQuote}>
            <div className={styles.pullQuoteAccent} />
            <p className={styles.pullQuoteText}>
              We&apos;re a small, senior team. There&apos;s no hiding behind process here.
              If you join GrowValley, what you do will be felt by the clients we serve and
              the businesses we build.
            </p>
          </div>
        </div>
      </section>

      {/* SECTION 3 WHO WE LOOK FOR */}
      <section className={`section-padding ${styles.bgTertiary}`}>
        <div className="container">
          <div className={styles.whoWeLookFor}>
            <div className={styles.leftCol}>
              <span className={styles.eyebrow}>WHO WE LOOK FOR</span>
              <h2 className={styles.heading}>
                The people who do well here share one thing: they&apos;re serious about the work.
              </h2>
            </div>
            <div className={styles.body}>
              <p>
                You have strong opinions you can defend. You don&apos;t wait to be told what
                needs doing, you see it, you own it, you follow through.
              </p>
              <p>
                We don&apos;t care where you&apos;re based. We care what you bring.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 4 OPEN ROLES */}
      <section className="section-padding">
        <div className="container">
          <div className={styles.roundedPanel}>
            <div className={styles.openings}>
              <div className={styles.sectionIcon} style={{ margin: '0 auto 1.5rem' }}>
                <Mail />
              </div>
              <span className={styles.eyebrow}>OPEN ROLES</span>
              <h2 className={styles.heading}>
                No open roles right now but we&apos;re always listening.
              </h2>
              <div className={styles.openingCard}>
                <p>
                  We don&apos;t hire on a fixed schedule. When we find the right person,
                  we find a way to bring them in. If you think GrowValley is where
                  you should be, tell us why. The right message gets a response.
                </p>
                <Link href="mailto:careers@gv.ventures">
                  <Button variant="primary" size="lg">
                    Send Us Your CV
                  </Button>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
