"use client";

import React, { useState } from "react";
import styles from "./AboutUs.module.scss";

// Fallback structured exactly like the CMS data we'd receive
const fallbackCategories = [
  { _id: 'cat1', title: 'Establish', description: 'Getting the entity and structure right from the start. Jurisdiction selection, formation, and trust arrangements.', sectionId: 'establish' },
  { _id: 'cat2', title: 'Operate', description: 'Handling the ongoing interaction with authorities. PRO services, renewals, and corporate administration.', sectionId: 'operate' },
  { _id: 'cat3', title: 'Manage', description: 'Running the financial and HR back-office. Accounting, payroll, and tax compliance across entities.', sectionId: 'manage' },
  { _id: 'cat4', title: 'Expand', description: 'Managing the legal and structural complexity of entering new markets. Cross-border growth, handled.', sectionId: 'expand' }
];

const fallbackServices = [
  // Establish
  { pillarTitle: "Establish", title: "Company Formation", description: "UAE mainland, free zone, and international entity setup handled end to end." },
  { pillarTitle: "Establish", title: "Corporate Structuring", description: "Designing holding arrangements and subsidiary frameworks built for scale." },
  { pillarTitle: "Establish", title: "Free Zone Selection", description: "Assessment of the right jurisdiction based on sector, ownership, and goals." },
  { pillarTitle: "Establish", title: "Trust & Fiduciary", description: "Establishing fiduciary structures that protect assets and separate risk." },

  // Operate
  { pillarTitle: "Operate", title: "PRO Services", description: "Managing government liaison, visa processing, and document clearing directly." },
  { pillarTitle: "Operate", title: "Entity Management", description: "Continuous oversight of corporate records, licensing, and regulatory standing." },
  { pillarTitle: "Operate", title: "Commercial Registration", description: "Handling renewals and updates to your commercial and trade licenses." },
  { pillarTitle: "Operate", title: "Regulatory Filings", description: "Ensuring all periodic government reporting is completed on time, every time." },

  // Manage
  { pillarTitle: "Manage", title: "Accounting & Tax", description: "Professional bookkeeping and VAT compliance across all your jurisdictions." },
  { pillarTitle: "Manage", title: "Payroll & HR Admin", description: "Handling the monthly payroll cycle, WPS, and human resource administration." },
  { pillarTitle: "Manage", title: "Corporate Tax", description: "Preparing and filing corporate tax returns in line with current UAE regulation." },
  { pillarTitle: "Manage", title: "Back Office Ops", description: "Outsourcing the administrative burden so your team can focus on growth." },

  // Expand
  { pillarTitle: "Expand", title: "Market Entry", description: "Strategic and operational support for entering new jurisdictions efficiently." },
  { pillarTitle: "Expand", title: "Multi-Entity Control", description: "Unified management of entities across multiple regional and global markets." },
  { pillarTitle: "Expand", title: "Cross-Border Setup", description: "Coordinating entity formation and compliance across different legal systems." },
  { pillarTitle: "Expand", title: "Licensing Strategy", description: "Advising on the right licenses for international growth and cross-border ops." }
];

export function AboutUsSolutions({ 
  initialCategories = [], 
  initialServices = [] 
}: { 
  initialCategories?: any[]; 
  initialServices?: any[]; 
}) {
  const [activeTab, setActiveTab] = useState(0);

  const categories = initialCategories.length > 0 ? initialCategories : fallbackCategories;
  const services = initialServices.length > 0 ? initialServices : fallbackServices;

  // The currently selected category
  const currentCategory = categories[activeTab];
  if (!currentCategory) return null;

  // Find all services linked to this category
  const currentServices = services.filter(s => s.pillarTitle === currentCategory.title);

  return (
    <section className={styles.solutionsSection}>
      <div className="container">
        <div className={styles.solutionsSplit}>
          <div className={styles.solutionsInfo}>
            <span className={styles.eyebrow}>Our solutions</span>
            <h2 className={styles.heading}>{currentCategory.title}</h2>
            <p className={styles.body}>
              {currentCategory.description || "Integrated advisory and alignment."}
            </p>

            <div className={styles.solutionsTabs}>
              {categories.map((cat, idx) => {
                // Keep the tab name short if possible (e.g. "Wealth Management" instead of "Wealth Management Services")
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

            <div className={styles.serviceGridSub}>
              {/* Display up to 4 services as bullet points here */}
              {currentServices.slice(0, 4).map((item, idx) => (
                <div key={idx} className={styles.serviceItemCard}>
                  <h4>{item.title}</h4>
                  <p>{item.description}</p>
                </div>
              ))}
            </div>
          </div>

          <div className={styles.solutionsImageWrapper}>
            <img
              src="/images/modern_boardroom.png"
              alt="GrowValley Solutions"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
