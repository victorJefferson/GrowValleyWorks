"use client";

import React, { useState } from "react";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import styles from "./Solutions.module.scss";

const solutions = [
  {
    id: "establish",
    title: "Establish",
    subtitle:
      "A badly structured entity creates problems that compound over years. We get the formation right from the start: the right jurisdiction, the right structure, the right vehicle for what you are actually building.",
    href: "/our-capabilities/wealth-management",
  },
  {
    id: "operate",
    title: "Operate",
    subtitle:
      "Staying registered is not passive. Government touchpoints, renewals, filings, and entity maintenance require consistent attention. Most businesses do not realise how much is slipping until a deadline is missed. We make sure it is not.",
    href: "/our-capabilities/family-office-services",
  },
  {
    id: "manage",
    title: "Manage",
    subtitle:
      "Payroll that runs late, books that are three months behind, tax filings done at the last minute. These are not administrative problems. They are business risks. We run the financial and HR back-office so your team's attention stays where it belongs.",
    href: "/our-capabilities/private-access-to-opportunities",
  },
  {
    id: "expand",
    title: "Expand",
    subtitle:
      "Opening in a new market involves a sequence of structural, legal, and compliance decisions that have to happen in the right order. We have done this across jurisdictions. We coordinate the execution so your expansion does not stall before it starts.",
    href: "/our-capabilities/succession-planning-services",
  },
];

export const Solutions = () => {
  const [activeSolution, setActiveSolution] = useState(0);

  return (
    <section className={styles.solutionsWrapper}>
      <div className={styles.solutionsPanel}>
        <div className="container">
          <header className={styles.sectionHeader}>
            <h2 className={styles.sectionHeadline}>
              We don&apos;t set up companies. We run them.
            </h2>
            <p className={styles.sectionBody}>
              Most operators deal with four vendors to do what one firm should handle. GrowValley covers the full operational stack across jurisdictions, at scale. One relationship. One point of accountability. No gaps between providers.
            </p>
          </header>

          <div className={styles.solutionsContainer}>
            <div className={styles.solutionsNav}>
              <div className={styles.solutionsList}>
                {solutions.map((s, idx) => (
                  <button
                    key={s.id}
                    className={`${styles.solutionsTrigger} ${activeSolution === idx ? styles.active : ""
                      }`}
                    onClick={() => {
                      setActiveSolution(idx);
                      const element = document.getElementById(`mobile-${s.id}`);
                      if (element) {
                        element.scrollIntoView({ behavior: "smooth" });
                      }
                    }}
                  >
                    {s.title}
                  </button>
                ))}
              </div>
            </div>

            <div className={styles.solutionsContent}>
              {/* Desktop: One Card at a time */}
              <div className={styles.desktopOnly}>
                <div className={styles.solutionsCard} key={activeSolution}>
                  <div className={styles.cardHeader}>
                    <h2 className={styles.cardTitleH2}>
                      {solutions[activeSolution].title}
                    </h2>
                    <p className={styles.subtitle}>
                      {solutions[activeSolution].subtitle}
                    </p>
                  </div>
                  <Link
                    href={solutions[activeSolution].href}
                    className={styles.learnMore}
                  >
                    Learn more <ArrowRight size={16} />
                  </Link>
                </div>
              </div>

              {/* Mobile: All cards in a list */}
              <div className={styles.mobileOnly}>
                {solutions.map((s) => (
                  <div
                    id={`mobile-${s.id}`}
                    key={s.id}
                    className={styles.solutionsCard}
                  >
                    <div className={styles.cardHeader}>
                      <h2 className={styles.cardTitleH2}>{s.title}</h2>
                      <p className={styles.subtitle}>{s.subtitle}</p>
                    </div>
                    <Link href={s.href} className={styles.learnMore}>
                      Learn more <ArrowRight size={16} />
                    </Link>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
