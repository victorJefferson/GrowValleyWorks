import type { Metadata } from 'next';
import { Hero } from '@/components/ui/Hero';
import styles from './Legal.module.scss';

export const metadata: Metadata = {
    title: {
        absolute: "Terms of Use | GrowValley"
    },
    description: "Read the Terms of Use for GrowValley Works' website and services.",
    openGraph: {
        title: "Terms of Use | GrowValley",
        description: "GrowValley's website terms and conditions.",
        url: "https://gv.works/terms-of-use",
    },
};

export default function TermsOfUsePage() {
    return (
        <main>
            <Hero
                isShort
                eyebrow="Legal"
                headline="Using this website means you've read this. Please do."
                subheadline="Last updated: 25 April 2026"
                image="/images/modern_boardroom.png"
                hasCTA={false}
            />

            <section className="section-padding">
                <div className="container">
                    <div className={styles.legalContent} style={{ textAlign: 'center' }}>
                        <p>
                            These Terms of Use govern your access to and use of the GrowValley Works website, including all tools, content, and interactive features available on it.
                        </p>
                        <p>
                            By using this site, you agree to these terms. If you do not agree, please do not use the site.
                        </p>
                        <p>
                            This site is operated by GrowValley Works LLC, registered in Dubai, United Arab Emirates.
                        </p>

                        <h2>WHAT THIS SITE IS FOR</h2>
                        <p><strong>What this website is — and isn&apos;t.</strong></p>
                        <p>
                            This website is a general information resource about GrowValley Works, our services, and our capabilities. It is not a platform for transacting investments, and nothing on this site constitutes a solicitation, offer, or recommendation to buy or sell any financial product or security.
                        </p>
                        <p>
                            The information on this site is provided for informational purposes only. It does not constitute financial advice, investment advice, legal advice, or any other form of professional advice.
                        </p>
                        <p>
                            If you are considering investing with GrowValley Works, the appropriate step is to contact us directly and engage with our advisory team.
                        </p>

                        <h2>INVESTMENT DISCLAIMER</h2>
                        <p><strong>Tools are illustrative. They are not advice.</strong></p>
                        <p>
                            GrowValley Works provides interactive financial tools on this website — including a portfolio planner, wealth calculator, and risk profiler. These tools are designed to help you explore your financial position and understand investment concepts.
                        </p>
                        <p>
                            They are for illustrative purposes only.
                        </p>
                        <p>
                            The outputs of these tools do not constitute a personalised investment recommendation, a financial plan, or a guarantee of any kind. Past performance referenced anywhere on this site is not indicative of future results. All investments carry risk, including the potential loss of capital.
                        </p>
                        <p>
                            Before making any investment decision, you should obtain independent financial advice from a qualified professional, taking into account your specific circumstances.
                        </p>

                        <h2>INTELLECTUAL PROPERTY</h2>
                        <p><strong>Our content belongs to us.</strong></p>
                        <p>
                            All content on this website — including text, graphics, logos, visual assets, tools, and underlying code — is the intellectual property of GrowValley Works LLC or its licensors, and is protected by applicable copyright, trademark, and intellectual property laws.
                        </p>
                        <p>
                            You may not reproduce, distribute, modify, transmit, or use any content from this site for commercial purposes without prior written permission from GrowValley Works.
                        </p>
                        <p>
                            Limited personal and non-commercial use is permitted, provided our ownership is acknowledged and the content is not altered.
                        </p>

                        <h2>THIRD-PARTY LINKS</h2>
                        <p>
                            This site may contain links to third-party websites, tools, or resources. These links are provided for reference only. GrowValley Works does not endorse, control, or take responsibility for the content, accuracy, or availability of any third-party site.
                        </p>
                        <p>
                            Accessing third-party sites from our website is at your own risk.
                        </p>

                        <h2>LIMITATION OF LIABILITY</h2>
                        <p><strong>Our limits.</strong></p>
                        <p>
                            To the fullest extent permitted by applicable law, GrowValley Works, its entities, directors, employees, and advisors will not be liable for any direct, indirect, incidental, consequential, or punitive damages arising from your use of this website or reliance on any content, tool, or information contained within it.
                        </p>
                        <p>
                            We make reasonable efforts to ensure the accuracy of information on this site, but we do not warrant that it is complete, current, or free of error. We reserve the right to update, change, or remove content at any time without notice.
                        </p>

                        <h2>GOVERNING LAW</h2>
                        <p>
                            These Terms of Use are governed by the laws of the United Arab Emirates. Any disputes arising from the use of this website shall be subject to the exclusive jurisdiction of the courts of the UAE.
                        </p>

                        <h2>CHANGES TO THESE TERMS</h2>
                        <p>
                            We may update these Terms of Use from time to time. The updated version will be published on this page with a revised effective date. Continued use of the website after changes are published constitutes acceptance of the updated terms.
                        </p>
                    </div>
                </div>
            </section>
        </main>
    );
}
