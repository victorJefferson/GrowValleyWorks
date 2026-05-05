import React from "react";
import styles from "./WhoWeWorkWith.module.scss";

export const WhoWeWorkWith = () => {
  return (
    <section className={styles.whoWeWorkWithPremium}>
      <div className={styles.whoWeWorkWithInner}>
        <div className="container">
          <h2 className={styles.sectionHeading}>Who we work with</h2>
          <div className={styles.partnerCardsBento}>
            <div className={`${styles.bentoCard} ${styles.cardHero}`}>
              <div className={styles.bentoContent}>
                <p>Founders who have outgrown their original structure and need it rebuilt properly</p>
              </div>
            </div>

            <div className={`${styles.bentoCard} ${styles.cardSquare}`}>
              <div className={styles.bentoContent}>
                <p>CFOs taking over a business and finding the back-office is not what they were told it was</p>
              </div>
            </div>

            <div className={`${styles.bentoCard} ${styles.cardSquare}`}>
              <div className={styles.bentoContent}>
                <p>International operators entering the UAE who need a local infrastructure they can trust</p>
              </div>
            </div>

            <div className={`${styles.bentoCard} ${styles.cardWide}`}>
              <div className={styles.bentoContent}>
                <p>Corporate groups managing entities across multiple jurisdictions with no one coordinating the whole</p>
              </div>
            </div>

            <div className={`${styles.bentoCard} ${styles.cardPanorama}`}>
              <div className={styles.bentoContent}>
                <p>Family offices that need fiduciary, entity, and administrative support handled without friction</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
