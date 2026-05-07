import type { Metadata } from "next";
import { Hero } from "@/components/ui/Hero";
import { Button } from "@/components/ui/Button";
import Link from "next/link";
import styles from "../AboutUs.module.scss";
import { client } from "@/lib/sanity";
import { heroQuery, teamQuery } from "@/lib/queries";
import { urlFor } from "@/lib/sanity";

export const metadata: Metadata = {
  title: "Our Team | GrowValley Works",
  description: "The specialists behind every engagement at GrowValley Works.",
};

export default async function TeamPage() {
  let heroData = null;
  let teamData = null;

  try {
    [heroData, teamData] = await Promise.all([
      client.fetch(heroQuery, { pageSlug: "team" }),
      client.fetch(teamQuery)
    ]);
  } catch (err) {
    console.error("Team Data Fetch Error:", err);
  }

  const defaultHero = {
    eyebrow: "OUR TEAM",
    headline: "The people who do the work.",
    subheadline: "Every person at GrowValley Works is a specialist in their function. They are not generalists assigned to your account. They are the people who have done this work across multiple markets, entity types, and regulatory environments. That is who you are working with.",
    image: "https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&q=80&w=1400"
  };

  const displayHero = heroData || defaultHero;
  const heroImage = heroData?.image ? urlFor(heroData.image).url() : displayHero.image;
  const placeholderImg = "/images/placeholderPerson.jpg";

  const fallbackSpecialists = [
    { name: "Faris Al Khaldi", role: "Head of Corporate Formation & Structuring", image: "/images/placeholderPerson.jpg" },
    { name: "Omar Farouq", role: "Senior Specialist, UAE Entity Formation", image: "/images/placeholderPerson.jpg" },
    { name: "Kavya Reddy", role: "Corporate Structuring Advisor", image: "/images/placeholderPerson.jpg" },
    { name: "Matthias Keller", role: "Head of Government & Compliance Operations", image: "/images/placeholderPerson.jpg" },
    { name: "Imran Qureshi", role: "Senior PRO & Government Liaison", image: "/images/placeholderPerson.jpg" },
    { name: "Elena Markova", role: "Entity Management Specialist", image: "/images/placeholderPerson.jpg" },
    { name: "Nur Aisyah Rahman", role: "Head of Finance & Back-Office Operations", image: "/images/placeholderPerson.jpg" },
    { name: "Ji-Hoon Park", role: "Senior Accounting & Tax Specialist", image: "/images/placeholderPerson.jpg" },
    { name: "Viktor Novak", role: "International Expansion Advisor", image: "/images/placeholderPerson.jpg" }
  ];

  const finalSpecialists = (teamData && teamData.length > 0)
    ? teamData.filter((m: any) => m.category === "staff" || m.category === "advisory").map((m: any) => ({ name: m.name, role: m.role, image: m.image ? urlFor(m.image).url() : placeholderImg }))
    : fallbackSpecialists;

  return (
    <main>
      <Hero
        eyebrow={displayHero.eyebrow}
        headline={displayHero.headline}
        subheadline={displayHero.subheadline}
        hasCTA={displayHero.hasCTA}
        image={heroImage}
      />

      <section className="section-padding">
        <div className="container">
          <div className={`${styles.sectionHeader} text-center`}>
            <h2 className={styles.heading}>Our Specialists</h2>
          </div>

          <div className={styles.teamGrid}>
            {finalSpecialists.map((member: any, idx: number) => (
              <div key={idx} className={styles.teamMemberCard}>
                <div className={styles.memberImage}>
                  <img src={member.image} alt={member.name} />
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
            <h2 className={styles.headingWhite}>Join the team</h2>
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
