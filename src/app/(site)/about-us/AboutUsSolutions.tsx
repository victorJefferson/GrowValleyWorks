"use client";

import React, { useState } from "react";
import styles from "./AboutUs.module.scss";
import { urlFor } from "@/lib/sanity";

export function AboutUsSolutions({ 
  initialCategories = [], 
  initialServices = [],
  solutionsImage = null
}: { 
  initialCategories?: any[]; 
  initialServices?: any[];
  solutionsImage?: any;
}) {
  const [activeTab, setActiveTab] = useState(0);

  // If no categories from CMS, we don't render this complex section to avoid showing broken fallbacks
  if (initialCategories.length === 0) return null;

  const categories = initialCategories;
  const currentCategory = categories[activeTab];
  if (!currentCategory) return null;

  // 1. Get subtitle from CMS, or the pillar description, or nothing
  const displaySubtitle = currentCategory.aboutUsSubtitle || currentCategory.description;

  // 2. Get services specifically defined for About Us, 
  //    or find 4 services linked to this pillar, 
  //    or nothing
  let displayServices = currentCategory.aboutUsServices || [];
  
  if (displayServices.length === 0) {
    displayServices = initialServices
      .filter(s => s.pillarTitle === currentCategory.title)
      .slice(0, 4);
  }

  return (
    <section className={styles.solutionsSection}>
      <div className="container">
        <div className={styles.solutionsSplit}>
          <div className={styles.solutionsInfo}>
            <span className={styles.eyebrow}>Our solutions</span>
            <h2 className={styles.heading}>{currentCategory.title}</h2>
            {displaySubtitle && (
              <p className={styles.body}>{displaySubtitle}</p>
            )}

            <div className={styles.solutionsTabs}>
              {categories.map((cat, idx) => {
                const shortTitle = cat.title.replace(" Services", "");
                return (
                  <button
                    key={cat._id || idx}
                    className={`${styles.tabTrigger} ${
                      activeTab === idx ? styles.active : ""
                    }`}
                    onClick={() => setActiveTab(idx)}
                  >
                    {shortTitle}
                  </button>
                )
              })}
            </div>

            {displayServices.length > 0 && (
              <div className={styles.serviceGridSub}>
                {displayServices.map((item: any, idx: number) => (
                  <div key={idx} className={styles.serviceItemCard}>
                    <h4>{item.title}</h4>
                    <p>{item.description}</p>
                  </div>
                ))}
              </div>
            )}
          </div>

          <div className={styles.solutionsImageWrapper}>
            <img
              src={solutionsImage ? urlFor(solutionsImage).url() : "https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&q=80&w=800"}
              alt="GrowValley Solutions"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
