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
    absolute: "Experts | GrowValley",
  },
  description:
    "Join the GrowValley network of industry specialists and experts.",
  openGraph: {
    title: "Experts | GrowValley",
    description: "Join the GrowValley network of industry specialists and experts.",
    url: "https://gv.ventures/join-us/experts",
  },
};

export default async function ExpertsPage() {
  let heroData = null;
  try {
    heroData = await client.fetch(heroQuery, { pageSlug: "careers" });
  } catch (err) {
    console.error("Experts Hero Fetch Error:", err);
  }

  const defaultHero = {
    eyebrow: "EXPERTS",
    headline: "A Network of Specialists. A Collective of Excellence.",
    subheadline: "GrowValley's strength lies in our ability to assemble the right minds for the right problems. We are constantly looking for industry veterans, technical specialists, and visionary thinkers to join our network.",
    image: "/images/careers_hero.png",
  };

  const displayHero = heroData || defaultHero;
  const heroImage = heroData?.image ? urlFor(heroData.image).url() : displayHero.image;

  return (
    <main>
      <Hero
        isShort
        eyebrow="EXPERTS"
        headline="We don't build an expert network for appearances. We build it for use."
        subheadline="GrowValley's advisory network sits at the centre of what we do for clients. When we bring in an expert, it's because there's a gap only that person can fill."
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
                GrowValley&apos;s advisory network sits at the centre of what we do for clients. When we bring in an expert, it&apos;s because there&apos;s a gap only that person can fill: a market they know better than anyone, a transaction type they&apos;ve navigated from the inside, a jurisdiction they&apos;ve spent decades working across.
              </p>
              <p className={styles.pullQuoteText} style={{ fontSize: '1.25rem', color: 'var(--color-text-muted)' }}>
                Client situations don&apos;t wait for the right credential to show up. We build the bench before we need it.
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
                The experts who fit here have scars, not just credentials.
              </h2>
            </div>
            <div className={styles.body}>
              <p>
                You&apos;ve worked inside deals, not around them. You&apos;ve advised, structured, invested, or exited at a level where you know what goes wrong and what holds. Your judgment comes from decisions you&apos;ve lived through, not from a title you&apos;ve held.
              </p>
              <p>
                We don&apos;t care about geography or firm size. We care about depth and the ability to be straight with a client when the situation calls for it.
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
              <span className={styles.eyebrow}>GET ON THE RADAR</span>
              <h2 className={styles.heading}>
                No open mandates right now, but we&apos;re always building the bench.
              </h2>
              <div className={styles.openingCard}>
                <p>
                  We don&apos;t bring experts in on a fixed cycle. When a client situation calls for something specific, we go to the people we already know. If you want to be one of those people when the moment comes, tell us about your work. The right message gets a response.
                </p>
                <Link href="mailto:experts@gv.ventures">
                  <Button variant="primary" size="lg">
                    Tell Us About Your Work
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
