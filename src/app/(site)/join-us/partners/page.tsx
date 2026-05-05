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
    absolute: "Partners | GrowValley",
  },
  description:
    "Explore partnership opportunities with GrowValley.",
  openGraph: {
    title: "Partners | GrowValley",
    description: "Explore partnership opportunities with GrowValley.",
    url: "https://gv.ventures/join-us/partners",
  },
};

export default async function PartnersPage() {
  let heroData = null;
  try {
    heroData = await client.fetch(heroQuery, { pageSlug: "careers" });
  } catch (err) {
    console.error("Partners Hero Fetch Error:", err);
  }

  const defaultHero = {
    eyebrow: "PARTNERS",
    headline: "Strategic Partnerships for Lasting Impact.",
    subheadline: "GrowValley sits at a rare intersection: wealth management, venture building, and active capital deployment. We look for partners who share our vision for long-term value creation and disciplined execution.",
    image: "/images/careers_hero.png",
  };

  const displayHero = heroData || defaultHero;
  const heroImage = heroData?.image ? urlFor(heroData.image).url() : displayHero.image;

  return (
    <main>
      <Hero
        isShort
        eyebrow="PARTNERS"
        headline="We don't take on partners for coverage. We take them on for contribution."
        subheadline="GrowValley sits at the intersection of wealth management, venture building, and active capital deployment."
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
                GrowValley sits at the intersection of wealth management, venture building, and active capital deployment. The firms we partner with aren&apos;t filling a gap on a service list. They&apos;re specialists who bring something we don&apos;t already have, and whose clients benefit from what we bring.
              </p>
              <p className={styles.pullQuoteText} style={{ fontSize: '1.25rem', color: 'var(--color-text-muted)' }}>
                If your firm works alongside HNW individuals, family offices, founders, or institutional allocators, and you want to work with a team that operates rather than just advises, there&apos;s a conversation worth having.
              </p>
            </div>
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
                The right partner already understands what GrowValley does.
              </h2>
            </div>
            <div className={styles.body}>
              <p>
                You work with clients who make serious decisions with serious capital. You&apos;re not looking for a referral arrangement or a co-branding opportunity. You&apos;re looking for a firm you can put your name behind when you introduce them.
              </p>
              <p>
                We run a clean operation. No product commissions, no conflicting mandates, no reason not to be completely transparent. That&apos;s what we bring, and it&apos;s what we expect in return.
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
              <span className={styles.eyebrow}>START THE CONVERSATION</span>
              <h2 className={styles.heading}>
                Partnership starts with a conversation, not a form.
              </h2>
              <div className={styles.openingCard}>
                <p>
                  We don&apos;t take on partners on a fixed schedule. When the right firm gets in touch, we make time. If you think there&apos;s a fit, tell us who you are, what you do, and who you work with. We&apos;ll take it from there. No pitch decks required.
                </p>
                <Link href="mailto:partners@gv.ventures">
                  <Button variant="primary" size="lg">
                    Get in Touch
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
