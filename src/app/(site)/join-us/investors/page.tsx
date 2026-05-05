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
    absolute: "Investors | GrowValley",
  },
  description:
    "Access exclusive investment opportunities with GrowValley.",
  openGraph: {
    title: "Investors | GrowValley",
    description: "Access exclusive investment opportunities with GrowValley.",
    url: "https://gv.ventures/join-us/investors",
  },
};

export default async function InvestorsPage() {
  let heroData = null;
  try {
    heroData = await client.fetch(heroQuery, { pageSlug: "careers" });
  } catch (err) {
    console.error("Investors Hero Fetch Error:", err);
  }

  const defaultHero = {
    eyebrow: "INVESTORS",
    headline: "Exclusive Access to Direct Opportunities.",
    subheadline: "GrowValley provides qualified investors with access to transactions sourced through our deep network and relationships, not public listings. We focus on transparency, discipline, and alignment.",
    image: "/images/careers_hero.png",
  };

  const displayHero = heroData || defaultHero;
  const heroImage = heroData?.image ? urlFor(heroData.image).url() : displayHero.image;

  return (
    <main>
      <Hero
        isShort
        eyebrow="INVESTORS"
        headline="We don't manage capital for volume. We manage it for outcomes."
        subheadline="GrowValley works with a focused group of investors who want more than a managed portfolio."
        image={heroImage}
        hasCTA={false}
      />

      {/* SECTION 2 INTRODUCTION */}
      <section className="section-padding">
        <div className="container">
          <div className={styles.pullQuote}>
            <div className={styles.pullQuoteAccent} />
            <div className={styles.body} style={{ textAlign: 'center', maxWidth: '900px' }}>
              <p className={styles.pullQuoteText} style={{ marginBottom: '2rem' }}>
                GrowValley works with a focused group of investors: HNW individuals, family offices, entrepreneurs, and qualified allocators who want more than a managed portfolio. They want a team that has been inside the deals, built the businesses, and deployed real capital across real markets.
              </p>
              <p className={styles.pullQuoteText} style={{ fontSize: '1.25rem', color: 'var(--color-text-muted)' }}>
                Our investors access opportunities that don&apos;t circulate publicly. They work alongside a team with $1B+ in capital deployed and 500+ projects built. And they get a mandate built around their actual goals, not a packaged tier.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 3 WHO WE WORK WITH */}
      <section className={`section-padding ${styles.bgTertiary}`}>
        <div className="container">
          <div className={styles.whoWeLookFor}>
            <div className={styles.leftCol}>
              <span className={styles.eyebrow}>WHO WE WORK WITH</span>
              <h2 className={styles.heading}>
                We work with investors who take the work seriously.
              </h2>
            </div>
            <div className={styles.body}>
              <p>
                You&apos;ve built or managed capital at a level where you know the difference between advice and real counsel. You want access to private markets, direct deals, and a team that has operated inside the opportunities it presents, not just sourced them.
              </p>
              <p>
                You&apos;re not looking to be managed. You&apos;re looking for a thinking partner with a verifiable track record.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 4 CONTACT */}
      <section className="section-padding">
        <div className="container">
          <div className={styles.roundedPanel}>
            <div className={styles.openings}>
              <div className={styles.sectionIcon} style={{ margin: '0 auto 1.5rem' }}>
                <Mail />
              </div>
              <span className={styles.eyebrow}>SELECTIVE BY DESIGN</span>
              <h2 className={styles.heading}>
                We&apos;re selective. That&apos;s the point.
              </h2>
              <div className={styles.openingCard}>
                <p>
                  GrowValley isn&apos;t structured for volume. We take on investors where we can do the work properly and add something real. Capacity is limited and the mandate is focused. If you want to understand what that looks like in practice, reach out.
                </p>
                <Link href="mailto:investors@gv.ventures">
                  <Button variant="primary" size="lg">
                    Talk to an Advisor
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
