import type { Metadata } from 'next';
import { Hero } from '@/components/ui/Hero';
import styles from './Legal.module.scss';

export const metadata: Metadata = {
    title: {
        absolute: "Disclaimer | GrowValley"
    },
    description: "Important information regarding the informational nature of the GrowValley investment platform. Read our institutional-grade notice for qualified investors.",
    openGraph: {
        title: "Disclaimer | GrowValley",
        description: "Important notice and informational disclaimer for platform visitors.",
        url: "https://gv.works/disclaimer",
    },
};

export default function DisclaimerPage() {
    return (
        <main>
            <Hero
                eyebrow="Legal"
                headline="Disclaimer"
                subheadline="Last updated: April 2026"
                image="/images/modern_boardroom.png"
            />

            <section className="section-padding">
                <div className="container">
                    <div className={styles.legalContent}>
                        <h2>1. Important Notice</h2>
                        <p>
                            The information on this website is published by GrowValley for general informational purposes only. It does not constitute an offer, invitation, or solicitation to buy or sell any investment, security, or financial instrument in any jurisdiction.
                            <br /><br />
                            Nothing on this website constitutes financial, legal, tax, or investment advice of any kind. GrowValley does not represent that it holds licences or regulatory approvals as a fund manager or investment entity in all jurisdictions in which this website may be accessed.
                            <br /><br />
                            Investments in private companies and ventures involve substantial risk, including the risk of total loss of capital. Past performance is not indicative of future results. Prospective investors should conduct independent due diligence and seek appropriate professional advice before making any investment decision.
                            <br /><br />
                            All users are advised to review the relevant local regulations before interacting with the platform.
                            <br /><br />
                            GrowValley reserves the right to amend the content of this website at any time without notice.
                        </p>

                        <h2>2. Modification</h2>
                        <p>
                            GrowValley reserves the right to amend the content of this website at any time without notice.
                        </p>
                    </div>
                </div>
            </section>
        </main>
    );
}
