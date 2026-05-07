import type { Metadata } from "next";
import { Hero } from "@/components/ui/Hero";
import styles from "../JoinUs.module.scss";
import { client, urlFor } from "@/lib/sanity";
import { joinUsPageQuery } from "@/lib/queries";
import { Button } from "@/components/ui/Button";
import Link from "next/link";
import { Mail } from "lucide-react";

export const metadata: Metadata = {
  title: { absolute: "Partners | GrowValley" },
  description: "Explore partnership opportunities with GrowValley.",
  openGraph: {
    title: "Partners | GrowValley",
    description: "Explore partnership opportunities with GrowValley.",
    url: "https://gv.works/join-us/partners",
  },
};

export default async function PartnersPage() {
  const data = await client
    .fetch(joinUsPageQuery, { pageKey: "partners" })
    .catch(() => null);

  const heroImageUrl = data?.heroImage
    ? urlFor(data.heroImage).url()
    : data?.heroImagePath ?? "/images/careers_hero.png";

  return (
    <main>
      <Hero
        isShort
        eyebrow={data?.heroEyebrow ?? "PARTNERS"}
        headline={data?.heroHeadline ?? "We don't take on partners for coverage. We take them on for contribution."}
        subheadline={data?.heroSubheadline ?? "GrowValley sits at the intersection of wealth management, venture building, and active capital deployment."}
        image={heroImageUrl}
        hasCTA={false}
      />

      {/* SECTION 2 INTRODUCTION */}
      <section className="section-padding">
        <div className="container">
          <div className={styles.pullQuote}>
            <div className={styles.pullQuoteAccent} />
            <div className={styles.body} style={{ textAlign: 'center', maxWidth: '900px' }}>
              <p className={styles.pullQuoteText} style={{ marginBottom: '2rem' }}>
                {data?.pullQuote1 ?? "GrowValley sits at the intersection of wealth management, venture building, and active capital deployment. The firms we partner with aren't filling a gap on a service list. They're specialists who bring something we don't already have, and whose clients benefit from what we bring."}
              </p>
              <p className={styles.pullQuoteText} style={{ fontSize: '1.25rem', color: 'var(--color-text-muted)' }}>
                {data?.pullQuote2 ?? "If your firm works alongside HNW individuals, family offices, founders, or institutional allocators, and you want to work with a team that operates rather than just advises, there's a conversation worth having."}
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
              <span className={styles.eyebrow}>{data?.whoEyebrow ?? "WHO WE LOOK FOR"}</span>
              <h2 className={styles.heading}>
                {data?.whoHeadline ?? "The right partner already understands what GrowValley does."}
              </h2>
            </div>
            <div className={styles.body}>
              <p>
                {data?.whoBody1 ?? "You work with clients who make serious decisions with serious capital. You're not looking for a referral arrangement or a co-branding opportunity. You're looking for a firm you can put your name behind when you introduce them."}
              </p>
              <p>
                {data?.whoBody2 ?? "We run a clean operation. No product commissions, no conflicting mandates, no reason not to be completely transparent. That's what we bring, and it's what we expect in return."}
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
              <span className={styles.eyebrow}>{data?.ctaEyebrow ?? "START THE CONVERSATION"}</span>
              <h2 className={styles.heading}>
                {data?.ctaHeadline ?? "Partnership starts with a conversation, not a form."}
              </h2>
              <div className={styles.openingCard}>
                <p>
                  {data?.ctaBody ?? "We don't take on partners on a fixed schedule. When the right firm gets in touch, we make time. If you think there's a fit, tell us who you are, what you do, and who you work with. We'll take it from there. No pitch decks required."}
                </p>
                <Link href={data?.ctaButtonHref ?? "mailto:reach@growvalley.co"}>
                  <Button variant="primary" size="lg">
                    {data?.ctaButtonLabel ?? "Get in Touch"}
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
