import type { Metadata } from "next";
import { Hero } from "@/components/ui/Hero";
import { Button } from "@/components/ui/Button";
import Link from "next/link";
import styles from "../AboutUs.module.scss";

export const metadata: Metadata = {
  title: "Leadership | GrowValley",
  description: "The leadership team at GrowValley Works.",
};

export default function LeadershipPage() {
  const leadershipTeam = [
    {
      name: "Jazeer Jamal",
      role: "Group Chairman and CEO, GrowValley Group",
      image: "/images/people/jazeer_jamal.jpg",
    },
    {
      name: "William J. Daly",
      role: "Co-Founder and CXO, GrowValley Group",
      image: "/images/people/william.jpg",
    },
    {
      name: "Suhail Ismail",
      role: "Group COO, GrowValley",
      image: "/images/people/suhail.jpg",
    },
  ];

  const advisoryTeam = [
    {
      name: "Sofia Alvarez",
      role: "Capital Strategy and Investment Readiness Advisor",
      image: "/images/people/sofia_alvarez.png",
    },
    {
      name: "Aarav Malhotra",
      role: "Senior Growth and Transformation Advisor",
      image: "/images/people/aarav_malhotra.bmp",
    },
    {
      name: "Nadia El-Sayed",
      role: "Investment Readiness Advisor",
      image: "/images/people/nadia.bmp",
    },
    {
      name: "Priya Menon",
      role: "Capital Structuring Advisor",
      image: "/images/people/priya_menon.bmp",
    },
    {
      name: "Lucas Moreau",
      role: "Transaction Readiness Advisor",
      image: "/images/people/lucas_moreau.png",
    },
    {
      name: "Daniel Fischer",
      role: "Capital Strategy Advisor",
      image: "/images/people/daniel_fischer.bmp",
    },
  ];

  const placeholderImg = "/images/placeholderPerson.jpg";

  return (
    <main>
      <Hero
        eyebrow="OUR TEAM"
        headline="The people behind every decision."
        subheadline="Every person at GrowValley Works is a specialist in their function. They are not generalists assigned to your account. They are the people who have done this work across multiple markets, entity types, and regulatory environments. That is who you are working with."
        hasCTA={false}
        image="/images/team_hero.png"
      />

      <section className="section-padding">
        <div className="container">
          <div className={`${styles.sectionHeader} text-center`}>
            <h2 className={styles.heading}>The Principals</h2>
          </div>

          <div className={styles.teamGrid}>
            {leadershipTeam.map((member, idx) => (
              <div key={idx} className={styles.teamMemberCard}>
                <div className={styles.memberImage}>
                  <img src={member.image || placeholderImg} alt={member.name} />
                </div>
                <div className={styles.memberInfo}>
                  <h3>{member.name}</h3>
                  <p>{member.role}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section-padding" style={{ borderTop: '1px solid hsla(var(--primary-h), var(--primary-s), var(--primary-l), 0.1)' }}>
        <div className="container">
          <div className={`${styles.sectionHeader} text-center`}>
            <h2 className={styles.heading}>Our Advisory Team</h2>
          </div>

          <div className={styles.teamGrid}>
            {advisoryTeam.map((member, idx) => (
              <div key={idx} className={styles.teamMemberCard}>
                <div className={styles.memberImage}>
                  <img src={member.image || placeholderImg} alt={member.name} />
                </div>
                <div className={styles.memberInfo}>
                  <h3>{member.name}</h3>
                  <p>{member.role}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section-padding">
        <div className="container">
          <div className={styles.groupPanel}>
            <h2 className={styles.headingWhite}>Join our team</h2>
            <p className={styles.bodyWhite}>
              We are always looking for wealth management professionals who bring
              rigour, discretion, and a client-first approach to their work.
            </p>
            <div className={styles.ctaGroup}>
              <Link href="/join-us/jobs">
                <Button variant="secondary" size="lg">
                  VIEW CAREERS
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
