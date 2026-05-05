import React from "react";
import styles from "./WhoWeWorkWith.module.scss";

export const WhoWeWorkWith = ({ cmsData }: { cmsData?: any }) => {
  const displayHeadline = cmsData?.headline || "Who we work with";
  const displayCategories = cmsData?.categories || [];

  // Fallback content if CMS categories are not provided
  const fallbackPhrases = [
    "Founders who have outgrown their original structure and need it rebuilt properly",
    "CFOs taking over a business and finding the back-office is not what they were told it was",
    "International operators entering the UAE who need a local infrastructure they can trust",
    "Corporate groups managing entities across multiple jurisdictions with no one coordinating the whole",
    "Family offices that need fiduciary, entity, and administrative support handled without friction"
  ];

  const getPhrase = (index: number) => {
    if (displayCategories[index]) {
      return displayCategories[index].description || displayCategories[index].title;
    }
    return fallbackPhrases[index];
  };

  return (
    <section className={styles.whoWeWorkWithPremium}>
      <div className={styles.whoWeWorkWithInner}>
        <div className="container">
          <h2 className={styles.sectionHeading}>{displayHeadline}</h2>
          <div className={styles.partnerCardsBento}>
            <div className={`${styles.bentoCard} ${styles.cardHero}`}>
              <div className={styles.bentoContent}>
                <p>{getPhrase(0)}</p>
              </div>
            </div>

            <div className={`${styles.bentoCard} ${styles.cardSquare}`}>
              <div className={styles.bentoContent}>
                <p>{getPhrase(1)}</p>
              </div>
            </div>

            <div className={`${styles.bentoCard} ${styles.cardSquare}`}>
              <div className={styles.bentoContent}>
                <p>{getPhrase(2)}</p>
              </div>
            </div>

            <div className={`${styles.bentoCard} ${styles.cardWide}`}>
              <div className={styles.bentoContent}>
                <p>{getPhrase(3)}</p>
              </div>
            </div>

            <div className={`${styles.bentoCard} ${styles.cardPanorama}`}>
              <div className={styles.bentoContent}>
                <p>{getPhrase(4)}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
