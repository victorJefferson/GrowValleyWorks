import type { Metadata } from "next";
import { Hero } from "@/components/ui/Hero";
import { Button } from "@/components/ui/Button";
import Link from "next/link";
import styles from "../AboutUs.module.scss";

export const metadata: Metadata = {
  title: "Our Team | GrowValley Works",
  description: "The specialists behind every engagement at GrowValley Works.",
};

export default function TeamPage() {
  const advisoryTeam = [
    {
      name: "Faris Al Khaldi",
      role: "Head of Corporate Formation & Structuring",
      image: "/images/placeholderPerson.jpg",
    },
    {
      name: "Omar Farouq",
      role: "Senior Specialist, UAE Entity Formation",
      image: "/images/placeholderPerson.jpg",
    },
    {
      name: "Kavya Reddy",
      role: "Corporate Structuring Advisor",
      image: "/images/placeholderPerson.jpg",
    },
    {
      name: "Matthias Keller",
      role: "Head of Government & Compliance Operations",
      image: "/images/placeholderPerson.jpg",
    },
    {
      name: "Imran Qureshi",
      role: "Senior PRO & Government Liaison",
      image: "/images/placeholderPerson.jpg",
    },
    {
      name: "Elena Markova",
      role: "Entity Management Specialist",
      image: "/images/placeholderPerson.jpg",
    },
    {
      name: "Nur Aisyah Rahman",
      role: "Head of Finance & Back-Office Operations",
      image: "/images/placeholderPerson.jpg",
    },
    {
      name: "Ji-Hoon Park",
      role: "Senior Accounting & Tax Specialist",
      image: "/images/placeholderPerson.jpg",
    },
    {
      name: "Viktor Novak",
      role: "International Expansion Advisor",
      image: "/images/placeholderPerson.jpg",
    },
  ];

  const placeholderImg = "/images/placeholderPerson.jpg";

  return (
    <main>
      <Hero
        eyebrow="OUR TEAM"
        headline="The people who do the work."
        subheadline="Every person at GrowValley Works is a specialist in their function. They are not generalists assigned to your account. They are the people who have done this work across multiple markets, entity types, and regulatory environments. That is who you are working with."
        hasCTA={false}
        image="https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&q=80&w=1400"
      />

      <section className="section-padding">
        <div className="container">
          <div className={`${styles.sectionHeader} text-center`}>
            <h2 className={styles.heading}>Our Specialists</h2>
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
            <h2 className={styles.headingWhite}>Join the team.</h2>
            <p className={styles.bodyWhite}>
              We are always looking for specialists who bring precision, accountability, and genuine expertise in their field. If that is you, we want to hear from you.
            </p>
            <div className={styles.ctaGroup}>
              <Link href="/join-us/jobs">
                <Button variant="secondary" size="lg">
                  VIEW OPEN ROLES
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
