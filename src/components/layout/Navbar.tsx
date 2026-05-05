"use client";

import React, { useState, useEffect } from "react";
import { usePathname } from "next/navigation";
import Link from "next/link";

import styles from "./Navbar.module.scss";
import { Button } from "../ui/Button";
import { Menu as MenuIcon, X, Mail, ArrowRight } from "lucide-react";
import {
  Disclosure,
  DisclosureButton,
  DisclosurePanel,
  Popover,
  PopoverButton,
  PopoverPanel,
} from "@headlessui/react";
import { ChevronDown } from "lucide-react";

import { features } from "@/config/features";

export function Navbar() {
  const navLinks = [
    { name: "Home", href: "/" },
    {
      name: "About Us",
      href: "/about-us",
      children: [
        { name: "About GrowValley Works", href: "/about-us", description: "The execution arm of the GrowValley ecosystem. Built for what comes after formation." },
        { name: "Team", href: "/about-us/team", description: "Specialists across formation, operations, finance, and international expansion." },
        { name: "Leadership", href: "/about-us/leadership", description: "Guided by institutional knowledge. Driven by operational precision." },
      ]
    },
    {
      name: "Our Services",
      href: "/our-capabilities",
      children: [
        { name: "Establish", href: "/our-capabilities/establish", description: "Company formation, free zone setup, corporate structuring, and trust arrangements." },
        { name: "Operate", href: "/our-capabilities/operate", description: "PRO services, entity management, regulatory filings, and corporate administration." },
        { name: "Manage", href: "/our-capabilities/manage", description: "Accounting, payroll, HR administration, tax compliance, and Employer of Record." },
        { name: "Expand", href: "/our-capabilities/expand", description: "International expansion, multi-entity structuring, and cross-border compliance." },
      ]
    },
    ...(features.insights ? [{ name: "Insights", href: "/insights" }] : []),
    {
      name: "Join Us",
      href: "/join-us/jobs",
      children: [
        { name: "Jobs", href: "/join-us/jobs", description: "Join a firm that runs the operational infrastructure behind serious businesses." },
        { name: "Partners", href: "/join-us/partners", description: "Strategic collaborations that extend the GrowValley Works capability." },
        { name: "Investors", href: "/join-us/investors", description: "Backing the growth of GrowValley Works across new markets." },
        { name: "Experts", href: "/join-us/experts", description: "A collective of specialists dedicated to operational excellence." },
      ]
    },
  ];
  const pathname = usePathname();

  return (
    <Disclosure as="header" className={styles.header}>
      {({ open, close }) => (
        <>
          <div className={`container ${styles.navContainer}`}>
            <div className={styles.logo}>
              <Link href="/">
                <img
                  src="/gv-logo-blue.png"
                  alt="GrowValley Works Logo"
                  width="160"
                  height="60"
                  className={styles.logoImage}
                />
              </Link>
            </div>

            {/* Desktop Nav */}
            <nav className={styles.links}>
              {navLinks.map((link) => {
                const isActive =
                  pathname === link.href ||
                  (link.href !== "/" && pathname.startsWith(link.href));

                if (link.children) {
                  return (
                    <Popover key={link.name} className={styles.popover}>
                      {({ open, close }) => (
                        <>
                          <PopoverButton
                            className={`${styles.popoverTrigger} ${isActive ? styles.active : ""} ${open ? styles.open : ""}`}
                          >
                            {link.name}
                            <ChevronDown size={14} className={styles.chevron} />
                          </PopoverButton>

                          <PopoverPanel transition className={styles.megaMenu}>
                            <div className={`container ${styles.megaMenuContent}`}>
                              {link.name === "Expertise" ? (
                                <>
                                  <div className={styles.megaMenuLeft}>
                                    <div className={styles.megaMenuHeader}>
                                      <h3>Our Services</h3>
                                      <p>The operational infrastructure behind serious businesses. Formation, compliance, finance, and international expansion — one firm handling all of it.</p>
                                      <Link href="/our-capabilities" className={styles.overviewLink} onClick={() => close()}>
                                        View Overview <ArrowRight size={16} />
                                      </Link>
                                    </div>
                                  </div>
                                  <div className={styles.megaMenuDivider}></div>
                                  <div className={styles.megaMenuGrid}>
                                    {link.children.map((child) => (
                                      <Link
                                        key={child.name}
                                        href={child.href}
                                        className={styles.megaMenuItem}
                                        onClick={() => close()}
                                      >
                                        <div className={styles.megaMenuItemLabel}>{child.name}</div>
                                        <div className={styles.megaMenuItemDesc}>{child.description}</div>
                                      </Link>
                                    ))}
                                  </div>
                                </>
                              ) : (
                                <>
                                  <div className={`${styles.megaMenuGrid} ${!features.insights ? styles.fullWidth : ""}`}>
                                    {link.children.map((child) => (
                                      <Link
                                        key={child.name}
                                        href={child.href}
                                        className={styles.megaMenuItem}
                                        onClick={() => close()}
                                      >
                                        <div className={styles.megaMenuItemLabel}>{child.name}</div>
                                        <div className={styles.megaMenuItemDesc}>{child.description}</div>
                                      </Link>
                                    ))}
                                  </div>
                                  {features.insights && (
                                    <>
                                      <div className={styles.megaMenuDivider}></div>
                                      <div className={styles.megaMenuFeatured}>
                                        <div className={styles.featuredTag}>Featured Content</div>
                                        <div className={styles.featuredCard}>
                                          <img src="/images/leadership_collaboration.png" alt="Featured" />
                                          <div className={styles.featuredInfo}>
                                            <Link
                                              href="/insights"
                                              className={styles.featuredLink}
                                              onClick={() => close()}
                                            >
                                              Click here to read our latest Insights<ArrowRight size={12} />
                                            </Link>
                                          </div>
                                        </div>
                                      </div>
                                    </>
                                  )}
                                </>
                              )}
                            </div>
                          </PopoverPanel>
                        </>
                      )}
                    </Popover>
                  );
                }

                return (
                  <Link
                    key={link.name}
                    href={link.href}
                    className={isActive ? styles.active : ""}
                  >
                    {link.name}
                  </Link>
                );
              })}
            </nav>

            <div className={styles.desktopCta}>
              <Link href="/contact">
                <Button size="sm">Contact Us</Button>
              </Link>
            </div>

            <div className={styles.mobileActions}>
              <Link href="/contact" className={styles.mobileContactBtn}>
                <Mail size={20} strokeWidth={1.5} />
              </Link>

              {/* Mobile Menu Toggle */}
              <DisclosureButton className={styles.hamburger}>
                <span className="sr-only">
                  {open ? "Close menu" : "Open menu"}
                </span>
                {open ? (
                  <X size={28} color="var(--color-primary-navy)" />
                ) : (
                  <div className={styles.vistraHamburger}>
                    <span></span>
                    <span></span>
                    <span></span>
                    <span></span>
                  </div>
                )}
              </DisclosureButton>
            </div>
          </div>

          {/* Mobile Dropdown Nav */}
          <DisclosurePanel className={styles.mobileNav}>
            <nav className={styles.mobileLinks}>
              {navLinks.map((link) => {
                const isActive =
                  pathname === link.href ||
                  (link.href !== "/" && pathname.startsWith(link.href));

                if (link.children) {
                  return (
                    <Disclosure key={link.name} as="div" className={styles.mobileSubmenu}>
                      {({ open }) => (
                        <>
                          <DisclosureButton className={`${styles.mobileSubmenuTrigger} ${isActive ? styles.active : ""}`}>
                            {link.name}
                            <ChevronDown size={20} className={`${styles.chevron} ${open ? styles.rotate : ""}`} />
                          </DisclosureButton>
                          <DisclosurePanel className={styles.mobileSubmenuPanel}>
                            {link.children.map((child) => (
                              <Link key={child.name} href={child.href} onClick={() => close()}>
                                <DisclosureButton as="span" className={styles.mobileSubLink}>
                                  <div className={styles.subLinkLabel}>{child.name}</div>
                                  <div className={styles.subLinkDesc}>{child.description}</div>
                                </DisclosureButton>
                              </Link>
                            ))}
                            <Link href={link.href} onClick={() => close()}>
                              <DisclosureButton as="span" className={styles.mobileOverviewLink}>
                                {link.name} Overview <ArrowRight size={16} />
                              </DisclosureButton>
                            </Link>
                          </DisclosurePanel>
                        </>
                      )}
                    </Disclosure>
                  );
                }

                return (
                  <Link key={link.name} href={link.href} onClick={() => close()}>
                    <DisclosureButton
                      as="span"
                      className={isActive ? styles.active : ""}
                    >
                      {link.name}
                    </DisclosureButton>
                  </Link>
                );
              })}
            </nav>
          </DisclosurePanel>
        </>
      )}
    </Disclosure>
  );
}
