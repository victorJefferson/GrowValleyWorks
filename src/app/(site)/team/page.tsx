import type { Metadata } from "next";
import { Hero } from "@/components/ui/Hero";
import { Card } from "@/components/ui/Card";
import { Button } from "@/components/ui/Button";
import Link from "next/link";
import styles from "./Team.module.scss";
import { client } from "@/lib/sanity";
import { heroQuery } from "@/lib/queries";
import { urlFor } from "@/lib/sanity";

export const metadata: Metadata = {
  title: {
    absolute: "Our Team | GrowValley",
  },
  description:
    "Meet the GrowValley investment and advisory team, committed to institutional capital discipline and long-term portfolio growth.",
  openGraph: {
    title: "Our Team | GrowValley",
    description: "GrowValley investment and advisory team.",
    url: "https://gv.ventures/team",
  },
};

export default async function TeamPage() {
  let heroData = null;
  try {
    heroData = await client.fetch(heroQuery, { pageSlug: "team" });
  } catch (err) {
    console.error("Team Hero Fetch Error:", err);
  }

  const defaultHero = {
    eyebrow: "GrowValley",
    headline: "Our Team",
    subheadline: "Wealth Management, delivered by people who know it.",
    image: "/images/team_hero.png",
  };

  const displayHero = heroData || defaultHero;
  const heroImage = heroData?.image ? urlFor(heroData.image).url() : displayHero.image;

  const team = [
    {
      name: "Executive Leadership",
      title: "Principal Partner",
      bio: "Leading the GrowValley Group's strategic capital allocation and institutional partnerships.",
    },
    {
      name: "Investment Director",
      title: "Head of Portfolio",
      bio: "Specializing in direct venture participation and structured co-investment frameworks.",
    },
    {
      name: "Capital Markets",
      title: "Director of Structuring",
      bio: "Designing institutional-grade vehicles and hybrid capital instruments for global allocators.",
    },
    {
      name: "Portfolio Manager",
      title: "Senior Associate",
      bio: "Managing active positions across the GrowValley operating businesses and venture ecosystem.",
    },
    {
      name: "Legal & Governance",
      title: "Head of Compliance",
      bio: "Ensuring all investment readiness meets established governance and documentation standards.",
    },
    {
      name: "Operations",
      title: "Platform Manager",
      bio: "Overseeing the technical and operational infrastructure of the GrowValley investment platform.",
    },
  ];

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

      <section className="section-padding">
        <div className="container">
          <div className={styles.teamGrid}>
            {team.map((member, idx) => (
              <Card key={idx} className={styles.teamCard}>
                <div className={styles.cardHeader}>
                  <h3>{member.name}</h3>
                  <span className={styles.title}>{member.title}</span>
                </div>
                <p>{member.bio}</p>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section className={`section-padding ${styles.bgSecondary}`}>
        <div className="container text-center">
          <h2 className={styles.heading}>Join our team</h2>
          <p className={styles.body}>
            We are always looking for wealth management professionals who bring
            rigour, discretion, and a client-first approach to their work.
          </p>
          <Link href="/join-us/jobs">
            <Button variant="secondary" size="lg">
              View Careers
            </Button>
          </Link>
        </div>
      </section>
    </main>
  );
}
