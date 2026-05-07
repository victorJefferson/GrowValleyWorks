import type { Metadata } from "next";
import { Hero } from "@/components/ui/Hero";
import styles from "../../JoinUs.module.scss";
import { client } from "@/lib/sanity";
import { pageQuery } from "@/lib/queries";
import { urlFor } from "@/lib/sanity";
import { Button } from "@/components/ui/Button";
import Link from "next/link";
import { Mail, Briefcase, Handshake, Landmark } from "lucide-react";
import { PortableText } from '@portabletext/react';
import { notFound } from "next/navigation";

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params;
  let pageData = null;
  
  try {
    pageData = await client.fetch(pageQuery, { slug });
  } catch (err) {
    console.error("Metadata fetch error:", err);
  }

  if (!pageData) {
    return { title: "Page Not Found | GrowValley Works" };
  }

  return {
    title: `${pageData.title} | GrowValley Works`,
    description: pageData.heroSubheadline || pageData.pullQuote,
  };
}

export default async function GenericPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  
  let pageData = null;
  try {
    pageData = await client.fetch(pageQuery, { slug });
  } catch (err) {
    console.error("Page Fetch Error:", err);
  }

  if (!pageData) {
    // If not in CMS yet, we can provide a hardcoded fallback or simply return 404
    // For a smooth transition, we'll return a basic structure if it's one of the known slugs, otherwise 404.
    const knownSlugs = ["jobs", "partners", "investors", "experts"];
    if (!knownSlugs.includes(slug)) {
      notFound();
    }
    
    // Fallback data for smooth transition
    pageData = {
      title: slug.charAt(0).toUpperCase() + slug.slice(1),
      heroEyebrow: slug.toUpperCase(),
      heroHeadline: "Content is being updated.",
      heroSubheadline: "Please check back later or contact us.",
      pullQuote: "We are currently moving our content to the CMS.",
    };
  }

  const heroImage = pageData.heroImage ? urlFor(pageData.heroImage).url() : "/images/join_us.png";

  // Determine icon based on slug
  let IconComponent = Mail;
  if (slug === 'jobs') IconComponent = Briefcase;
  if (slug === 'partners') IconComponent = Handshake;
  if (slug === 'investors') IconComponent = Landmark;

  return (
    <main>
      <Hero
        eyebrow={pageData.heroEyebrow}
        headline={pageData.heroHeadline}
        subheadline={pageData.heroSubheadline}
        image={heroImage}
      />

      {/* SECTION 2 INTRODUCTION */}
      {pageData.pullQuote && (
        <section className="section-padding">
          <div className="container">
            <div className={styles.pullQuote}>
              <div className={styles.pullQuoteAccent} />
              <p className={styles.pullQuoteText}>
                {pageData.pullQuote}
              </p>
            </div>
          </div>
        </section>
      )}

      {/* SECTION 3 WHO WE LOOK FOR */}
      {(pageData.splitHeading || pageData.splitBody) && (
        <section className={`section-padding ${styles.bgTertiary}`}>
          <div className="container">
            <div className={styles.whoWeLookFor}>
              <div className={styles.leftCol}>
                {pageData.splitEyebrow && <span className={styles.eyebrow}>{pageData.splitEyebrow}</span>}
                {pageData.splitHeading && (
                  <h2 className={styles.heading}>
                    {pageData.splitHeading}
                  </h2>
                )}
              </div>
              <div className={styles.body}>
                {pageData.splitBody ? (
                  <PortableText value={pageData.splitBody} />
                ) : null}
              </div>
            </div>
          </div>
        </section>
      )}

      {/* SECTION 4 OPEN ROLES / CTA */}
      {(pageData.ctaHeading || pageData.ctaBody) && (
        <section className="section-padding">
          <div className="container">
            <div className={styles.roundedPanel}>
              <div className={styles.openings}>
                <div className={styles.sectionIcon} style={{ margin: '0 auto 1.5rem' }}>
                  <IconComponent />
                </div>
                {pageData.ctaEyebrow && <span className={styles.eyebrow}>{pageData.ctaEyebrow}</span>}
                {pageData.ctaHeading && (
                  <h2 className={styles.heading}>
                    {pageData.ctaHeading}
                  </h2>
                )}
                <div className={styles.openingCard}>
                  {pageData.ctaBody && <p>{pageData.ctaBody}</p>}
                  
                  {pageData.ctaButtonLabel && pageData.ctaButtonLink && (
                    <Link href={pageData.ctaButtonLink}>
                      <Button variant="primary" size="lg">
                        {pageData.ctaButtonLabel}
                      </Button>
                    </Link>
                  )}
                </div>
              </div>
            </div>
          </div>
        </section>
      )}
    </main>
  );
}
