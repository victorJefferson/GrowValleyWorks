"use client";

import React, { useState } from "react";
import styles from "./AboutUs.module.scss";

// Fallback structured exactly like the CMS data we'd receive
const fallbackCategories = [
  { _id: 'cat1', title: 'Wealth Management', description: 'For clients who want their wealth managed with the same rigour applied to institutional capital.', sectionId: 'wealth-management' },
  { _id: 'cat2', title: 'Family Office Services', description: 'For clients whose needs extend beyond investment. We coordinate every engagement on your behalf.', sectionId: 'family-office' },
  { _id: 'cat3', title: 'Private Access to Opportunities', description: 'For qualified investors who expect more than the open market offers.', sectionId: 'private-access' },
  { _id: 'cat4', title: 'Succession Planning Services', description: 'For clients who want their wealth to outlast them across generations.', sectionId: 'succession-planning' }
];

// Fallback services manually mapping to those categories if no CMS data exists
const fallbackServices = [
  // Wealth Management (virtual services just to populate the 4 points)
  { category: { title: "Wealth Management" }, title: "Strategy", description: "Institutional-grade strategy design based on your unique goals." },
  { category: { title: "Wealth Management" }, title: "Execution", description: "Disciplined implementation from day one with total accountability." },
  { category: { title: "Wealth Management" }, title: "Ongoing Oversight", description: "Continuous monitoring and review of your entire wealth position." },
  { category: { title: "Wealth Management" }, title: "One Accountable Team", description: "Every dimension of wealth delivered by a single integrated unit." },

  // Family Office
  { category: { title: "Family Office Services" }, title: "Legal & Fiduciary", description: "Coordinating specialist legal advice for complex wealth demands." },
  { category: { title: "Family Office Services" }, title: "Philanthropy", description: "Structured giving aligned to your legacy and values." },
  { category: { title: "Family Office Services" }, title: "M&A", description: "Advisory coordination for corporate transactions and liquidity events." },
  { category: { title: "Family Office Services" }, title: "Reporting", description: "Unified reporting across all assets, entities, and jurisdictions." },

  // Private Access
  { category: { title: "Private Access to Opportunities" }, title: "PE Transactions", description: "Access to private equity deals sourced through deep relationships." },
  { category: { title: "Private Access to Opportunities" }, title: "VC Transactions", description: "Venture deals structured and placed by proven practitioners." },
  { category: { title: "Private Access to Opportunities" }, title: "Real Estate Access", description: "Off-market real estate transactions spanning global jurisdictions." },
  { category: { title: "Private Access to Opportunities" }, title: "Relationship Based", description: "Opportunities sourced through networks, not public listings." },

  // Succession
  { category: { title: "Succession Planning Services" }, title: "Protect Assets", description: "Holding structures designed to safeguard wealth integrity." },
  { category: { title: "Succession Planning Services" }, title: "Minimise Cost", description: "Redesigning arrangements to reduce unnecessary operational costs." },
  { category: { title: "Succession Planning Services" }, title: "Wealth Transfer", description: "Constructing succession frameworks that hold for generations." },
  { category: { title: "Succession Planning Services" }, title: "Robust Planning", description: "Precision planning that reflects your intentions and protects family." }
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
  const currentServices = services.filter(s => s.category?.title === currentCategory.title);

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
