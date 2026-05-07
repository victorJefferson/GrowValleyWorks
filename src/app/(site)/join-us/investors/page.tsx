import type { Metadata } from "next";
import { Hero } from "@/components/ui/Hero";
import styles from "../JoinUs.module.scss";
import { client, urlFor } from "@/lib/sanity";
import { joinUsPageQuery } from "@/lib/queries";
import { Button } from "@/components/ui/Button";
import Link from "next/link";
import { Mail } from "lucide-react";

export const metadata: Metadata = {
  title: { absolute: "Investors | GrowValley" },
  description: "Access exclusive investment opportunities with GrowValley.",
  openGraph: {
    title: "Investors | GrowValley",
    description: "Access exclusive investment opportunities with GrowValley.",
    url: "https://gv.ventures/join-us/investors",
  },
};

export default async function InvestorsPage() {
  const data = await client
    .fetch(joinUsPageQuery, { pageKey: "investors" })
    .catch(() => null);

  const heroImageUrl = data?.heroImage
    ? urlFor(data.heroImage).url()
    : data?.heroImagePath ?? "/images/careers_hero.png";

  return (
    <main>
      <Hero
        isShort
        eyebrow={data?.heroEyebrow ?? "INVESTORS"}
        headline={data?.heroHeadline ?? "We don't manage capital for volume. We manage it for outcomes."}
        subheadline={data?.heroSubheadline ?? "GrowValley works with a focused group of investors who want more than a managed portfolio."}
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
                {data?.pullQuote1 ?? "GrowValley works with a focused group of investors: HNW individuals, family offices, entrepreneurs, and qualified allocators who want more than a managed portfolio. They want a team that has been inside the deals, built the businesses, and deployed real capital across real markets."}
              </p>
              <p className={styles.pullQuoteText} style={{ fontSize: '1.25rem', color: 'var(--color-text-muted)' }}>
                {data?.pullQuote2 ?? "Our investors access opportunities that don't circulate publicly. They work alongside a team with $1B+ in capital deployed and 500+ projects built. And they get a mandate built around their actual goals, not a packaged tier."}
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
              <span className={styles.eyebrow}>{data?.whoEyebrow ?? "WHO WE WORK WITH"}</span>
              <h2 className={styles.heading}>
                {data?.whoHeadline ?? "We work with investors who take the work seriously."}
              </h2>
            </div>
            <div className={styles.body}>
              <p>
                {data?.whoBody1 ?? "You've built or managed capital at a level where you know the difference between advice and real counsel. You want access to private markets, direct deals, and a team that has operated inside the opportunities it presents, not just sourced them."}
              </p>
              <p>
                {data?.whoBody2 ?? "You're not looking to be managed. You're looking for a thinking partner with a verifiable track record."}
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
              <span className={styles.eyebrow}>{data?.ctaEyebrow ?? "SELECTIVE BY DESIGN"}</span>
              <h2 className={styles.heading}>
                {data?.ctaHeadline ?? "We're selective. That's the point."}
              </h2>
              <div className={styles.openingCard}>
                <p>
                  {data?.ctaBody ?? "GrowValley isn't structured for volume. We take on investors where we can do the work properly and add something real. Capacity is limited and the mandate is focused. If you want to understand what that looks like in practice, reach out."}
                </p>
                <Link href={data?.ctaButtonHref ?? "mailto:investors@gv.ventures"}>
                  <Button variant="primary" size="lg">
                    {data?.ctaButtonLabel ?? "Talk to an Advisor"}
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
