import type { Metadata } from 'next';
import { Hero } from '@/components/ui/Hero';
import { Card } from '@/components/ui/Card';
import { Button } from '@/components/ui/Button';
import Link from 'next/link';
import styles from './Platform.module.scss';

export const metadata: Metadata = {
    title: "The Investment Platform | GrowValley Works",
    description: "GrowValley operates an integrated capital platform, deploying capital into portfolio positions, structuring co-investment readiness, and managing institutional capital partnerships.",
    openGraph: {
        title: "The Investment Platform | GrowValley Works",
        description: "Connecting capital to opportunity through governed readiness and institutional discipline.",
        url: "https://gv.works/platform",
    },
};

export default function PlatformPage() {
    const platformTiles = [
        { title: "Portfolio Investment", desc: "Capital deployed into portfolio positions, governed, structured, and reported across the investment lifecycle." },
        { title: "Capital Solutions", desc: "Structured capital readiness for qualifying businesses within the GrowValley ecosystem." },
        { title: "Institutional Participation", desc: "Governed co-investment readiness for family offices and institutional partners." },
        { title: "Direct Opportunities", desc: "Curated investment opportunities for qualified capital allocators." },
        { title: "Governance & Reporting", desc: "Portfolio monitoring and transparent reporting across all positions." },
        { title: "Capital Structuring", desc: "Investment vehicle design and structuring for institutional-grade participation." }
    ];

    return (
        <main>
            <Hero
                eyebrow="INVESTMENT PLATFORM"
                headline="The capital infrastructure of GrowValley Group."
                subheadline="The GrowValley platform connects capital to opportunity across the portfolio, through co-investment frameworks, and for institutional partners seeking governed readiness."
                image="/images/platform_hero.png"
            />

            <section className="section-padding">
                <div className="container">
                    <div className={styles.overview}>
                        <span className={styles.eyebrow}>How the platform works</span>
                        <h2 className={styles.heading}>How the platform works</h2>
                        <p className={styles.body}>
                            GrowValley operates an integrated capital platform, deploying capital into portfolio positions, structuring co-investment readiness, and managing institutional capital partnerships across active opportunities.
                        </p>
                        <p className={styles.body}>
                            All capital activity is governed by defined investment standards, documentation, and reporting frameworks.
                        </p>
                    </div>

                    <div className={styles.tileGrid}>
                        {platformTiles.map((tile, idx) => (
                            <div key={idx} className={styles.tile}>
                                <h3>{tile.title}</h3>
                                <p>{tile.desc}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            <section className="section-padding">
                <div className="container">
                    <div className={styles.roundedPanel}>
                        <div className={styles.accessSection}>
                            <div className={styles.accessContent}>
                                <h2 className={styles.heading}>Platform Access</h2>
                                <p className={styles.body}>
                                    Access is available to eligible institutional partners, family offices, and qualified investors. Participation is subject to eligibility criteria and applicable documentation requirements.
                                </p>
                            </div>
                            <div className={styles.accessCta}>
                                <Card className={styles.ctaCard}>
                                    <h3>Enquire about platform access</h3>
                                    <Link href="/contact">
                                        <Button size="lg" className="w-full">Contact Us</Button>
                                    </Link>
                                </Card>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </main>
    );
}
