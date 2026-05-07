import type { Metadata } from "next";
import { Hero } from "@/components/ui/Hero";
import styles from "../JoinUs.module.scss";
import { client, urlFor } from "@/lib/sanity";
import { joinUsPageQuery } from "@/lib/queries";
import { Button } from "@/components/ui/Button";
import Link from "next/link";
import { Mail } from "lucide-react";

export const metadata: Metadata = {
  title: { absolute: "Jobs | GrowValley" },
  description: "We don't hire for roles. We hire for impact. Join the GrowValley team.",
  openGraph: {
    title: "Jobs | GrowValley",
    description: "Explore career opportunities at GrowValley.",
    url: "https://gv.works/join-us/jobs",
  },
};

export default async function JobsPage() {
  const data = await client
    .fetch(joinUsPageQuery, { pageKey: "jobs" })
    .catch(() => null);

  const heroImageUrl = data?.heroImage
    ? urlFor(data.heroImage).url()
    : data?.heroImagePath ?? "/images/join_us.png";

  return (
    <main>
      <Hero
        eyebrow={data?.heroEyebrow ?? "JOBS"}
        headline={data?.heroHeadline ?? "We don't hire for roles. We hire for impact."}
        subheadline={data?.heroSubheadline ?? "GrowValley sits at a rare intersection: wealth management, venture building, and active capital deployment. That means the people who thrive here aren't looking for a quiet corner of finance. They're looking for a place where their thinking actually changes outcomes."}
        image={heroImageUrl}
        hasCTA={false}
      />

      {/* SECTION 2 INTRODUCTION */}
      <section className="section-padding">
        <div className="container">
          <div className={styles.pullQuote}>
            <div className={styles.pullQuoteAccent} />
            <p className={styles.pullQuoteText}>
              {data?.pullQuote1 ?? "We're a small, senior team. There's no hiding behind process here. If you join GrowValley, what you do will be felt by the clients we serve and the businesses we build."}
            </p>
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
                {data?.whoHeadline ?? "The people who do well here share one thing: they're serious about the work."}
              </h2>
            </div>
            <div className={styles.body}>
              <p>
                {data?.whoBody1 ?? "You have strong opinions you can defend. You don't wait to be told what needs doing, you see it, you own it, you follow through."}
              </p>
              <p>
                {data?.whoBody2 ?? "We don't care where you're based. We care what you bring."}
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
              <span className={styles.eyebrow}>{data?.ctaEyebrow ?? "OPEN ROLES"}</span>
              <h2 className={styles.heading}>
                {data?.ctaHeadline ?? "No open roles right now but we're always listening."}
              </h2>
              <div className={styles.openingCard}>
                <p>
                  {data?.ctaBody ?? "We don't hire on a fixed schedule. When we find the right person, we find a way to bring them in. If you think GrowValley is where you should be, tell us why. The right message gets a response."}
                </p>
                <Link href={data?.ctaButtonHref ?? "mailto:reach@growvalley.co"}>
                  <Button variant="primary" size="lg">
                    {data?.ctaButtonLabel ?? "Send Us Your CV"}
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
